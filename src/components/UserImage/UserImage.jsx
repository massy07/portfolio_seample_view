import React  from "react"; 
//import { useHistory } from 'react-router-dom';

//Style Of Component
import './userImage.scss';

const UserImage = ( { image } ) => { 


    return(
        <div className="portfolio-userimage"> 
          <img className="userimage-view" src={image.large} alt={image.large} />
        </div>
    )
}

export default React.memo(UserImage);