import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { selectAdverts } from '../../redux/advert/advert.selectors';

export const FavoriteButton = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    

  const toggleFavorite = () => {
      setIsFavorite(!isFavorite);
      
  };

  return (
    <button onClick={toggleFavorite}>
      {isFavorite ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
}