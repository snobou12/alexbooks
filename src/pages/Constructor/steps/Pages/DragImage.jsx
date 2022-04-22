import React from 'react'
import { useDrag } from 'react-dnd';
import {  SwiperSlide } from "swiper/react";

import "./DragImage.scss";
const DragImage = ({ img, imageName, handleImageDelete }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "DRAG_IMAGE",
    item: { imageName },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`)
      }
      
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    })
  }))
  const opacity = isDragging ? 0.4 : 1
  return (
    <SwiperSlide >

      <div  ref={drag} style={{ opacity }} className="pages__uploads_item">
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
    </SwiperSlide>

  )
}
export default DragImage;
