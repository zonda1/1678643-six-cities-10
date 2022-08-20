import dayjs from 'dayjs';

export const humanizeWholeDate = (dueDate: string) => dayjs(dueDate).format('DD MMMM YYYY');
