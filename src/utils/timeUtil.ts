import { DateTime } from 'luxon';

export const formatDate = (date: Date, format: string) => DateTime.fromJSDate(date).toFormat(format)