/** @format */

import React from "react";
import { Size, SizePreview, Cover, CoverPreview,Pages, PagesPreview, Full, FullPreview } from "./steps";
import { useDispatch, useSelector } from "react-redux";
import {
  handleIncrementStep,
  handleDecrementStep,
} from "../../redux/reducers/constructor/constructorSlice";
import "./Constructor.scss";
const Constructor = () => {
  const dispatch = useDispatch();
  const [selectedFullType,setSelectedFullType]=React.useState(0);
  const handleChangeSelectedFullType=(typeId)=>{
    setSelectedFullType(typeId);
  }
  const { size, header_content,cover,pages } = useSelector(
    (state) => state.constructorSlice
  );

  function getStep(step) {
    switch (step) {
      case 1:
        return <Size selectedType={size.selectedType} types={size.types} />;
      case 2:
        return <Cover selectedType={cover.selectedType} types={cover.types} />;
      case 3:
        return <Pages selectedSize={size.selectedType} pages={pages} />;
        case 4:
          return <Full selectedType={selectedFullType} selectType={handleChangeSelectedFullType} />;
          
      default:
        break;
    }
  }
  function getPreview(step) {
    switch (step) {
      case 1:
        return (
          <SizePreview
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
        return <CoverPreview  />;
      case 3:
        return <PagesPreview justPreview={false} pages={pages} size={size} />;
        case 4:
          return <FullPreview pages={pages} size={size} selectedType={selectedFullType}  />;
      default:
       
       break
    }
  }
  function getUpperTitel(step) {
    switch (step) {
      case 1:
        return "Выберите размер книги";
      case 2:
        return "Выберите обложку";
      case 3:
        return "Создание книги";
      case 4:
        return "Название альбома. Превью"
      default:
        return "Выберите размер книги";
    }
  }

  function crementStep(str) {
    switch (str) {
      case "-":
        dispatch(handleDecrementStep());
        break;
      case "+":
        dispatch(handleIncrementStep());
        break;
      default:
        break;
    }
  }
 
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
              <span>0{header_content.step}</span> / 05
            </div>
            <span>{getUpperTitel(header_content.step)}</span>
          </div>
          <div className="cnsr__rightside">
            <span>
              итого:<span>{header_content.price} руб.</span>
            </span>
            {header_content.step !== 5 && (
              <button
                onClick={() => crementStep("+")}
                className="next__step_btn"
              >
                Далее
              </button>
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
