import React from 'react';
import './About.css';
import github from './github.png';
import linkedin from './linked-in.png'
import Snehal from './snehal.jpg'
import Navbar from '../../Component/Nvabar/Navbar'
import Achal from './achal.jpg'
import Pravin from './Pravin.png'
import Vedika from './vedika.jpg'
import Shanzey from './shanzey.jpg'
import Footer  from '../../Component/Footers/footer';
import Atharva from './atharva.jpg'

function About()
{
    return(
        <>
         <Navbar/>
       

        <h1 className='main-heading'> Our Team</h1>
        <div className='main-div'>
            <div className='sub-div'>
                <img src={Vedika} className='team-imgs'/>
                <h2 className='name-heading'>Vedika Yadav</h2>
                <p className = 'team-description' > Persuing B.C.A from G H Raisoni </p> 
                <p className = 'team-description' > Institute of Engineering & Technology </p>
               <div className='link-div'>
               < a href = "https://github.com/KaveriTupe25" >
                < img src = { github }
                alt = 'github'
                className = 'gihub-img'/>
                </a> 
                < a href = 'https://www.linkedin.com/in/kaveri-tupe/' >
                < img src = { linkedin }
                alt = 'linkedin'
                className = 'linkedIn-img' />
               </a>
               </div>
            </div>

            <div className='sub-div'>
                <img src={Achal} className='team-imgs'/>
                <h2 className='name-heading'>Achal Katkar</h2>
                <p className = 'team-description' > Persuing B.Tech from Usha </p> 
                <p className = 'team-description' > Mittal Institute of Technology, Mumbai </p>
                <div className='link-div'>
               < a href = "https://github.com/KaveriTupe25" >
                < img src = { github }
                alt = 'github'
                className = 'gihub-img'/>
                </a> 
                < a href = 'https://www.linkedin.com/in/kaveri-tupe/' >
                < img src = { linkedin }
                alt = 'linkedin'
                className = 'linkedIn-img' />
               </a>
               </div>
            </div>

            <div className='sub-div'>
                <img src={Snehal} className='team-imgs'/>
                <h2 className='name-heading'>Snehal</h2>
                <p className = 'team-description' >Persuing B.E.from  </p> 
                <p className = 'team-description' > Vishwabharati Academy Engineering Collage</p>
                <div className='link-div'>
               < a href = "https://github.com/UrmilaPawar1909" >
                < img src = { github }
                alt = 'github'
                className = 'gihub-img'/>
                </a> 
                < a href = 'https://www.linkedin.com/in/urmila-pawar-3a4949278/' >
                < img src = { linkedin }
                alt = 'linkedin'
                className = 'linkedIn-img' />
               </a>
               </div>
            </div>
        </div>


        <div className='main-div'>
            <div className='sub-div'>
                <img src={Shanzey} className='team-imgs'/>
                <h2 className='name-heading'>Shanzey Shaikh</h2>
                <p className = 'team-description' > Persuing B.C.A from G H Raisoni </p> 
                <p className = 'team-description' > Institute of Engineering & Technology </p>
                <div className='link-div'>
               < a href = "https://github.com/KaveriTupe25" >
                < img src = { github }
                alt = 'github'
                className = 'gihub-img'/>
                </a> 
                < a href = 'https://www.linkedin.com/in/kaveri-tupe/' >
                < img src = { linkedin }
                alt = 'linkedin'
                className = 'linkedIn-img' />
               </a>
               </div>
            </div>


            <div className='sub-div'>
                <img src={Pravin} className='team-imgs'/>
                <h2 className='name-heading'>Pravin</h2>
                <p className = 'team-description' > Persuing B.C.A from G H Raisoni </p> 
                <p className = 'team-description' > Institute of Engineering & Technology </p>
                <div className='link-div'>
               < a href = "https://github.com/suyash2107" >
                < img src = { github }
                alt = 'github'
                className = 'gihub-img'/>
                </a> 
                < a href = 'https://www.linkedin.com/in/suyash-shinde-90a44b24a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' >
                < img src = { linkedin }
                alt = 'linkedin'
                className = 'linkedIn-img' />
               </a>
               </div>
            </div>


            <div className='sub-div'>
                <img src={Atharva} className='team-imgs'/>
                <h2 className='name-heading'>Atharva</h2>
                <p className = 'team-description' > Persuing M.C.A from G H Raisoni </p> 
                <p className = 'team-description' > Institute of Engineering & Technology </p>
                <div className='link-div'>
               < a href = "https://github.com/KaveriTupe25" >
                < img src = { github }
                alt = 'github'
                className = 'gihub-img'/>
                </a> 
                < a href = 'https://www.linkedin.com/in/kaveri-tupe/' >
                < img src = { linkedin }
                alt = 'linkedin'
                className = 'linkedIn-img' />
               </a>
               </div>
            </div>
            
        </div>
        <Footer/>
        </ >
        
    )
}


export default About