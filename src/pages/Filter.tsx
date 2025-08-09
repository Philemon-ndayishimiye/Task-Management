import Aside from "../components/Aside";
import FilterComp from "../components/FilterComp";
import Navigation from "../components/Navigation";

export default function Filter() {
  return (
    <div className="grid grid-cols-[200px_1fr] pt-1 mx-3 pb-10">
      <div>
        <Aside />
      </div>

      <div>
        <Navigation />
        <FilterComp />
      </div>
    </div>
  );
}
