import Image from "next/image";
import Link from "next/link";
import { GetBlogsData } from "@/sanity/sanity.query";
import { log } from "console";


export default async function Home() {

  
  interface IBlog {
    id: string;
    title: string;
    description: Array<{
      children: Array<{ text: string }>;
      _key: string;
    }>;
    thumbnailUrl: string;
  }

  const BlogData :IBlog[] = await GetBlogsData()
  // console.log(JSON.stringify(BlogData, null, 7));
  // console.log(BlogData.map((blog) => blog.title));

  

  return (
 
    <div className="mt-14 w-full min-h-screen bg-gradient-to-t from-blue-50 to-blue-100 max-w-[1440vw]">

       <main className="container mx-auto lg:px-6 py-16 w-[95%]">
        <section className="text-center mb-10">
          <h2 className="lg:text-4xl text-3xl font-bold text-blue-900">Explore The Latest AI Technology Trends And Insights</h2>
          <p className="mt-4 text-gray-600 lg:px-20">Discover the latest insights, trends, and breakthroughs in AI technology right here on our website. Explore how these innovations are driving transformation in areas like healthcare, finance, and transportation, and stay updated on the evolving potential of AI to reshape our lives and work.</p>
        </section>
       
        <section className="flex flex-wrap gap-6 justify-center">
  {BlogData.map((blog:any) => (
    <article
  key={blog.title} 
  className="flex flex-col w-[350px] h-[450px] bg-white p-2 rounded-xl gap-4
             hover:shadow-lg hover:transform hover:-translate-y-2 hover:duration-500 ease-in-out
             hover:shadow-blue-300 hover:border-2 hover:border-blue-300 border-2 border-transparent"
>
  <div>
    <Image
      src={blog.thumbnailUrl} 
      alt={`Image for ${blog.title}`}
      className="w-full h-48 rounded-md shadow-md transition-shadow shadow-gray-500"
      width={350} 
      height={192} 
    />
  </div>
 <div>
 <h3 className="lg:text-[20px] text-lg font-semibold text-gray-800">{blog.title}</h3>
 <p className="mt-2 text-gray-600 flex-grow">{blog.description.flatMap((block:any) => block.children.map((child:any) => child.text))
    .join(" ")
    .split(" ")
    .slice(0, 23)
    .join(" ") + " ....."}</p>
 </div>
  
<div className="py-3">
<Link href={`blogs/${blog.id}`} 
       className="rounded-xl px-4 py-3
                  transition-all duration-300 ease-in-out bg-blue-500 text-white
                  hover:border-blue-700">
       Read more
    </Link>
</div>
 
</article>

  
  ))}
</section>


      </main>

    
    </div>
  );
}