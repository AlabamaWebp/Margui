// import { Route, Routes } from 'react-router-dom';
// import { Pannellum } from "pannellum-react";
// import './App.css';
import React, { useState } from 'react';
// import Museum from './pages/museum'
// import Classroom_1 from './pages/classroom1'
// import Classroom_2 from './pages/classroom2'
// import Navigator from './components/navigator';
import Header1 from './components/header/header';
// import NotPage from './pages/notpage';
import Panelm from "./components/pannellum-all";
import Museum_data from './components/data/pannellum/museum';

function App() {
  // const [floor, setFloor] = useState();
  const [cabinet, setСabinet] = useState(0);
  const [data, setData] = useState(Museum_data);
  function updateCabinet(value) {
    setСabinet(value);
    setData(Museum_data)
  }

  return (
    <>
      <div className="wrapper">
        <Header1 
          // floor = {floor}
          // setFloor = {setFloor}
          cabinet = {cabinet}
          setСabinet = {updateCabinet}
        ></Header1>
        <Panelm data={data}/>
        {/* <Routes>
          <Route path='/museum' element={<Museum />} />
          <Route path='/classroom_1' element={<Classroom_1 />} />
          <Route path='*' element={<NotPage />} />
        </Routes> */}
      </div>
    </>
  );
}

export default App;

// index
// "Музей",     0
// "204 каб.",  1
// "208 каб.",  2
// "116 каб.",  3
// "114 каб."   4