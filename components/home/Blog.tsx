import Image from "next/image"

const blogs = [
    {
      src: "/images/BlogImg.png",
      title: "How to create your own essential oil diffuser blends",
      text: "As you begin making your own oil diffusers, it's important to keep a few pointers in mind"
    },
    {
      src: "/images/BlogImg.png",
      title: "How to create your own essential oil diffuser blends",
      text: "As you begin making your own oil diffusers, it's important to keep a few pointers in mind"
    },
    {
      src: "/images/BlogImg.png",
      title: "How to create your own essential oil diffuser blends",
      text: "As you begin making your own oil diffusers, it's important to keep a few pointers in mind"
    }
]

const Blog = () => {
  return (
    <>  
      <h1 className="text-primary font-semibold text-4xl text-center mt-15">BLOG</h1>
      <div className="mt-10 flex flex-col sm:flex-col md:flex-row gap-3 items-center justify-center">
        {blogs.length > 0 ? blogs.map((blog,index)=>
          <div key={index} className="w-[50%] mt-4">
            <Image 
             src={blog.src}
             width={500}
             height={500}
             alt="BlogImage"
             className="w-full h-auto object cover"
            />
  
            <div className="px-4 py-2 shadow-xl">
              <p className="text-primary font-[600] text-[15px] border-b border-b-gray-300 py-1">{blog.title}</p>
              <p className="font-[400] text-[13px] line-clamp-2">{blog.text}</p>
            </div>
          </div>
        )   
        :
        <h2>No blogs to show</h2>
        }
      </div>
    </>
  )
}

export default Blog