import { DateTime } from "luxon";

const formatDate = (date: Date, format: string) =>
  DateTime.fromJSDate(date).toFormat(format);

const timeUtils = { formatDate };
export default timeUtils;
