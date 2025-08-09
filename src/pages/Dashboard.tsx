import Aside from "../components/Aside";
import DisplayTask from "../components/DisplayTask";
import Navigation from "../components/Navigation";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-[200px_1fr] pt-1 mx-3 pb-10">
      <div>
        <Aside />
      </div>

      <div>
        <Navigation />
        <DisplayTask />
      </div>
    </div>
  );
}
