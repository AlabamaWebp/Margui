import React, { useState } from 'react';
import Header1 from './components/header/header';
import Panelm from "./components/pannellum-all";
import cabs1 from './data/header/cabs';

function App() {
  const [cabinet, setСabinet] = useState("");
  const [data, setData] = useState(cabs1[0][1]);
  function updateCabinet(value) {
    setСabinet(value);
    cabs1.forEach(element => {
      if (element[0] == value[0]) {
        setData(value[1]);
        window.history.pushState(null, null,value[2])
        return;
      }
    });
  }

  React.useEffect(() => {
    let currentUrl = window.location.href.split("/");
    currentUrl = currentUrl[currentUrl.length-1]
    if (currentUrl != "") {
      cabs1.forEach(element => {
        if (element[2] == currentUrl) {
          setData(element[1]);
          setСabinet(element[0]);
          return;
        }
      });
    }
    else {
      window.history.pushState(null, null,cabs1[0][2])
    }

  }, []);
  return (
    <>
      <div className="wrapper">
        <Header1
          cabinet={cabinet}
          setСabinet={updateCabinet}
        ></Header1>
        <Panelm data={data} />
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