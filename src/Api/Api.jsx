import axios from 'axios';

export const getAdvert = async () => {
  const { data } = await axios.get(
    `https://65e7949553d564627a8f0720.mockapi.io/advert`
  );

  return data;
};


export const getAdvertById = async (id) => {
  const { data } = await axios.get(
    `https://65e7949553d564627a8f0720.mockapi.io/advert/${id}`
  );

  return data;
};