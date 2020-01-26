import parseStringTimeToHours from '~/utils/parseStringTimeToHours';

it('should able to parse a string time value to hours', () => {
  expect(parseStringTimeToHours('5 years')).toEqual(5 * 365 * 24);
  expect(parseStringTimeToHours('1 year')).toEqual(1 * 365 * 24);
  expect(parseStringTimeToHours('5 months')).toEqual(5 * 31 * 24);
  expect(parseStringTimeToHours('1 month')).toEqual(1 * 31 * 24);
  expect(parseStringTimeToHours('5 weeks')).toEqual(5 * 7 * 24);
  expect(parseStringTimeToHours('1 week')).toEqual(1 * 7 * 24);
  expect(parseStringTimeToHours('5 days')).toEqual(5 * 24);
  expect(parseStringTimeToHours('1 day')).toEqual(1 * 24);
  expect(parseStringTimeToHours('5 hours')).toEqual(5);
  expect(parseStringTimeToHours('1 hour')).toEqual(1);
});
