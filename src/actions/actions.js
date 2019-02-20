let changeLocation = (path) => {
    return {
        type: "changeLocation",
        path: path
    }
}

let showImg=(index)=>{
   return{
       type:"showImg",
       index:index
   }
}


let closeSlider=()=>{
   return{
       type:"closeSlider"
   }
}

let checkIfMobile=()=>{
   return{
       type:"checkIfMobile"
   }
}

let toggleScrolling=()=>{
    return{
        type:"toggleScrolling"
    }
}





export {changeLocation,showImg,closeSlider,checkIfMobile,toggleScrolling};
