import c116_1 from "../../../assets/images/116/c116_1.jpg"
import c116_2 from "../../../assets/images/116/c116_2.jpg"
import c116_3 from "../../../assets/images/116/c116_3.jpg"
import c116_4 from "../../../assets/images/116/c116_4.jpg"
import c116_5 from "../../../assets/images/116/c116_5.jpg"

// import c217_s1 from "../../assets/images/217/stands/1.jpg"
import C116_info1 from "./info/c116_info1";
import C116_info2 from "./info/c116_info2";
import C116_info3 from "./info/c116_info3";


const name_cab = 'Кабинет 116';


const c116 = {
  "one": {
    "sceneId": "one",
    "title": name_cab,
    "pitch": -10,
    "yaw": 0,
    "type": "equirectangular",
    "image": c116_1,
    "compass": "",
    "hotSpots": [
      {
        "pitch": -2,
        "yaw": 54,
        "type": "custom",
        "text": "",
        "sceneId": "two",
      },
    ]
  },
  "two": {
    // "compass": true,
    "sceneId": "two",
    "title": name_cab,
    "pitch": -11,
    "yaw": 90,
    "type": "equirectangular",
    "image": c116_2,
    "hotSpots": [
      {
        "pitch": -3,
        "yaw": -49,
        "type": "custom",
        //   "text": "",
        "sceneId": "one",
      },
      {
        "pitch": -6,
        "yaw": 56,
        "type": "custom",
        "text": "",
        "cssClass": ".pnlm-hotspot.pnlm-info info",
        "info": (<C116_info1 />)
      },
      {
        "pitch": -8,
        "yaw": 15,
        "type": "custom",
        "text": "",
        "sceneId": "three",
      },


    ]
  },
  "three": {
    // "compass": true,
    "sceneId": "two",
    "title": name_cab,
    "pitch": -11,
    "yaw": 90,
    "type": "equirectangular",
    "image": c116_3,
    "hotSpots": [
      {
        "pitch": -4,
        "yaw": -78,
        "type": "custom",
        //   "text": "",
        "sceneId": "two",
      },
      {
        "pitch": -1,
        "yaw": 93,
        "type": "custom",
        //   "text": "",
        "cssClass": ".pnlm-hotspot.pnlm-info info",
        "info": (<C116_info2 />)
      },
      {
        "pitch": -4,
        "yaw": 72,
        "type": "custom",
        //   "text": "",
        "sceneId": "four",
      },


    ]
  },
  "four": {
    // "compass": true,
    "sceneId": "two",
    "title": name_cab,
    "pitch": -11,
    "yaw": 90,
    "type": "equirectangular",
    "image": c116_4,
    "hotSpots": [
      {
        "pitch": -16,
        "yaw": -34,
        "type": "custom",
        //   "text": "",
        "sceneId": "three",
      },
      {
        "pitch": -28,
        "yaw": 1,
        "type": "custom",
        //   "text": "",
        "cssClass": ".pnlm-hotspot.pnlm-info info",
        "info": (<C116_info3 />)
      },
      {
        "pitch": -18,
        "yaw": 35,
        "type": "custom",
        //   "text": "",
        "sceneId": "five",
      },

    ]
  },
  "five": {
    // "compass": true,
    "sceneId": "two",
    "title": name_cab,
    "pitch": -11,
    "yaw": 90,
    "type": "equirectangular",
    "image": c116_5,
    "hotSpots": [
      {
        "pitch": -23,
        "yaw": 91,
        "type": "custom",
        //   "text": "",
        "sceneId": "one",
      },
      {
        "pitch": -18,
        "yaw": -73,
        "type": "custom",
        //   "text": "",
        "sceneId": "four",
      },

    ]
  },
}

export default c116;