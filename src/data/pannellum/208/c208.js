import c208_1 from "../../../assets/images/208/c208_1.jpg"

import C208_info1 from "./info/c208_info1"
import C208_info2 from "./info/c208_info2"
import C208_info3 from "./info/c208_info3"
import C208_infoBottom from "./c208_infoBottom"

const name_cab = 'Кабинет 208';

const c208 = {
    "one": {
        "sceneId": "one",
        "title": name_cab,
        "pitch": -4,
        "yaw": 0,
        "type": "equirectangular",
        "image": c208_1,
        "compass":"",
        "infoBottomHeader": "Онтогенетический гербарий",
        "infoBottom": (<C208_infoBottom />),
        "hotSpots": [
            {
                "pitch": 3,
                "yaw": -42,
                "type": "custom",
                "cssClass": ".pnlm-hotspot.pnlm-info info",
                "info": (<C208_info3/>)
              },
              {
                "pitch": 3,
                "yaw": 39,
                "type": "custom",
                "cssClass": ".pnlm-hotspot.pnlm-info info",
                "info": (<C208_info2/>)
              },
              {
                "pitch": -4,
                "yaw": -177,
                "type": "custom",
                "cssClass": ".pnlm-hotspot.pnlm-info info",
                "info": (<C208_info1/>)
              },
            
        ]}
}

export default c208;