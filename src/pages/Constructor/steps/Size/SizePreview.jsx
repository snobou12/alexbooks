/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleChangeScale } from "../../../../redux/reducers/constructor/constructorSlice";
import "./SizePreview.scss";
const SizePreview = ({ typeId, sizeId, scale,albumName,handleChangeName }) => {
  const dispatch = useDispatch();
  function getScale(scaleTypeId, scaleSizeId) {
    switch (scaleTypeId) {
      case 0:
        switch (scaleSizeId) {
          case 0:
            return 0.6;
          case 1:
            return 0.7;

          case 2:
            return 0.8;
          case 3:
            return 0.9;
          default:
            break;
        }
        break;
      case 1:
        switch (scaleSizeId) {
          case 0:
            return 0.8;

          case 1:
            return 0.9;

          case 2:
            return 1;

          default:
            break;
        }
        break;
      default:
        break;
    }
  }
  
  React.useEffect(() => {
    let scale = getScale(typeId, sizeId);
    dispatch(handleChangeScale(scale));
  }, [typeId, sizeId, dispatch]);
  return (
    <div className="size__preview">
      
     
      <div
        style={{ transform: `scale(${scale})` }}
        className={`size__default_book size__default_book--${
          typeId === 0 ? "quadratic" : "landscape"
        }`}
      >
         <div className="size__albumname">
        <span>Введите название альбома</span>
        <input type="text" onChange={(e)=>handleChangeName(e.target.value)} placeholder="Название" value={albumName} />
      </div>
      </div>
    </div>
  );
};

export default SizePreview;
