import React from 'react';
import Resume from "./components/resume";
import Research from "./components/research";
import Web from "./components/web";
import IOS from "./components/ios";
import UNIX from "./components/unix";
import HomeDecoration from "./components/homeDecoration";

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
                    onClick={() => { this.presentPage(i) }}
                >
                    {i}
                </button>
            );
        }
        return buttons;
    }

    presentPage(label) {

        this.setState({presenting: label});

        switch (label) {
            case "Resume":
                return <Resume/>;
            case "Research":
                return <Research />;
            case "iOS":
                return <IOS/>;
            case "Web":
                return <Web/>;
            case "UNIX":
                return <UNIX/>;
            case "More":
                return (<div>More Pressed</div>);
            default:
                this.setState({presenting: ""});
        }
    }



  // noinspection JSMethodCanBeStatic
    render() {

        let homeView = (
            <div className="Home">
                <HomeDecoration/>
                <div className="AppHeader"> Cole Smith </div>
                <div className="Divider"/>
                <div className="AppSubHeader">Development and Design</div>
                <div className="DividerSmall"/>
                <div className="Nav">
                    {this.makeButtons(["Resume", "Research", "iOS", "Web", "UNIX", "More"])}
                </div>
                <br/>
                <div className="SocialLinks">
                    <a href="https://github.com/css459">
                        <img className="Link" src={Github} alt="Go to my GitHub"/>
                    </a>
                    <a href="https://www.linkedin.com/in/cole-smith-b666b5100/">
                        <img className="Link" src={LinkedIn} alt="Go to my LinkedIn"/>
                    </a>
                </div>
                <div className="BuiltWith">
                    Built with React ⚛
                </div>
            </div>
        );

        let pageView = (
            <div className="Page">
            </div>
        );

    return (
      <div className="App">
          { this.state.presenting ? pageView : homeView }
      </div>
    );
  }
}

export default App;
