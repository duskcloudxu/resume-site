import React, {Component} from 'react';
import {connect} from 'react-redux';
import email from '../data/img/email-circled.svg'
import github from '../data/img/github.svg'
import blog from '../data/img/blog.svg'

let mapStateToProps = state => ({
    content: state.content,
    isMobile: state.isMobile,
})

class Footer extends Component {
    render() {
        if (this.props.isMobile) {
            return(
                <div className={"footer-mob"}>
                <div className="links">
                    <a href={this.props.content.github} className="m-link">
                        <img src={github} alt=""/>
                    </a>
                    <a href={"mailto:" + this.props.content.email} className="m-link">
                        <img src={email} alt=""/>
                    </a>
                    <a href={this.props.content.blog} className="m-link">
                        <img src={blog} alt=""/>
                    </a>
                </div>
                <div>Copyright 2019.</div>
            </div>
            )
        }
        else
            return (
                <div className={"footer"}>
                    <div className="links">
                        <a href={this.props.content.github} className="m-link">
                            <img src={github} alt=""/>
                        </a>
                        <a href={"mailto:" + this.props.content.email} className="m-link">
                            <img src={email} alt=""/>
                        </a>
                        <a href={this.props.content.blog} className="m-link">
                            <img src={blog} alt=""/>
                        </a>
                    </div>
                    <div>Copyright 2019.</div>
                </div>
            );
    }
}

export default connect(
    mapStateToProps,
)(Footer);