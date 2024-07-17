import Image from "next/image";
import Link from 'next/link'
import Hero from './_components/Hero'
import Intro from "./_components/Intro";

export default function Home() {
  return (
    <div>
      <Hero />
      <Intro />
    </div>
  )
}
