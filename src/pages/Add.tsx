import Aside from "../components/Aside";
import Navigation from "../components/Navigation";
import TaskForm from "../components/TaskForm";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-[200px_1fr] pt-1 mx-3">
      <div>
        <Aside />
      </div>

      <div>
        <Navigation />
        <TaskForm />
      </div>
    </div>
  );
}
