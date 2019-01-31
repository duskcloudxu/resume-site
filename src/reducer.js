export const reducer = (state, action) => {
    switch (action.type) {
        case 'changeLocation':{
            return {...state,location:action.path};
        }
        case 'showImg':{
            return{...state,isShowingImg:true,showImgIndex:action.index}
        }
        case 'closeSlider':{
            return{...state,isShowingImg: false}
        }
        case 'checkIfMobile':{
            return{...state,isMobile:window.matchMedia("(max-width: 1000px)").matches}
        }
        case 'toggleScrolling':{
            if(document.querySelector("body").style.overflow==="")
                document.querySelector("body").style.overflow="hidden";
            else
                document.querySelector("body").style.overflow="";
            return{...state,isScrollingAllowed: !state.isScrollingAllowed}
        }
        default:
            return state;
    }
}