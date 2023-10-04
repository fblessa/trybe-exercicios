export const fetchCoordinates = async () => {
  const response = await fetch(
    'https://api.wheretheiss.at/v1/satellites/25544'
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch coordinates`);
  }

  const coordinates = await response.json();

  const latitude = Number(coordinates.latitude.toFixed(4));
  const longitude = Number(coordinates.longitude.toFixed(4));

  return { latitude, longitude };
};
