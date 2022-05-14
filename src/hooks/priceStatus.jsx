
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {handleChangePrice} from "../redux/reducers/constructor/constructorSlice";
export function usePriceStatus() {
  const { size, cover, pages,header_content } = useSelector((state) => state.constructorSlice);
    const dispatch = useDispatch();
  function sizeChecker() {
    return size.types[size.selectedType].sizes[
      size.types[size.selectedType].selectedSize
    ].price;
  }
  function coverChecker() {
    const selectedSize =
      size.types[size.selectedType].sizes[
        size.types[size.selectedType].selectedSize
      ].size;
    const selectedCoverType = cover.types[cover.selectedType].transl;
    switch (selectedCoverType) {
      case "Эко-кожа":
      case "Ткань":
        switch (selectedSize) {
          case "15x15":
            return 2790;
          case "15x22,5":
            return 3290;
          case "20x20":
            return 4490;
          case "20x30":
            return 6790;
          case "25x25":
            return 6890;
          case "30x30":
            return 8490;
            case "30x40":
                return 11490;

          default:
            break;
        }
        break;
        case "Фотообложка":
            switch (selectedSize) {
                case "15x15":
                  return 2190;
                case "15x22,5":
                  return 2490;
                case "20x20":
                  return 3590;
                case "20x30":
                  return 5290;
                case "25x25":
                  return 5490;
                case "30x30":
                  return 6990;
                  case "30x40":
                      return 8890;
      
                default:
                  break;
              }
      default:
        break;
    }
  }

  function pagesChecker(){
    let lengthPages = pages.papers.pages.length;
    let nonPriceLength=10;
      if(lengthPages < 11){
          return 0
      }
      else{
        const selectedSize =
        size.types[size.selectedType].sizes[
          size.types[size.selectedType].selectedSize
        ].size;
        let multiplier=0;
        switch (selectedSize) {
            case "15x15":
                multiplier=160;
              break;
              
            case "15x22,5":
              multiplier=180;
              break;
            case "20x20":
              multiplier=230
              break;
            case "20x30":
              multiplier=260
              break;
            case "25x25":
              multiplier=320
              break;
            case "30x30":
              multiplier=360
              break;
              case "30x40":
                  multiplier=420
                  break;
  
            default:
              break;
          }
          let priceableLength = lengthPages-nonPriceLength;
          return priceableLength*multiplier;
      }
    

  }

  const updatePrice = () => {
      let showSumm=0;
      if(header_content.step === 1){
        showSumm= sizeChecker();
        
      }
      else {
          let coverSumm = coverChecker();
          let pagesSumm = pagesChecker();
          showSumm = coverSumm + pagesSumm;
      }
      dispatch(handleChangePrice(showSumm));
  };
  React.useEffect(() => {
    updatePrice();
  }, [
    size.selectedType,
    size.types[0].selectedSize,
    size.types[1].selectedSize,
    cover.selectedType,
    pages.papers.pages.length,
    header_content.step
  ]);
}
