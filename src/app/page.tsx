import Image from "next/image";
import Navbar from "@/components/navbar/navbar"
import MainHome from '@/components/home/home';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <MainHome />
    </div>
  );
}