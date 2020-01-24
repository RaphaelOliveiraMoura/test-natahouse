const mappedDateStringToHours = [
  { regex: /year(s)?/gi, value: 365 * 24 },
  { regex: /month(s)?/gi, value: 30 * 24 },
  { regex: /week(s)?/gi, value: 7 * 24 },
  { regex: /day(s)?/gi, value: 24 },
  { regex: /hour(s)?/gi, value: 1 },
];

export default function parseStringTimeToHours(timeString) {
  const mathExpressionString = mappedDateStringToHours.reduce(
    (accumulator, { regex, value }) => {
      return accumulator.replace(regex, `* ${value}`);
    },
    timeString
  );

  // eslint-disable-next-line no-eval
  return eval(mathExpressionString);
}
