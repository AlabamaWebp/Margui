import { Route, Routes } from 'react-router-dom';
import { Pannellum } from "pannellum-react";
// import './App.css';
import React from 'react';

import Museum from './pages/museum'
import Classroom_1 from './pages/classroom1'
import Classroom_2 from './pages/classroom2'
import Navigator from './components/navigator';
import NotPage from './pages/notpage'

// import coridor1 from './assets/images/coridor1.jpg';
// import musei2 from './assets/images/musei2.jpg';
// import musei3 from './assets/images/musei3.jpg';
// import musei4 from './assets/images/musei4.jpg';
// import musei5 from './assets/images/musei5.jpg';
// import musei6 from './assets/images/musei6.jpg';

function App() {

  // const museiTitle = "Зоологический музей";
  // const draggable = true;
  // const hfov = 110;
  // const compass = true;
  // const path = "/assets/images/"  
  // const data = {
  //   "coridor1": {
  //     "title": "Коридор",
  //     "hfov": hfov,
  //     "pitch": -3,
  //     "yaw": 0,
  //     "type": "equirectangular",
  //     "image": coridor1,
  //     "hotSpots": [
  //       {
  //         "pitch": -2.1,
  //         "yaw": 9,
  //         "type": "custom",
  //         "text": museiTitle,
  //         "sceneId": "musei1",
  //       }
  //     ]
  //   },

  //   "musei1": {
  //     "title": "Музей",
  //     "hfov": hfov,
  //     "pitch": -10,
  //     "yaw": -110,
  //     "type": "equirectangular",
  //     "image": musei2,
  //     "hotSpots": [
  //       {
  //         "pitch": -10,
  //         "yaw": 70,
  //         "type": "custom",
  //         "text": "Коридор",
  //         "targetYaw": 180,
  //         "sceneId": "coridor1",
  //       },
  //       {
  //         "pitch": -30,
  //         "yaw": -110,
  //         "type": "custom",
  //         // "text": "",
  //         "sceneId": "musei2",
  //       },
  //     ]
  //   },
  //   "musei2": {
  //     "title": "Музей",
  //     "hfov": hfov,
  //     "pitch": -10,
  //     "yaw": -110,
  //     "type": "equirectangular",
  //     "image": musei3,
  //     "hotSpots": [
  //       {
  //         "pitch": -25,
  //         "yaw": 85,
  //         "type": "custom",
  //         "targetYaw": 75,
  //         // "text": "",
  //         "sceneId": "musei1",
  //       },
  //       {
  //         "pitch": -25,
  //         "yaw": -90,
  //         "type": "custom",
  //         // "text": "",
  //         "sceneId": "musei3",
  //       },
  //     ]
  //   },
  //   "musei3": {
  //     "title": "Музей",
  //     "hfov": hfov,
  //     "pitch": -10,
  //     "yaw": -110,
  //     "type": "equirectangular",
  //     "image": musei4,
  //     "hotSpots": [
  //       {
  //         "pitch": -25,
  //         "yaw": 85,
  //         "type": "custom",
  //         "targetYaw": 100,
  //         // "text": "",
  //         "sceneId": "musei2",
  //       },
  //       {
  //         "pitch": -25,
  //         "yaw": -100,
  //         "type": "custom",
  //         // "text": "",
  //         "sceneId": "musei4",
  //       },
  //     ]
  //   },
  //   "musei4": {
  //     "title": "Музей",
  //     "hfov": hfov,
  //     "pitch": -10,
  //     "yaw": -110,
  //     "type": "equirectangular",
  //     "image": musei5,
  //     "hotSpots": [
  //       {
  //         "pitch": -25,
  //         "yaw": 85,
  //         "type": "custom",
  //         // "text": "",
  //         "targetYaw": 90,
  //         "sceneId": "musei3",
  //       },
  //       {
  //         "pitch": -40,
  //         "yaw": -93,
  //         "type": "custom",
  //         // "text": "",
  //         "sceneId": "musei5",
  //       },
  //     ]
  //   },
  //   "musei5": {
  //     "title": "Музей",
  //     "hfov": hfov,
  //     "pitch": -3,
  //     "yaw": 180,
  //     "type": "equirectangular",
  //     "image": musei6,
  //     "hotSpots": [
  //       {
  //         "pitch": -20,
  //         "yaw": 160,
  //         "type": "custom",
  //         "targetYaw": 100,
  //         "text": museiTitle,
  //         "sceneId": "musei4",
  //       }
  //     ]
  //   }
  // }
  // let [current_data, setCurrentData] = React.useState(data.coridor1);

  // function changeScene(sceneId, targetYaw) {
  //   const tmp = data[sceneId];
  //   if (targetYaw) {
  //     tmp.yaw = targetYaw;
  //   }
  //   setCurrentData(tmp)
  // }

  return (
    <>
      <div className="wrapper">
      {/* <Pannellum
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
          // sceneId={hotspot.sceneId}
          handleClick={() => changeScene(hotspot.sceneId, hotspot.targetYaw)}
        />
      ))}
        
      </Pannellum> */}
    </div>

      <Navigator />
      <Routes>
        <Route path='/museum' element={<Museum/>} />
        <Route path='/classroom_1' element={<Classroom_1/>} />
        <Route path='/classroom_2' element={<Classroom_2/>} />
        <Route path='*' element={<NotPage/>} />
      </Routes>
    </>
  );
}

export default App;
