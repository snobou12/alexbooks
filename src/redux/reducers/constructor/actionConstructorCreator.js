import { createAsyncThunk } from "@reduxjs/toolkit";
import ConstructorService from "../../../services/constructorService";


export const getAlbumIDS = createAsyncThunk(
    "constructor/get_album_ids",
    async (_, thunkApi) => {
      try {
        const response = await ConstructorService.getAlbumIDS();
        return response.data;
      } catch (e) {
        if (e) {
            console.log(e);
          return thunkApi.rejectWithValue(e);
        }
      }
    }
  );

  export const deleteAlbumById = createAsyncThunk(
    "constructor/delete_album_by_id",
    async (albumId, thunkApi) => {
      try {
        const response = await ConstructorService.deleteAlbumById(albumId);
        return albumId;
      } catch (e) {
        if (e) {
            console.log(e);
          return thunkApi.rejectWithValue(e);
        }
      }
    }
  );

  export const newAlbum = createAsyncThunk(
    "constructor/create_new_album",
    async (_, thunkApi) => {
      try {
        const response = await ConstructorService.newAlbum();
        return response.data;
      } catch (e) {
        if (e) {
            console.log(e);
          return thunkApi.rejectWithValue(e);
        }
      }
    }
  );

  export const getAlbumById = createAsyncThunk(
    "constructor/get_album_by_id",
    async (albumId, thunkApi) => {
      try {
        const response = await ConstructorService.getAlbumById(albumId);
        if(response.data){
          let data = JSON.parse(response.data.data);
          let images = JSON.parse(response.data.images);
          let fullData = {data,images};
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
  
  
  