import c217_1 from "../../../assets/images/217/с217_1.jpg"
import c217_2 from "../../../assets/images/217/с217_2.jpg"

// import c217_s1 from "../../assets/images/217/stands/1.jpg"
import C217_info1 from "./info/c217_info1";
import C217_info2 from "./info/c217_info2";
import Infob1 from "./infoBottom/infob1";


import stands_info from "../../../components/stands-info/stands-info"

const name_cab = 'Кабинет 217';


const c217 = {
  "one": {
    "sceneId": "one",
    "title": name_cab,
    "pitch": -4,
    "yaw": 177,
    "type": "equirectangular",
    "image": c217_1,
    // "compass":"",
    "infoBottomHeader": "Онтогенетический музей",
    "infoBottom": (<Infob1/>),
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
          "cssClass": "info",
          "info": (<C217_info2/>)
        },
        {
          "pitch": 3,
          "yaw": -10,
          "type": "custom",
          "info": (<C217_info1/>)
        },
        {
          "pitch": 4,
          "yaw": -37,
          "type": "custom",
          "info": (<C217_info1/>)
        },
        {
          "pitch":5,
          "yaw": -61,
          "type": "custom",
          "info": (<C217_info1/>)
        },
        

        {
          "pitch": 6,
          "yaw": -70,
          "type": "custom",
          "info": (<C217_info1/>)
        },
        {
          "pitch": 7,
          "yaw": -82,
          "type": "custom",
          "info": (<C217_info1/>)
        },
        {
          "pitch": 8,
          "yaw": -116,
          "type": "custom",
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
  "infoBottom": (<Infob1/>),
  "infoBottomHeader": "Онтогенетический музей",
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
          "info": (<C217_info1/>)
          // "text": "Стенд1",
        },
        {
          "pitch": 2,
            "yaw": -15,
            "type": "custom",
            "info": (<C217_info2/>)
        },
        {
          "pitch": 2,
            "yaw": 76,
            "type": "custom",
            "info": (<C217_info2/>)
        },
        {
          "pitch": 2,
            "yaw": 64,
            "type": "custom",
            "info": (<C217_info1/>)
        },
        {
          "pitch": 2,
            "yaw": 59,
            "type": "custom",
            "info": (<C217_info1/>)
        },
        {
          "pitch": 2,
            "yaw": -100,
            "type": "custom",
            "info": (<C217_info1/>)
        },
    ]
},
}

export default c217;

// Популяционно-онтогенетический музей – центр изучения и сохранения внутрипопуляционного биоразнообразия растений, который был официально зарегистрирован 15 июля 2008 года (приказ № 32 «а» – П.) в Марийском государственном университете на кафедре экологии и включен в Евразийскую ассоциацию университетских музеев. Информация представлена в Аннотированном справочнике «Музеи университетов Евразийской ассоциации», содержащим сведения о 222 музеях университетов России и стран СНГ, членов ЕАУ (Музеи евразийских университетов… , 2013).
// Идея создания уникального Популяционно-онтогенетического музея принадлежит Заслуженному деятелю науки Российской Федерации, доктору биологических наук, профессору Л.А. Жуковой, которая является научным руководителем музея.
// Экспозиции Музея включают 24 стенда с гербарными образцами и фотографиями онтогенетических состояний растений разных жизненных форм, гербарными материалами по разным типам поливариантности онтогенеза, плакатами, демонстрирующими онтогенетическую и пространственную структуру ценопопуляций растений и их динамику. 

