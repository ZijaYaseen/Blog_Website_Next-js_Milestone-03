import Image from "next/image";
import Link from "next/link";
import BlogsSection from "@/components/BlogsSection";


export default async function Home() {
  

  return (
 
    <div className="w-full min-h-screen bg-gradient-to-t from-blue-50 to-blue-100 max-w-[1440vw]">

<section className="relative">
  <Image 
    src="/home.svg" 
    alt="home" 
    width={80} 
    height={80} 
    className="w-full h-[720px] lg:h-auto object-cover" 
  />
  
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
    {/* Background Overlay */}
    <div className="absolute inset-0 bg-black opacity-80"></div>
    
    {/* Content */}
    <h2 className="lg:text-4xl text-3xl tracking-wider font-bold text-white relative z-10">
      Explore The Latest AI Technology Trends And Insights
    </h2>
    <p className="mt-4 text-gray-200 lg:px-44 text-sm lg:text-base relative z-10">
      Discover the latest insights, trends, and breakthroughs in AI technology right here on our website. Explore how these innovations are driving transformation in areas like healthcare, finance, and transportation, and stay updated on the evolving potential of AI to reshape our lives and work.
    </p>
    <Link href={"/blogs"} className="mt-6 tracking-wider px-6 py-3 lg:px-10 lg:py-4 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 relative z-10">
      Latest Blogs
    </Link>
  </div>
</section>





{/* blogs section */}
 <BlogsSection />
      
      
    
    </div>
  );
}
