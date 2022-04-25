
import React from "react";
import { useDrag } from "react-dnd";
import {handleSetImageToTemplateElement} from "../../../../redux/reducers/constructor/constructorSlice";
import { useDispatch } from "react-redux";

const DragImage = ({ img, handleImageDelete }) => {
  const dispatch = useDispatch();
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TMPL_EL_BOX",
    item: { name:img.id },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        let imageId=item.name;
        let dropBoxOptionsArr = dropResult.name.split("/");
        let tmplElementId=Number(dropBoxOptionsArr[0]);
        let sideToChange=dropBoxOptionsArr[1];
        dispatch(handleSetImageToTemplateElement({imageId,tmplElementId,sideToChange}))
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div ref={drag} style={{ opacity }} className="pages__uploads_item">
      <img src={img.blob} alt={`uploaded_img ${img.id}`} />
      <div
        className="pages__uploads_item_delete"
        onClick={() => handleImageDelete(img.id)}
      >
        <svg
          width="6"
          height="6"
          viewBox="0 0 6 6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.195034 5.15554L2.17546 3.05903L0.0585938 1.05937L0.750782 0.32661L2.86765 2.32626L4.84808 0.229752L5.60119 0.941167L3.62076 3.03768L5.73763 5.03733L5.04544 5.7701L2.92858 3.77044L0.94815 5.86695L0.195034 5.15554Z"></path>
        </svg>
      </div>
    </div>
  );
};
export default DragImage;
