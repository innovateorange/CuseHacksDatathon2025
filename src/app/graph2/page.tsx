import Navbar from "@/components/navbar/navbar";
import Graph2Component from "../../components/graph2/graph2";

export default function Graph2() {
  return (
    <div className="min-h-screen bg-[#eae6df]">
      <Navbar />
      <div>
        {/* Use the Graph2Component */}
        <Graph2Component/>
      </div>
    </div>
  );
}