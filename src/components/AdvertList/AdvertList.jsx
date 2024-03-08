import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { fetchAdvertsThunk, addAdvertToFavorite, deleteAdvertFavorite } from '../../redux/advert/advert.reducer';
import {Loader} from "components/Loader/Loader";
import { AdvertItem } from '../AdvertItem/AdvertItem';
import { selectAdverts, selectAdvertsFavorites } from '../../redux/advert/advert.selectors';
import Modal from '../Modal/Modal';
import { StyleAdvertList } from './AdvertList.styled';
import { Button } from '../BtnLoadMore/BtnLoadMore/';

export const AdvertList = ({advertsList}) => {
const [isOpenModal, setIsOpenModal] = useState(false);
const [modalData, setModalData] = useState(null);

  const [isFavorite, setIsFavorite] = useState(false);
  
  // const [index, setIndex] = useState(0);
  // const [visibleData, setVisibleData] = useState([]);


  const [page, setPage] = useState(1);
  
//   const [query, setQuery] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [adverts, setAdverts] = useState([]);
//   const [error, setError] = useState(null);
//   const [img, setImg] = useState('');
//   const [total, setTotal] = useState(null);

// const pageSize = 4; 

const dispatch = useDispatch();

  
  const toggleIsFavorite = () => {
      setIsFavorite(!isFavorite);
      
  };

const openModal = someDataToModal => {
    setIsOpenModal(true);
    setModalData(someDataToModal);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setModalData(null);
  };
  
  

  const toggleFavorite = advertId => {
    // setIsFavorite(!isFavorite);
    if (isFavorite === false) {
      dispatch(addAdvertToFavorite(advertId))
      setIsFavorite(!isFavorite)
    } else {
      dispatch(deleteAdvertFavorite(advertId))
      setIsFavorite(!isFavorite)
    } 
      };


  useEffect(() => {
    dispatch((fetchAdvertsThunk(page)));
    // setAdverts(prevAdverts = [...prevAdverts, ...adverts])
  }, [page, dispatch ]);

  



  // useEffect(() => {
  
  //   const numberOfItems = pageSize * ( index +1 ); 

  //   const newArray = []; 

  //   for(let i= 0 ; i< advertsList.length ; i++ ){
  //     if(i < numberOfItems) 
  //         newArray.push(advertsList[i])
  //   }

  //   setVisibleData(newArray);
    
  // }, [index])
  
    return (
    <StyleAdvertList>
      
        <ul className='list'>
          {/* {error !== null && <p className="error-bage">{error}</p>}
      {isLoading && <Loader />} */}
         {advertsList.map(({ id, make, model, year, rentalPrice, address, rentalCompany, mileage, img, type, functionalities  }) => (
          <AdvertItem
            key={id}
            id={id}
            img={img}
            make={make}
             model={model}
             year={year}
             address={address}
             toggleFavorite={toggleFavorite}
           openModal={openModal}
           />
            ))}
        </ul>
        <button  type="button" onClick={() => setPage (page+1 )}>
      Load more...
      </button>
        {isOpenModal && <Modal closeModal={closeModal} modalData={modalData} />}
    </StyleAdvertList>
  );
};

// const [page, setPage] = useState(1);
//   const [data, setData] = useState([]);
  // const isLoading = useSelector(state => state.isLoading);
  // const error = useSelector(state => state.error);
 
  //  setData(prevData => [...prevData, ...response.data]);
  // const advertsList = useSelector(selectAdverts);
// const favoritesAdvert = useSelector(selectAdvertsFavorites);
    
  // setData(prevData => [...prevData, ...response.data]);
  // useEffect(() => {
  //   fetchData();
  // }, [currentPage]);

  // const loadMore = () => {
  //   setPage(prevPage => prevPage + 1);
  // };
  