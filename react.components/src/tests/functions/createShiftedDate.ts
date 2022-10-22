const createShiftedDate = function (days: number) {
  const addDayToCurrentDate = (days: number) => {
    const currentDate = new Date();
    return new Date(currentDate.setDate(currentDate.getDate() + days));
  };
  const createStrFromDate = (someDate: Date) => {
    const year = someDate.getFullYear();
    const month = (someDate.getMonth() + 1).toString().padStart(2, '0');
    const day = someDate.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return createStrFromDate(addDayToCurrentDate(days));
};

export default createShiftedDate;
