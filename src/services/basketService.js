import $api from "../api";
export default class basketService{
static async getBasketAlbumsId() {
    return $api.get("?controller=Shop&method=get");
  }
  static async getAlbumByIdBasket(albumId){
    return $api.get(`?controller=Album&method=get&album=${albumId}`);
}
}
