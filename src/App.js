import React, { useState } from 'react';
import Header1 from './components/header/header';
import Panelm from "./components/pannellum-all";
import Museum_data from './components/data/pannellum/museum';
import cabs1 from './components/data/header/cabs';

function App() {
  // const [floor, setFloor] = useState();
  const [cabinet, setСabinet] = useState(0);
  const [data, setData] = useState(Museum_data);
  function updateCabinet(value) {
    setСabinet(value);
    switch (value) {
      case cabs1[0]:
        setData(Museum_data);
        break;
      case cabs1[1]:
        setData(Museum_data);
        break;
    
      default:
        break;
    }
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