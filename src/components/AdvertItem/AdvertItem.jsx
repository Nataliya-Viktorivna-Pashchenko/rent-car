import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { AdvertItemStyle } from './AdvertItem.styled';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { addAdvertToFavorite, deleteAdvertFavorite } from '../../redux/advert/advert.reducer';
import { selectIsFavorites } from '../../redux/advert/advert.selectors';
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

// import css from "components/Styles.module.css"
// import { deleteContactsThunk } from '../../redux/contact/contact.reducer';

export const AdvertItem = ({ id, make, model, year, rentalPrice, address, rentalCompany, mileage, img, type, functionalities, openModal, toggleFavorite }) => {
  const [isLoading, setIsLoading] = useState(false);

  // const dispatch = useDispatch()
  
//   const onDelete = advertId => {

//     setIsLoading(true);
//     dispatch(deleteContactsThunk(contactId));
//     setIsLoading(false);
  //   };
  
      const [isFavorite, setIsFavorite] = useState(false);
  // const dispatch = useDispatch();

  // const toggleFavorite = ({advertData, advertId}) => {
  //   setIsFavorite(!isFavorite);
  //   if (isFavorite === false) {
  //     dispatch(addAdvertToFavorite(advertData))
  //   } else {
  //     dispatch(deleteAdvertFavorite(advertId))
  //   } 
  //     };
// const isFavorite = useSelector(selectIsFavorites)

  return (
    <AdvertItemStyle key={id}> 
      <img className='img' src= {img} alt={make}  />
      <p >
        {make}:
      </p>
      <p >
        {model}
      </p>
      <div >
        {year}
      </div>
      <p >
        {rentalPrice}
      </p>
      <button onClick={() => {toggleFavorite(id), setIsFavorite(!isFavorite)}}>
      {isFavorite ? <FaHeart /> : <FaRegHeart />}
    </button>
      {/* <FavoriteButton/> */}
      <button
        onClick = {() => openModal({ address, rentalCompany, rentalPrice })}
        type="button"
      >
        Learn more
      </button>
      
    </AdvertItemStyle>
  );
};