export interface ActionType {
  AddTask: string;
  SavingLocal: string;
  ToggleTask: string;
  RemoveTask: string;
  UpdateTask: string;
}

export interface TaskType {
  id?: string | number;
  name?: string;
  date?: string;
  priority?: string;
  category?: string;
  user?: string;
  completed?: boolean;
  createdAt?: string;
}

export interface Actions {
  type: string;
  payload: payloadType;
}

export interface payloadType extends TaskType {}

export let ACTIONS: ActionType = {
  AddTask: "addtask",
  ToggleTask: "displayTask",
  RemoveTask: "removetask",
  UpdateTask: "updatetask",
  SavingLocal: "savingToLocal",
};

export function TaskReducer(Tasks: TaskType[], action: Actions): TaskType[] {
  switch (action.type) {
    case ACTIONS.AddTask:
      return [
        ...Tasks,
        {
          id: action.payload.id,
          name: action.payload.name,
          priority: action.payload.priority,
          category: action.payload.category,
          date: action.payload.date,
          user: action.payload.user,
          completed: false,
          createdAt: new Date().toISOString().split("T")[0],
        },
      ];

    case ACTIONS.SavingLocal:
      localStorage.setItem("task", JSON.stringify(Tasks));
      return Tasks;

    case ACTIONS.RemoveTask:
      const UpdateTask = Tasks.filter((task) => task.id !== action.payload.id);
      localStorage.setItem("task", JSON.stringify(UpdateTask));
      return UpdateTask;

    case ACTIONS.ToggleTask:
      return Tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      );
    default:
      return Tasks;
  }
}
