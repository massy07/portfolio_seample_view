import React from "react"; 

//Style Of Component
import './userinfo.scss';

const UserInfo = ( { info } ) => { 
  
const { dataInfo } = info;

    return(
        <div className="portfolio-userinfo">  
          <label className="userinfo-request">{dataInfo[0]}</label> 
          <div className="userinfo-text-container"> 
            <label className="userinfo-title">{dataInfo[1]}</label> 
            {dataInfo[2]&&
              <label className="userinfo-subtitle">{dataInfo[2]}</label> 
            }
          </div> 
        </div>
    )
}
 

export default React.memo(UserInfo);
