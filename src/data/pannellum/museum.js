import coridor1 from '../../assets/images/museum/coridor1.jpg';
import musei2 from '../../assets/images/museum/musei2.jpg';
import musei3 from '../../assets/images/museum/musei3.jpg';
import musei4 from '../../assets/images/museum/musei4.jpg';
import musei5 from '../../assets/images/museum/musei5.jpg';
import musei6 from '../../assets/images/museum/musei6.jpg';
const museiTitle = "Зоологический музей";
const hfov = 110;
const data = {
  "coridor1": {
    "title": "Коридор",
    "hfov": hfov,
    "pitch": -3,
    "yaw": 0,
    "type": "equirectangular",
    "image": coridor1,
    "hotSpots": [
      {
        "pitch": -2.1,
        "yaw": 9,
        "type": "custom",
        "text": museiTitle,
        "sceneId": "musei1",
      }
    ]
  },

  "musei1": {
    "title": "Музей",
    "hfov": hfov,
    "pitch": -10,
    "yaw": -110,
    "type": "equirectangular",
    "image": musei2,
    "hotSpots": [
      {
        "pitch": -10,
        "yaw": 70,
        "type": "custom",
        "text": "Коридор",
        "targetYaw": 180,
        "sceneId": "coridor1",
      },
      {
        "pitch": -30,
        "yaw": -110,
        "type": "custom",
        "sceneId": "musei2",
      },
    ]
  },
  "musei2": {
    "title": "Музей",
    "hfov": hfov,
    "pitch": -10,
    "yaw": -110,
    "type": "equirectangular",
    "image": musei3,
    "hotSpots": [
      {
        "pitch": -25,
        "yaw": 85,
        "type": "custom",
        "targetYaw": 75,
        // "text": "",
        "sceneId": "musei1",
      },
      {
        "pitch": -25,
        "yaw": -90,
        "type": "custom",
        // "text": "",
        "sceneId": "musei3",
      },
    ]
  },
  "musei3": {
    "title": "Музей",
    "hfov": hfov,
    "pitch": -10,
    "yaw": -110,
    "type": "equirectangular",
    "image": musei4,
    "hotSpots": [
      {
        "pitch": -25,
        "yaw": 85,
        "type": "custom",
        "targetYaw": 100,
        // "text": "",
        "sceneId": "musei2",
      },
      {
        "pitch": -25,
        "yaw": -100,
        "type": "custom",
        // "text": "",
        "sceneId": "musei4",
      },
    ]
  },
  "musei4": {
    "title": "Музей",
    "hfov": hfov,
    "pitch": -10,
    "yaw": -110,
    "type": "equirectangular",
    "image": musei5,
    "hotSpots": [
      {
        "pitch": -25,
        "yaw": 85,
        "type": "custom",
        // "text": "",
        "targetYaw": 90,
        "sceneId": "musei3",
      },
      {
        "pitch": -40,
        "yaw": -93,
        "type": "custom",
        // "text": "",
        "sceneId": "musei5",
      },
    ]
  },
  "musei5": {
    "title": "Музей",
    "hfov": hfov,
    "pitch": -3,
    "yaw": 180,
    "type": "equirectangular",
    "image": musei6,
    "hotSpots": [
      {
        "pitch": -20,
        "yaw": 160,
        "type": "custom",
        "targetYaw": 100,
        "text": museiTitle,
        "sceneId": "musei4",
      }
    ]
  }
}

const Museum_data = data;

export default Museum_data;