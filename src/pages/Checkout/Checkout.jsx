import React from 'react'
import NumberFormat from 'react-number-format';

import { useDispatch, useSelector } from 'react-redux';
import { handleIncrementNavigation, handleChangeDataPhone, handleChangeDataOtherOptions } from "../../redux/reducers/constructor/constructorSlice";
import "./Checkout.scss";
const Checkout = () => {
  const dispatch = useDispatch();
  const { checkout } = useSelector(state => state.constructorSlice);
  const handleSetDataPhone = (phoneValues) => {
    dispatch(handleChangeDataPhone(phoneValues));
  }
  const handleChangeDataOptions = (e, optionTitle) => {
    dispatch(handleChangeDataOtherOptions({ value: e.target.value, target: optionTitle }));
  }
  const handleIncrementNavs = () => {
    dispatch(handleIncrementNavigation())
  }

  function getCheckoutContent(selectedNav) {
    switch (selectedNav) {
      //контактные данные
      case 0:
        return <div className="checkout__content_wrapper">
          {checkout.content[0].options.map((option, idx) =>
            <div key={`${option.id}:${idx}`} className="checkout__content_item">
              <span>
                {option.transl}
              </span>
              {option.title !== "phone" ?
                <input onChange={(e) => handleChangeDataOptions(e, option.title)} type="text" placeholder={option.ph} value={option.value || ""} />
                :
                <NumberFormat className="field" format="+# (###) ###-##-##" mask="_" placeholder="+7 (999) 333-22-11" value={checkout.content[0].options[1].value.value} onValueChange={({ formattedValue, value }) => handleSetDataPhone({ formattedValue, value })} />}

            </div>
          )}
        </div>
      //способ доставки
      case 1:
        return <div className="checkout__content_wrapper checkout__content_wrapper--delivery">
          <div className="checkout__content_services">
            <div className="checkout__content_title">
              {checkout.content[1].options[0].transl}
            </div>
            <div className="checkout__content_services_content">
              {checkout.content[1].options[0].variables.map((service, idx) =>
                <div key={`${service.id}:${idx}`} className="checkout__content_service">
                   <div className="custom__checkbox"> </div>
                   {/* Доделать.custom__checkbox {
  width: 18px;
  height: 18px;
  border-radius: 100%;
  border: solid 2px rgb(181 178 194);
  cursor: pointer;
  transition: ease all 0.3s;
  &--active{
      transition: none;

      border: solid 5px rgb(2, 141, 216);
  }
} */}
                </div>
              )}
            </div>

          </div>
          <div className="checkout__content_deliverplace">
            <div className="checkout__content_title">
              {checkout.content[1].options[1].transl}
            </div>
            <div className="checkout__content_deilverplace_content">
              {checkout.content[1].options[1].variables.map((dp, idx) =>
                <div key={`${dp.id}:${idx}`} className="checkout__content_deliverplace">
                  {dp.transl}
                </div>
              )}
            </div>
          </div>
          <div className="checkout__content_address">
            <div className="checkout__content_title">
              {checkout.content[1].options[2].transl}
            </div>
            <div className="checkout__content_address_content">
              {checkout.content[1].options[2].data.map((option, idx) =>
                <div key={`${option.id}:${idx}`} className="checkout__content_deliverplace">
                  {option.transl}
                </div>
              )}
            </div>
          </div>
        </div>

      default:
        break;
    }
  }
  //Проверка введености всех value для data
  const [dataValueChecker, setDataValueChecker] = React.useState(false);
  React.useEffect(() => {
    if (!checkout.content[0].options[0].value || checkout.content[0].options[1].value.value.length != 11 || !checkout.content[0].options[2].value || !checkout.content[0].options[3].value) {
      setDataValueChecker(false)
    }
    else {
      setDataValueChecker(true);
    }
  }, [checkout.content[0].options[0].value, checkout.content[0].options[1].value, checkout.content[0].options[2].value, checkout.content[0].options[3].value])
  return (
    <div className='checkout'>
      <div className="checkout__uper">
        <div className="checkout__back">
          <svg
            width="11"
            height="8"
            viewBox="0 0 11 8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM11 3.5H1V4.5H11V3.5Z"></path>
          </svg>
        </div>
        <div className="checkout__title">
          Оформление заказа
        </div>
      </div>
      <div className="checkout__wrapper">
        <div className="checkout__navigation">
          {checkout.navs.map((nav, idx) =>
            <div key={`${nav.id}:${idx}`} className={`checkout__navigation_item ${checkout.selectedNav === nav.id && "checkout__navigation_item--active"}`}>
              {nav.transl}
            </div>
          )}
        </div>
        <div className="checkout__content">
          {getCheckoutContent(checkout.selectedNav)}
          {checkout.selectedNav === 0 && <button
            onClick={handleIncrementNavs}
            className={`next__step_btn ${!dataValueChecker && "next__step_btn--disabled"}`}
            disabled={!dataValueChecker}
          >
            Далее
          </button>}

        </div>
      </div>
    </div>
  )
}

export default Checkout