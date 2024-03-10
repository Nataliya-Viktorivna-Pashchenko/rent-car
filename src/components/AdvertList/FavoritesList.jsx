import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import {  deleteAdvertFavorite } from '../../redux/advert/advert.reducer';
import {Loader} from "components/Loader/Loader";
import { AdvertItem } from '../AdvertItem/AdvertItem';
import {  selectAdvertsFavorites } from '../../redux/advert/advert.selectors';
import Modal from '../Modal/Modal';
import { StyleAdvertList } from './AdvertList.styled';

export const FavoritesList = () => {
  
const [isOpenModal, setIsOpenModal] = useState(false);
const [modalData, setModalData] = useState(null);

const dispatch = useDispatch();
const favorites = useSelector(selectAdvertsFavorites)
const isLoading = useSelector(state => state.isLoading);
const error = useSelector(state => state.error); 
  
const openModal = someDataToModal => {
    setIsOpenModal(true);
    setModalData(someDataToModal);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setModalData(null);
  };
  

  const deleteFavorites = adavertId => {
    dispatch(deleteAdvertFavorite(adavertId))
  };


  

    return (
    <StyleAdvertList>
      
        <ul className='list'>
          {error !== null && <p className="error-bage">{error}</p>}
      {isLoading && <Loader />}
          {favorites.map(({ id, make, model, year, description, rentalPrice, address, rentalCompany, engineSize,
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
              openModal={openModal}
              deleteAdvertFavorite={deleteFavorites}
            />
            
            ))}
        </ul>
       
        {isOpenModal && <Modal closeModal={closeModal} modalData={modalData} />}
    </StyleAdvertList>
  );
};
