import React, { useState } from 'react';
import { CatalogStyle } from './CatalogPage.styled';
import { selectAdverts } from '../../redux/advert/advert.selectors';
// import css from 'components/Styles.module.css';
import { AdvertList } from '../../components/AdvertList/AdvertList';
import { useSelector } from 'react-redux';

const CatalogPage = () => {
    // const [page, setPage] = useState(1);
    // const [data, setData] = useState([]);
    
    const advertsList = useSelector(selectAdverts);
    console.log(advertsList)
    return(
        <CatalogStyle>
            <AdvertList advertsList={advertsList } />
        </CatalogStyle> 
    )
    
}

export default CatalogPage;