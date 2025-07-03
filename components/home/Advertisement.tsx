import Image from "next/image"


const Advertisement = () => {
  return (
    <div className="relative h-[70vh] sm:h-[50vh] w-full mt-15">

      {/* MOBILE VIEW  */}
      <div className="sm:hidden">
        <Image
          src="/images/AdImage.png"
          alt="AdImage"
          fill
          className="object-cover rounded-2xl"
        />
  
        <div className="flex flex-col gap-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="text-white text-2xl text-center font-semibold">
           Our luxury soaps are 100% natural providing nourishing benefits for your skin.
          </p>
          <button className="bg-white rounded-md py-2">SHOP ALL</button>
        </div>
      </div>

      {/* TABLETS AND LAPTOPS VIEW  */}
      <div className="hidden sm:flex sm:justify-between h-full">
        <div className="bg-primary flex flex-col items-start gap-3 justify-center px-15">
          <p className="text-white text-3xl font-semibold w-[80%]">
           Our luxury soaps are 100% natural providing nourishing benefits for your skin.
          </p>
          <button className="bg-white rounded-md py-2 w-[50%] font-semibold">SHOP ALL</button>
        </div>

        <div className="w-full h-full">
          <Image
            src="/images/AdImage.png"
            alt="AdImage"
            width={900}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  )
}

export default Advertisement