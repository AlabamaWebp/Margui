import { Pannellum } from "pannellum-react";
import React, { Component } from 'react';
import info_icon from "../assets/images/icons/info.svg"

export default class Panlm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_data: [],
            info: {},
            is_info: false,
            info_bottom: false
        };
        this.closeModal = this.closeModal.bind(this);
        this.toggleInfoBottom = this.toggleInfoBottom.bind(this);
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
    closeModal(ev) {
        if (ev.target.className.includes("backdrop")) {
            this.state.is_info = false;
            this.updateState();
        }
    }
    toggleInfoBottom() {
        this.state.info_bottom = !this.state.info_bottom;
        this.updateState()
    }
    updateState() {
        this.setState((state) => state)
    }
    componentDidMount() {
        // setTimeout(() => {
        this.state.current_data = this.props.data[Object.keys(this.main)[0]];
        this.updateState()
        // }, 1);
    }

    render() {
        return (
            <>
                <div className="pannellum_wrapper">
                    <Pannellum
                        // hotspotDebug
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
                        <div className="backdrop" onClick={this.closeModal}>
                            {this.state.info}
                        </div>
                        :
                        <></>
                    }
                    <div className="infoBottom">
                        {this.state.info_bottom ?
                            <div>
                                <h2>Информация</h2>
                                <p>Информация</p>
                                <button onClick={this.toggleInfoBottom}>Закрыть</button>
                            </div>
                            :
                            <>
                                <div class="icon_info"  onClick={this.toggleInfoBottom}>
                                    <img src={info_icon}></img>
                                </div>
                            </>
                        }
                    </div>

                </div>

            </>
        )
    }
}