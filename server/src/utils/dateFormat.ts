const dateFormat = (timestamp: Date | string | number): string => {
  const date = new Date(timestamp);
  const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  return formattedDate;
};

export default dateFormat;