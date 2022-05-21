
import React from "react";
import {handleSetTemplatesValidsPage} from "../redux/reducers/constructor/constructorSlice";
import { useDispatch, useSelector } from "react-redux";


export function usePagesValids(isRun) {
    const {pages}=useSelector((state)=>state.constructorSlice);
    const [validCheck,setValidCheck]=React.useState(false);
    const dispatch =useDispatch();

 function emptyObjectChecker(obj) {
    return Object.keys(obj).length == 0;
  }
    function checkValids(){
        
    let allPages = [...pages.papers.pages];
    let valids=[];
    allPages.forEach((page,idx)=>{
      let pageTemplates=page.templates;
      if(page.selectedSide === "lrside"){
        if(emptyObjectChecker(pageTemplates[0].template) || emptyObjectChecker(pageTemplates[1].template)){
          valids.push({id:idx,isValid:false})
        }
        else{
          let leftSideElements=pageTemplates[0].template.elements;
          let rightSideElements=pageTemplates[1].template.elements;
          
          if((leftSideElements.some((element=>!element.image || emptyObjectChecker(element.image))) | (rightSideElements.some((element=>!element.image || emptyObjectChecker(element?.image)))))){
            valids.push({id:idx,isValid:false})
          }
          else{
            valids.push({id:idx,isValid:true})
          }
          
        }
        
      }
      else{
        if(emptyObjectChecker(pageTemplates[2].template)){
          valids.push({id:idx,isValid:false})
        }
        else{
          
          let centerSideElements = pageTemplates[2].template.elements;
          
          if(centerSideElements.some((element=>!element.image || emptyObjectChecker(element.image)))){
            valids.push({id:idx,isValid:false})
          }
          else{
          valids.push({id:idx,isValid:true})

          }
          
          
          
        }
      }
    })
    let bool = valids.every((valid)=>valid.isValid === true);
    setValidCheck(bool);
    if(isRun) dispatch(handleSetTemplatesValidsPage(valids));
  }
  React.useEffect(()=>{
        checkValids();
},[pages.papers.pages,isRun])
return validCheck;
}
