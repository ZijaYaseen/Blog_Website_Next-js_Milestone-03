"use client"; // Indicate this is a Client Component

import { useState, useEffect } from "react";
import Image from "next/image";

// Define the structure of the blog data
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

export default function BlogContent({
  blog,
  id,
}: {
  blog: IBlog | undefined;
  id: string;
}) {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  useEffect(() => {
    // Load comments from localStorage after the component has mounted
    if (typeof window !== "undefined") {
      const savedComments = localStorage.getItem(`comments-${id}`);
      if (savedComments) {
        setComments(JSON.parse(savedComments));
      }
      setIsHydrated(true); // Mark hydration complete
    }
  }, [id]);

  // If the blog data is not found, show a "Not Found" message
  if (!blog) {
    return (
      <div className="text-center flex flex-col justify-center items-center h-screen">
        <h1 className="text-2xl font-bold text-red-600">Blog Not Found</h1>
        <p>The requested blog with ID {id} does not exist.</p>
      </div>
    );
  }

  // Handle adding a new comment
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);

      // Save updated comments to localStorage
      localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));
      setNewComment(""); // Clear input field after adding comment
    }
  };

  return (
    <div className="container mx-auto px-3 lg:py-10 py-5 mt-14 w-full min-h-screen">
      <h1 className="flex justify-center lg:text-3xl text-2xl font-bold text-blue-900">
        {blog.title}
      </h1>

      <div className="flex justify-center">
        <Image
          src={blog.thumbnailUrl}
          alt={blog.title}
          width={900}
          height={300}
          className="mt-6 h-auto rounded-md shadow-md shadow-black"
        />
      </div>

      <div className="mt-6">
        {blog.description.map((block) => {
          if (block.style === "h3") {
            return (
              <h1 key={block._key} className="lg:text-2xl text-xl font-bold text-gray-900 mb-4 lg:w-[72%] mx-auto">
                {block.children.map((child) => child.text).join(" ")}
              </h1>
            );
          }
          return (
            <p key={block._key} className="text-gray-700 mb-4 lg:w-[72%] mx-auto">
              {block.children.map((child) => child.text).join(" ")}
            </p>
          );
        })}
      </div>

      {/* Comment Section */}
      <div className="mt-10 lg:w-[72%] mx-auto">
        <h2 className="text-xl font-bold text-gray-800">Comments</h2>
        <div className="mt-4 flex flex-col gap-2">
          <textarea
            className="border border-gray-300 rounded-md p-2 w-full h-24"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            onClick={handleAddComment}
            disabled={!isHydrated} // Disable button until hydration completes
          >
            Add Comment
          </button>
        </div>

        {isHydrated && (
          <ul className="mt-4 space-y-3">
            {comments.map((comment, index) => (
              <li key={index} className="p-3 bg-gray-100 rounded-md shadow-sm text-gray-700">
                {comment}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
