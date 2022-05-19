
import { createSlice, current } from "@reduxjs/toolkit";
import { getBlankInfo } from "./actionBlankCreator";

const blankSlice = createSlice({
  name: "blank",
  initialState: {
    blankId:null,
    albumId:null,
    blankAlbums:[],
    deliveryInfo:{},
    targetAlbum:{},
    isLoading:false
  },
  reducers: {
    handleChangeAlbumABlankId(state,action){
        const {albumId,blankId}=action.payload;
        state.albumId=albumId;
        state.blankId=blankId;
    },
    handleChangeSelectedPage(state,action){
      const pageId=action.payload;
      let prevTargetAlbum ={...current(state.targetAlbum)};
      let prevTargetData={...prevTargetAlbum.data};
      let prevTargetPagesData={...prevTargetData.pagesData};

      let newTargetPagesData={...prevTargetPagesData,selectedPage:pageId};
      let newTargetData={...prevTargetData,pagesData:newTargetPagesData};
      let newTargetAlbum={...prevTargetAlbum,data:newTargetData};
      state.targetAlbum=newTargetAlbum;
    }
  },
  extraReducers: {
    [getBlankInfo.fulfilled.type]: (state, action) => {
      const {deliveryInfo,albumsData}=action.payload;
      console.log(albumsData,deliveryInfo);
        state.isLoading = false;
        state.deliveryInfo=deliveryInfo
        state.blankAlbums=albumsData
        
        albumsData.forEach((album)=>{
          if(album.data.mainData.albumId === state.albumId){
            state.targetAlbum=album;
          }
        })
       
      },
      [getBlankInfo.pending.type]: (state) => {
        state.isLoading = true;
      },
      [getBlankInfo.rejected.type]: (state, action) => {
        state.isLoading = false;
        state.blankAlbums=[];
        state.deliveryInfo={};
      },
    
  },
});

export const {
    handleChangeAlbumABlankId,
    handleChangeSelectedPage
} = blankSlice.actions;
export default blankSlice.reducer;
