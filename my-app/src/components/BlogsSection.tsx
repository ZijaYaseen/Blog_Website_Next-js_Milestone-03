import Link from "next/link"
import Image from "next/image"
import { GetBlogsData } from "@/sanity/sanity.query"

export default async function BlogsSection () {
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
    <main className="container mx-auto lg:px-6 py-16 w-[95%]"> 

    <h1 className="mb-4 lg:mb-8 lg:tracking-wider text-blue-900 font-bold lg:text-5xl text-4xl text-center">Latest Blogs</h1>   
   
    <section className="flex flex-wrap gap-6 justify-center">
{BlogData.map((blog) => (
<article
key={blog.title} 
className="flex flex-col w-[350px] h-[450px] lg:h-[425px] bg-white p-2 rounded-md gap-4
         hover:shadow-lg hover:transform hover:-translate-y-2 hover:duration-500 ease-in-out
         hover:shadow-blue-300 hover:border-2 hover:border-blue-300 border-2 border-transparent shadow-lg"
>
<div>
<Image
  src={blog.thumbnailUrl} 
  alt={`Image for ${blog.title}`}
  className="w-full h-48 rounded-sm shadow-md transition-shadow shadow-gray-500"
  width={350} 
  height={192} 
/>
</div>
<div>
<h3 className="lg:text-[20px] tracking-wide text-lg font-semibold text-gray-800">{blog.title}</h3>
<p className="mt-2 text-gray-600 flex-grow">{blog.description.flatMap((block) => block.children.map((child) => child.text))
.join(" ")
.split(" ")
.slice(0, 18)
.join(" ") + " ...."}</p>
</div>

<div className="py-3">
<Link href={`blogs/${blog.id}`} 
   className="rounded-md px-4 py-3
              transition-all duration-300 ease-in-out bg-blue-500 text-white
              hover:bg-blue-600">
   Read more
</Link>
</div>

</article>


))}
</section>


  </main>
  )
}
