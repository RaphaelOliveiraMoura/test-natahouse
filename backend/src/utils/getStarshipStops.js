import parseStringTimeToHours from '~/utils/parseStringTimeToHours';

export default function getStarshipStops({ consumables, MGLT }, distance) {
  const stops =
    Number(distance) / (Number(MGLT) * parseStringTimeToHours(consumables));

  return Math.round(stops);
}
