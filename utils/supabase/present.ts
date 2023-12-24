export const presentCoords = (
  lat: number, lon: number, altitude?: number | null
  ): string => {
  if (!lat || !lon) return '';
  const coords = [lat, lon];
  if (!!altitude) coords.push(altitude);
  return coords.join(', ');
}
