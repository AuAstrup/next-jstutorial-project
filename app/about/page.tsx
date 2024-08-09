import { Metadata } from "next";
import { Main } from "next/document";
import { title } from "process";

export const metadata: Metadata = {
  title: "About Us",
  description: "We are a social media company",
};

export default async function About() {
  return (
    <main>
      <h1>About us</h1>
      <p>
        We are a consulting firm that now also create social media websites!
      </p>
    </main>
  );
}
