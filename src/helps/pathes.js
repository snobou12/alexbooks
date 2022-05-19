import {MODE} from "../static/variables";

export const pathTo = (path)=>{
    
    if(MODE === "production"){
        return "/constructor"+ path
    }
    else{
        return path
    }
}