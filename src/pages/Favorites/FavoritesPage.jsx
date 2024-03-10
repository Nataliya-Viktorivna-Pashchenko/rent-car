import React from 'react';
import { FavoritesStyle } from './FavoritesPage.styled';
import { selectAdvertsFavorites } from '../../redux/advert/advert.selectors';
import { AdvertList } from '../../components/AdvertList/AdvertList';
import { useSelector } from 'react-redux';
import { FavoritesList } from '../../components/AdvertList/FavoritesList';
// // import css from 'components/Styles.module.css';


const FavoritesPage = () => {
    const advertsList = useSelector(selectAdvertsFavorites);

    return(
       <FavoritesStyle >
<FavoritesList  />
        </FavoritesStyle> 
    )
    
}

export default FavoritesPage;