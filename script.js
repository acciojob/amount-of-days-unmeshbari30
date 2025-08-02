function daysOfAYear(year) {
  if (typeof year !== "number" || year <= 0 || !Number.isInteger(year)) {
    throw new Error("Invalid year");
  }

  const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  return isLeap ? 366 : 365;
}
