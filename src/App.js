import React, { useState } from 'react';
import Header1 from './components/header/header';
import Panelm from "./components/pannellum-all";
import cabs1 from './data/header/cabs';
import Museum_data from './data/pannellum/museum';
import c114 from './data/pannellum/c114';

import c217 from './data/pannellum/c217';
// import { getConfig } from 'react-pannellum';


function App() {
  // const [floor, setFloor] = useState();
  const [cabinet, setСabinet] = useState(0);
  const [data, setData] = useState(c217);

  function updateCabinet(value) {
    setСabinet(value);
    switch (value) {
      case cabs1[0]:
        setData(Museum_data);
        break;
      case cabs1[1]:
        setData(c114);
        break;
      case cabs1[2]:
        setData(c217);
        break;
    }
  }
  // function click() {
  //   console.log(getConfig());
  // }
  return (
    <>
      <div className="wrapper">
        <Header1 
          // floor = {floor}
          // setFloor = {setFloor}
          cabinet = {cabinet}
          setСabinet = {updateCabinet}
          // onClick={() => click}
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