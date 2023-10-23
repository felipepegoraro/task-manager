export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getMinDate = (): string => {
  const currentYear = new Date().getFullYear();
  return `${currentYear}-01-01`;
};

export const getMaxDate = (): string => {
  const currentYear = new Date().getFullYear();
  return `${currentYear}-12-31`;
};
