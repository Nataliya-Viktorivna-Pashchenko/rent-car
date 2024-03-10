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
          state.adverts = [...state.adverts, ...payload];
        })

        .addCase(fetchAllAdvertsThunk.fulfilled, (state, { payload }) => {
          state.isLoading = false;
          state.advertsAll = [...state.advertsAll, ...payload];
        })
        
        .addMatcher(
          isAnyOf(
            fetchAdvertsThunk.pending,
            fetchAllAdvertsThunk.pending,
            
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
            
          ),
          (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
          }
        )
  });

export const { changeFilter, addAdvertToFavorite, deleteAdvertFavorite } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
