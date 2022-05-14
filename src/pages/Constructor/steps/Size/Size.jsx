
import React from "react";
import { useDispatch } from "react-redux";
import {
  handleChangeSizeType,
  handleChangeSizeOf,
} from "../../../../redux/reducers/constructor/constructorSlice";
import "./Size.scss";
const Size = ({selectedType,types}) => {
  const dispatch = useDispatch();

  
  function getTypeContent(id) {
    switch (id) {
      //Квадратная
      case 0:
        return (
          <div className="size__type_content">
            {types[0].sizes.map((size, idx) => (
              <span
                onClick={() => handleChangeSize(0, size.id)}
                key={`${size.id}:${idx}`}
                className={`size__type_content_item ${
                  types[0].selectedSize === size.id &&
                  "size__type_content_item--active"
                }`}
              >
                <span>{size.size} см</span>
                <span>от {size.price}р</span>
              </span>
            ))}
          </div>
        );
      //Альбомная

      case 1:
        return (
          <div className="size__type_content">
            {types[1].sizes.map((size, idx) => (
              <span
                onClick={() => handleChangeSize(1, size.id)}
                key={`${size.id}:${idx}`}
                className={`size__type_content_item ${
                  types[1].selectedSize === size.id &&
                  "size__type_content_item--active"
                }`}
              >
                <span>{size.size} см</span>
                <span>от {size.price}р</span>
              </span>
            ))}
          </div>
        );
      default:
    }
  }
  const handleChangeType = (id) => {
    dispatch(handleChangeSizeType(id));
  };
  const handleChangeSize = (idType, idSize) => {
    dispatch(handleChangeSizeOf({ idType, idSize }));
  };
  return (
    <div className="cnsr__size">
      <div className="cnsr__size_leftside">
        <div className="cnsr__size_types">
          {types.map((type, idx) => (
            <div
              onClick={() => handleChangeType(type.id)}
              key={`${type.id}:${idx}`}
              className={`size__types_item ${
                selectedType == type.id && "size__types_item--active"
              }`}
            >
              <div className="size__types_img">
                <div className={`size__type size__type--${type.title}`}></div>
              </div>
              <div className="size__types_title">
                <span>{type.transl}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cnsr__size_rightside">
        
        {getTypeContent(selectedType)}
      </div>
    </div>
  );
};

export default Size;
