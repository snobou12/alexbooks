
import { createSlice, current } from "@reduxjs/toolkit";

import { getAlbumByIdBasket, getBasketAlbumsId } from "./actionBasketCreator";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basketAlbumsId: [],
    basketAlbums:[],
    isLoading: false,
    isFetched:false,
  },
  reducers: {
    removeBasketData(state){
      state.basketAlbumsId=[];
      state.basketAlbums=[];
      state.isLoading=false;
      state.isFetched=false;
    },
    removeAlbumFromBasket(state,action){
      let deleteId = action.payload;
      let newBasketAlbums=[...current(state.basketAlbums)].filter((album)=>album.data.mainData.albumId !== deleteId);
      let newBasketAlbumsId=[...current(state.basketAlbumsId)].filter((id)=>id !==deleteId);
      state.basketAlbums=newBasketAlbums;
      state.basketAlbumsId=newBasketAlbumsId;
    },
    handleChangeBasketAlbums(state,action){
      state.basketAlbums=action.payload;
    }
  },
  extraReducers: {
    [getBasketAlbumsId.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.basketAlbumsId=action.payload;
    },
    [getBasketAlbumsId.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getBasketAlbumsId.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.basketAlbumsId=[];
    },

    [getAlbumByIdBasket.fulfilled.type]: (state, action) => {
        state.isLoading = false;
        let newBasketAlbums=[...current(state.basketAlbums),action.payload.album];
        state.basketAlbums=newBasketAlbums;
        state.isFetched=action.payload.isFetched;
      },
      [getAlbumByIdBasket.pending.type]: (state) => {
        state.isLoading = true;
      },
      [getAlbumByIdBasket.rejected.type]: (state, action) => {
        state.isLoading = false;
        state.basketAlbums=[];
      },
    
  },
});

export const {
  removeBasketData,removeAlbumFromBasket,handleChangeBasketAlbums

} = basketSlice.actions;
export default basketSlice.reducer;
