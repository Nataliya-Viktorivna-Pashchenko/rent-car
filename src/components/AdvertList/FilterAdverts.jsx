import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { fetchAdvertsThunk, addAdvertToFavorite, deleteAdvertFavorite, fetchAllAdvertsThunk } from '../../redux/advert/advert.reducer';
// import {Loader} from "components/Loader/Loader";
import { AdvertItem } from '../AdvertItem/AdvertItem';
import { selectAdverts, selectAdvertsFavorites, selectAllAdverts, selectFilter, selectFilterAdverts } from '../../redux/advert/advert.selectors';
import Modal from '../Modal/Modal';
import { StyleAdvertList } from './AdvertList.styled';
import { Button } from '../BtnLoadMore/BtnLoadMore';
import { MakesSearch } from '../MakesSearch/MakesSearch';

export const FilterAdverts = () => {
  
const [isOpenModal, setIsOpenModal] = useState(false);
const [modalData, setModalData] = useState(null);
const [page, setPage] = useState(1);

const dispatch = useDispatch();
  // const advertsList = useSelector(selectAdverts);
  const allAdverts = useSelector(selectAllAdverts);
  // const favorites = useSelector(selectAdvertsFavorites)
  const filter = useSelector(selectFilter)
  // const make = allAdverts.map
  // console.log(make)

    // console.log(filter)
  
  
const openModal = someDataToModal => {
    setIsOpenModal(true);
    setModalData(someDataToModal);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setModalData(null);
  };
  
   const clickLoadMore = () => {
    setPage (page+1 )
  };
  
  const addToFavorites = adavertId => {
    dispatch(addAdvertToFavorite(adavertId))
  };

  const deleteFavorites = adavertId => {
    dispatch(deleteAdvertFavorite(adavertId))
  };

  useEffect(() => {
    dispatch((fetchAllAdvertsThunk(page)));
  }, [ dispatch ]);

  // const advertsFilter = useSelector(selectFilterAdverts)
  // console.log(advertsFilter)
  
  const filterAdverts = allAdverts.filter(advert => advert.make === String(filter))
  console.log(filterAdverts)

    return (
    <StyleAdvertList>
      <MakesSearch/>
        <ul className='list'>
          {/* {error !== null && <p className="error-bage">{error}</p>}
      {isLoading && <Loader />} */}
          {filterAdverts.map(({ id, make, model, year, description, rentalPrice, address, rentalCompany, engineSize,
            fuelConsumption, mileage, img, accessories, type, functionalities }) => (
            
          <AdvertItem
            key={id}
            id={id}
            img={img}
            make={make}
             model={model}
             year={year}
             address={address}
             rentalPrice={rentalPrice}
             rentalCompany={rentalCompany}
             mileage={mileage}
             accessories={accessories}
             type={type}
             functionalities={functionalities}
             description={description}
             fuelConsumption={fuelConsumption}
             engineSize={engineSize}
            //  toggleFavorite={toggleFavorite}
              openModal={openModal}
              addToFavorites={addToFavorites}
              deleteAdvertFavorite={deleteFavorites}
            />
            
            ))}
        </ul>

<Button title='Load more...' clickFn={clickLoadMore} />
        
        {isOpenModal && <Modal closeModal={closeModal} modalData={modalData} />}
    </StyleAdvertList>
  );
};
