import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getAdverts, getAdvertsAll } from '../../Api/Api';


export const fetchAdvertsThunk = createAsyncThunk(
  'adverts/fetchAdverts',
  async (page, thunkAPI) => {
    try {
   
      const data = await getAdverts(page);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAllAdvertsThunk = createAsyncThunk(
  'adverts/fetchAll',
  async (_, thunkAPI) => {
    try {
   
      const data = await getAdvertsAll();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  advertsAll: [],
  adverts: [],
  favorites: [],
  isLoading: false,
  isFavorite: [],
  error: null,
  filter: "",

};

const advertsSlice = createSlice({
  name: 'adverts',
    
  initialState,
  
  reducers: {
       
    changeFilter(state, { payload }) {
      state.filter = payload;
    },

    addAdvertToFavorite(state, { payload }) {
     state.favorites =[...state.favorites, state.adverts.find(advert => advert.id === payload)];
       },

  
    deleteAdvertFavorite(state, { payload }) {
      state.favorites = state.favorites.filter(favorite => favorite.id !== payload)
    }
  },

    extraReducers: builder => 
      builder
        .addCase(fetchAdvertsThunk.fulfilled, (state, { payload }) => {
          state.isLoading = false;
          // state.adverts = payload;
          state.adverts = [...state.adverts, ...payload];
        })

        .addCase(fetchAllAdvertsThunk.fulfilled, (state, { payload }) => {
          state.isLoading = false;
          // state.adverts = payload;
          state.advertsAll = [...state.advertsAll, ...payload];
        })
        
        // state.adverts = [...state.adverts, ...payload];
        // .addCase(addNewContact.fulfilled, (state, { payload }) => {
        //   state.isLoading = false;
        //   state.contacts = [...state.contacts, payload];
        // })
        
        // .addCase(removeContact.fulfilled, (state, { payload }) => {
        //   state.isLoading = false;
        //   state.contacts = state.contacts.filter(contact => contact.id !== payload);
        // })
        
        .addMatcher(
          isAnyOf(
            fetchAdvertsThunk.pending,
            fetchAllAdvertsThunk.pending,
            // addNewContact.pending,
            // removeContact.pending
          ),
          state => {
            state.isLoading = true;
            state.error = null;
          }
        )
        .addMatcher(
          isAnyOf(
            fetchAdvertsThunk.rejected,
            fetchAllAdvertsThunk.rejected,
            // addNewContact.rejected,
            // removeContact.rejected
          ),
          (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
          }
        )
  });

export const { changeFilter, addAdvertToFavorite, deleteAdvertFavorite } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;

//   addToFavorite = id => {
  //   const data = this.state.books.find(item => item.id === id);
  //   this.setState({
  //     booksfav: [...this.state.booksfav, data]
  //   });
// };
  
   // const data = state.adverts.find(item => item.id === payload);
      // const dataIsFavorite = {id:item.id, isFavorite:true}
      // state.favorites.push(data)
// state.isFavorite.push(dataIsFavorite)
      
// export const addAdvertToFavoriteThunk = createAsyncThunk
// export const addNewContact = createAsyncThunk(
//   'contacts/addContact', 
//   async (data, thunkAPI) => {
//     try {
//       const result = await addContact(data);
//       if (data.onSuccess) {
//         data.onSuccess();
//       }
//       return result;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
  
//   }
// );
  
//   export const removeContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, thunkAPI) => {
//     try {
//       await deleteContact(id);
//       return id;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
