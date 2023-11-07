import { Pannellum } from "pannellum-react";
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
    //     console.log(this.props.data, this.state);
    //  }

    changeScene(sceneId, targetYaw) {
        const tmp = this.main[sceneId];
        if (targetYaw) {
            tmp.yaw = targetYaw;
        }
        this.setState({
            current_data: tmp
        })
    }
    render() {
        return (
            <>
                <div className="pannellum_wrapper">
                    <Pannellum
                        // hotspotDebug
                        autoLoad

                        title={this.state.current_data.title}
                        hfov={this.hfov}
                        pitch={this.state.current_data.pitch}
                        yaw={this.state.current_data.yaw}
                        type={this.state.current_data.type}
                        image={this.state.current_data.image}
                        hotSpots={this.state.current_data.hotSpots}
                    >
                        {!this.state.current_data.hotSpots ? 0 : this.state.current_data.hotSpots.map((hotspot, index) => (
                            <Pannellum.Hotspot
                                key={index}
                                pitch={hotspot.pitch ? hotspot.pitch : undefined}
                                yaw={hotspot.yaw ? hotspot.yaw : undefined}
                                type={hotspot.type ? hotspot.type : undefined}
                                targetYaw={hotspot.targetYaw ? hotspot.targetYaw : undefined}
                                text={hotspot.text ? hotspot.text : undefined}
                                handleClick={() => this.changeScene(hotspot.sceneId, hotspot.targetYaw)}
                            />
                        ))}

                    </Pannellum>
                </div>
            </>
        )
    }
}