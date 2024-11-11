import resumeImg from '../resume.jpg';

export default function Resume () {
         const config ={
            link: 'https://drive.google.com/file/d/1z1tmn0ChpftkEmNVxq58Nc0Hyz7pP8m6/view?usp=drivesdk'
         } 

    return <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5 justify-center '>
        <div className='py-5 md:w-1/2  flex justify-center md:justify-end'>
            <img className='w-[300px]' src={resumeImg} />
        </div>
        <div className='md:w-1/2 flex justify-center  text-white'>
            <div className=' text-white flex flex-col justify-center '>
                <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[140px] font-bold ' >Resume</h1>
               <p>you can view my resume <a className='btn' href={config.link} > Download</a></p>
            </div> 
        </div>
    </section>
}