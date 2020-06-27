const formatTimespan = (startDate: Date, endDate?: Date): string => {
  endDate = endDate || new Date();

  const dayspan = (endDate.getTime() - startDate.getTime()) / 86400000;

  if (dayspan <= 1) return "today";
  if (dayspan > 1 && dayspan <= 2) return "yesterday";
  if (dayspan > 2 && dayspan <= 3) return "two days ago";
  if (dayspan > 3 && dayspan <= 7) return "this week";
  if (dayspan > 7 && dayspan <= 14) return "last week";
  if (dayspan > 14 && dayspan <= 21) return "two weeks ago";
  if (dayspan > 21 && dayspan <= 28) return "three weeks ago";
  if (dayspan > 29 && dayspan <= 31) return "a month ago";
  if (dayspan > 31 && dayspan <= 62) return "less than two months ago";
  if (dayspan > 62 && dayspan <= 93) return "about three months ago";
  if (dayspan > 93 && dayspan <= 365) return "this year";
  if (dayspan > 365 && dayspan <= 500) return "about a year ago";
  if (dayspan > 500 && dayspan <= 730) return "almost two years ago";
  return "over two years ago";
};

export default formatTimespan;
