import { createSelector } from "@reduxjs/toolkit";

export const selectAdverts = state => state.advertsStore.adverts;
export const selectAdvertsFavorites = state => state.advertsStore.favorites;
export const selectIsFavorites = state => state.advertsStore.isFavorite.isFavorite;
export const selectFilter = state => state.advertsStore.filter;
export const selectAllAdverts = state => state.advertsStore.advertsAll;

export const selectFilterAdverts = createSelector([selectAdverts, selectFilter], (adverts, filter) =>  adverts.filter(advert => advert.make === String(filter)) 

// })export const selectFilterContacts = createSelector([selectContacts, selectContactsFilter],
//     (contacts, filter) => contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase().trim())));

// state.favorites = state.favorites.filter(favorite => favorite.id !== payload)
)