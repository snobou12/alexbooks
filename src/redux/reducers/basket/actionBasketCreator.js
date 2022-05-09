import { createAsyncThunk } from "@reduxjs/toolkit";
import BasketService from "../../../services/basketService";


export const getBasketAlbumsId = createAsyncThunk(
    "basket/get/albums/id",
    async (_, thunkApi) => {
      try {
        const response = await BasketService.getBasketAlbumsId();
        if(response.data){
          if(response.data.error === "No access"){
            return "No access"
          }
          else{
            if(response.data.data){
              let data = JSON.parse(response.data.data);
            return data;
            }
            else{
              return []
            }
            
          }
         
        }
      } catch (e) {
        if (e) {
            console.log(e);
          return thunkApi.rejectWithValue(e);
        }
      }
    }
  );


  export const getAlbumByIdBasket = createAsyncThunk(
    "basket/get_album_by_id",
    async ([albumId,isFetched], thunkApi) => {
      try {
        const response = await BasketService.getAlbumByIdBasket(albumId);
        if(response.data){
          let data = JSON.parse(response.data.data);
          let images = JSON.parse(response.data.images);
          let fullData = {album:{data,images},isFetched};
          return fullData;
        }
        else{
          return {}
        }
        
      } catch (e) {
        if (e) {
            console.log(e);
          return thunkApi.rejectWithValue(e);
        }
      }
    }
  );
  
