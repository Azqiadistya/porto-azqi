import React from "react";
import Image from 'next/image'
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  content: string;
  imageUrl: string; // Menambahkan prop imageUrl
}

function BlogPage() {
  const blogPosts: BlogPost[] = [
    { id: 1, title: 'Blog Post 1', date:'Aug 26, 2023', content: 'Lorem ipsum dolor sit amet...', imageUrl: '/blog1.png' },
    { id: 2, title: 'Blog Post 2', date:'Aug 27, 2023', content: 'Lorem ipsum dolor sit amet...', imageUrl: '/blog1.png' },
    { id: 3, title: 'Blog Post 3', date:'Aug 28, 2023', content: 'Lorem ipsum dolor sit amet...', imageUrl: '/blog1.png' },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 px-20 py-20 bg-blue-50" id="blog">
      <div>
        <h1 className="font-['Rajdhani'] text-lg font-semibold pb-1 text-blue-950">- BLOG</h1>
        <h1 className="font-['Rajdhani'] text-5xl font-black text-blue-950">My blog & news</h1>
        <button className="bg-blue-950 hover:bg-blue-900 text-white text-lg font-bold py-2 px-4 rounded">
          Get in touch
        </button>
      </div>
      <div className="col-span-2">
        <div>
          {blogPosts.map((post) => (
            <div key={post.id} className="p-5 bg-white rounded-lg flex flex-wrap justify-center grid grid-cols-4 gap-4 mb-5">
              <div>
                <Image src={post.imageUrl} width={500} height={500} alt="Picture of the author" className="rounded-lg h-full" />
              </div>
              <div className="col-span-3">
                <p className="text-lg font-['Rajdhani'] font-semibold text-blue-950">{post.title}</p>
                <p className="text-xs font-['Rajdhani'] pb-1 text-blue-900">{post.date}</p>
                <p className="text-sm font-['Rajdhani'] text-blue-900 truncate mb-0">{post.content}</p>
                <div className="flex pt-2 ">
                  <Link className="font-['Rajdhani'] text-red-600 text-sm font-bold pt-1" href={`/pages/${post.id}`} passHref>
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
