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
        },
      ];

    case ACTIONS.RemoveTask:
      return Tasks.filter((task) => task.id !== action.payload.id);

    case ACTIONS.ToggleTask:
      return Tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      );

    case ACTIONS.SavingLocal:
      localStorage.setItem("task", JSON.stringify(Tasks));
      return Tasks;
    default:
      return Tasks;
  }
}
