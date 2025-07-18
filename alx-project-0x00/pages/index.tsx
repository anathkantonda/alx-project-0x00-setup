import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export interface PillProps {
  title: string
}

export interface ButtonProps {
  title: string;
  styles: string; // Required according to the error
  onClick?: () => void;
}

const Home: React.FC = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
      <h1>Airbnb Application Clone system</h1>
      <button className=" border px-3 py-1 text-lg mt-3  bg-blue-500 text-white rounded-full">Get Started</button>
    </main>
  )
}

export default Home;