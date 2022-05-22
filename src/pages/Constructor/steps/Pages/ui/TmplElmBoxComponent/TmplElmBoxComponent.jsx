import React from 'react'
import styled from "styled-components";


const TmplElmBox = styled.div`

		width: ${props =>props.tmplElement.position.w};
		height: ${props=>props.tmplElement.position.h};
		left: ${props=>props.tmplElement.position.l};
		top: ${props=>props.tmplElement.position.t};
		background-color: ${props=>props.backgroundColor};
    overflow:hidden;
        img{
            
            box-sizing: border-size;
            object-fit: ${props=>props.image?.directionOptions.contain ? "contain" : "cover"};
        object-position:${props => props.image?.directionOptions.contain
				? "center"
				: `${props.image?.directionOptions.axisX}% ${props.image?.directionOptions.axisY}%`};
        width: 100%;
        height: 100%;
        transform:${props =>props.image?.directionOptions.rotate === "up" ? "rotate(0deg)" :props.image?.directionOptions.rotate==="right" ? "rotate(90deg)" : props.image?.directionOptions.rotate==="down" ? "rotate(180deg)" : "rotate(270deg)" };
        transition: all ease 0.5s ;

        }
      
	`;
const TmplElmBoxComponent=({onMouseLeaveHandler,onMouseEnterHandler,cn,refer,tmplElement,backgroundColor,image})=> {
    
  return (
    <TmplElmBox onMouseLeave={onMouseLeaveHandler} tmplElement={tmplElement} backgroundColor={backgroundColor} image={image} className={cn} onMouseEnter={(e)=>onMouseEnterHandler(e)} ref={refer}>
        {image && image.blob && <img src={image?.blob} alt="tmpl_img" />}
     </TmplElmBox>
  )
}

export default TmplElmBoxComponent