// import { Route, Routes } from 'react-router-dom';
import { Pannellum } from "pannellum-react";
import React from 'react';

// import Museum from './pages/museum'


import classroom_2_1 from '../assets/images/classroom_2_1.jpg';
import classroom_3_1 from '../assets/images/classroom_3_1.jpg';
import classroom_4_1 from '../assets/images/classroom_4_1.jpg';
import classroom_5_1 from '../assets/images/classroom_5_1.jpg';
import classroom_6_1 from '../assets/images/classroom_6_1.jpg';
import classroom_7_1 from '../assets/images/classroom_7_1.jpg';
import classroom_8_1 from '../assets/images/classroom_8_1.jpg';


function ClassRoom_1() {

  const classroomTitle = "ClassRoom_1";
  const hfov = 110;
  const data = {
    "classroom_2_1": {
      "title": "Фото класса",
      "pitch": -3,
      "yaw": 0,
      "type": "equirectangular",
      "image": classroom_2_1,
      "hotSpots": [
        {
          "pitch": -2.1,
          "yaw": 9,
          "type": "custom",
          "text": classroomTitle,
          "sceneId": "classroom_3_1",
          
        }
      ]
    },

    "classroom_3_1": {
      "title": "Фото класса",
      
      "pitch": -10,
      "yaw": -110,
      "type": "equirectangular",
      "image": classroom_3_1,
      "hotSpots": [
        {
          "pitch": -10,
          "yaw": 70,
          "type": "custom",
          "text": "Фото класса",
          "targetYaw": 180,
          "sceneId": "classroom_2_1",
        },
        {
          "pitch": -30,
          "yaw": -110,
          "type": "custom",
          // "text": "",
          "sceneId": "classroom_4_1",
        },
      ]
    },
    "classroom_4_1": {
      "title": "Фото класса",
      
      "pitch": -10,
      "yaw": -110,
      "type": "equirectangular",
      "image": classroom_4_1,
      "hotSpots": [
        {
          "pitch": -25,
          "yaw": 85,
          "type": "custom",
          "targetYaw": 75,
          // "text": "",
          "sceneId": "classroom_3_1",
        },
        {
          "pitch": -25,
          "yaw": -90,
          "type": "custom",
          // "text": "",
          "sceneId": "classroom_5_1",
        },
      ]
    },
    "classroom_5_1": {
      "title": "Фото класса",
      
      "pitch": -10,
      "yaw": -110,
      "type": "equirectangular",
      "image": classroom_5_1,
      "hotSpots": [
        {
          "pitch": -25,
          "yaw": 85,
          "type": "custom",
          "targetYaw": 100,
          // "text": "",
          "sceneId": "classroom_4_1",
        },
        {
          "pitch": -25,
          "yaw": -100,
          "type": "custom",
          // "text": "",
          "sceneId": "classroom_6_1",
        },
      ]
    },
    "classroom_6_1": {
      "title": "Фото класса",
      
      "pitch": -10,
      "yaw": -110,
      "type": "equirectangular",
      "image": classroom_6_1,
      "hotSpots": [
        {
          "pitch": -25,
          "yaw": 85,
          "type": "custom",
          // "text": "",
          "targetYaw": 90,
          "sceneId": "classroom_5_1",
        },
        {
          "pitch": -40,
          "yaw": -93,
          "type": "custom",
          // "text": "",
          "sceneId": "classroom_7_1",
        },
      ]
    },
    "classroom_7_1": {
      "title": "Фото класса",
      
      "pitch": -3,
      "yaw": 180,
      "type": "equirectangular",
      "image": classroom_7_1,
      "hotSpots": [
        {
          "pitch": -20,
          "yaw": 160,
          "type": "custom",
          "targetYaw": 100,
          "text": classroomTitle,
          "sceneId": "classroom_6_1",
        },
        {
            "pitch": -20,
            "yaw": 160,
            "type": "custom",
            "targetYaw": 100,
            "text": classroomTitle,
            "sceneId": "classroom_8_1",
          }
      ]
    },
    "classroom_8_1": {
        "title": "Фото класса",
        
        "pitch": -3,
        "yaw": 180,
        "type": "equirectangular",
        "image": classroom_8_1,
        "hotSpots": [
          {
            "pitch": -20,
            "yaw": 160,
            "type": "custom",
            "targetYaw": 100,
            "text": classroomTitle,
            "sceneId": "classroom_7_1",
          }
        ]
    }
  }
  let [current_data, setCurrentData] = React.useState(data.classroom_2_1);

  function changeScene(sceneId, targetYaw) {
    const tmp = data[sceneId];
    if (targetYaw) {
      tmp.yaw = targetYaw;
    }
    setCurrentData(tmp)
  }

    return(
        <>
        <div className="classRoom">
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

export default ClassRoom_1;