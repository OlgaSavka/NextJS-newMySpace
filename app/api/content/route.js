import { NextResponse } from "next/server";

// Dummy data
const posts = [
  {
    title: "Post 1",
    slug: "post-1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
  {
    title: "Post 2",
    slug: "post-2",
    content:
      "Vivamus fermentum ex nec congue varius. Maecenas non volutpat erat. Fusce euismod metus nec sapien ultrices, vel efficitur nunc facilisis.",
  },
  {
    title: "Post 3",
    slug: "post-3",
    content:
      "Sed commodo justo id lectus bibendum, ac congue ex facilisis. Duis consectetur arcu in odio gravida interdum.",
  },
  {
    title: "Post 4",
    slug: "post-4",
    content:
      "In hac habitasse platea dictumst. Nulla facilisi. Aenean ac malesuada ante, vel sodales velit. Sed ut metus eu libero fringilla bibendum.",
  },
];

export async function GET() {
  return NextResponse.json(posts);
}
