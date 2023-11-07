import { Route, Routes } from 'react-router-dom';
// import { Pannellum } from "pannellum-react";
// import './App.css';
import React, { useState } from 'react';

import Museum from './pages/museum'
import Classroom_1 from './pages/classroom1'
import Classroom_2 from './pages/classroom2'
import Navigator from './components/navigator';
import Header1 from './components/header/header';
import NotPage from './pages/notpage'

function App() {
  // const [floor, setFloor] = useState();
  const [cabinet, setСabinet] = useState(0);

  return (
    <>
      <div className="wrapper">
        <Header1 
          // floor = {floor}
          // setFloor = {setFloor}
          cabinet = {cabinet}
          setСabinet = {setСabinet}
        ></Header1>
        <Routes>
          <Route path='/museum' element={<Museum />} />
          <Route path='/classroom_1' element={<Classroom_1 />} />
          {/* <Route path='/classroom_2' element={<Classroom_2 />} /> */}
          <Route path='*' element={<NotPage />} />
        </Routes>
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