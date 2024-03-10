import axios from 'axios';


export const getAdverts = async (page) => {
  
  const { data } = await axios.get(
    `https://65e7949553d564627a8f0720.mockapi.io/advert?page=${page}&limit=12`  );

  return data;
};

export const getAdvertsAll = async () => {
  const { data } = await axios.get(
    `https://65e7949553d564627a8f0720.mockapi.io/advert/`
  );

  return data;
};
