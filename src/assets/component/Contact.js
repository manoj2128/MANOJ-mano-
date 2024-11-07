import resumeImg from '../resume.jpg';

export default function Contact () {
        const config = {
            email : ' mr0448682@gmail.com',
            phone: '9488656991',
        }
    return <section id='contact' className=' flex flex-col  bg-primary px-5 py-32 justify-center '>
        <div className=' flex flex-col items-center  text-white '>
                <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[140px] font-bold ' >Contact</h1>
                 <p className='contact'>If yo want to discuss more in detail, please contact me</p> 
                 <p className='contact py-2'><spam className='font-bold'>Email :</spam>{config.email} </p>
                 <p className='contact py-2'><spam className='font-bold'>phone :</spam> {config.phone}</p>
        </div>
    </section>
}