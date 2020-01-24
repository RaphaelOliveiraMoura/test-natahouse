const mappedDateStringToHours = [
  { regex: /year(s)?/gi, hours: 365 * 24 },
  { regex: /month(s)?/gi, hours: 30 * 24 },
  { regex: /week(s)?/gi, hours: 7 * 24 },
  { regex: /day(s)?/gi, hours: 24 },
  { regex: /hour(s)?/gi, hours: 1 },
];

export default function parseStringTimeToHours(timeString) {
  const mathExpressionString = mappedDateStringToHours.reduce(
    (accumulator, { regex, hours }) => {
      return accumulator.replace(regex, `* ${hours}`);
    },
    timeString
  );

  // eslint-disable-next-line no-eval
  return eval(mathExpressionString);
}
