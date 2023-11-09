import c217_1 from "../../assets/images/217/с217_1.jpg"
import c217_2 from "../../assets/images/217/с217_2.jpg"

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
              "type": "scene",
            //   "text": museiTitle,
              "sceneId": "two",
            }
          ]
    },
    "two": {
        "sceneId": "two",
        "title": "114 кабинет",
        "pitch": -3,
        "yaw": 0,
        "type": "equirectangular",
        "image": c217_2,
    },
}

export default c217;