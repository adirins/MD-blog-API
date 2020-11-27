import React, { useEffect } from 'react'
import Article from './article'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Hero = ()  => {   
    
    // const Video = require("./video.mp4") 
    
    useEffect(() => {
        alert("Wow")
        toast('Wow!')//kapēc nestrada??
    },[])
    
   
    return (
        <section>      
             <div className="container container-fluid">
                <div className="row">
                    <div className="col-xs-12">
                        <h1>
                            Welcome to my blog!
                        </h1>
                         {/* <video autoPlay loop muted  className="video" >
                            <source src={Video} type="video/mp4"/>
                        </video> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <div >
                            <Article/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}