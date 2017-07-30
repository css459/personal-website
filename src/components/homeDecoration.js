//
// Cole Smith | css@nyu.edu
// Resume Site
//

import React from "react";
import * as THREE from "three";
import React3 from "react-three-renderer";
import "../stylesheets/homeDecoration.css";

class HomeDecoration extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.cameraPosition = new THREE.Vector3(0, 0, 1000);

        this.mouseX = 0;
        this.mouseY = 0;

        this.windowHalfX = this.props.width / 2;
        this.windowHalfY = this.props.height / 2;

        this.initView = this.initView.bind(this);
        this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this);
        this.onDocumentTouchMove = this.onDocumentMouseMove.bind(this);
        this.onDocumentTouchStart = this.onDocumentTouchStart.bind(this);

        this.state = {
            width: this.props.width,
            height: this.props.height,
            cubeRotation: new THREE.Euler()
        };

        this._onAnimate = () => {
            this.camera.position.x += (this.mouseX - this.camera.position.x) * .05;
            this.camera.position.y += (-this.mouseY + 200 - this.camera.position.y) * .05;
            this.camera.lookAt(this.scene.position);
        };
    }

    componentDidMount() {
        this.initView();
    }

    initView() {

        let material = new THREE.SpriteMaterial();
        material.color = new THREE.Color(108.0 / 255.0, 113.0 / 255.0, 196.0 / 255.0);
        for (let i = 0; i < 1000; i++) {
            let particle = new THREE.Sprite(material);
            particle.position.x = Math.random() * 2 - 1;
            particle.position.y = Math.random() * 2 - 1;
            particle.position.z = Math.random() * 2 - 1;
            particle.position.normalize();
            particle.position.multiplyScalar(Math.random() * 10 + 450);
            particle.scale.multiplyScalar(5);
            this.scene.add(particle);
        }

        // lines
        for (let i = 0; i < 300; i++) {

            let geometry = new THREE.Geometry();

            let vertex = new THREE.Vector3(Math.random() * 2 - 1,
                Math.random() * 2 - 1,
                Math.random() * 2 - 1
            );
            vertex.normalize();
            vertex.multiplyScalar(450);

            geometry.vertices.push(vertex);

            let vertex2 = vertex.clone();
            vertex2.multiplyScalar(Math.random() * 0.5 + 1);
            geometry.vertices.push(vertex2);

            let line = new THREE.Line(geometry,
                new THREE.LineBasicMaterial({
                        color: 0xdc322f,
                        opacity: Math.random()
                    }
                ));
            this.scene.add(line);
        }

        document.addEventListener("mousemove", this.onDocumentMouseMove, false);
        document.addEventListener("touchstart", this.onDocumentTouchStart, false);
        document.addEventListener("touchmove", this.onDocumentTouchMove, false);
    }

    onDocumentMouseMove(event) {
        this.mouseX = event.clientX - this.windowHalfX;
        this.mouseY = event.clientY - this.windowHalfY;
    }

    onDocumentTouchStart(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
            this.mouseX = event.touches[0].pageX - this.windowHalfX;
            this.mouseY = event.touches[0].pageY - this.windowHalfY;
        }
    }

    onDocumentTouchMove(event) {
        if (event.touches.length === 1) {
            event.preventDefault();
            this.mouseX = event.touches[0].pageX - this.windowHalfX;
            this.mouseY = event.touches[0].pageY - this.windowHalfY;
        }
    }

    render() {
        const width = this.state.width;
        const height = this.state.height;

        // noinspection JSUnresolvedVariable
        return (
            <div className="homeDecoration">
                <React3
                    mainCamera="camera"
                    width={width}
                    height={height}
                    clearAlpha={0}
                    alpha={true}
                    pixelRatio={window.devicePixelRatio}
                    onAnimate={this._onAnimate}
                >
                    <scene ref={(scene) => {
                        this.scene = scene
                    }}>
                        <perspectiveCamera
                            ref={(camera) => {
                                this.camera = camera
                            }}
                            name="camera"
                            fov={75}
                            aspect={width / height}
                            near={1}
                            far={10000}
                            position={this.cameraPosition}
                        />
                    </scene>
                </React3>
            </div>
        );
    }
}

export default HomeDecoration;