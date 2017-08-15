import React from 'react';
import Resume from "./components/resume";
import Research from "./components/research";
import Web from "./components/web";
import IOS from "./components/ios";
import UNIX from "./components/unix";
import HomeDecoration from "./components/homeDecoration";

import Stackoverflow from "./resources/stackoverflow.png";
import LinkedIn from "./resources/linkedin.png";
import Github from "./resources/github.png";
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            presenting: ""
        };

        this.makeButtons = this.makeButtons.bind(this);
        this.presentPage = this.presentPage.bind(this);
    }

    makeButtons(labels) {
        let buttons = [];
        for (let i of labels) {
            buttons.push(
                <button
                    key={i}
                    className="Button"
                    onClick={() => {
                        this.presentPage(i)
                    }}
                >
                    {i}
                </button>
            );
        }
        return buttons;
    }

    presentPage(label) {
        switch (label) {
            case "Resume":
                this.setState({
                    presenting: <Resume dismissCallback={() => this.presentPage("")}/>
                });
                break;
            case "Research":
                this.setState({
                    presenting: <Research dismissCallback={() => this.presentPage("")}/>
                });
                break;
            case "iOS":
                this.setState({
                    presenting: <IOS dismissCallback={() => this.presentPage("")}/>
                });
                break;
            case "Web":
                this.setState({
                    presenting: <Web dismissCallback={() => this.presentPage("")}/>
                });
                break;
            case "UNIX":
                this.setState({
                    presenting: <UNIX dismissCallback={() => this.presentPage("")}/>
                });
                break;
            case "Off Topic":
                break;
            default:
                this.setState({presenting: ""});
        }
    }

    // noinspection JSMethodCanBeStatic
    render() {

        let homeView = (
            <div className="Home">
                <HomeDecoration
                    width={window.innerHeight * 0.3}
                    height={window.innerHeight * 0.3}
                />
                <div className="AppHeader"> Cole Smith</div>
                <div className="Divider"/>
                <div className="AppSubHeader">Development and Design</div>
                <div className="DividerSmall"/>
                <div className="Nav">
                    {this.makeButtons(["Resume", "Research", "iOS", "Web", "UNIX", "Off Topic"])}
                </div>
                <br/>
                <div className="SocialLinks">
                    <a href="https://github.com/css459">
                        <img className="Link" src={Github} alt="Go to my GitHub"/>
                    </a>
                    <a href="https://stackoverflow.com/users/4487982/cole">
                        <img className="Link" src={Stackoverflow} alt="Go to my Stackoverflow"/>
                    </a>
                    <a href="https://www.linkedin.com/in/cole-smith-b666b5100/">
                        <img className="Link" src={LinkedIn} alt="Go to my LinkedIn"/>
                    </a>

                </div>
                <div className="BuiltWith">
                    <a href="https://github.com/css459/personal-website">
                        View Source
                    </a>
                </div>
            </div>
        );

        let pageView = (
            <div className="PageWrapper">
                {this.state.presenting}
            </div>
        );

        return (
            <div className="App">
                {this.state.presenting ? pageView : homeView}
            </div>
        );
    }
}

export default App;
