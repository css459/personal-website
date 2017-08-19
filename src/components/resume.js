//
// Cole Smith | css@nyu.edu
// Resume Site
//

import React from "react";
import LinkedIn from "../resources/linkedin.png";
import Github from "../resources/github.png";

class Resume extends React.Component {
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
                header.style.borderLeftWidth = original;
            }, 1000);
        }
    }

    render() {
        return (
            <div className="page">
                <div className="goHome">Home</div>
                <div
                    id="header"
                    className="header"
                    onClick={() => this.dismissCallback()}
                >
                    Resume
                </div>
                <div className="content">

                    {/*External Links*/}
                    <div style={{float: "right", margin: "auto"}}>
                        <a href="https://www.linkedin.com/in/cole-smith-b666b5100/">
                            <img
                                src={LinkedIn}
                                alt="LinkedIn"
                                style={{width: "60px", height: "60px", padding: "20px"}}
                            />
                        </a>
                        <a href="https://github.com/css459">
                            <img
                                src={Github}
                                alt="Github"
                                style={{width: "60px", height: "60px", padding: "20px 50px"}}
                            />
                        </a>
                    </div>

                    <p>
                        <p style={{fontSize: "larger"}}>
                            Cole Smith <br/>
                            80 Delancey St. #30 <br/>
                            New York, NY 10002 <br/>
                            727-417-7159 <br/>
                            css@nyu.edu <br/>
                        </p>

                        <b>EDUCATION</b>
                        <div className="dividerSmall"/>
                        <br/><br/>

                        <b>New York University | New York, NY | Graduation: May 2019 </b><br/>
                        <i>Bachelor of Arts in Computer Science, Bachelor of Arts in Economics, Richard Robins
                            Entrepreneurial Research Scholar 2017</i> <br/>

                        <br/> <b>EXPERIENCE</b>
                        <div className="dividerSmall"/>
                        <br/><br/>

                        <b>5G Simulation Developer Internship| Nokia; Bell Labs, Murray Hill, NJ — June - August
                            2017</b>
                        <p>
                            Full Stack developer for 5G simulator interface. Designed full application with custom 2D
                            and 3D charting using Three JS and React.
                            Also created a dynamically generated, live updating configuration editor and fast, fuzzy
                            search bar for sims and configs.
                            Designed custom HTTP server and API back end in Python. Interpreted and distilled simulation
                            data for better front end performance.
                            Support for on-the-fly feature additions, without needing to restart the server.
                        </p>

                        <b>Range Finding, Room Traversal Research | New York University, NY, NY — May 2017 - Current</b>
                        <p>
                            <i>Richard Robins Entrepreneurial Research Scholar 2017</i>: Developed cost effective range
                            finding solution using any laser and camera.
                            Created unique blob detection and ranging methods. Also designed 3D printed mount for
                            camera, laser.
                        </p>

                        <b>iOS Developer | NYU IT, New York University; NY, NY — March 2017 - Current</b>
                        <p>
                            Built Event check in software for iOS and oversaw iOS frontend development team for projects
                            that serve the NYU community.
                            Built realtime occupancy tracking software using Bluetooth LE accelerometers. - developed
                            statistical model for sensor error correction.
                        </p>

                        <b>Millimeter Wave, 5G Research Project Manager | NYU Wireless, New York University; NY, NY —
                            June - August 2016</b>
                        <p>
                            Project Manager for millimeter wave power sensor and base station placement procedure
                            development.
                            Led a team of French students to create custom robotics, an iOS app, and a custom server.
                            Administrative rolls like bookkeeping, budgeting, task delegation. Developed efficient
                            object tracking algorithms for low power, mobile systems.
                        </p>

                        <b>iOS Application Developer Internship | Mad Mobile; Tampa, FL — June 2015 - January, 2016</b>
                        <p>
                            <i>Sysco Foods</i>: iOS native application for Sysco Foods with functional Order Form
                            scanner and local product database updating / storage.
                            Developed for iPhone and iPad in Swift.
                            <br/>
                            <i>My New Banking Account</i>: iOS application for iPhone (Swift). Users use their Driver’s
                            License photo (OCR) to create a profile and apply
                            for banking accounts near their location.
                        </p>

                        <b>Freelance iOS Development</b>
                        <p>
                            <i>Mor.so</i>: Dev. for event planning application. Database management & image processing
                            (chroma-key filtering).
                            <br/>
                            <i>Pitch to Start Micro</i>: Real-time audience question-and-answer application with support
                            for up to 500 devices and ability to store results for recording.
                            <br/>
                            <a href="https://itunes.apple.com/us/app/pitch-to-start-micro/id1037664740?mt=8"> App
                                Store </a>
                        </p>

                        <b>Graphic Design Intern | Think Tank Inc.; Saint Petersburg, FL — June - August 2014</b> <br/>

                        <br/> <b>SKILLS & ADDITIONAL INFORMATION</b>
                        <div className="dividerSmall"/>
                        <p>
                            <i>Languages</i>: Swift, React, Python, Go, Shell, ObjC, C, Java, JSON, Git, HTML, CSS
                            <br/><br/>
                            <i>Technologies</i>: Machine Vision (OCR, Blob Detection, Tracking), Linux Systems/Kernels,
                            Graphic Design, Cocoa, Node
                            <br/><br/>
                            <i>Athletics</i>: Varsity Sailing (2011 - 2015), 5 National Championships; Saint Petersburg
                            Yacht Club Sailing Instructor (2013)
                            <br/><br/>
                            <i>Spoken Languages</i>: English, German
                            <br/><br/>
                            <i>Off Topic</i>: Synthesizers/Music writing, Coffee/Espresso experimenting, Bread baking,
                            Making recipes, Gardening
                        </p>
                    </p>
                </div>
            </div>
        );
    }
}

export default Resume;