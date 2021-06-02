import React from 'react'
import '../Header/Header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faBars, faCaretDown,faSearch, faUserPlus} from '@fortawesome/free-solid-svg-icons';
function Header(){
    return(
        <div className="navbar">
            
             <div className="boxLogo">
                 <a href="logo">IMDb</a>
                </div>
             
            <div className="leftSide">
                <div className="boxLinks">
                    <div className="boxMenu">
                     
                     <a href="menu"> <FontAwesomeIcon icon={faBars}/> Menu  </a>

                    </div>
               
                    <div className="boxSearch">
                      <a href="all">All <FontAwesomeIcon icon={faCaretDown}/> </a>
                      
                      <input type="text"  /> 
                      <button><FontAwesomeIcon icon={faSearch}/> </button>
                      
                    </div>
                </div>


            </div>
            <div className="rightSide">
                   

                    <ul className="boxLinks">
                        <li>
                         <a href="IMDbpro">IMDbpro</a>
                        </li>
                        <li>
                          |
                    
                        </li>
                        <li>
                          <a href="watchlist"><FontAwesomeIcon icon={faUserPlus}/>  Watchlist</a>
                        </li>
                        <li>
                          <a href="sing in">Sing in</a>
                        </li>
                    </ul>
                    
            </div>
         

        </div>
    )
}
export default Header;