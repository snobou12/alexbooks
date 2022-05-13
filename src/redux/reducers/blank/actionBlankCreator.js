import { createAsyncThunk } from "@reduxjs/toolkit";
import BlankService from "../../../services/blankService";


export const getBlankInfo = createAsyncThunk(
    "blank/getInfo",
    async (blankId, thunkApi) => {
      try {
        //   const response = await BlankService.getBlankInfo(blankId);
        const response = await BlankService.getBlankInfo();
        if(response.data){
          if(response.data.data){
              let data = response.data.data;
              let fullData = JSON.parse(data);
              return fullData
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