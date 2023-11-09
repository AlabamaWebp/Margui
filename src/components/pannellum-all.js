import ReactPannellum, { getConfig } from "react-pannellum";
import React, { Component } from 'react'

export default class Panlm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_data: this.props.data[Object.keys(this.main)[0]]
        };
    }
    main = this.props.data; // main[Object.keys(main)[0]]
    hfov = 120;
    // componentDidMount() {
    // }

    changeScene(sceneId, targetYaw) {
        const tmp = this.main[sceneId];
        if (targetYaw) {
            tmp.yaw = targetYaw;
        }
        this.setState({
            current_data: tmp
        })
    }
    // test(a) {
    //     console.log(a);
    // }

    render() {
        return (
            <>
                <div className="pannellum_wrapper">
                    <ReactPannellum
                        // hotspotDebug
                        autoLoad

                        id="PannellumId"
                        sceneId={this.state.current_data.sceneId}
                        imageSource={this.state.current_data.image}
                        config={
                            {
                                autoLoad: true,
                                // hotSpotDebug: true,
                                
                                title: this.state.current_data.title,
                                hfov: this.hfov ? this.hfov : 110,
                                pitch: this.state.current_data.pitch ? this.state.current_data.pitch : 0,
                                yaw: this.state.current_data.yaw ? this.state.current_data.yaw : 0,
                                type: this.state.current_data.type,
                                hotSpots: this.state.current_data.hotSpots ? this.state.current_data.hotSpots : [],
                                // clickHandlerFunc: this.test
                            }
                        }
                    >
                   

                        {/* {!this.state.current_data.hotSpots ? 0 : this.state.current_data.hotSpots.map((hotspot, index) => (
                            <Pannellum.Hotspot
                                key={index}
                                pitch={hotspot.pitch ? hotspot.pitch : undefined}
                                yaw={hotspot.yaw ? hotspot.yaw : undefined}
                                type={hotspot.type ? hotspot.type : undefined}
                                targetYaw={hotspot.targetYaw ? hotspot.targetYaw : undefined}
                                text={hotspot.text ? hotspot.text : undefined}
                                handleClick={() => this.changeScene(hotspot.sceneId, hotspot.targetYaw)}
                            />
                        ))} */}

                    </ReactPannellum>
                </div>
            </>
        )
    }
}