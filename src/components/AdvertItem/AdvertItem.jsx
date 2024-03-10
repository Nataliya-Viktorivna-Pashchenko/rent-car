import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { AdvertItemStyle } from './AdvertItem.styled';
// import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
// import { addAdvertToFavorite, deleteAdvertFavorite } from '../../redux/advert/advert.reducer';
// import { selectIsFavorites } from '../../redux/advert/advert.selectors';
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";


export const AdvertItem = ({ id, make, model, year, rentalPrice, address, rentalCompany, mileage, img, accessories, type,
  functionalities, fuelConsumption, engineSize, rentalConditions, description, openModal, deleteFavorites, addToFavorites, favorites }) => {
  const [isLoading, setIsLoading] = useState(false);


  
      // const [isFavorite, setIsFavorite] = useState(false);
  // const isFavorite = favorites.includes(favorites.id);
  
  return (
    
    <AdvertItemStyle key={id}> 
      <img className='img' src={img} alt={make} />
      
      <div className='itemStylePrice'>
      <div className='itemStyleYear'>
      <p >{make}</p>
      <span className='blueStyle'>{model},</span>
          <p>{year}</p>
          </div>
        <p >{rentalPrice}</p>
      </div>
      <div className='itemStyleDiscr'>
      <span>{address} | </span>
      <span >{rentalCompany} | </span>
        <span >{accessories[0]} | </span>
            <span >{type} | </span>
      <span >{mileage} | </span>
        <span >{functionalities[0]}</span>
      </div>
      <button className='heart' onClick={() => addToFavorites(id)}> <FaHeart />
      </button>
      
      {/* {isFavorite ? (<button className='heart' onClick={() => deleteFavorites(id)}>
       <FaRegHeart />  </button>) : (<button className='heart' onClick={() => addToFavorites(id)}> <FaHeart />
      </button>)}
       */}
{/* (<button className='heart' onClick={() => deleteFavorites(id)}>
       <FaRegHeart /> </button>) */}
      {/* <button className='heart' onClick={() => {toggleFavorite(id), setIsFavorite(!isFavorite)}}>
      {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </button> */}
      
      <button className='btnLeanMore' onClick = {() => openModal({ id, make, model, year, rentalPrice, address, rentalCompany, 
      mileage, img, accessories, type, functionalities, fuelConsumption, engineSize, description, rentalConditions})}
        type="button">
        Learn more
      </button>
      
    </AdvertItemStyle>
  );
};

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

  // const dispatch = useDispatch()
  
//   const onDelete = advertId => {

//     setIsLoading(true);
//     dispatch(deleteContactsThunk(contactId));
//     setIsLoading(false);
  //   };
