import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios'
import {changeLocation, showImg, toggleScrolling} from "../actions/actions";
import HZNU from "../data/img/HZNU.jpg"
import {getPhoto} from "../communicationKit/commu";

let mapStateToProps = state => ({
    imgList: state.imgList,
    isMobile: state.isMobile
})

class Photography extends Component {
    constructor(props) {
        super(props);
        this.props.dispatch(changeLocation(this.props.location.pathname));
    }

    render() {
        if (this.props.isMobile) {
            return (
                <div className={"photography-mob"}>
                    {
                        this.props.imgList.map((item, index) => {
                                return (
                                    <PhotoItem name={item.name} url={item.url} dispatch={this.props.dispatch}
                                               index={index}/>
                                )
                            }
                        )
                    }
                </div>
            )
        }
        return (
            <div className={"photography"}>
                {
                    this.props.imgList.map((item, index) => {
                            return (
                                <PhotoItem name={item.name} url={item.url} dispatch={this.props.dispatch} index={index}/>
                            )
                        }
                    )
                }
            </div>
        );
    }
}

class PhotoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgData: null
        };
        getPhoto(this.props.name, this.loadPic);
    }

    loadPic = (data) => {
        this.setState({imgData: data});
    }


    render() {
        return (
            <div className={"photo-item"} data-id={this.props.index}
                 onClick={() => {
                     this.props.dispatch(showImg(this.props.index));
                     this.props.dispatch(toggleScrolling());
                 }}>
                <img src={this.props.url} alt=""/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Photography);