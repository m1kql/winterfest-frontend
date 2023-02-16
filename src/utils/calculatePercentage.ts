const calculatePercentage = (
  transferred: number,
  total: number,
): number => {
  if (total === 0) {
    return 0;
  }
  return Math.round((transferred / total) * 100);
};


export default calculatePercentage;