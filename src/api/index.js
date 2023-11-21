export const getAlbums = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await response.json();
  return data;
};

export const getAlbumCovers = async () => {
  const response = await fetch("https://source.unsplash.com/random");
  // const data = await response.json();
  return response;
};
