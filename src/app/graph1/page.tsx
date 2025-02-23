import Navbar from "@/components/navbar/navbar";
import Graph1Component from "../../components/graph1/graph1";

export default function Graph1() {
  return (
    <div className="min-h-screen bg-[#eae6df]">
      <Navbar />
      <div>
        {/* Use the Graph1Component */}
        <Graph1Component/>
      </div>
    </div>
  );
}