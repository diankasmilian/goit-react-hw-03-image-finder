import axios from 'axios';

export const getImage = async (value, page) => {
  const {data} = await axios.get(
    `https://pixabay.com/api/?key=36494115-429f42e0991e0d4dcacf7517d&q=${value}&per_page=12&page=${page}`
  );
  return data;
};
