import React , {useState} from "react"; 
import {Menu} from "../../components/Menu"  
import {UserInfo} from "../../components/UserInfo"  
//import image icon
import user from "./../../image/user.svg"
import calendar from "./../../image/calendar.svg"
import lock from "./../../image/lock.svg"
import mail from "./../../image/mail.svg"
import phone from "./../../image/phone.svg"
import map from "./../../image/map.svg"


//import { useHistory } from 'react-router-dom';
import {UserImage} from "../../components/UserImage"
//Style Of Component
import './homePage.scss';

const HomePage = ( { data } ) => { 

  const [ selesctMenu, setSelesctMenu] = useState( "user" ) 
 
  const utilityMenu = [
    { icon:user, dataInfo:["My ID ",data.name.first, data.name.last ], label:"user" },
    { icon:mail, dataInfo:["My email ", data.email ], label:"mail"  },
    { icon:calendar, dataInfo:["My age ",data.dob.age ], label:"calendar" },
    { icon:phone, dataInfo:["My telephone number ",data.phone ], label:"phone" },
    { icon:map, dataInfo:["My country ",data.location.state,data.location.city ], label:"map" },
    { icon:lock, dataInfo:["My user ID ",data.login.username,data.login.password  ], label:"lock" },
  ];

    const dataInfoGenerate = () => {
      var infoStructure = utilityMenu.filter( (item) => item.label===selesctMenu )
      return infoStructure[0]
    }
  

    return(
        <div className="portfolio-homepage">  
          <UserImage image={data.picture}/>     
          <UserInfo info={dataInfoGenerate()} />
          <Menu utilityMenu={utilityMenu} setSelesctMenu={setSelesctMenu} selesctMenu={selesctMenu} />   
        </div>
    )
}
 

export default React.memo(HomePage);
