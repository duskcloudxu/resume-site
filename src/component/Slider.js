import React, {Component} from 'react';
import {connect} from 'react-redux';
import close from '../data/img/close.svg'
import {closeSlider, showImg, toggleScrolling} from "../actions/actions";
import {getPhoto} from "../communicationKit/commu";
import left from '../data/img/left.svg'

let mapStateToProps = state => ({
    isShowingImg: state.isShowingImg,
    imgList: state.imgList,
    showImgIndex: state.showImgIndex,
    isMobile: state.isMobile
})

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: this.props.imgList[this.props.showImgIndex].description,
            isShowingDes: false,
        }
    }


    closeSlider = () => {
        this.props.dispatch(closeSlider());
        this.props.dispatch(toggleScrolling());
    }

    turnRight = () => {
        let length = this.props.imgList.length;
        let index = this.props.showImgIndex+1;
        if (index === length)
            this.props.dispatch(showImg(0));
        else
            this.props.dispatch(showImg(index));
    }
    turnLeft = () => {
        let length = this.props.imgList.length;
        let index = this.props.showImgIndex-1;
        if (index < 0)
            this.props.dispatch(showImg(length - 1));
        else
            this.props.dispatch(showImg(index));
    }


    render() {
        if (this.props.isShowingImg && this.props.isMobile) {
            return (
                <div className={"slider-mob"} onClick={this.closeSlider}>
                    <div className="closeBtn Btn">
                        <img src={close} alt=""/>
                    </div>
                    <div className={"imgContainer "}>
                        <img src={this.props.imgList[this.props.showImgIndex].url} alt=""/>
                        <div className={"description "}>{this.props.imgList[this.props.showImgIndex].description}</div>
                    </div>

                </div>
            );
        }
        else if (this.props.isShowingImg) {
            return (
                <div className={"slider"} >
                    <div className="closeBtn Btn" onClick={this.closeSlider}>
                        <img src={close} alt=""/>
                    </div>
                    <div className={"imgContainer"}
                         onMouseOver={() => {
                             this.setState({isShowingDes: true});
                         }}
                         onMouseOut={() => {
                             this.setState({isShowingDes: false});
                         }}
                    >
                        <img src={this.props.imgList[this.props.showImgIndex].url} alt=""/>
                        <div
                            className={"description " + (this.state.isShowingDes ? "description-show" : "")}>{this.props.imgList[this.props.showImgIndex].description}</div>
                        <div className={"left Btn"} onClick={this.turnLeft}><img src={left} alt=""/></div>
                        <div className={"right Btn"} onClick={this.turnRight}><img src={left} alt=""/></div>
                    </div>
                </div>
            );
        }
        else
            return (
                <div>

                </div>
            );
    }
}

export default connect(
    mapStateToProps,
)(Slider);