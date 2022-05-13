import $api from "../api";
export default class basketService{
  static async getBlankInfo(blankId){
    // return $api.get(`?controller=Shop&method=get&blankId=${blankId}`);
    return $api.get(`?controller=Shop&method=get`);
}
}
