//
// Cole Smith | css@nyu.edu
// Resume Site
//

import React from "react";

class UNIX extends React.Component {
    constructor(props) {
        super(props);

        this.dismissCallback = this.props.dismissCallback;

        this.state = {
            isVisible: false
        };
    }

    componentDidMount() {

        // Programmatically show the back button for a second
        let header = document.getElementById("header");
        let original = header.style.borderLeftWidth;
        if (header !== undefined) {
            setTimeout(() => {
                header.style.borderLeftWidth = "30px";
            }, 100);
            setTimeout(() => {
                header.style.borderLeftWidth= original;
            }, 1000);
        }
    }

    render() {
        return (
            <div>
                <div className="goHome">Home</div>
                <div
                    id="header"
                    className="header"
                    onClick={() => this.dismissCallback()}
                >
                    UNIX and Open Source
                </div>
                <br/>
                <div className="divider"/>
                <br/>
                <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
            </div>
        );
    }
}

export default UNIX;