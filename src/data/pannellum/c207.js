import c207_1 from "../../assets/images/207/PANO_20231109_150855_0.jpg"
import c207_2 from "../../assets/images/207/PANO_20231109_151315_1.jpg"
import c207_dop_1 from "../../assets/images/207/dop_image/1.jpg"

const cabinetTitle = "Кабинет 207";

const c207 = {
    "c207_1": {
        "sceneId": "jdfgkd",
        "title": "207 кабинет",
        "hfov": 100,
        "pitch": -3,
        "yaw": 0,
        "type": "r",
        "image": c207_1,
        "getAllScenes": true,
        "hotSpots": [
            {
                "pitch": -10,
                "yaw": 200,
                "type": "custom",
                "text": "Коридор",
                "targetYaw": 180,
                "sceneId": "c207_2",
                
            },
            { //
                "pitch": 6,
                "yaw": -15,
                "type": "custom",
                "text": "sfsdfdsf",
                "image": c207_dop_1,
                
            }
        ],
    },
    "c207_2": {
        "sceneId": "jdfgkd",
        "title": "207 кабинет",
        "hfov": 100,
        "pitch": -3,
        "yaw": 0,
        "type": "r",
        "image": c207_2,
        "hotSpots": [{
            "pitch": -2.1,
            "yaw": 9,
            "type": "custom",
            "text": cabinetTitle,
            "sceneId": "c207_1",
        }]
    },
}


export default c207;