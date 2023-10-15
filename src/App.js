import coridor1 from './assets/coridor1.jpg';
import musei2 from './assets/musei2.jpg';
import musei3 from './assets/musei3.jpg';
import musei4 from './assets/musei4.jpg';
import musei5 from './assets/musei5.jpg';
import musei6 from './assets/musei6.jpg';
import { Pannellum } from "pannellum-react";
import './App.scss';
import React from 'react';


function App() {

  const museiTitle = "Зоологический музей";
  const hfov = 110;
  const data = {
    "coridor1": {
      "title": "Коридор",
      "pitch": -3,
      "yaw": 0,
      "type": "equirectangular",
      "image": coridor1,
      "hotSpots": [
        {
          "pitch": -2.1,
          "yaw": 9,
          "type": "custom",
          "text": museiTitle,
          "sceneId": "musei1",
        }
      ]
    },

    "musei1": {
      "title": "Музей",
      "pitch": -10,
      "yaw": -110,
      "type": "equirectangular",
      "image": musei2,
      "hotSpots": [
        {
          "pitch": -10,
          "yaw": 70,
          "type": "custom",
          "text": "Коридор",
          "targetYaw": 180,
          "sceneId": "coridor1",
        },
        {
          "pitch": -30,
          "yaw": -110,
          "type": "custom",
          // "text": "",
          "sceneId": "musei2",
        },
      ]
    },
    "musei2": {
      "title": "Музей",
      "pitch": -10,
      "yaw": -110,
      "type": "equirectangular",
      "image": musei3,
      "hotSpots": [
        {
          "pitch": -25,
          "yaw": 85,
          "type": "custom",
          "targetYaw": 75,
          // "text": "",
          "sceneId": "musei1",
        },
        {
          "pitch": -25,
          "yaw": -90,
          "type": "custom",
          // "text": "",
          "sceneId": "musei3",
        },
      ]
    },
    "musei3": {
      "title": "Музей",
      "pitch": -10,
      "yaw": -110,
      "type": "equirectangular",
      "image": musei4,
      "hotSpots": [
        {
          "pitch": -25,
          "yaw": 85,
          "type": "custom",
          "targetYaw": 100,
          // "text": "",
          "sceneId": "musei2",
        },
        {
          "pitch": -25,
          "yaw": -100,
          "type": "custom",
          // "text": "",
          "sceneId": "musei4",
        },
      ]
    },
    "musei4": {
      "title": "Музей",
      "pitch": -10,
      "yaw": -110,
      "type": "equirectangular",
      "image": musei5,
      "hotSpots": [
        {
          "pitch": -25,
          "yaw": 85,
          "type": "custom",
          // "text": "",
          "targetYaw": 90,
          "sceneId": "musei3",
        },
        {
          "pitch": -40,
          "yaw": -93,
          "type": "custom",
          // "text": "",
          "sceneId": "musei5",
        },
      ]
    },
    "musei5": {
      "title": "Музей",
      "pitch": -3,
      "yaw": 180,
      "type": "equirectangular",
      "image": musei6,
      "hotSpots": [
        {
          "pitch": -20,
          "yaw": 160,
          "type": "custom",
          "targetYaw": 100,
          "text": museiTitle,
          "sceneId": "musei4",
        }
      ]
    }
  }
  let [current_data, setCurrentData] = React.useState(data.coridor1);

  // const current_data = data.coridor1;

  function changeScene(sceneId, targetYaw) {
    // console.log(sceneId, data[sceneId]);
    // current_data = data[sceneId];
    const tmp = data[sceneId];
    if (targetYaw) {
      tmp.yaw = targetYaw;
    }
    setCurrentData(tmp)
  }



  return (
    <div className="wrapper">
      <Pannellum
        hotspotDebug
        autoLoad

        title={current_data.title}
        hfov={hfov}
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
            // sceneId={hotspot.sceneId}
            handleClick={() => changeScene(hotspot.sceneId, hotspot.targetYaw)}
          />
        ))}

      </Pannellum>
    </div>
  );
}

export default App;

