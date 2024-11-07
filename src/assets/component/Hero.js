import { LuSubtitles } from 'react-icons/lu';
import maImg from '../ma.png'
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";   
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { LiaLinkedin } from 'react-icons/lia';

export default function Hero() {
        const config = {
          subtitle: 'im a Full-Stack developer',
          social: {
               Instagram: 'https://www.instagram.com/mind__fighter__21/profilecard/?igsh=MWIzcG84andqZTgxYg==',
               Facebook: 'https://www.facebook.com/profile.php?id=100031128007547',
               Linkedin:'https://www.linkedin.com/in/manoj-r-26994429a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          }
        }    

     return  <section className='flex flex-col md:flex-row px-5 py-32 bg-primary  justify-center'>
        <div className='md:w-1/2 flex flex-col'>
             <h1 className= ' text-white text-6xl font-hero-font '>Hi, <br/> im <span className='text-black'>MR</span>  Mano
                  <p className='text-2xl'>{config.subtitle}</p>
             </h1>
              <div className='flex py-10 ' >
                   <a href={config.social.Instagram}className='pr-5  hover:text-white'><AiOutlineInstagram size={40}/></a>
                   <a href={config.social.Facebook}className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
                   <a href={config.social.Linkedin}className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
                
              </div>
        </div>
         <img className=' md:w-1/4' src={maImg} />
     </section>
}