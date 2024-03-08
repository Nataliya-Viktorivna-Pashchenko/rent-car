// import { LoaderWrapper } from './Loader.styled';

import { RingLoader } from 'react-spinners';

export const Loader = ({ size, color = 'black' }) => (
  <LoaderWrapper className="loader">
    <RingLoader color={color} size={size} />
  </LoaderWrapper>
);