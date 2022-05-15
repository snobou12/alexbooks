
import React from "react";
import { useDrag } from "react-dnd";
import {handleSetImageToTemplateElement} from "../../../../redux/reducers/constructor/constructorSlice";
import { useDispatch } from "react-redux";

const DragImage = ({ img,isUploadingImages,deleteImageFromUploads,baseItem,uploadPercent }) => {
  const dispatch = useDispatch();
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TMPL_EL_BOX",
    item: { imageId:img.id,imageOptions:{imageWidth:img.imageWidth,imageHeight:img.imageHeight} },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        let imageId=item.imageId;
        let imageOptions=item.imageOptions;
        let dropBoxOptions = dropResult.options;
        let tmplElementId=Number(dropBoxOptions.tmplElementId)
        let sideToChange=dropBoxOptions.sideToChange;
        dispatch(handleSetImageToTemplateElement({imageId,imageOptions,tmplElementId,sideToChange}))
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  
  const deleteImage=(imageId)=>{
      deleteImageFromUploads(imageId)
  }
  const opacity = isDragging ? 0.4 : 1;
 
  return (
    <div ref={drag} style={{ opacity }} className={`pages__uploads_item ${isUploadingImages && !baseItem && "pages__uploads_item--disabled"}`}>
      <img src={img.blob} alt={`uploaded_img ${img.id}`} />
      {!isUploadingImages && <div
        className="pages__uploads_item_delete"
        onClick={()=>deleteImage(img.id)}
      >
        <svg
          width="6"
          height="6"
          viewBox="0 0 6 6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.195034 5.15554L2.17546 3.05903L0.0585938 1.05937L0.750782 0.32661L2.86765 2.32626L4.84808 0.229752L5.60119 0.941167L3.62076 3.03768L5.73763 5.03733L5.04544 5.7701L2.92858 3.77044L0.94815 5.86695L0.195034 5.15554Z"></path>
        </svg>
      </div>}
      
      {baseItem && <div className="pages__uploads_item_percent">
      <span style={{width:`${uploadPercent}%`}} className="pages__uploads_item_percent_value">
      </span>
         </div>}

    </div>
  );
};
export default DragImage;
