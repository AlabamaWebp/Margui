import { Pannellum } from "pannellum-react";
import React from 'react';


function Panlm(props) {

    const main = props[Object.keys(props)[0]]

    const [current_data, setCurrentData] = React.useState(main[Object.keys(main)[0]]);

    function changeScene(sceneId, targetYaw) {
        const tmp = main[sceneId];
        if (targetYaw) {
            tmp.yaw = targetYaw;
        }
        setCurrentData(tmp)
    }

    return (
        <>
            <div className="pannellum_wrapper">
                <Pannellum
                    hotspotDebug
                    autoLoad

                    title={current_data.title}
                    hfov={current_data.hfov}
                    pitch={current_data.pitch}
                    yaw={current_data.yaw}
                    type={current_data.type}
                    image={current_data.image}
                    hotSpots={current_data.hotSpots}
                >
                    {current_data.hotSpots.map((hotspot, index) => (
                        <Pannellum.Hotspot
                            key={index}
                            pitch={hotspot.pitch ? hotspot.pitch : undefined}
                            yaw={hotspot.yaw ? hotspot.yaw : undefined}
                            type={hotspot.type ? hotspot.type : undefined}
                            targetYaw={hotspot.targetYaw ? hotspot.targetYaw : undefined}
                            text={hotspot.text ? hotspot.text : undefined}
                            handleClick={() => changeScene(hotspot.sceneId, hotspot.targetYaw)}
                        />
                    ))}

                </Pannellum>
            </div>
        </>
    )
}

export default Panlm;