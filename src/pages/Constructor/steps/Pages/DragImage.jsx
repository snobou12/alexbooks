
import React from "react";
import { useDrag } from "react-dnd";
const DragImage = ({img,isUploadingImages,deleteImageFromUploads,baseItem,uploadPercent,handleSetImgToTemplate }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TMPL_EL_BOX",
    canDrag:!isUploadingImages,
    item: { imageId:img.id,imageOptions:{imageWidth:img.imageWidth,imageHeight:img.imageHeight} },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        let imageId=item.imageId;
        let imageOptions=item.imageOptions;
        let dropBoxOptions = dropResult.options;
        let tmplElementId=Number(dropBoxOptions.tmplElementId)
        let sideToChange=dropBoxOptions.sideToChange;
        handleSetImgToTemplate({imageId,imageOptions,tmplElementId,sideToChange});
       
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }),[isUploadingImages]);
  
  const deleteImage=(img)=>{
      
      deleteImageFromUploads({imageId:img.id,imageWidth:img.imageWidth,imageHeight:img.imageHeight})
  }
  
  const opacity = isDragging ? 0.4 : 1;
  
  return (
    <>
    <div style={{opacity}} ref={drag}  className={`pages__uploads_item ${isUploadingImages && "pages__uploads_item--disabled"}`}>
                          <img src={img.blob} alt="image" />
      {!isUploadingImages && <div
        className="pages__uploads_item_delete"
        onClick={()=>deleteImage(img)}
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
      {true && <div className="pages__uploads_item_uploaded">
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
    >
      <circle cx="7" cy="7" r="7" fill="#E4F6FF"></circle>
      <path
        fill="#96D3F4"
        d="M13.52 1.074c-.497-.267-1.05.249-1.375.554-.745.726-1.374 1.566-2.08 2.33-.784.84-1.51 1.68-2.311 2.5-.458.458-.955.955-1.26 1.528C5.807 7.317 5.214 6.592 4.451 6c-.553-.42-1.47-.725-1.45.286.037 1.318 1.202 2.73 2.061 3.628.363.382.84.783 1.394.802.668.038 1.355-.764 1.756-1.203.707-.764 1.28-1.623 1.928-2.406.84-1.03 1.7-2.042 2.52-3.093.516-.649 2.139-2.252.86-2.94zM3.84 6.21c-.019 0-.038 0-.076.02a.93.93 0 01-.21-.077c.057-.038.153-.02.286.057z"
      ></path>
    </svg>
         </div>}
      
      {baseItem && <div className="pages__uploads_item_percent">
      <span style={{width:`${uploadPercent}%`}} className="pages__uploads_item_percent_value">
      </span>
         </div>}

    </div>
    
    </>
  );
};
export default DragImage;
