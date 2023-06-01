export const getMovie = async () => {
  const respuesta = await fetch(
    "https://www.omdbapi.com/?t=ready+player+one&apikey=1839f975"
  );
  const data = await respuesta.json();
  return await data;
};
