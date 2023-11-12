import c217_1 from "../../../assets/images/217/с217_1.jpg"
import c217_2 from "../../../assets/images/217/с217_2.jpg"

// import c217_s1 from "../../assets/images/217/stands/1.jpg"
import C217_info1 from "./info/c217_info1";
import C217_info2 from "./info/c217_info2";

const name_cab = 'Кабинет 217';


const c217 = {
  "one": {
    "sceneId": "one",
    "title": name_cab,
    "pitch": -4,
    "yaw": 177,
    "type": "equirectangular",
    "image": c217_1,
    "compass":"",
    "hotSpots": [
        {
          "pitch": -17,
          "yaw": 168,
          "type": "custom",
          "text": "",
          "sceneId": "two",
        },
        {
          "pitch": 2,
          "yaw": 29,
          "type": "custom",
          "cssClass": ".pnlm-hotspot.pnlm-info info",
          "info": (<C217_info2/>)
        },
        {
          "pitch": 2,
          "yaw": -10,
          "type": "custom",
          "cssClass": ".pnlm-hotspot.pnlm-info info",
          "info": (<C217_info1/>)
        },
        {
          "pitch": 2,
          "yaw": -37,
          "type": "custom",
          "cssClass": ".pnlm-hotspot.pnlm-info info",
          "info": (<C217_info1/>)
        },
        {
          "pitch": 2,
          "yaw": -61,
          "type": "custom",
          "cssClass": ".pnlm-hotspot.pnlm-info info",
          "info": (<C217_info1/>)
        },
        

        {
          "pitch": 5,
          "yaw": -70,
          "type": "custom",
          "cssClass": ".pnlm-hotspot.pnlm-info info",
          "info": (<C217_info1/>)
        },
        {
          "pitch": 5,
          "yaw": -82,
          "type": "custom",
          "cssClass": ".pnlm-hotspot.pnlm-info info",
          "info": (<C217_info1/>)
        },
        {
          "pitch": 5,
          "yaw": -116,
          "type": "custom",
          "cssClass": ".pnlm-hotspot.pnlm-info info",
          "info": (<C217_info1/>)
        }
      ]
},
"two": {
  // "compass": true,
  "sceneId": "two",
  "title": name_cab,
  "pitch": -11,
  "yaw": 90,
  "type": "equirectangular",
  "image": c217_2, 
  "hotSpots": [
      {
        "pitch": -17,
        "yaw": -176,
        "type": "custom",
      //   "text": "",
        "sceneId": "one",
      },
      {
          "pitch": 2,
          "yaw": 92,
          "type": "custom",
          "cssClass": ".pnlm-hotspot.pnlm-info info",
          "info": (<C217_info1/>)
          // "text": "Стенд1",
        },
        {
          "pitch": 2,
            "yaw": -15,
            "type": "custom",
            "cssClass": ".pnlm-hotspot.pnlm-info info",
            "info": (<C217_info2/>)
        },
        {
          "pitch": 2,
            "yaw": 76,
            "type": "custom",
            "cssClass": ".pnlm-hotspot.pnlm-info info",
            "info": (<C217_info2/>)
        },
        {
          "pitch": 2,
            "yaw": 64,
            "type": "custom",
            "cssClass": ".pnlm-hotspot.pnlm-info info",
            "info": (<C217_info1/>)
        },
        {
          "pitch": 2,
            "yaw": 59,
            "type": "custom",
            "cssClass": ".pnlm-hotspot.pnlm-info info",
            "info": (<C217_info1/>)
        },
        {
          "pitch": 2,
            "yaw": -100,
            "type": "custom",
            "cssClass": ".pnlm-hotspot.pnlm-info info",
            "info": (<C217_info1/>)
        },
    ]
},
}

export default c217;