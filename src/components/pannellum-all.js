import { Pannellum } from "pannellum-react";
import React, { Component } from 'react'

export default class Panlm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_data: [],
            info: {},
            is_info: false
        };
        this.closeModal1 = this.closeModal1.bind(this)
    }
    main = this.props.data; // main[Object.keys(main)[0]]
    hfov = 120;
    changeScene(sceneId, targetYaw) {
        const tmp = this.main[sceneId];
        if (targetYaw) {
            tmp.yaw = targetYaw;
        }
        this.state.current_data = tmp;
        this.updateState();
    }
    showInfo(arg) {
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

    //// ВАЖНО
    componentDidUpdate(prevProps, prevState){
        if (this.props.data !== prevProps.data) {
            // ваш код с вызовом setState
            this.updateData()
          }
    }
    componentDidMount() {
        // setTimeout(() => {
            this.updateData()
        // }, 1);
    }
    updateData() {
        this.main = this.props.data;
        this.state.current_data = this.props.data[Object.keys(this.main)[0]];
        this.updateState()
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
                    <div className="infoBottom">
                        <h2>Информация</h2>
                        <p>Информация</p>
                    </div>
                </div>

            </>
        )
    }
}