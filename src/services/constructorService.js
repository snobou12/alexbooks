import $api from "../api";

export default class constructorService{
    static async getAlbumIDS() {
        return $api.get("?controller=Album&method=gets");
      }
      static async deleteAlbumById(albumId){
          return $api.post(`?controller=Album&method=delete&album=${albumId}`)
      }
    static async newAlbum(){
        return $api.get("?controller=Album&method=new");
    }
    static async getAlbumById(albumId){
        return $api.get(`?controller=Album&method=get&album=${albumId}`);
    }
}