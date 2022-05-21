import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {handleUpdateImagesCounter} from "../redux/reducers/constructor/constructorSlice"
export function useImagesCounter() {
    const {pages}=useSelector((state)=>state.constructorSlice);
    const dispatch = useDispatch();
    function emptyObjectChecker(obj) {
    return Object.keys(obj).length == 0;
  }

    function updateImagesCounter(){
        let uploads = [...pages.uploads];
        let allPages=[...pages.papers.pages];

        let imagesCounter = [];
        
        uploads.forEach((upload)=>{
            imagesCounter.push({imageId:upload.id,countUsed:0})
        })

         allPages.forEach((page,idx)=>{
            let pageTemplates =page.templates;
            pageTemplates.forEach((tmpl)=>{
                if(!emptyObjectChecker(tmpl.template)){
                    let tmplElements=tmpl.template.elements;
                    tmplElements.forEach((element)=>{
                        if(element.image){
                            if(imagesCounter.some((upload)=>upload.imageId === element.image.id)){
                                let newUploadsData = imagesCounter.map((upload)=>{
                                    if(upload.imageId === element.image.id){
                                        let prevCountUsed = upload.countUsed;
                                        let newCountUsed= prevCountUsed + 1;
                                        return {...upload,countUsed:newCountUsed}
                                    }
                                    else{
                                        return {...upload}
                                    }
                                })
                                imagesCounter=newUploadsData;
                            }
                        }
                    })
                }
            })
            
        })

        dispatch(handleUpdateImagesCounter(imagesCounter));


        
        

    }

    React.useEffect(()=>{
        updateImagesCounter();
    },[pages.papers.pages,pages.uploads])
}
