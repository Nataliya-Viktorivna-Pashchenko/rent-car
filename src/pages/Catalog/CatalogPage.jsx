import React from 'react';
import { CatalogStyle } from './CatalogPage.styled';
import { selectFilter } from '../../redux/advert/advert.selectors';
import { AdvertList } from '../../components/AdvertList/AdvertList';
import { useSelector } from 'react-redux';
import { FilterAdverts } from '../../components/AdvertList/FilterAdverts';

const CatalogPage = () => {
    
    const filter = useSelector(selectFilter)
    console.log(filter);
    return(
        <CatalogStyle>
            {filter===''? (<AdvertList />) : (<FilterAdverts/>)}
        </CatalogStyle>
    )
    
}

export default CatalogPage;