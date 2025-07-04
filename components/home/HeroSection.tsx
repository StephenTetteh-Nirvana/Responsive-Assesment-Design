import Image from "next/image"


const HeroSection = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center mt-15 sm:flex-row sm:justify-between md:justify-around">
      <section className="order-2 sm:order-1 md:w-[450px]">
        <div>
          <h2 className="text-4xl sm:text-5xl text-primary text-center sm:text-left font-[600]">Pear kiwi</h2>
          <h2 className="text-4xl sm:text-5xl text-center text-primary sm:text-left font-[600]">& Mint</h2>
        </div>
        <div className="mt-4">
          <p className="text-secondary text-[14px] sm:text-[15px]  text-center sm:text-left">They say that home is where the heart is. Perhaps that's why a feeling of loss is apparent 
            when you are far from the ones you love
          </p>
        </div>
      </section>

      <section className="relative order-1 sm:order-2">
        <Image
          src="/images/heroImageBackground.png"
          width={500}
          height={500}
          className="w-auto h-auto sm:w-[500px] md:w-[350px]"
          alt="heroBackground"
        />
        <Image
          src="/images/hero.png"
          width={500}
          height={500}
          className="w-auto h-auto sm:w-[450px] md:w-[150px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3"
          alt="heroPng" 
        />
      </section>
    </div>
  )
}

export default HeroSection