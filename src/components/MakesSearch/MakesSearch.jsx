import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { selectFilter } from '../../redux/advert/advert.selectors';
import { changeFilter, fetchAllAdvertsThunk } from '../../redux/advert/advert.reducer';
import { useState } from 'react';


export const MakesSearch = () => {

    const [makeSearch, setMakeSearch] = useState('');
// console.log(makeSearch)
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
        <form onSubmit={onSubmit}>
            <Select
                name='make'
                options={getMakesOptions()}
                onChange={onChange}
            />
            <button>Search</button>
        </form>
    )
}