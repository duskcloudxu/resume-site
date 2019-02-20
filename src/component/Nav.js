import React, {Component} from 'react';
import {connect} from 'react-redux';
import navPic from "../data/img/navPic.jpg";
import navPicMob from "../data/img/navPic-mob.jpg"
import {Link} from "react-router-dom";
import sideBar from '../data/img/sidebar.svg'
import MediaQuery from 'react-responsive'

let mapStateToProps = state => ({
    location: state.location,
    isMobile: state.isMobile
})


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {isSideBarOn: false}
    }

    toggleSideBar = () => {
        this.setState({isSideBarOn: !this.state.isSideBarOn});
    }

    render() {
        if (this.props.isMobile) {
            return (
                <div className="nav-mob">

                    <img src={navPicMob} alt="" className={"bkgImg"}/>
                    <div className="sideBar Btn" onClick={this.toggleSideBar}>
                        <img src={sideBar} alt=""/>
                    </div>
                    <div className={"list " + (this.state.isSideBarOn ? "" : "hidden")}>
                        <Link to={"/"}
                              className={this.props.location === "/" ? "selected" : ""}
                              onClick={this.toggleSideBar}
                        >ABOUT
                        </Link>
                        <div className={"divider"}/>

                        <Link to={"/photography"}
                              className={this.props.location === "/photography" ? "selected" : ""}
                              onClick={this.toggleSideBar}
                        >PHOTOGRAPHY</Link>
                        <div className={"divider"}/>

                        <Link to={"/resume"}
                              className={this.props.location === "/resume" ? "selected" : ""}
                              onClick={this.toggleSideBar}
                        >RESUME</Link>

                    </div>
                </div>
            )
        }
        else
            return (
                <div className="nav">
                    <img src={navPic} alt=""/>
                    <div className="list">
                        <Link to={"/"}
                              className={this.props.location === "/" ? "selected" : ""}
                        >ABOUT</Link>
                        <Link to={"/photography"}
                              className={this.props.location === "/photography" ? "selected" : ""}
                        >PHOTOGRAPHY</Link>
                        <Link to={"/resume"}
                              className={this.props.location === "/resume" ? "selected" : ""}
                        >RESUME</Link>
                    </div>
                </div>
            );
    }
}

export default connect(
    mapStateToProps,
)(Nav);