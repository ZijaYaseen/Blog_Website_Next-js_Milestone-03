import { GetBlogsData } from "@/sanity/sanity.query";  // Your Sanity query to fetch data
import BlogContent from "@/components/BlogContent";  // Import the Client Component

interface IBlog {
  id: string;
  title: string;
  description: Array<{
    children: Array<{ text: string }>;
    _key: string;
    style?: string;
  }>;
  thumbnailUrl: string;
}


// Server Component to fetch data
export default async function BlogPage({ params }: { params: { id: string } }) {
  const { id } = params;  // Get the dynamic ID from the URL
  const BlogData:IBlog[] = await GetBlogsData();  // Fetch all the blog data from Sanity

  // Find the blog with the matching ID
  const blog = BlogData.find((blog) => blog.id === id);

  // Render the BlogContent Client Component with the blog data
  return <BlogContent blog={blog} id={id} />;
}
