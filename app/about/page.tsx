export const dynamic = "force-static";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "This is my next.js experimental website!",
};

export default async function About() {
  return (
    <main>
      <h1>About</h1>
      <p>This is my next.js experimental website!</p>
    </main>
  );
}
