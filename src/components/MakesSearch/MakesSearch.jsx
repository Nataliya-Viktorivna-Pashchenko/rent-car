import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { changeFilter, fetchAllAdvertsThunk } from '../../redux/advert/advert.reducer';
import { useState } from 'react';
import { StyleSearch } from './MakesSearch.styled';


export const MakesSearch = () => {

    const [makeSearch, setMakeSearch] = useState('');
     const makes = [
        'Volvo', 'HUMMER', 'Subaru', 'Mitsubishi', 'Nissan', 'Navigator L',
        'GMC', 'Hyundai', 'Betley', 'Mercedes-Benz', 'Aston Martin', 'Pontiac', 'Lamborghini', 'Audi',
    ]

     const getMakesOptions = () => {
        if (!makes) {
            return;
        }
        const makesOptions = makes.map((item) => ({
            value: item,
            label: item,
        }));
        return makesOptions;
    };
    const dispatch = useDispatch()
    
    const onChange = choice => {
        setMakeSearch(choice.value)
    }
    const makeSearchS = makeSearch;
    const onSubmit = event => {
        event.preventDefault();
        dispatch(changeFilter(makeSearchS))
        dispatch(fetchAllAdvertsThunk())
    }

    return (
        <StyleSearch onSubmit={onSubmit}>
            <Select
                className='selectStyle'
                name='make'
                options={getMakesOptions()}
                onChange={onChange}
            />
            <button className='btnSearch'>Search</button>
        </StyleSearch>
    )
}