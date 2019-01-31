import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions'
import avatar from '../data/img/avatar.png'
import {changeLocation} from "../actions/actions";

let mapStateToProps = state => ({
    content: state.content,
    isMobile:state.isMobile
})
let mapDispatchToProps = {
    changeLocation
}

class About extends Component {
    constructor(props) {
        super(props);
        this.props.dispatch(changeLocation(this.props.location.pathname))
    }

    render() {
        if(this.props.isMobile){
            return(
                <div className={"about-mob"}>
                    <div className="avatar">
                        <img src={avatar} alt=""/>
                    </div>
                    <div className="content">
                        {this.props.content.about}
                    </div>
                </div>
            )
        }
        else
        return (
            <div className={"about"}>
                <div className="avatar">
                    <img src={avatar} alt=""/>
                </div>
                <div className="content">
                    {this.props.content.about}
                </div>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(About);