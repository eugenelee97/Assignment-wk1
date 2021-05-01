export const calculateMiles = (lat, lng) => {
  const latLondon = 51.509865;
  const lngLondon = -0.118092;

  if (latLondon == lat && lngLondon == lng) {
    return 0;
  } else {
    const radlat1 = Math.PI * (latLondon / 180);
    const radlat2 = Math.PI * (lat / 180);
    const theta = lngLondon - lng;
    const radtheta = Math.PI * (theta / 180);
    let dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * (180 / Math.PI);
    dist = dist * 60 * 1.1515;

    return dist;
  }
};
