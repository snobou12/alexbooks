import $api from "../api";
export default class basketService{
  static async getBlankInfo(blankId){
    return $api.get(`?controller=Shop&id=${blankId}&method=blank`);
}
}
