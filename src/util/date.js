export const getStringDate = (date) => {
  return date.toISOString().slice(0, 10); //ISO형식의 문자열 반환 YYYY-MM-DD형식으로 9번째 자리까지만 자름
};
