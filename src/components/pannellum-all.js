import { Pannellum } from "pannellum-react";
import React, { Component } from 'react'
import c217_info1 from "../data/pannellum/217/info/c217_info1";

export default class Panlm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_data: this.props.data[Object.keys(this.main)[0]],
            info: {},
            is_info: false
        };
        this.closeModal1 = this.closeModal1.bind(this)
    }
    main = this.props.data; // main[Object.keys(main)[0]]
    hfov = 120;
    // componentDidMount() {
        // setTimeout(() => {
        // }, 10);
    // }

    // changeScene(sceneId, targetYaw) {
    //     const tmp = this.main[sceneId];
    //     if (targetYaw) {
    //         tmp.yaw = targetYaw;
    //     }
    //     this.setState({
    //         current_data: tmp
    //     })
    // }
    changeScene(sceneId, targetYaw) {
        const tmp = this.main[sceneId];
        if (targetYaw) {
            tmp.yaw = targetYaw;
        }
        // this.setState((state) => {
        //     return {
        //         current_data: tmp,
        //         info: state.info,
        //         is_info: state.is_info,
        //     }
        // })
        this.state.current_data = tmp;
        this.updateState();
    }
    showInfo(arg) {
        // this.setState((state) => {
        //     return {
        //         current_data: state.current_data,
        //         info: arg,
        //         is_info: true,
        //     }
        // })
        this.state.info = arg;
        this.state.is_info = true;
        this.updateState();
    }
    closeModal1(ev) {
        if (ev.target.className.includes("backdrop")) {
            this.state.is_info = false;
            this.updateState();
        }
    }
    updateState() {
        this.setState((state) => state)
    }

    render() {
        return (
            <>
                <div className="pannellum_wrapper">
                    <Pannellum
                        hotspotDebug
                        autoLoad

                        title={this.state.current_data.title}
                        hfov={this.state.current_data.hfov}
                        pitch={this.state.current_data.pitch}
                        yaw={this.state.current_data.yaw}
                        type={this.state.current_data.type}
                        image={this.state.current_data.image}
                        hotSpots={this.state.current_data.hotSpots}
                    >
                        {this.state.current_data.hotSpots ? this.state.current_data.hotSpots.map((hotspot, index) => (
                            <Pannellum.Hotspot
                                key={index}
                                pitch={hotspot.pitch ? hotspot.pitch : undefined}
                                yaw={hotspot.yaw ? hotspot.yaw : undefined}
                                type={hotspot.type ? hotspot.type : undefined}
                                targetYaw={hotspot.targetYaw ? hotspot.targetYaw : undefined}
                                text={hotspot.text ? hotspot.text : undefined}
                                cssClass={hotspot.cssClass ? hotspot.cssClass : undefined}
                                handleClick={() => hotspot.cssClass && hotspot.cssClass.includes("info") ? this.showInfo(hotspot.info) : this.changeScene(hotspot.sceneId, hotspot.targetYaw)}
                            />
                        )) : undefined}

                    </Pannellum>
                    {this.state.is_info ? 
                    <div className="backdrop" onClick={this.closeModal1}>
                        {this.state.info} 
                    </div>
                    : <></>}
                    {/* <div className="pannellum_info_stand">
                    
                    </div> */}
                </div>

            </>
        )
    }
}