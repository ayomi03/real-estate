import Button from "./Button"
import Image from "next/image"
import bedroom from '@/public/images/bedroom.jpg'


export default function Intro() {
  return (
    <div className="max-w-7xl flex flex-col md:flex-row flex-wrap justify-between items-center h-auto md:h-[50vh] my-0 mx-auto px-8 md:px-10 leading-[0.5rem] md:leading-3 transition-all duration-300 ease-in-out">
      {/* <div className="flex justify-between items-center h-[30vh] my-0 mx-auto px-8">
        <h3 className="w-[50%] text-2xl text-start font-bold">
        Whether you are searching for a cozy apartment, a spacious family home, or a lucrative investment property, Realty Plus offers a comprehensive database of listings, expert advice, and innovative tools to help you make informed decisions. Trust us to be your guide in the ever-evolving world of real estate, and let's embark on this journey together.
        </h3>

        <Button className="w-[50%]"/>
      </div> */}
        <div className="flex flex-col md:flex-row justify-between items-center">
            <h3 className="w-full md:w-[50%] text-lg md:text-2xl text-start font-bold transition-transform duration-300 ease-in-out hover:scale-105 mb-4 md:mb-0">
                Whether you are searching for a cozy apartment, a spacious family home, or a lucrative investment property, Realty Plus offers a comprehensive database of listings, expert advice, and innovative tools to help you make informed decisions. Trust us to be your guide in the ever-evolving world of real estate, and let's embark on this journey together.
            </h3>

            <Button className="w-full md:w-[50%] transition-transform duration-300 ease-in-out hover:scale-105"/>
        </div>

        <div className=" my-0 mx-auto flex justify-center items-center">
            <Image className="object-cover h-auto"
            src={bedroom} 
            alt="room bed"
            layout="responsive"
            width={300}
            height={50}
            />
        </div>
            


    </div> 
  )
}
