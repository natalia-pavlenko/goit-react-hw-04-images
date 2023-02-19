import axios from 'axios';
const API_KEY = `31765545-8dcac2b42d47ae7ceae61e9ee`;

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 12,
};

export const getImages = async (searchQuery, page) => {
  const { data } = await axios.get(
    `?key=${API_KEY}&q=${searchQuery}&orientation=horizontal&safesearch=true&image_type=photo&per_page=12&page=${page}`
  );
  return data;
};
