import React, { useState } from 'react';
import { CatalogStyle } from './CatalogPage.styled';
import { selectAdverts, selectFilter } from '../../redux/advert/advert.selectors';
import { AdvertList } from '../../components/AdvertList/AdvertList';
import { useSelector } from 'react-redux';
import { FilterAdverts } from '../../components/AdvertList/FilterAdverts';

const CatalogPage = () => {
    // const [page, setPage] = useState(1);
    // const [data, setData] = useState([]);
    
    //  const advertsList = useSelector(selectAdverts);
    // console.log(advertsList)
    const filter = useSelector(selectFilter)
    console.log(filter);
    return(
        <CatalogStyle>
            {filter===''? (<AdvertList />) : (<FilterAdverts/>)}
        </CatalogStyle>
    )
    
}

export default CatalogPage;