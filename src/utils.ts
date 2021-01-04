import { format } from 'timeago.js';
import moment from 'moment';

export const getDateString = (date: Date | undefined) =>
  date
    ? moment(date).isSameOrAfter(moment(), 'day')
      ? moment(date).format('HH:mm')
      : format(date)
    : undefined;
