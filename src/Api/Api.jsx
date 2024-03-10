import axios from 'axios';

// export const getAdverts = async (page) => {
  
//   const { data } = await axios.get(
//     `https://65e7949553d564627a8f0720.mockapi.io/advert`  );

//   return data;
// };

export const getAdverts = async (page) => {
  
  const { data } = await axios.get(
    `https://65e7949553d564627a8f0720.mockapi.io/advert?page=${page}&limit=2`  );

  return data;
};

export const getAdvertsAll = async () => {
  const { data } = await axios.get(
    `https://65e7949553d564627a8f0720.mockapi.io/advert/`
  );

  return data;
};

// const BASE_URL = `https://pixabay.com/api/`;
// const API_KEY = '39494389-0cbffb7df999a91ec2d35df03';

// export function getImg(query, page) {
//     const params = {
//         key: API_KEY,
//         q: query,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: true,
//         page,
//         per_page: 12,
      
//     };
//     return axios(BASE_URL, { params });
// }