/** @format */

import React from "react";
import { useDrop } from "react-dnd";

const TmplElementBox = ({ tmplElement, cn,sideToChange,image }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "TMPL_EL_BOX",
    drop: () => ({ name: `${tmplElement.id}/${sideToChange}` }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver
  let backgroundColor="rgb(225, 225, 225)"
  if(isActive){
    backgroundColor = 'rgb(53, 250, 96)'
  }
  else if(canDrop){
    backgroundColor = 'rgb(189, 189, 189)'
  }
  return (
    <div
    ref={drop}
      style={{
        width: tmplElement.position.w,
        height: tmplElement.position.h,
        left: tmplElement.position.l,
        top: tmplElement.position.t,
        backgroundColor
      }}
      className={cn}
    >
      {tmplElement.image && <img 
        
      src={image.blob} alt="element_img" className="tmpl__element_image" />}
    </div>
  );
};

export default TmplElementBox;
