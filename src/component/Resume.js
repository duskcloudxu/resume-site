import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeLocation} from "../actions/actions";


let mapStateToProps = state => ({
    content: state.content,
    isMobile: state.isMobile,
})

class Resume extends Component {
    constructor(props) {
        super(props);
        this.props.dispatch(changeLocation(this.props.location.pathname))
    }

    initBarLength = (e) => {
        console.log("test")
    }

    render() {
        let honours = this.props.content.honours;
        let education = this.props.content.education;
        if (this.props.isMobile) {
            return (
                <div className={"resume-mob"}>
                    <div className="information">
                        <div className="education">
                            <h1>Education</h1>
                            <h3>what I've learned</h3>
                            <div className={"time"}>{education.time}</div>
                            <div>{education.fullName}</div>
                            <div>{education.degree}; {education.major}</div>
                            <div>{education.GPA}</div>
                        </div>
                        <div className="honours">
                            <h1>Honours</h1>
                            <h3>what I've achieved</h3>
                            {
                                honours.map((item, index) => {
                                        return (
                                            <div>{item}</div>
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                    <div className={"projects"}>
                        <h1>Projects</h1>
                        <h3>What I've contributed to</h3>
                        {this.props.content.projects.map((item, index) => {
                                return (
                                    <div className={"m-project"}>
                                        <a href={item.url}>
                                            {item.name}
                                        </a>
                                        <div>{item.des}</div>
                                    </div>
                                )
                            }
                        )}
                    </div>
                    <div className={"skills"}>
                        <h1>Skills</h1>
                        {
                            this.props.content.skills.map((item, index) => {
                                    return (
                                        <Skill content={item}/>
                                    )
                                }
                            )
                        }
                    </div>

                </div>
            )
        }
        else
            return (
                <div className={"resume"}>
                    <div className="information">
                        <div className="education">
                            <h1>Education</h1>
                            <h3>what I've learned</h3>
                            <div className={"time"}>{education.time}</div>
                            <div>{education.fullName}</div>
                            <div>{education.degree}; {education.major}</div>
                            <div>{education.GPA}</div>
                        </div>
                        <div className="honours">
                            <h1>Honours</h1>
                            <h3>what I've achieved</h3>
                            {
                                honours.map((item, index) => {
                                        return (
                                            <div>{item}</div>
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                    <div className={"projects"}>
                        <h1>Projects</h1>
                        <h3>What I've contributed to</h3>
                        {this.props.content.projects.map((item, index) => {
                                return (
                                    <div className={"m-project"}>
                                        <a href={item.url}>
                                            {item.name}
                                        </a>
                                        <div>{item.des}</div>
                                    </div>
                                )
                            }
                        )}
                    </div>
                    <div className={"skills"}>
                        <h1>Skills</h1>
                        {
                            this.props.content.skills.map((item, index) => {
                                    return (
                                        <Skill content={item}/>
                                    )
                                }
                            )
                        }
                    </div>

                </div>
            );
    }
}

class Skill extends Component {
    render() {
        return (
            <div className={"m-skill"}>
                <div className="name">{this.props.content.name}</div>
                <div className="barContainer">
                    <div className="bar" style={{width: (this.props.content.level)}}/>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Resume);