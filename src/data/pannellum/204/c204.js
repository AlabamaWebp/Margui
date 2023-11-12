import c204_1 from "../../../assets/images/204/c204_1.jpg"


// import c217_s1 from "../../assets/images/217/stands/1.jpg"
import C204_info1 from "./info/c204_info1";
import C204_info2 from "./info/c204_info2";
import C204_info3 from "./info/c204_info3";
import C204_info4 from "./info/c204_info4";
import C204_info5 from "./info/c204_info5";
import C204_info6 from "./info/c204_info6";
import C204_info7 from "./info/c204_info7";
import C204_info8 from "./info/c204_info8";



const name_cab = 'Кабинет 204';


const c204 = {
  "one": {
    "sceneId": "one",
    "title": name_cab,
    // "pitch": 50,
    // "yaw": 98,
    "type": "equirectangular",
    "image": c204_1,
    "compass":"",
    "hotSpots": [
        {
          "pitch": 6,
          "yaw": 30,
          "type": "custom",
          "text": "",
          "cssClass": ".pnlm-hotspot.pnlm-info info",
          "info":(<C204_info1/>),
        },
        {
            "pitch": 5,
            "yaw": -28,
            "type": "custom",
            "text": "",
            "cssClass": ".pnlm-hotspot.pnlm-info info",
            "info":(<C204_info2/>),
        },
        {
            "pitch": 13,
            "yaw": 93,
            "type": "custom",
            "text": "",
            "cssClass": ".pnlm-hotspot.pnlm-info info",
            "info":(<C204_info5/>),
          },
          {
            "pitch": 14,
            "yaw": 104,
            "type": "custom",
            "text": "",
            "cssClass": ".pnlm-hotspot.pnlm-info info",
            "info":(<C204_info4/>),
          },
          {
            "pitch": 13,
            "yaw": 116,
            "type": "custom",
            "text": "",
            "cssClass": ".pnlm-hotspot.pnlm-info info",
            "info":(<C204_info3/>),
          },
          {
            "pitch": 6,
            "yaw": 166,
            "type": "custom",
            "text": "",
            "cssClass": ".pnlm-hotspot.pnlm-info info",
            "info":(<C204_info6/>),
          },
          {
            "pitch": 6,
            "yaw": 178,
            "type": "custom",
            "text": "",
            "cssClass": ".pnlm-hotspot.pnlm-info info",
            "info":(<C204_info7/>),
          },
          {
            "pitch": 6,
            "yaw": -171,
            "type": "custom",
            "text": "",
            "cssClass": ".pnlm-hotspot.pnlm-info info",
            "info":(<C204_info1/>),
          },
          {
            "pitch": 6,
            "yaw": -159,
            "type": "custom",
            "text": "",
            "cssClass": ".pnlm-hotspot.pnlm-info info",
            "info":(<C204_info8/>),
          },


      ]
},
}

export default c204;