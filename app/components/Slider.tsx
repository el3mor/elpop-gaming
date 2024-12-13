import Image from 'next/image'
import Link from 'next/link';
import 'swiper/css';


type Props = {
  backgroundSrc: string,
  title: string,
  text:string,
  logoSrc:string,
  btnColor:string,
  gameId?:string
}

const Slider = ({backgroundSrc, title, text, logoSrc,btnColor,gameId}: Props) => {
  return (
    
    <div className="relative w-full h-full">
      <video autoPlay muted loop className=' absolute w-full h-full object-cover object-top rounded-2xl  inset-0'>
        <source src={backgroundSrc} type="video/mp4"/>
      </video>
      <div className='relative flex flex-col z-10 w-full h-full justify-center text-white pl-20'>
        <div className='w-96 h-40 flex flex-col justify-center relative'>
          <Image src={logoSrc} alt='logo' fill={true} className='object-contain'/>
        </div>
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="text-base text-gray-200 max-w-sm">{text}</p>
        <div className="mt-7 relative">
          <Link href={`games/${gameId}`} className={`${btnColor} text-sm px-4 py-2 rounded-full `}>Find out more !</Link>
        </div>
      </div>
    </div>

  )
}

export default Slider
