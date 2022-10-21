function getWeek(sessionStart) {
  const differenceFromNow =
    new Date.getTime() - new Date(sessionStart).getTime();

  const getDays = Math.ceil(differenceFromNow / (1000 * 3600 * 24));

  const weeks = Math.ceil(getDays / 7);
  return weeks;
}

module.exports = getWeek;
