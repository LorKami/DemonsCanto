import React, { useEffect, useState } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import '../Monitor/Monitor.css'

import { SiDiscord } from 'react-icons/si';
import { FaWallet } from 'react-icons/fa';


const Monitor = () => {
    
    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);
      
  return (

    <div>
    
    <div className='Monitor'>
        <div className='HeroSection'>
            <div className='HeroImageLeft'
                        data-aos="fade-right"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="200"
                        data-aos-delay="900"
                        >
                            <div className="HeroSpriteFixPosition">
                                <div className='HeroSprite'></div>
                            </div>
            </div>
            <div className='HeroInfoRight' data-aos="zoom-out" data-aos-delay="1200">
                <h2>DEMONS</h2>
                <p>Welcome to a dark and mysterious world with supernatural creatures. Explore a world where darkness reigns and power is everything. Be part of our community and unleash your inner demon </p>
                <div className='HeroButton'>
                    <a href='DiscordLink' target='_blank'><p>JOIN DISCORD &nbsp;<SiDiscord size='1.2em'/></p></a>
                    <a href='#' className="Blocked"><p>WALLET COLLECT &nbsp;<FaWallet size='1.05em'/></p></a>
                </div>
            </div>
        </div>
    </div>

    {/* <div className="FormSection">
        <div className="Forms">
            <form className="form" onSubmit>
            <label>Discord name: </label>
            <input type="text" placeholder="Discord#1234" value={discord} onChange={(e) => setDetails ({...details,discord:e.target.value})} />
            <label>Wallet: </label>
            <input type="text" placeholder="Canto Wallet" value={wallet} onChange={(e) => setDetails ({...details,wallet:e.target.value})} />
            <button onClick = {PostData}>Submit</button>
            </form>
        </div>
    </div> */}

    </div>
  )
}

export default Monitor
