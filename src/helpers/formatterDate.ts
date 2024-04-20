export const formatterDate = (date: string) => {
    const formatter = new Intl.DateTimeFormat("ru");
    return formatter.format(new Date(date));
  };