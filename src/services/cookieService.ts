export type Service<T> = {
  get: (key: string) => Array<T>;
  post: (key: string, task: T) => T;
  put: (key: string, id: string, task: T) => T;
};

export const cookieService: Service<any> = {
  get: (key: string): Array<any> => {
    const data = localStorage.getItem(key) || "null";
    return JSON.parse(data) || [];
  },
  post: (key: string, value: any): any => {
    const data = localStorage.getItem(key) || "null";
    const values = JSON.parse(data) || [];
    localStorage.setItem(key, JSON.stringify([...values, value]));
    return value;
  },
  put: (key: string, id: string, value: any): any => {
    const storeData = localStorage.getItem(key) || "null";
    const parsedData = JSON.parse(storeData) || [];
    const index = parsedData.findIndex(
      (storeValue: any) => storeValue.id === id
    );
    if (index === -1) throw new Error("Data not found");
    const updatedData = [
      ...parsedData.slice(0, index),
      value,
      ...parsedData.slice(index + 1),
    ];
    localStorage.setItem(key, JSON.stringify(updatedData));
    return value;
  },
};
