import React,{useState, useRef, useEffect} from 'react'

import {FaFacebookF, FaBars, FaTwitter, FaInstagram} from 'react-icons/fa';
import Logo from './logo.svg'
import {links, social} from './data'



export default function Navbar() {
const [showLinks, setshowLinks] = useState(false);
const linksContainerRef = useRef(null)
const linksRef = useRef(null)
   
    useEffect(() => {
            const linksHeight = linksRef.current.getBoundingClientRect().height;

          if(showLinks){
              linksContainerRef.current.style.height = `${linksHeight}px`;
          } else{
              linksContainerRef.current.style.height='opx'
          }
            
    },[showLinks])


return (
        <nav>
                <div className="nav-center">

                        <div className="nav-header">
                                <img src={Logo} className="logo" />
                                <button className='nav-toggle' onClick={()=>setshowLinks(!showLinks)}>
                                        <FaBars/>
                                </button>
                        </div>
                             <div className="links-container" ref={linksContainerRef} >
                                    <ul className="links" ref={linksRef}>
                                        {links.map((link)=>{
                                            const {id, url,text}=link;
                                           return <li key={id}> <a href={url}>  {text} </a></li>
                                        })}
                                        
                                    </ul>
                        </div>   
                      
                                <ul className="social-icons">
                                {social.map((socials)=>{
                                    const {id, icon,url} = socials;
                                           
                                           return <li key={id}> <a href={url}>  {icon} </a></li>
                                        })}
                                </ul>
                        
                </div>
        </nav>
    )
}
