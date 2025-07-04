import Image from 'next/image'

const BestSellers = () => {
  return (
    <section className='flex flex-col md:flex-row md:justify-between gap-10 items-center justify-center mt-15'>
      <div className='relative'>
        <Image
          src="/images/BestSellersCover.png"
          alt="Best Sellers" 
          width={500}
          height={500}
          className='w-auto h-auto'
        />
        <div className='flex flex-col gap-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          '
        >
          <h1 className='text-4xl text-primary font-semibold'>Bestsellers</h1>
          <button className='bg-primary py-2 text-white rounded-md'>SHOP ALL</button>
        </div>
      </div>

      <div className='flex flex-col gap-4 md:flex-row md:gap-2'>
        <div className='relative'>
          <Image
            src="/images/bestSellerOne.png"
            width={500}
            height={500}
            alt="bestSellerOne"
            className='w-auto h-auto'
          />

          <section className='absolute bottom-1 left-5 backdrop-blur-sm py-2 rounded-bl-full'>
            <div className='flex gap-2'>
              <h3 className='font-semibold text-[14px]'>Aroma Diffuser</h3>
              <button className='text-[10px] bg-primary rounded-full text-white px-3'>$20</button>
            </div>
            <div>
              <p className='text-secondary text-[12px]'>Original product comes in three styles of color,usb charger</p>
            </div>
          </section>
        </div>

        <div className='relative'>
          <Image
            src="/images/bestSellerTwo.png"
            width={500}
            height={500}
            alt="bestSellerTwo"
            className='w-auto h-auto'
          />

          <section className='absolute bottom-1 left-5 backdrop-blur-sm py-2 rounded-bl-full'>
            <div className='flex gap-2'>
              <h3 className='font-semibold text-[14px]'>Lux Aroma Diffuser</h3>
              <button className='text-[10px] bg-primary rounded-full text-white px-3'>$20</button>
            </div>
            <div>
              <p className='text-secondary text-[12px]'>Original product comes in three styles of color,usb charger</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default BestSellers