import React from 'react'
import styled from "styled-components";


const TmplElmBox = styled.div`

		width: ${props =>props.tmplElement.position.w};
		height: ${props=>props.tmplElement.position.h};
		left: ${props=>props.tmplElement.position.l};
		top: ${props=>props.tmplElement.position.t};
		background-color: ${props=>props.backgroundColor};
    overflow:hidden;
		transition: all ease 0.5s !important;
        img{
            position: "absolute";
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index:200;
            box-sizing: border-size;
            object-fit: ${props=>props.image?.directionOptions.contain ? "contain" : "cover"};
        object-position:${props => props.image?.directionOptions.contain
				? "center"
				: `${props.image?.directionOptions.axisX}% ${props.image?.directionOptions.axisY}%`};
        width: 100%;
        height: 100%;
        transform:${props =>props.image?.directionOptions.rotate === "up" ? "rotate(0deg)" :props.image?.directionOptions.rotate==="right" ? "rotate(90deg)" : props.image?.directionOptions.rotate==="down" ? "rotate(180deg)" : "rotate(270deg)" };
        transition: all ease 0.5s !important;

        }
      
	`;
const TmplElmBoxComponent=({onMouseEnterHandler,cn,refer,tmplElement,backgroundColor,image})=> {
    
  return (
    <TmplElmBox tmplElement={tmplElement} backgroundColor={backgroundColor} image={image} className={cn} onMouseEnter={onMouseEnterHandler} ref={refer}>
        {image && image.blob && <img src={image?.blob} alt="tmpl_img" />}
     </TmplElmBox>
  )
}

export default TmplElmBoxComponent