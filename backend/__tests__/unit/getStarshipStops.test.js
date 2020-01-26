import getStarshipStops from '~/utils/getStarshipStops';

it('should return how many stops a starship need to do to complete a journey', () => {
  const YwingStarships = {
    name: 'Y-wing',
    consumables: '1 week',
    MGLT: '80',
  };

  const MillenniumStarships = {
    name: 'Millennium Falcon"',
    consumables: '2 months',
    MGLT: '75',
  };

  const distance = 1000000;

  expect(getStarshipStops(YwingStarships, distance)).toEqual(74);
  expect(getStarshipStops(MillenniumStarships, distance)).toEqual(9);
});
