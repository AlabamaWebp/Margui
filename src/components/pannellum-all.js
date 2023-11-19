import { Pannellum } from "pannellum-react";
import React, { Component } from 'react';
import info_icon from "../assets/images/icons/info.svg"
import close_icon from "../assets/images/icons/close.svg"

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
        this.closeInfoBottom = this.closeInfoBottom.bind(this);
        this.openInfoBottom = this.openInfoBottom.bind(this);
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

    closeInfoBottom(ev, auto=false) {
        if (auto || this.state.info_bottom == true && !this.findClassName(ev.target, "infoBottom")) {
            this.state.info_bottom = false;
            this.updateState();
        }
    }
    openInfoBottom() {
        this.state.info_bottom = true;
        this.updateState();
    }
    updateState() {
        this.setState((state) => state)
    }

    //// ВАЖНО
    componentDidUpdate(prevProps, prevState) {
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
        this.state.current_data = this.main[Object.keys(this.main)[0]];
        this.updateState()
    }
    findClassName(target, className) {
        if (target.className != className) {
            if (target.parentElement)
                return this.findClassName(target.parentElement, className);
            else return false;
        }
        else {
            return true;
        }
    }

    render() {
        return (
            <>
                <div className="pannellum_wrapper" onClick={this.closeInfoBottom}>
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
                                cssClass={(hotspot.cssClass ? hotspot.cssClass + " hotspotCustom" : "hotspotCustom")
                                         + (hotspot.info ? " infoHostSpot": "")}
                                handleClick={() => hotspot.info ? this.showInfo(hotspot.info) : this.changeScene(hotspot.sceneId, hotspot.targetYaw)}
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
                            <div className="info">
                                <div className="flex headerIB">
                                    <h3>{this.state.current_data.infoBottomHeader}</h3>
                                    <div className="icon_info close" onClick={() => this.closeInfoBottom(0, true)}>
                                        <img src={close_icon}></img>
                                    </div>
                                </div>
                                {this.state.current_data.infoBottom}
                            </div>
                            :
                            <>
                                <div className="icon_info" onClick={this.openInfoBottom}>
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