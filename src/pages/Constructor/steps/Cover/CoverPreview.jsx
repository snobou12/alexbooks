/** @format */

import React from "react";
import { Stage, Layer, Image, Text } from "react-konva";
import "./CoverPreview.scss";
import { useSelector } from "react-redux";


const CoverPreview = () => {
  const stageRef=React.useRef(null); //for export canvas to img 
  const [coverImage, setCoverImage] = React.useState(null);
  //Тиснение
  const [ecoLetteringImg, setEcoLetteringImg] = React.useState(null);
  const [textileLetteringImg, setTextileEcoLetteringImg] = React.useState(null);
  //Фотовставка
  const [ecoPhotoBidImg, setEcoPhotoBidImg] = React.useState(null);
  const [textilePhotoBidImg, setTextilePhotoBidImg] = React.useState(null);
  const [showPhotobidDefault, setShowPhotobidDefault] = React.useState(false);
  const [photobidOptions, setPhotobidOptions] = React.useState({});
  //Металлическая пластина
  const [ecoMetalplateImg, setEcoMetalplateImg] = React.useState(null);
  const [textileMetalplateImg, setTextileMetalplateImg] = React.useState(null);
  const [ecoMetalplate, setEcoMetalplate] = React.useState(null);
  const [textileMetalplate, setTextileMetalplate] = React.useState(null);
  const [ecoMetalplateText, setEcoMetalplateText] = React.useState(null);
  const [textileMetalplateText, setTextileMetalplateText] =
    React.useState(null);

  //Фотообложка
  const [photoCoverImg, setPhotoCoverImg] = React.useState(null);

  const { cover, size } = useSelector((state) => state.constructorSlice);

  //найти цвет по общему typeId и благодаря выбранному цвету(по его id) вытащить из obj title и дать src
  const getCoverColorSrc = (coverTypeId) => {
    switch (coverTypeId) {
      //Эко кожа
      case 0:
        let ecoColorObj = cover.types[0].features.colors.find(
          (color) => color.id === cover.types[0].selectedColor
        );
        return require(`../../../../assets/eco_leather_colors/${ecoColorObj.title}_${ecoColorObj.id}.png`);
      //Кожа
      case 1:
        let textileColorObj = cover.types[1].features.colors.find(
          (color) => color.id === cover.types[1].selectedColor
        );
        return require(`../../../../assets/textile_colors/${textileColorObj.title}_${textileColorObj.id}.png`);
      //Фотообложка
      //Можно сделать как выше, можно брать id вручную
      case 2:
        let colorType = cover.types[2].selectedType;
        let photoCoverColorObj =
          cover.types[2].options[colorType].colors[
            cover.types[2].selectedColor
          ];
        switch (colorType) {
          case 0:
            return require(`../../../../assets/eco_leather_colors/${photoCoverColorObj.title}_${photoCoverColorObj.id}.png`);
          case 1:
            return require(`../../../../assets/textile_colors/${photoCoverColorObj.title}_${photoCoverColorObj.id}.png`);
          default:
            break;
        }
      default:
        break;
    }
  };

  //Подгрузить обложку
  React.useEffect(() => {
    const coverImage = new window.Image();
    let src = getCoverColorSrc(cover.selectedType);
    coverImage.src = src;
    coverImage.onload = () => {
      setCoverImage(coverImage);
    };
  }, [
    cover.selectedType,
    cover.types[0].selectedColor,
    cover.types[1].selectedColor,
    cover.types[2].selectedColor,
    cover.types[2].selectedType,
  ]);

  //Подрузка картинок тиснения если выбран режим тиснения

  const getLetteringDesignSrcAPosition = (coverTypeId) => {
    switch (coverTypeId) {
      //Эко кожа
      case 0:
        setTextileEcoLetteringImg(null);
        let ecoLetteringDesignObj =
          cover.types[0].features.decor[0].options[1].designs[
            cover.types[0].features.decor[0].options[1].selectedDesign
          ];
        let ecoLetteringDesignColorObj =
          cover.types[0].features.decor[0].options[0].colors[
            cover.types[0].features.decor[0].options[0].selectedColor
          ];
        let ecoSrc = require(`../../../../assets/eco_leather_lettering_designs/${ecoLetteringDesignObj.title}_${ecoLetteringDesignColorObj.title}.png`);
        let ecoPosition = ecoLetteringDesignObj.position;
        return { src: ecoSrc, position: ecoPosition };
      //Ткань
      case 1:
        setEcoLetteringImg(null);
        let textileLetteringDesignObj =
          cover.types[1].features.decor[0].options[1].designs[
            cover.types[1].features.decor[0].options[1].selectedDesign
          ];
        let textileLetteringDesignColorObj =
          cover.types[1].features.decor[0].options[0].colors[
            cover.types[1].features.decor[0].options[0].selectedColor
          ];
        let textileSrc = require(`../../../../assets/eco_leather_lettering_designs/${textileLetteringDesignObj.title}_${textileLetteringDesignColorObj.title}.png`);
        let textilePosition = textileLetteringDesignObj.position;
        return { src: textileSrc, position: textilePosition };
      default:
        break;
    }
  };

  React.useEffect(() => {
    if (
      (cover.types[0].selectedDecor === 0 && cover.selectedType === 0) ||
      (cover.types[1].selectedDecor === 0 && cover.selectedType === 1)
    ) {
      let letteringImage = new window.Image();
      let imageData = getLetteringDesignSrcAPosition(cover.selectedType);
      letteringImage.src = imageData.src;
      letteringImage.onload = () => {
        switch (cover.selectedType) {
          case 0:
            setEcoLetteringImg({
              image: letteringImage,
              position: imageData.position,
            });
            break;
          case 1:
            setTextileEcoLetteringImg({
              image: letteringImage,
              position: imageData.position,
            });
            break;
          default:
            break;
        }
      };
    } else {
      setEcoLetteringImg(null);
      setTextileEcoLetteringImg(null);
    }
  }, [
    cover.selectedType,
    cover.types[0].selectedDecor,
    cover.types[1].selectedDecor,
    cover.types[0].features.decor[0].options[1].selectedDesign,
    cover.types[1].features.decor[0].options[1].selectedDesign,
    cover.types[0].features.decor[0].options[0].selectedColor,
    cover.types[1].features.decor[0].options[0].selectedColor,
  ]);

  //Фотовставка
  React.useEffect(() => {
    if (
      (cover.types[0].selectedDecor === 1 && cover.selectedType === 0) ||
      (cover.types[1].selectedDecor === 1 && cover.selectedType === 1)
    ) {
      switch (cover.selectedType) {
        case 0:
          switch (cover.types[0].features.decor[1].selectedSize) {
            case 0:
              setPhotobidOptions({
                w: size.selectedType === 0 ? 560 : 960,
                h: 440,
                x: 38,
                y: 80,
              });
              break;
            case 1:
              setPhotobidOptions({
                w: 300,
                h: 598,
                x: size.selectedType === 0 ? 240 : 440,
                y: 1,
              });

              break;
            case 2:
              setPhotobidOptions({
                w: 270,
                h: 270,
                x: size.selectedType === 0 ? 175 : 375,
                y: 160,
              });
              break;

            default:
              break;
          }

          break;
        case 1:
          switch (cover.types[1].features.decor[1].selectedSize) {
            case 0:
              setPhotobidOptions({
                w: size.selectedType === 0 ? 560 : 960,
                h: 440,
                x: 38,
                y: 80,
              });
              break;
            case 1:
              setPhotobidOptions({
                w: 300,
                h: 598,
                x: size.selectedType === 0 ? 240 : 440,
                y: 1,
              });

              break;
            case 2:
              setPhotobidOptions({
                w: 270,
                h: 270,
                x: size.selectedType === 0 ? 175 : 375,
                y: 160,
              });
              break;

            default:
              break;
          }
        default:
          break;
      }
      if (
        (cover.selectedType === 0 &&
          cover.types[0].features.decor[1].blobImage) ||
        (cover.selectedType === 1 && cover.types[1].features.decor[1].blobImage)
      ) {
        let photobidImage = new window.Image();
        switch (cover.selectedType) {
          case 0:
            photobidImage.src = cover.types[0].features.decor[1].blobImage;
            photobidImage.onload = () => {
              setEcoPhotoBidImg(photobidImage);
            };
            break;
          case 1:
            photobidImage.src = cover.types[1].features.decor[1].blobImage;
            photobidImage.onload = () => {
              setTextilePhotoBidImg(photobidImage);
            };
            break;
          default:
            break;
        }
        setShowPhotobidDefault(false);
      } else {
        setShowPhotobidDefault(true);
      }
    } else {
      setShowPhotobidDefault(false);
      setEcoPhotoBidImg(null);
      setTextilePhotoBidImg(null);
    }
  }, [
    cover.selectedType,
    cover.types[0].selectedDecor,
    cover.types[1].selectedDecor,
    cover.types[0].features.decor[1].blobImage,
    cover.types[1].features.decor[1].blobImage,
    cover.types[0].features.decor[1].selectedSize,
    cover.types[1].features.decor[1].selectedSize,
  ]);

  function getPhotobidDefault() {
    switch (cover.selectedType) {
      case 0:
        switch (cover.types[0].features.decor[1].selectedSize) {
          case 0:
            return (
              <Image
                width={size.selectedType === 0 ? 560 : 960}
                height={440}
                x={ 38 }
                y={80}
                fill="#FFFFFF"
                dash={[5, 5]}
                strokeWidth={0.5}
                stroke={"dae4f2"}
              />
            );
          case 1:
            return (
              <Image
                fill="#FFFFFF"
                width={300}
                height={598}
                x={size.selectedType === 0 ? 240 :440}
                y={1}
                dash={[5, 5]}
                strokeWidth={0.5}
                stroke={"dae4f2"}
              />
            );
          case 2:
            return (
              <Image
                fill="#FFFFFF"
                width={270}
                height={270}
                x={size.selectedType === 0 ? 175 : 375}
                y={160}
                dash={[5, 5]}
                strokeWidth={0.5}
                stroke={"dae4f2"}
              />
            );
          default:
            break;
        }
        break;
      case 1:
        switch (cover.types[1].features.decor[1].selectedSize) {
          case 0:
            return (
              <Image
              width={size.selectedType === 0 ? 560 : 960}
              height={440}
              x={ 38 }
              y={80}
              fill="#FFFFFF"
              dash={[5, 5]}
              strokeWidth={0.5}
              stroke={"dae4f2"}
              />
            );
          case 1:
            return (
              <Image
              fill="#FFFFFF"
              width={300}
              height={598}
              x={size.selectedType === 0 ? 240 :440}
              y={1}
              dash={[5, 5]}
              strokeWidth={0.5}
              stroke={"dae4f2"}
              />
            );
          case 2:
            return (
              <Image
              fill="#FFFFFF"
              width={270}
              height={270}
              x={size.selectedType === 0 ? 175 : 375}
              y={160}
              dash={[5, 5]}
              strokeWidth={0.5}
              stroke={"dae4f2"}
              />
            );
          default:
            break;
        }
      default:
        break;
    }
  }

  //Металлическая пластина(эмблема)
  React.useEffect(() => {
    if (
      (cover.types[0].selectedDecor === 2 && cover.selectedType === 0) ||
      (cover.types[1].selectedDecor === 2 && cover.selectedType === 1)
    ) {
      let metalplate = new window.Image();
      switch (cover.selectedType) {
        case 0:
          let ecoMetalplateColorObj =
            cover.types[0].features.decor[2].options[0].colors[
              cover.types[0].features.decor[2].options[0].selectedColor
            ];
          let ecoMetalPlateSelectedSizeObj =
            cover.types[0].features.decor[2].options[1].sizes[
              cover.types[0].features.decor[2].options[1].selectedSize
            ];

          let ecoMetalplatePosition = {};
          switch (ecoMetalPlateSelectedSizeObj.id) {
            case 0:
              ecoMetalplatePosition = {
                x: size.selectedType === 0 ? 200 : 400,
                y: 125,
                w: 200,
                h: 200,
              };
              break;
            case 1:
              ecoMetalplatePosition = {
                x: size.selectedType === 0 ? 270 : 470,
                y: 420,
                w: 270,
                h: 120,
              };
              break;
            default:
              break;
          }

          metalplate.src = require(`../../../../assets/eco_metalplate_colors/${ecoMetalplateColorObj.title}.png`);
          metalplate.onload = () => {
            setEcoMetalplate({ metalplate, position: ecoMetalplatePosition });
          };
          break;
        case 1:
          let textileMetalplateColorObj =
            cover.types[1].features.decor[2].options[0].colors[
              cover.types[1].features.decor[2].options[0].selectedColor
            ];
          let textileMetalPlateSelectedSizeObj =
            cover.types[1].features.decor[2].options[1].sizes[
              cover.types[1].features.decor[2].options[1].selectedSize
            ];

          let textileMetalplatePosition = {};
          switch (textileMetalPlateSelectedSizeObj.id) {
            case 0:
              textileMetalplatePosition = {
                x: size.selectedType === 0 ? 200: 400,
                y: 125,
                w: 200,
                h: 200,
              };
              break;
            case 1:
              textileMetalplatePosition = {
                x: size.selectedType === 0 ? 270: 470,
                y: 420,
                w: 270,
                h: 120,
              };
              break;
            default:
              break;
          }

          metalplate.src = require(`../../../../assets/eco_metalplate_colors/${textileMetalplateColorObj.title}.png`);

          metalplate.onload = () => {
            setTextileMetalplate({
              metalplate,
              position: textileMetalplatePosition,
            });
          };
          break;
        default:
          break;
      }
    } else {
      setEcoMetalplate(null);
      setTextileMetalplate(null);
    }
  }, [
    cover.types[0].features.decor[2].options[0].selectedColor,
    cover.types[1].features.decor[2].options[0].selectedColor,
    cover.types[0].features.decor[2].options[1].selectedSize,
    cover.types[1].features.decor[2].options[1].selectedSize,
    cover.types[0].selectedDecor,
    cover.types[1].selectedDecor,
    cover.selectedType,
  ]);

  //Металлическая пластина(гравировка)

  React.useEffect(() => {
    if (
      (cover.types[0].selectedDecor === 2 &&
        cover.selectedType === 0 &&
        cover.types[0].features.decor[2].options[2].selectedDecoration === 0) ||
      (cover.types[1].selectedDecor === 2 &&
        cover.selectedType === 1 &&
        cover.types[1].features.decor[2].options[2].selectedDecoration === 0)
    ) {
      let metalPlateImage = new window.Image();
      //Размер
      switch (cover.selectedType) {
        case 0:
          let ecoMetalPlateSelectedImgObj =
            cover.types[0].features.decor[2].options[2].decors[0].engraves[
              cover.types[0].features.decor[2].options[2].decors[0]
                .selectedEngrave
            ];

          let ecoMetalPlateSelectedSizeObj =
            cover.types[0].features.decor[2].options[1].sizes[
              cover.types[0].features.decor[2].options[1].selectedSize
            ];
          let ecoMetalplateImagePosition = {};
          switch (ecoMetalPlateSelectedSizeObj.id) {
            case 0:
              ecoMetalplateImagePosition = {
                x: size.selectedType === 0 ? 210 : 410,
                y: 140,
                w: 180,
                h: 180,
              };
              break;
            case 1:
              ecoMetalplateImagePosition = {
                x: size.selectedType === 0 ? 280 : 480,
                y: 425,
                w: 250,
                h: 110,
              };
              break;
            default:
              break;
          }
          metalPlateImage.src = require(`../../../../assets/eco_metalplate_decorations_${ecoMetalPlateSelectedSizeObj.title}/${ecoMetalPlateSelectedImgObj.title}.png`);
          metalPlateImage.onload = () => {
            setEcoMetalplateImg({
              metalPlateImage,
              position: ecoMetalplateImagePosition,
            });
          };
          setTextileMetalplateImg(null);

          break;
        case 1:
          let textileMetalPlateSelectedImgObj =
            cover.types[1].features.decor[2].options[2].decors[0].engraves[
              cover.types[1].features.decor[2].options[2].decors[0]
                .selectedEngrave
            ];
          let textileMetalPlateSelectedSizeObj =
            cover.types[1].features.decor[2].options[1].sizes[
              cover.types[1].features.decor[2].options[1].selectedSize
            ];
          let textileMetalplateImagePosition = {};

          switch (textileMetalPlateSelectedSizeObj.id) {
            case 0:
              textileMetalplateImagePosition = {
                x: size.selectedType === 0 ? 210 : 410,
                y: 140,
                w: 180,
                h: 180,
              };
              break;
            case 1:
              textileMetalplateImagePosition = {
                x: size.selectedType === 0 ? 280 : 480,
                y: 425,
                w: 250,
                h: 110,
              };
              break;
            default:
              break;
          }
          metalPlateImage.src = require(`../../../../assets/eco_metalplate_decorations_${textileMetalPlateSelectedSizeObj.title}/${textileMetalPlateSelectedImgObj.title}.png`);
          metalPlateImage.onload = () => {
            setTextileMetalplateImg({
              metalPlateImage,
              position: textileMetalplateImagePosition,
            });
          };
          setEcoMetalplateImg(null);

          break;
        default:
          break;
      }
    } else {
      setEcoMetalplateImg(null);
      setTextileMetalplateImg(null);
    }
  }, [
    cover.types[0].selectedDecor,
    cover.types[1].selectedDecor,
    cover.selectedType,
    cover.types[0].features.decor[2].options[2].selectedDecoration,
    cover.types[1].features.decor[2].options[2].selectedDecoration,
    cover.types[0].features.decor[2].options[2].decors[0].selectedEngrave,
    cover.types[1].features.decor[2].options[2].decors[0].selectedEngrave,
    cover.types[0].features.decor[2].options[1].selectedSize,
    cover.types[1].features.decor[2].options[1].selectedSize,
  ]);

  //Металлическая пластина(текст)
  const getMetalplateText = () => {
    if (
      (cover.types[0].selectedDecor === 2 &&
        cover.selectedType === 0 &&
        cover.types[0].features.decor[2].options[2].selectedDecoration === 1) ||
      (cover.types[1].selectedDecor === 2 &&
        cover.selectedType === 1 &&
        cover.types[1].features.decor[2].options[2].selectedDecoration === 1)
    ) {
      switch (cover.selectedType) {
        case 0:
          let ecoMetalplateSizeObj =
            cover.types[0].features.decor[2].options[1].sizes[
              cover.types[0].features.decor[2].options[1].selectedSize
            ];
          let ecoMetalplateTextPosition;
          switch (ecoMetalplateSizeObj.id) {
            case 0:
              ecoMetalplateTextPosition = {
                x: size.selectedType === 0 ? 205 : 405,
                y: 125,
                w: 190,
                h: 200,
              };
              break;
            case 1:
              ecoMetalplateTextPosition = {
                x: size.selectedType === 0 ? 275 : 475,
                y: 420,
                w: 260,
                h: 120,
              };
              break;
            default:
              break;
          }
          let ecoMetalplateTextSizeObj =
            cover.types[0].features.decor[2].options[2].decors[1].sizes[
              cover.types[0].features.decor[2].options[2].decors[1].selectedSize
            ];
          let ecoMetalplateTextFontObj =
            cover.types[0].features.decor[2].options[2].decors[1].fonts[
              cover.types[0].features.decor[2].options[2].decors[1].selectedFont
            ];
          let ecoMetalplateText =
            cover.types[0].features.decor[2].options[2].decors[1].typedText;
          let ecoTextProps = {
            text: ecoMetalplateText,
            fontSize: Number(ecoMetalplateTextSizeObj.value),
            fontFamily: ecoMetalplateTextFontObj.value,
            x: ecoMetalplateTextPosition.x,
            y: ecoMetalplateTextPosition.y,
            width: ecoMetalplateTextPosition.w,
            height: ecoMetalplateTextPosition.h,
          };

          let ecoText = <Text align="center" {...ecoTextProps} />;
          setEcoMetalplateText(ecoText);
          break;
        case 1:
          let textileMetalplateSizeObj =
            cover.types[1].features.decor[2].options[1].sizes[
              cover.types[1].features.decor[2].options[1].selectedSize
            ];
          let textileMetalplateTextPosition;
          switch (textileMetalplateSizeObj.id) {
            case 0:
              textileMetalplateTextPosition = {
                x: size.selectedType === 0 ? 205 : 405,
                y: 125,
                w: 190,
                h: 200,
              };
              break;
            case 1:
              textileMetalplateTextPosition = {
                x: size.selectedType === 0 ? 275 : 475,
                y: 420,
                w: 260,
                h: 120,
              };
              break;
            default:
              break;
          }
          let textileMetalplateTextSizeObj =
            cover.types[1].features.decor[2].options[2].decors[1].sizes[
              cover.types[1].features.decor[2].options[2].decors[1].selectedSize
            ];
          let textileMetalplateTextFontObj =
            cover.types[1].features.decor[2].options[2].decors[1].fonts[
              cover.types[1].features.decor[2].options[2].decors[1].selectedFont
            ];
          let textileMetalplateText =
            cover.types[1].features.decor[2].options[2].decors[1].typedText;
          let textileTextProps = {
            text: textileMetalplateText,
            fontSize: Number(textileMetalplateTextSizeObj.value),
            fontFamily: textileMetalplateTextFontObj.value,
            x: textileMetalplateTextPosition.x,
            y: textileMetalplateTextPosition.y,
            width: textileMetalplateTextPosition.w,
            height: textileMetalplateTextPosition.h,
          };

          let textileText = <Text align="center" {...textileTextProps} />;
          setTextileMetalplateText(textileText);
          break;
        default:
          break;
      }
    } else {
      setEcoMetalplateText(null);
      setTextileMetalplateText(null);
    }
  };

  React.useEffect(() => {
    getMetalplateText();
  }, [
    cover.types[0].selectedDecor,
    cover.selectedType,
    cover.types[0].features.decor[2].options[2].selectedDecoration,
    cover.types[1].selectedDecor,
    cover.selectedType,
    cover.types[1].features.decor[2].options[2].selectedDecoration,
    cover.types[0].features.decor[2].options[2].decors[1].selectedSize,
    cover.types[1].features.decor[2].options[2].decors[1].selectedSize,
    cover.types[0].features.decor[2].options[2].decors[1].selectedFont,
    cover.types[1].features.decor[2].options[2].decors[1].selectedFont,
    cover.types[0].features.decor[2].options[2].decors[1].typedText,
    cover.types[1].features.decor[2].options[2].decors[1].typedText,
    cover.types[0].features.decor[2].options[1].selectedSize,
    cover.types[1].features.decor[2].options[1].selectedSize,
  ]);

  //Фотообложка
  React.useEffect(() => {
    if (cover.selectedType === 2 && cover.types[2].blobImage) {
      let photoCoverImage = new window.Image();
      photoCoverImage.src = cover.types[2].blobImage;
      photoCoverImage.onload = () => {
        setPhotoCoverImg(photoCoverImage);
      };
    } else {
      setPhotoCoverImg(null);
    }
  }, [cover.selectedType, cover.types[2].blobImage]);
  
  
  return (
    <div className="cover__preview">
     
      <Stage
        ref={stageRef}
        width={size.selectedType === 0 ? 600 : 1000}
        height={600}
        style={{ borderRadius: "8px", overflow: "hidden" }}
      >
        <Layer>
          {/* Обложка книги */}
          <Image
            shadowBlur={10}
            shadowOffset={{ x: 0, y: 0 }}
            shadowOpacity={1}
            shadowColor={"#dfdfdf"}
            x={0}
            y={4}
            width={35}
            height={594}
            image={coverImage}
          />
          <Image
            shadowBlur={5}
            shadowOffset={{ x: 0, y: 6 }}
            shadowOpacity={1}
            shadowColor={"#ffffff"}
            x={35}
            width={size.selectedType === 0 ? 600 : 1000}
            height={600}
            image={coverImage}
          />
          {/*Тиснение */}
          {ecoLetteringImg && (
            <Image
              x={
                ecoLetteringImg.position
                  ? size.selectedType === 0 ? ecoLetteringImg.position.x : ecoLetteringImg.position.x + 200
                  : size.selectedType === 0
                  ? 175
                  : 375
              }
              y={ecoLetteringImg.position ? ecoLetteringImg.position.y : 150}
              width={
                ecoLetteringImg.position ? ecoLetteringImg.position.w : 250
              }
              height={
                ecoLetteringImg.position ? ecoLetteringImg.position.h : 250
              }
              image={ecoLetteringImg.image}
            />
          )}
          {textileLetteringImg && (
            <Image
              x={
                textileLetteringImg.position
                ? size.selectedType === 0 ? textileLetteringImg.position.x : textileLetteringImg.position.x + 200
                : size.selectedType === 0
                ? 175
                : 375
              }
              y={
                textileLetteringImg.position
                  ? textileLetteringImg.position.y
                  : 150
              }
              width={
                textileLetteringImg.position
                  ? textileLetteringImg.position.w
                  : 250
              }
              height={
                textileLetteringImg.position
                  ? textileLetteringImg.position.h
                  : 250
              }
              image={textileLetteringImg.image}
            />
          )}
          {/*Фотовставка */}
          {showPhotobidDefault && getPhotobidDefault()}
          {cover.selectedType === 0 && ecoPhotoBidImg && (
            <Image
              x={photobidOptions.x}
              width={photobidOptions.w }
              height={photobidOptions.h}
              y={photobidOptions.y}
              image={ecoPhotoBidImg}
            />
          )}

          {cover.selectedType === 1 && textilePhotoBidImg && (
            <Image
              x={photobidOptions.x}
              width={photobidOptions.w}
              height={photobidOptions.h}
              y={photobidOptions.y}
              image={textilePhotoBidImg}
            />
          )}
          {/* Метал пластина гравировка*/}
          {/*Метал пластина  Пластина */}
          {cover.selectedType === 0 && ecoMetalplate && (
            <Image
              x={ecoMetalplate.position.x}
              y={ecoMetalplate.position.y}
              width={ecoMetalplate.position.w}
              height={ecoMetalplate.position.h}
              image={ecoMetalplate.metalplate}
            />
          )}
          {cover.selectedType === 1 && textileMetalplate && (
            <Image
              x={textileMetalplate.position.x}
              y={textileMetalplate.position.y}
              width={textileMetalplate.position.w}
              height={textileMetalplate.position.h}
              image={textileMetalplate.metalplate}
            />
          )}
          {/* Картинка */}
          {cover.selectedType === 0 && ecoMetalplateImg && (
            <Image
              x={ecoMetalplateImg.position.x}
              y={ecoMetalplateImg.position.y}
              width={ecoMetalplateImg.position.w}
              height={ecoMetalplateImg.position.h}
              image={ecoMetalplateImg.metalPlateImage}
            />
          )}
          {cover.selectedType === 1 && textileMetalplateImg && (
            <Image
              x={textileMetalplateImg.position.x}
              y={textileMetalplateImg.position.y}
              width={textileMetalplateImg.position.w}
              height={textileMetalplateImg.position.h}
              image={textileMetalplateImg.metalPlateImage}
            />
          )}
          {/*Метал пластина  Текст*/}
          {cover.selectedType === 0 && ecoMetalplateText && ecoMetalplateText}
          {cover.selectedType === 1 &&
            textileMetalplateText &&
            textileMetalplateText}
          {/*Фотообложка */}
          { cover.selectedType === 2 && (
              <Image
                x={35}
                width={size.selectedType === 0 ? 565 : 965}
                height={600}
                fill="#FFFFFF"
                dash={[5, 5]}
                strokeWidth={photoCoverImg ? 0 : 0.5}
                stroke={"dae4f2"}
              />
            )
           
           
          }
          {cover.selectedType === 2 && photoCoverImg &&
            <Image x={35} width={size.selectedType === 0 ? 565 : 965} height={600} image={photoCoverImg} />
}

        </Layer>
      </Stage>

      <div className="cover__size_title">
        {
          size.types[size.selectedType].sizes[
            size.types[size.selectedType].selectedSize
          ].size
        }
      </div>
    </div>
  );
};

export default CoverPreview;
