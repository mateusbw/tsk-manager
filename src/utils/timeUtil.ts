import { DateTime } from "luxon";

const formatDate = (date: number, format: string) =>
  DateTime.fromMillis(date).toFormat(format);

const timeUtils = { formatDate };
export default timeUtils;
