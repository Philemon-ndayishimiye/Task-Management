import Aside from "../components/Aside";
import CompleteComp from "../components/CompleteComp";
import Navigation from "../components/Navigation";

export default function CompletePage() {
  return (
    <div className="grid grid-cols-[200px_1fr] pt-1 mx-3 pb-10">
      <div>
        <Aside />
      </div>

      <div>
        <Navigation />
        <CompleteComp />
      </div>
    </div>
  );
}
