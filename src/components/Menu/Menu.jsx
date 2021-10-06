/* eslint-disable jsx-a11y/alt-text */
import React from  "react";  


//Style Of Component
import './menu.scss';

const Menu = ( { utilityMenu, setSelesctMenu, selesctMenu} ) => { 

    return(
        <div className="portfolio-menu">
          {
            utilityMenu.map((item)=> 
              <div className={"menu-container "+(item.label===selesctMenu)}  key={item.label}>  
                <button  className="menu-button" onClick={()=> setSelesctMenu(item.label) }>
                  <img src={item.icon} className="menu-icon" alt={item.label} />
                </button>
            </div> 
            )
          } 
        </div>
    )
}

export default React.memo(Menu);