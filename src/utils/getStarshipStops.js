import parseStringTimeToHours from '~/utils/parseStringTimeToHours';

export default function getStarshipStops(starship, distance) {
  const { consumables, MGLT } = starship;

  const stops =
    Number(distance) / (Number(MGLT) * parseStringTimeToHours(consumables));

  return Math.round(stops);
}
