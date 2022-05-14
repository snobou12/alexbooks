
import React from "react";
import {
  Size,
  SizePreview,
  Cover,
  CoverPreview,
  Pages,
  PagesPreview,
} from "./steps";
import { useDispatch, useSelector } from "react-redux";
import { getBasketAlbumsId } from "../../redux/reducers/basket/actionBasketCreator";
import { toast } from "react-toastify";

import {
  handleIncrementStep,
  handleDecrementStep,
  handleChangeAlbumName,
  handleSetTemplatesValidsPage,
  setAlbumId,
} from "../../redux/reducers/constructor/constructorSlice";
import "./Constructor.scss";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {usePriceStatus} from "../../hooks/priceStatus";
import { getAlbumById } from "../../redux/reducers/constructor/actionConstructorCreator";
import { removeBasketData } from "../../redux/reducers/basket/basketSlice";
import { BASE_URL } from "../../static/values";
const Constructor = () => {
  const priceStatus = usePriceStatus();
  const dispatch = useDispatch();
  const params = useParams();
  //Пикчи в стейт
  const [orderLoading, setOrderLoading] = React.useState(false);
  const navigate = useNavigate();
  const { size, header_content, cover, pages, pagesValid } = useSelector(
    (state) => state.constructorSlice
  );
  //ref stage preview
  let stageRef = React.useRef(null);
  //Uploads инфа
  
  //изменить имя альбома
  const handleChangeName = (value) => {
    dispatch(handleChangeAlbumName(value));
  };
  function getStep(step) {
    switch (step) {
      case 1:
        return <Size selectedType={size.selectedType} types={size.types} />;
      case 2:
        return (
          <Cover
            albumId={header_content.albumId}
            selectedType={cover.selectedType}
            types={cover.types}
          />
        );
      case 3:
        return <Pages selectedSize={size.selectedType} pages={pages} />;
      case 4:

      default:
        break;
    }
  }
  function getPreview(step) {
    switch (step) {
      case 1:
        return (
          <SizePreview
            albumName={header_content.albumName}
            handleChangeName={handleChangeName}
            typeId={size.selectedType}
            sizeId={
              size.types[size.selectedType].sizes[
                size.types[size.selectedType].selectedSize
              ].id
            }
            scale={size.scale}
          />
        );
      case 2:
        return <CoverPreview stageRef={stageRef} />;
      case 3:
        return (
          <PagesPreview
          handleSaveAlbum={handleSaveAlbum}
            pagesValid={pagesValid}
            albumId={header_content.albumId}
            justPreview={false}
            pages={pages}
            size={size}
          />
        );
      default:
        break;
    }
  }

  function getUpperTitel(step) {
    switch (step) {
      case 1:
        return "Выберите размер и название книги";
      case 2:
        return "Выберите обложку";
      case 3:
        return "Создание книги";
      default:
        break;
    }
  }
  function emptyObjectChecker(obj) {
    return Object.keys(obj).length == 0;
  }
  function removeDuplicates(arr) {
    const result = [];
    const duplicatesIndices = [];

    arr.forEach((current, index) => {
      if (duplicatesIndices.includes(index)) return;

      result.push(current);

      for (
        let comparisonIndex = index + 1;
        comparisonIndex < arr.length;
        comparisonIndex++
      ) {
        const comparison = arr[comparisonIndex];
        const currentKeys = Object.keys(current);
        const comparisonKeys = Object.keys(comparison);

        if (currentKeys.length !== comparisonKeys.length) continue;

        const currentKeysString = currentKeys.sort().join("").toLowerCase();
        const comparisonKeysString = comparisonKeys
          .sort()
          .join("")
          .toLowerCase();
        if (currentKeysString !== comparisonKeysString) continue;

        let valuesEqual = true;
        for (let i = 0; i < currentKeys.length; i++) {
          const key = currentKeys[i];
          if (current[key] !== comparison[key]) {
            valuesEqual = false;
            break;
          }
        }
        if (valuesEqual) duplicatesIndices.push(comparisonIndex);
      }
    });
    return result;
  }

  function uploadImageToServer(keyImg, file) {
    let formData = new FormData();
    if (keyImg === "cover_preview") {
      formData.append("cover_preview", file);
    }
    axios({
      method: "post",
      url: `${BASE_URL}/designer/?controller=Album&method=image&album=${header_content.albumId}`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        if (res.status === 200) {
          dispatch(handleIncrementStep());
        }
      })
      .catch((e) => {
        toast.error("Что-то пошло не так");
      });
  }

  async function crementStep(str) {
    switch (str) {
      case "-":
        dispatch(handleDecrementStep());
        break;
      case "+":
        {
          if (header_content.step === 1) {
            if (header_content.albumName.length === 0) {
              toast.error("Введите название альбома!");
            } else {
              dispatch(handleIncrementStep());
            }
          } else if (header_content.step === 2) {
            let stageURI = stageRef.current.getStage().toDataURL();
            const previewImage = await fetchImageFromServer(
              stageURI,
              "cover_preview"
            );
            uploadImageToServer("cover_preview", previewImage);
          } else if (header_content.step === 3) {
            let allPages = [...pages.papers.pages];

            let emptyTemplatesChecker = false;
            let pagesTemplateValids = [];
            for (let i = 0; i < allPages.length; i++) {
              if (allPages[i].selectedSide === "lrside") {
                if (
                  emptyObjectChecker(allPages[i].templates[0].template) ||
                  emptyObjectChecker(allPages[i].templates[1].template)
                ) {
                  emptyTemplatesChecker = true;
                  pagesTemplateValids.push({ pageId: i, isValid: false });
                } else {
                  pagesTemplateValids.push({ pageId: i, isValid: true });
                }
              }
              //cside
              else {
                if (emptyObjectChecker(allPages[i].templates[2].template)) {
                  emptyTemplatesChecker = true;
                  pagesTemplateValids.push({ pageId: i, isValid: false });
                } else {
                  pagesTemplateValids.push({ pageId: i, isValid: true });
                }
              }
            }

            let emptyTemplateImagesChecker = false;
            let pagesTemplateImagesValids = [];
            if (!emptyTemplatesChecker) {
              for (let i = 0; i < allPages.length; i++) {
                if (allPages[i].selectedSide === "lrside") {
                  for (
                    let j = 0;
                    j < allPages[i].templates[0].template.elements.length;
                    j++
                  ) {
                    if (!allPages[i].templates[0].template.elements[j].image) {
                      pagesTemplateImagesValids.push({
                        pageId: i,
                        isValid: false,
                      });
                      emptyTemplateImagesChecker = true;
                      break;
                    }
                    pagesTemplateImagesValids.push({
                      pageId: i,
                      isValid: true,
                    });
                  }

                  for (
                    let j = 0;
                    j < allPages[i].templates[1].template.elements.length;
                    j++
                  ) {
                    if (!allPages[i].templates[1].template.elements[j].image) {
                      pagesTemplateImagesValids.push({
                        pageId: i,
                        isValid: false,
                      });
                      emptyTemplateImagesChecker = true;
                      break;
                    }
                    pagesTemplateImagesValids.push({
                      pageId: i,
                      isValid: true,
                    });
                  }
                }
                //cside
                else {
                  for (
                    let j = 0;
                    j < allPages[i].templates[2].template.elements.length;
                    j++
                  ) {
                    if (!allPages[i].templates[2].template.elements[j].image) {
                      pagesTemplateImagesValids.push({
                        pageId: i,
                        isValid: false,
                      });
                      emptyTemplateImagesChecker = true;
                      break;
                    }
                    pagesTemplateImagesValids.push({
                      pageId: i,
                      isValid: true,
                    });
                  }
                }
              }
            }

            let filteredTemplatesValid = pagesTemplateImagesValids.filter(
              (page) => page.isValid === false
            );

            let templatesImagesValidNoDupl = removeDuplicates(
              filteredTemplatesValid
            );
            let pagesTemplateImagesValidsNoHavent = [];
            for (let i = 0; i < allPages.length; i++) {
              if (!filteredTemplatesValid.some((vld) => vld.pageId === i)) {
                pagesTemplateImagesValidsNoHavent.push({
                  pageId: allPages[i].id,
                  isValid: true,
                });
              }
            }
            let pagesTemplateImagesValidsResult = [
              ...templatesImagesValidNoDupl,
              ...pagesTemplateImagesValidsNoHavent,
            ];
            pagesTemplateImagesValidsResult.sort(function (a, b) {
              if (a.pageId > b.pageId) {
                return 1;
              } else if (b.pageId > a.pageId) {
                return -1;
              } else {
                return 0;
              }
            });

            if (emptyTemplatesChecker) {
              dispatch(handleSetTemplatesValidsPage(pagesTemplateValids));
            } else {
              let compareValids = [];
              for (let i = 0; i < allPages.length; i++) {
                if (
                  !pagesTemplateValids[i].isValid ||
                  !pagesTemplateImagesValidsResult[i].isValid
                ) {
                  compareValids.push({ pageId: i, isValid: false });
                } else {
                  compareValids.push({ pageId: i, isValid: true });
                }
              }

              dispatch(
                handleSetTemplatesValidsPage(pagesTemplateImagesValidsResult)
              );
            }

            if (emptyTemplatesChecker) {
              toast.error("Заполните все страницы!");
            } else if (emptyTemplateImagesChecker) {
              toast.error("Заполните все шаблоны изображениями!");
            } else {
              setOrderLoading(true);
              await handleSaveAlbum(true);
              let formData = new FormData();
              let basketAlbums = [];
              let prevBasketData = await dispatch(getBasketAlbumsId());
              let prevBasket = prevBasketData.payload;
              if (
                prevBasket === "No access" ||
                prevBasket === "Data not found"
              ) {
                axios({
                  method: "post",
                  url: `${BASE_URL}/designer/?controller=Shop&method=new`,
                  headers: { "Content-Type": "application/json" },
                });
                prevBasket = [];
              }
              if(Object.keys(prevBasket).length === 0){
                prevBasket=[];
              }
              if (prevBasket.length === 0) {
                basketAlbums.push(header_content.albumId);
              } else {
                let newPrevAlbums = prevBasket.filter(
                  (id) => id !== header_content.albumId
                );
                basketAlbums = [...newPrevAlbums, header_content.albumId];
              }
              let jsonData = JSON.stringify(basketAlbums);
              formData.append("request", jsonData);
              axios({
                method: "post",
                url: `${BASE_URL}/designer/?controller=Shop&method=save`,
                data: formData,
                headers: { "Content-Type": "application/json" },
              }).then((res) => {
                if (res.status === 200) {
                  dispatch(removeBasketData());
                  navigate("/basket");
                  setOrderLoading(false);
                } else {
                  toast.error("Что-то пошло не так");
                  setOrderLoading(false);
                }
              });
            }
          } else {
            dispatch(handleIncrementStep());
          }
        }
        break;
      default:
        break;
    }
  }

  async function fetchImageFromServer(imgUrl, name) {
    return fetch(imgUrl)
      .then((res) => res.blob())
      .then((blob) => {
        let type = blob.type.split("/")[1];
        const file = new File([blob], `${name}.${type}`, {
          type: blob.type,
          lastModified: new Date(),
        });
        return file;
      })
      .catch((e) => console.log(e));
  }
  const handleSaveAlbum = async (ordered) => {
    let formData = new FormData();
    //MAIN DATA
    let headerContentASizeData = { ...header_content, ...size };
    let selectedQuadraticSize = headerContentASizeData.types[0].selectedSize;
    let selectedLandscapeSize = headerContentASizeData.types[1].selectedSize;
    delete headerContentASizeData.types;
    headerContentASizeData.selectedQuadraticSize = selectedQuadraticSize;
    headerContentASizeData.selectedLandscapeSize = selectedLandscapeSize;

    //COVER
    let coverSelectedType = cover.selectedType;
    let coverData = { ...cover };
    //Эко кожа
    let ecoLeatherData = { ...coverData.types[0] };
    //цвет обложки
    let ecoLeatherSelectedColor = ecoLeatherData.selectedColor;
    //Выбранное оформление
    let ecoLeatherSelectedDecor = ecoLeatherData.selectedDecor;
    //цвет тиснения
    let ecoLeatherLetteringColor =
      ecoLeatherData.features.decor[0].options[0].selectedColor;
    //узор тиснения
    let ecoLeatherLetteringDesign =
      ecoLeatherData.features.decor[0].options[1].selectedDesign;
    //форма фотовставки
    let ecoLeatherPhotoBidSize = ecoLeatherData.features.decor[1].selectedSize;

    //Цвет пластины
    let ecoLeatherMetalPlateColor =
      ecoLeatherData.features.decor[2].options[0].selectedColor;
    //Размер пластины
    let ecoLeatherMetalPlateSize =
      ecoLeatherData.features.decor[2].options[1].selectedSize;
    //выбранное оформление пластины
    let ecoLeatherMetalPlateDecoration =
      ecoLeatherData.features.decor[2].options[2].selectedDecoration;
    //Узор гравировки пластины
    let ecoLeatherMetalPlateEngrave =
      ecoLeatherData.features.decor[2].options[2].decors[0].selectedEngrave;
    //Текст пластины
    let ecoLeatherMetalPlateText =
      ecoLeatherData.features.decor[2].options[2].decors[1].typedText;
    //Шрифт текста пластины
    let ecoLeatherMetalPlateTextFont =
      ecoLeatherData.features.decor[2].options[2].decors[1].selectedFont;
    //Размер текста пластины
    let ecoLeatherMetalPlateTextSize =
      ecoLeatherData.features.decor[2].options[2].decors[1].selectedSize;

    //ТКАНЬ
    let textileData = { ...coverData.types[1] };
    //цвет обложки
    let textileSelectedColor = textileData.selectedColor;
    //Выбранное оформление
    let textileSelectedDecor = textileData.selectedDecor;
    //цвет тиснения
    let textileLetteringColor =
      textileData.features.decor[0].options[0].selectedColor;
    //узор тиснения
    let textileLetteringDesign =
      textileData.features.decor[0].options[1].selectedDesign;
    //форма фотовставки
    let textilePhotoBidSize = textileData.features.decor[1].selectedSize;
    //Добавить в formData картинку для textilePhotoBid

    //Цвет пластины
    let textileMetalPlateColor =
      textileData.features.decor[2].options[0].selectedColor;
    //Размер пластины
    let textileMetalPlateSize =
      textileData.features.decor[2].options[1].selectedSize;
    //выбранное оформление пластины
    let textileMetalPlateDecoration =
      textileData.features.decor[2].options[2].selectedDecoration;
    //Узор гравировки пластины
    let textileMetalPlateEngrave =
      textileData.features.decor[2].options[2].decors[0].selectedEngrave;
    //Текст пластины
    let textileMetalPlateText =
      textileData.features.decor[2].options[2].decors[1].typedText;
    //Шрифт текста пластины
    let textileMetalPlateTextFont =
      textileData.features.decor[2].options[2].decors[1].selectedFont;
    //Размер текста пластины
    let textileMetalPlateTextSize =
      textileData.features.decor[2].options[2].decors[1].selectedSize;

    //Фотообложка
    let photoCoverData = { ...coverData.types[2] };

    let photoCoverColor = photoCoverData.selectedColor;
    let photoCoverSelectedType = photoCoverData.selectedType;
    let fullCoverData = {
      coverSelectedType,

      ecoLeather: {
        ecoLeatherSelectedColor,
        ecoLeatherSelectedDecor,
        ecoLeatherLetteringColor,
        ecoLeatherLetteringDesign,
        ecoLeatherPhotoBidSize,
        ecoLeatherMetalPlateColor,
        ecoLeatherMetalPlateSize,
        ecoLeatherMetalPlateDecoration,
        ecoLeatherMetalPlateEngrave,
        ecoLeatherMetalPlateText,
        ecoLeatherMetalPlateTextFont,
        ecoLeatherMetalPlateTextSize,
      },
      textile: {
        textileSelectedColor,
        textileSelectedDecor,
        textileLetteringColor,
        textileLetteringDesign,
        textilePhotoBidSize,
        textileMetalPlateColor,
        textileMetalPlateSize,
        textileMetalPlateDecoration,
        textileMetalPlateEngrave,
        textileMetalPlateText,
        textileMetalPlateTextFont,
        textileMetalPlateTextSize,
      },
      photoCover: {
        photoCoverColor,
        photoCoverSelectedType,
      },
    };
    let fullPagesData = { ...pages.papers, selectedType: pages.selectedType };
    let fullData = {
      coverData: fullCoverData,
      mainData: headerContentASizeData,
      pagesData: fullPagesData,
    };
    let jsonData = JSON.stringify(fullData);
    formData.append("request", jsonData);
    axios({
      method: "post",
      url: `${BASE_URL}/designer/?controller=Album&method=save&album=${header_content.albumId}`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((res) => {
      if (!ordered) {
        if (res.status === 200) {
          toast.success("Альбом успешно сохранился!");
        } else {
          toast.error("Что-то пошло не так");
        }
      }
    });
  };
  React.useEffect(() => {
    dispatch(getAlbumById(params.albumId));
    dispatch(setAlbumId(params.albumId));
  }, []);

  return (
    <div className="cnsr">
      <div className="cnsr__steps">{getStep(header_content.step)}</div>
      <div className="cnsr__content">
        <div className="cnsr__content_upper">
          <div className="cnsr__leftside">
            {header_content.step !== 1 && (
              <div onClick={() => crementStep("-")} className="cnsr__prev_btn">
                <svg
                  width="11"
                  height="8"
                  viewBox="0 0 11 8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM11 3.5H1V4.5H11V3.5Z"></path>
                </svg>
              </div>
            )}

            <div className="cnsr__current_step">
              <span>0{header_content.step}</span> / 03
            </div>
            <span>{getUpperTitel(header_content.step)}</span>
          </div>
          <div className="cnsr__rightside">
            <span>
              итого:<span>{header_content.price} руб.</span>
            </span>

            <button
              disabled={orderLoading}
              onClick={() => crementStep("+")}
              className={`next__step_btn ${
                orderLoading && "next__step_btn--disabled"
              }`}
            >
              {header_content.step === 3 ? "Заказать" : "Далее"}
            </button>

            {header_content.step === 3 && (
              <div
                onClick={() => handleSaveAlbum(false)}
                className="cnsr__save_album"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                >
                  <path d="M13.818 3.864a2.12 2.12 0 00-.438-.692L10.828.62a2.123 2.123 0 00-.693-.438A2.104 2.104 0 009.333 0H.875a.844.844 0 00-.62.255.843.843 0 00-.255.62v12.25c0 .243.085.45.255.62.17.17.377.255.62.255h12.25c.243 0 .45-.085.62-.255a.844.844 0 00.255-.62V4.667c0-.243-.06-.51-.182-.803zM5.833 1.458a.28.28 0 01.087-.205.28.28 0 01.205-.086h1.75a.28.28 0 01.205.086.28.28 0 01.087.205v2.917a.28.28 0 01-.087.205.28.28 0 01-.205.087h-1.75a.28.28 0 01-.205-.087.28.28 0 01-.087-.205V1.458zM10.5 12.834h-7v-3.5h7v3.5zm2.334 0h-1.167V9.042a.844.844 0 00-.255-.62.844.844 0 00-.62-.255H3.208a.844.844 0 00-.62.255.844.844 0 00-.255.62v3.792H1.167V1.167h1.166v3.791c0 .243.085.45.255.62.17.17.377.255.62.255h5.25c.243 0 .45-.085.62-.255a.844.844 0 00.255-.62V1.167c.092 0 .21.03.356.09.146.061.25.122.31.183L12.56 4c.061.061.122.166.182.315.061.149.092.266.092.35v8.168z"></path>
                </svg>
              </div>
            )}
          </div>
        </div>
        <div className="cnsr__content__preview">
          {getPreview(header_content.step)}
        </div>
      </div>
    </div>
  );
};

export default Constructor;
