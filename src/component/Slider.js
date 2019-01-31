import React, {Component} from 'react';
import {connect} from 'react-redux';
import close from '../data/img/close.svg'
import {closeSlider, toggleScrolling} from "../actions/actions";
import {getPhoto} from "../communicationKit/commu";

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



    render() {
        if (this.props.isShowingImg && this.props.isMobile) {
            return (
                <div className={"slider-mob"}>
                    <div className="closeBtn Btn" onClick={this.closeSlider}>
                        <img src={close} alt=""/>
                    </div>
                    <div className={"imgContainer "}>
                        <img src={this.props.imgList[this.props.showImgIndex].url} alt=""/>
                        <div className={"description "}>{this.state.description}</div>

                    </div>

                </div>
            );
        }
        else if (this.props.isShowingImg) {
            return (
                <div className={"slider"}>
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
                            className={"description " + (this.state.isShowingDes ? "description-show" : "")}>{this.state.description}</div>

                        />
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