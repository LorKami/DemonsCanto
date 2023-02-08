import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import '../Navbar/Navbar.css'

import { SiTwitter } from 'react-icons/si';
import { SiDiscord } from 'react-icons/si';
import { GiSaxophone } from 'react-icons/gi';
import { GiDevilMask } from 'react-icons/gi';
import { SiNodemon } from 'react-icons/si';
import { FaWallet } from 'react-icons/fa';

const Navbar = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>

        <div className='Navbar' data-aos="fade-right" data-aos-delay="2500">
            <div className='Socials'>
                <a className='buttonHome' href='/'><SiNodemon size='2.5rem'/><span className="tooltip-home">HOME</span></a>
                <a className='buttontwitter' href='https://twitter.com/CantoDemons' target='_blank'><SiTwitter size='2.5rem'/><span className="tooltip-twitter">TWITTER</span></a>
                <a className='buttondiscord' href='https://discord.gg/2qtzS8P4' target='_blank'><SiDiscord size='2.5rem'/><span className="tooltip-discord">DISCORD</span></a>
                <a className='buttoncantos BlockedCantos' href='#'><GiSaxophone size='2.5rem'/><span className="tooltip-cantos">ALTO.BUILD</span></a>
                <a className='buttonwallet BlockedForm' href='#'><FaWallet size='2.5rem'/><span className="tooltip-wallet">WALLET COLLECT</span></a>
                <a className='buttonmint BlockedMint' href='#'><GiDevilMask size='2.5rem'/><span className="tooltip-mint">MINT</span></a>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
