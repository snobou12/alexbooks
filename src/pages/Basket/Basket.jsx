
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getAlbumByIdBasket,
  getBasketAlbumsId,
  
} from "../../redux/reducers/basket/actionBasketCreator";
import { removeAlbumFromBasket,handleChangeBasketAlbums } from "../../redux/reducers/basket/basketSlice";
import {BASE_URL} from "../../static/values";
import "./Basket.scss";
const Basket = () => {
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  const { basketAlbums, basketAlbumsId, isFetched } = useSelector(
    (state) => state.basketSlice
  );
  const { size } = useSelector((state) => state.constructorSlice);
  React.useEffect(() => {
    dispatch(getBasketAlbumsId());
  }, [basketAlbumsId.length]);
  React.useEffect(() => {
    if (basketAlbumsId.length > 0 && !isFetched) {
      basketAlbumsId.forEach((id, idx) => {
        if (idx === basketAlbumsId.length - 1) {
          dispatch(getAlbumByIdBasket([id, true]));
        } else {
          dispatch(getAlbumByIdBasket([id, false]));
        }
      });
    }
  }, [basketAlbumsId.length]);

  const handleDeleteAlbumFromBasket = async (albumId) => {
    let formData = new FormData();
    let idsArr = [...basketAlbumsId];
    let prevBasketAlbumsId = [...idsArr];
    let newBasketAlbumsId = prevBasketAlbumsId.filter((id) => id !== albumId);
    let basketAlbums = newBasketAlbumsId;
    let jsonData = JSON.stringify(basketAlbums);
    formData.append("request", jsonData);
    axios({
      method: "post",
      url: `${BASE_URL}/designer/?controller=Shop&method=save`,
      data: formData,
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status === 200) {
        dispatch(removeAlbumFromBasket(albumId));
        toast.success("Альбом успешно удален из корзины");
      } else {
        toast.error("Что-то пошло не так");
      }
    });
  };
  function getFullPrice() {
    let summ = 0;
    basketAlbums.forEach((basketAlbum) => {
      summ +=
        basketAlbum.data.mainData.price *
        basketAlbum.data.mainData.countOfAlbums;
    });
    return summ;
  }
  const handleCrementAlbumCount = (mark, albumId) => {
   
        let prevBasketAlbums=[...basketAlbums];
        let needIdx =0;
        for (let i=0;i<prevBasketAlbums.length;i++){
          if(prevBasketAlbums[i].data.mainData.albumId === albumId){
            needIdx = i;
          }
        }
        let prevBasketAlbum={...basketAlbums[needIdx]};
        let prevCount = prevBasketAlbum.data.mainData.countOfAlbums;
        let newCount=null;
        if(mark === "-"){
          if(prevCount > 1){
            newCount = prevCount - 1
          }else{
            newCount=1;
          }
        }
        else{
          newCount=prevCount + 1
        }
        let prevBasketAlbumData={...prevBasketAlbum.data};
        let prevBasketAlbumMainData={...prevBasketAlbumData.mainData};
        let newBasketAlbumMainData = {...prevBasketAlbumMainData,countOfAlbums:newCount}
        let newBasketAlbumData={...prevBasketAlbumData,mainData:newBasketAlbumMainData}
        let newBasketAlbum={...prevBasketAlbum,data:newBasketAlbumData};
        let newBasketAlbums=[...prevBasketAlbums];
        newBasketAlbums[needIdx]=newBasketAlbum;
        dispatch(handleChangeBasketAlbums(newBasketAlbums));
      
    
  };

  return (
    <div className="basket__wrapper">
      <div className="basket">
        <div className="basket__uper">
          <div onClick={() => navigate(-1)} className="basket__back">
            <svg
              width="11"
              height="8"
              viewBox="0 0 11 8"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM11 3.5H1V4.5H11V3.5Z"></path>
            </svg>
          </div>
          <div className="basket__title">
            {basketAlbumsId.length !== 0 ? "Корзина" : "Ваша корзина пуста"}
          </div>
        </div>
        {basketAlbumsId.length == 0 && (
          <div className="basket__features">
            <button
              onClick={() => navigate("/constructor")}
              className="next__step_btn"
            >
              Создать фотокнигу
            </button>
            <a
              href="http://alexbooks.bannikon.fvds.ru"
              target="_self"
              className="next__step_btn"
            >
              Вернуться на главную
            </a>
          </div>
        )}
        <div className="basket__books">
          {basketAlbums &&
            basketAlbums.map((basketAlbum, idx) => (
              <div key={idx} className="basket__books_item">
                <div className="basket__books_num">{idx + 1}</div>
                <div className="basket__books_img">
                  <img
                    src={String(BASE_URL + basketAlbum.images.cover_preview)}
                    alt="basket_img"
                  />
                </div>
                <div className="basket__books_info">
                  <div className="basket__books_name">
                    {basketAlbum.data.mainData.albumName}
                  </div>
                  <div className="basket__books_information">
                    <div className="basket__books_information_item basket__books_information_size">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="14"
                        fill="none"
                        viewBox="0 0 13 14"
                      >
                        <path
                          fill="#9DAAC7"
                          d="M12.958.374a.542.542 0 00-.293-.292L12.458.04H7.042a.543.543 0 000 1.083h4.109L1.083 11.191V7.08a.542.542 0 00-1.083 0v5.42l.041.204.113.169.004.006.004.005.172.113.208.042h5.416a.543.543 0 000-1.084H1.85L11.917 1.89v4.11a.543.543 0 001.083 0V.58l-.042-.207z"
                        ></path>
                      </svg>
                      <span>
                        {
                          size.types[basketAlbum.data.mainData.selectedType]
                            .sizes[
                            size.types[basketAlbum.data.mainData.selectedType]
                              .selectedSize
                          ].size
                        }
                      </span>
                    </div>
                    <div className="basket__books_information_item basket__books_information_type">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="13"
                        fill="none"
                        viewBox="0 0 12 13"
                      >
                        <path
                          fill="#9DAAC7"
                          d="M10.969 13h-9.48A1.49 1.49 0 010 11.51V1.49a.406.406 0 01.813 0v10.02c0 .374.303.678.677.678h9.073V2.572a.406.406 0 01.812 0v10.02a.406.406 0 01-.406.407z"
                        ></path>
                        <path
                          fill="#9DAAC7"
                          d="M10.969 2.98h-9.48a1.49 1.49 0 010-2.98h8.397c.224 0 .406.182.406.406v1.76h.677a.406.406 0 010 .813zM1.489.812a.678.678 0 000 1.354h7.99V.813H1.49z"
                        ></path>
                      </svg>
                      <span>{basketAlbum.data.coverData.coverSelectedType === 0 ? "Эко-кожа" : basketAlbum.data.coverData.coverSelectedType === 1 ? "Ткань" : "Фотообложка"}</span>
                    </div>
                    <div className="basket__books_information_item basket__books_information_pages">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        fill="none"
                        viewBox="0 0 19 19"
                      >
                        <path
                          stroke="#9DAAC7"
                          d="M9.976 3.845L9.5 2.382l-.476 1.463-1.347 4.146H1.78l1.245.905 3.527 2.562-1.347 4.146-.476 1.464 1.245-.905L9.5 13.601l3.527 2.562 1.245.905-.476-1.464-1.347-4.146 3.527-2.562 1.245-.905h-5.898L9.976 3.845z"
                        ></path>
                      </svg>
                      <span>
                        {basketAlbum.data.pagesData.pages.length} Разворотов
                      </span>
                    </div>
                  </div>
                </div>
                <div className="basket__books_rightside">
                  <div className="basket__books_counter">
                    <div
                      className="basket__books_counter_decrement"
                      onClick={() =>
                        handleCrementAlbumCount(
                          "-",
                          basketAlbum.data.mainData.albumId
                        )
                      }
                    >
                      -
                    </div>
                    <div className="basket__books_counter_count">
                      {basketAlbum.data.mainData.countOfAlbums}
                    </div>
                    <div
                      className="basket__books_counter_increment"
                      onClick={() =>
                        handleCrementAlbumCount(
                          "+",
                          basketAlbum.data.mainData.albumId
                        )
                      }
                    >
                      +
                    </div>
                  </div>
                  <div className="basket__books_price">
                    <span>
                      {basketAlbum.data.mainData.countOfAlbums *
                        basketAlbum.data.mainData.price}{" "}
                      р.
                    </span>
                  </div>
                  <div className="basket__books_changer">
                    <div
                      onClick={() =>
                        navigate(
                          `/constructor/album/${basketAlbum.data.mainData.albumId}`
                        )
                      }
                      className="basket__books_changer_edit_item basket__books_changer_edit"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        enableBackground="new 0 0 490.584 490.584"
                        version="1.1"
                        viewBox="0 0 490.584 490.584"
                        xmlSpace="preserve"
                      >
                        <path d="M100.911 419.404l123.8-51c3.1-2.1 6.2-4.2 8.3-6.2l203.9-248.6c6.2-9.4 5.2-21.8-3.1-29.1l-96.8-80.1c-8-5.9-20.3-6.8-28.1 3.1l-204.9 248.5c-2.1 3.1-3.1 6.2-4.2 9.4l-26 132.1c-1.3 22.6 16.8 26.5 27.1 21.9zm225.7-370.4l65.5 54.1-177.7 217.1-64.9-53.7 177.1-217.5zm-193.2 257.9l44.4 36.8-57.2 23.6 12.8-60.4z"></path>
                        <path d="M469.111 448.504h-349.5s-72.5 3.4-75.2-15.2c0-1-1.8-5.6 7.6-17 7.3-9.4 6.2-21.8-2.1-29.1-9.4-7.3-21.8-6.2-29.1 2.1-19.8 23.9-25 44.7-15.6 63.5 25.5 47.5 111.3 36.3 115.4 37.3h348.5c11.4 0 20.8-9.4 20.8-20.8.1-11.5-9.3-20.8-20.8-20.8z"></path>
                      </svg>
                    </div>
                    <div
                      onClick={() =>
                        handleDeleteAlbumFromBasket(
                          basketAlbum.data.mainData.albumId
                        )
                      }
                      className="basket__books_changer_edit_item basket__books_changer_delete"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        enableBackground="new 0 0 297 297"
                        version="1.1"
                        viewBox="0 0 297 297"
                        xmlSpace="preserve"
                      >
                        <path d="M216.979 150.445c-24.601 0-44.615 20.014-44.615 44.615s20.014 44.615 44.615 44.615c24.6 0 44.615-20.014 44.615-44.615s-20.014-44.615-44.615-44.615zm21.889 56.965a6.747 6.747 0 010 9.539 6.729 6.729 0 01-4.769 1.975 6.729 6.729 0 01-4.769-1.975l-12.35-12.35-12.35 12.35c-1.317 1.316-3.044 1.975-4.769 1.975s-3.452-.659-4.769-1.975a6.747 6.747 0 010-9.539l12.35-12.35-12.352-12.35a6.747 6.747 0 010-9.539 6.749 6.749 0 019.539 0l12.35 12.35 12.35-12.35a6.749 6.749 0 019.539 0 6.747 6.747 0 010 9.539l-12.35 12.35 12.35 12.35zM227.354 59.832c-.001-10.822-8.806-19.626-19.628-19.626H55.033c-10.822 0-19.626 8.804-19.626 19.626v18.244h191.948V59.832zM216.979 136.957c1.233 0 2.454.052 3.668.128l2.716-45.521h-47.368v62.351c10.515-10.473 25.004-16.958 40.984-16.958zM103.885 13.488h54.99v13.229h13.488V6.744A6.743 6.743 0 00165.619 0H97.14a6.743 6.743 0 00-6.744 6.744v19.973h13.488V13.488z"></path>
                        <path d="M175.994 273.748c0 5.393-4.372 9.764-9.764 9.764a9.763 9.763 0 01-9.764-9.764V91.564h-50.173v182.184c0 5.393-4.372 9.764-9.764 9.764a9.763 9.763 0 01-9.764-9.764V91.564H39.398l11.881 199.094A6.744 6.744 0 0058.01 297h146.739a6.744 6.744 0 006.732-6.342l2.243-37.591c-14.686-.815-27.934-7.104-37.73-16.862v37.543z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {basketAlbumsId.length !== 0 && (
        <div className="basket__submit">
          <div className="basket__submit_wrapper">
            <div className="basket__submit_promo">
              <span>У Вас есть промокод?</span>
              <div className="basket__submit_promo_row">
                <input placeholder="Введите промокод" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="none"
                  viewBox="0 0 35 35"
                >
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#F58F6A"></circle>
                  <circle
                    cx="17.5"
                    cy="17.5"
                    r="17.5"
                    fill="url(#paint0_linear)"
                  ></circle>
                  <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 18h14M18 11l7 7-7 7"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="0"
                      x2="35"
                      y1="-24.063"
                      y2="35"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F7941D"></stop>
                      <stop offset="1" stopColor="#F3886E"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="basket__submit_fin">
              итого &nbsp;<span>{getFullPrice()} руб.</span>
              <a
                onClick={() => navigate("/checkout")}
                className="basken__submit_btn"
              >
                Заказать
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
