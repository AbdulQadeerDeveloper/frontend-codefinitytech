import React from "react";

const blogs = [
  {
    id: 1,
    title: "Amazon Web Scraping – Extracting Data Efficiently",
    category: "Web Scraping",
    desc: "Learn how we scrape Amazon product data using Python and manage rotating proxies for large-scale extraction.",
    images: ["/images/blogs/blog1a.jpg", "/images/blogs/blog1b.jpg"],
  },
  {
    id: 2,
    title: "Google Maps Lead Scraping – Accurate and Fast",
    category: "Web Scraping",
    desc: "We use Selenium and BeautifulSoup to collect leads from Google Maps efficiently with real-time address validation.",
    images: ["/images/blogs/blog2a.jpg", "/images/blogs/blog2b.jpg"],
  },
  {
    id: 3,
    title: "Scraping vs API Access – When to Use Which?",
    category: "Web Scraping",
    desc: "Understand when it’s better to use APIs versus scraping HTML data for reliability and performance.",
    images: ["/images/blogs/blog3a.jpg", "/images/blogs/blog3b.jpg"],
  },
  {
    id: 4,
    title: "Choosing the Right Tech: Selenium, Scrapy, or Requests?",
    category: "Web Scraping",
    desc: "Selenium for dynamic sites, Scrapy for structured crawls, Requests for quick static data — know when to pick each tool.",
    images: ["/images/blogs/blog4a.jpg", "/images/blogs/blog4b.jpg"],
  },
  {
    id: 5,
    title: "Building Modern Business Websites",
    category: "Web Development",
    desc: "We create responsive, SEO-friendly websites using React, Tailwind, and Next.js to enhance user engagement.",
    images: ["/images/blogs/blog5a.jpg", "/images/blogs/blog5b.jpg"],
  },
  {
    id: 6,
    title: "Optimizing Page Speed for Better Rankings",
    category: "Web Development",
    desc: "Fast websites rank higher — learn how to use lazy loading, CDN, and image optimization for performance.",
    images: ["/images/blogs/blog6a.jpg", "/images/blogs/blog6b.jpg"],
  },
  {
    id: 7,
    title: "Creative Logo Design for Strong Branding",
    category: "Design",
    desc: "Our logo designs tell your brand story through minimalism, color theory, and vector precision.",
    images: ["/images/blogs/blog7a.jpg", "/images/blogs/blog7b.jpg"],
  },
  {
    id: 8,
    title: "Digital Marketing That Drives Results",
    category: "Marketing",
    desc: "Learn how targeted ads, SEO content, and automated email campaigns can help your business grow.",
    images: ["/images/blogs/blog8a.jpg", "/images/blogs/blog8b.jpg"],
  },
  {
    id: 9,
    title: "Automation of Manual SEO Tasks",
    category: "Automation",
    desc: "We automate repetitive SEO tasks such as rank tracking, site audits, and backlink collection to save hours weekly.",
    images: ["/images/blogs/blog9a.jpg", "/images/blogs/blog9b.jpg"],
  },
  {
    id: 10,
    title: "How Automation Helps Rank on Google",
    category: "Automation",
    desc: "By automating keyword clustering, sitemap submissions, and content updates, we improve ranking speed and consistency.",
    images: ["/images/blogs/blog10a.jpg", "/images/blogs/blog10b.jpg"],
  },
];

export default function BlogsPage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Blogs
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Blog images */}
              <div className="grid grid-cols-2 gap-1">
                <img
                  src={b.images[0]}
                  alt={b.title}
                  className="h-40 w-full object-cover"
                />
                <img
                  src={b.images[1]}
                  alt={b.title}
                  className="h-40 w-full object-cover"
                />
              </div>

              {/* Blog content */}
              <div className="p-6">
                <span className="text-sm text-indigo-600 font-semibold">
                  {b.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-3 text-gray-800">
                  {b.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {b.desc}
                </p>
                <button className="text-indigo-600 font-semibold hover:text-indigo-800">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
