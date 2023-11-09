import c217_1 from "../../assets/images/217/с217_1.jpg"
import c217_2 from "../../assets/images/217/с217_2.jpg"

import c217_s1 from "../../assets/images/217/stands/1.jpg"

const c217 = {
    "one": {
        "sceneId": "one",
        "title": "114 кабинет",
        // "pitch": -3,
        // "yaw": 0,
        "type": "equirectangular",
        "image": c217_1,
        "hotSpots": [
            {
              "pitch": -17,
              "yaw": 168,
              "type": "custom",
              "text": "",
              "sceneId": "two",
            }
          ]
    },
    "two": {
        "sceneId": "two",
        "title": "114 кабинет",
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
                "info": {
                    "images": [c217_s1],
                    "text": [{"head": "Lorem", "body": "lorem"}]
                }
                // "text": "Стенд1",
              }
          ]
    },
}

export default c217;