// pages/blog/BlogPost.tsx

import { useParams, useNavigate } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "./blogData";

export const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="py-24 text-center">
        <h2 className="text-2xl font-bold">Post not found</h2>
        <Button className="mt-6" onClick={() => navigate("/blog")}>
          Back to Blog
        </Button>
      </section>
    );
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-3xl">

        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate("/blog")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>

        {/* Meta */}
        <Badge className="mb-4">{post.category}</Badge>

        <h1 className="text-4xl font-bold mb-4 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-10">
          <Calendar className="h-4 w-4" />
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        {/* Article */}
        <article className="space-y-6 text-lg leading-relaxed">
          {post.fullContent.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>

      </div>
    </section>
  );
};
