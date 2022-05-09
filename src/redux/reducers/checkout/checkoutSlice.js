/** @format */

import { createSlice, current } from "@reduxjs/toolkit";
const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    checkout: {
      selectedNav: 0,
      navs: [
        { id: 0, title: "data", transl: "Введите контактные данные" },
        { id: 1, title: "delivery", transl: "Выберите способ доставки" },
        { id: 2, title: "paying", transl: "Перейдите к оплате" },
      ],
      content: [
        {
          id: 0,
          title: "data",
          options: [
            {
              id: 0,
              title: "fullname",
              transl: "ФИО",
              ph: "Ваше имя",
              value: "Иванов Иван Иванович",
            },
            {
              id: 1,
              title: "phone",
              transl: "Телефон",
              ph: "8 000 000 00 00",
              value: {
                formattedValue: "7 (999) 999-99-99",
                value: "79999999999",
              },
            },
            {
              id: 2,
              title: "email",
              transl: "Почта",
              ph: "e-mail@mail.ru",
              value: "mail@mail.ru",
            },
            { id: 3, title: "city", transl: "Город", ph: "Москва", value: "Москва" },
          ],
        },
        {
          id: 1,
          title: "delivery",
          options: [
            {
              id: 0,
              title: "service",
              transl: "Служба доставки",
              selectedVariable: 0,
              variables: [
                { id: 0, title: "cdek", transl: "СДЭК" },
                { id: 1, title: "post", transl: "ПОЧТА РОССИИ" },
                { id: 2, title: "pickup", transl: "Самовывоз" },
              ],
            },
            {
              id: 1,
              title: "deliverPlace",
              transl: "Куда доставить",
              selectedVariable: 0,
              variables: [
                { id: 0, title: "pointOfIssue", transl: "Пункт выдачи" },
                { id: 1, title: "toTheDoor", transl: "До двери" },
              ],
            },
            {
              id: 2,
              title: "address",
              transl: "Адрес",
              data: [
                {
                  id: 0,
                  title: "zipcode",
                  transl: "Индекс",
                  type:"number",
                  ph: "188212",
                  value: "188212",
                },
                {
                  id: 1,
                  title: "street",
                  transl: "Улица",
                  type:"text",
                  ph: "Рубежная",
                  value: "Рубежная",
                },
                {
                  id: 2,
                  title: "houseNumber",
                  transl: "Дом",
                  type:"number",
                  ph: "14",
                  value: "14",
                },
                {
                  id: 3,
                  title: "flat",
                  transl: "Квартира",
                  type:"number",
                  ph: "19",
                  value: "19",
                },
              ],
            },
          ],
        },
      ],
    },
  },
  reducers: {
    handleIncrementNavigation(state) {
      state.checkout.selectedNav += 1;
    },
    handleDecrementNavigation(state){
      state.checkout.selectedNav -= 1;

    },
    //data изменить номер
    handleChangeDataPhone(state, action) {
      state.checkout.content[0].options[1].value = action.payload;
    },
    //изменить другие опции data
    handleChangeDataOtherOptions(state, action) {
      const { value, target } = action.payload;
      switch (target) {
        case "fullname":
          state.checkout.content[0].options[0].value = value;
          break;
        case "email":
          state.checkout.content[0].options[2].value = value;
          break;
        case "city":
          state.checkout.content[0].options[3].value = value;
          break;
        default:
          break;
      }
    },
    handleChangeDeliveryService(state, action) {
      const serviceId = action.payload;
      state.checkout.content[1].options[0].selectedVariable = serviceId;
    },
    handleChangeDeliveryPlace(state, action) {
      const dpId = action.payload;
      state.checkout.content[1].options[1].selectedVariable = dpId;
    },
    handleChangeDeliveryAddress(state, action) {
      const { value, target } = action.payload;
      switch (target) {
        case "zipcode":
          state.checkout.content[1].options[2].data[0].value = value;
          break;
        case "street":
          state.checkout.content[1].options[2].data[1].value = value;

          break;
        case "houseNumber":
          state.checkout.content[1].options[2].data[2].value = value;

          break;
        case "flat":
          state.checkout.content[1].options[2].data[3].value = value;

          break;
        default:
          break;
      }
    },
  },
});
export const {
  handleIncrementNavigation,
  handleDecrementNavigation,
  handleChangeDataPhone,
  handleChangeDataOtherOptions,
  handleChangeDeliveryService,
  handleChangeDeliveryPlace,
  handleChangeDeliveryAddress,
} = checkoutSlice.actions;
export default checkoutSlice.reducer;
