import Image from "next/image"

const services = [
  {
    icon:"/icons/essential-oils.png",
    text: "Essential oils"
  },
  {
    icon:"/icons/natural-cosmetics.png",
    text: "Natural cosmetics"
  },
  {
    icon:"/icons/diffusers.png",
    text: "Diffusers",
    backgroundImage: "#5FD788"
  },
  {
    icon:"/icons/aromatherapy.png",
    text: "Aromatherapy"
  }
]

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row mt-10 sm:mt-25 gap-5 justify-center items-center">
      {services.map((service)=>(
        <div key={service.text} className="flex flex-col items-center justify-center w-[40%] h-[120px] sm:w-[25%] sm:h-[170px] md:w-[30%]
         bg-[#F9FAFB] shadow shadow-black/20 rounded-tr-2xl rounded-bl-2xl p-2 gap-1"
        >
          <Image
            src={service.icon}
            width={500}
            height={500}
            alt='Service' 
            className="w-[50px] h-auto sm:w-[60px]"
          />
          <p className="text-primary text-center text-[15px]">{service.text}</p>
        </div>
      ))}
    </div>
  )
}

export default Services