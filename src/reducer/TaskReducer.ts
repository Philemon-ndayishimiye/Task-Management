export interface ActionType {
  AddTask: string;
  DisplayTask: string;
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
}

export interface Actions {
  type: string;
  payload: payloadType;
}

export interface payloadType extends TaskType {}

export let ACTIONS: ActionType = {
  AddTask: "addtask",
  DisplayTask: "displayTask",
  RemoveTask: "removetask",
  UpdateTask: "updatetask",
};

export function TaskReducer(Tasks: TaskType[], action: Actions):TaskType[] {
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
        },
      ];
    
     default:
      return Tasks;   
  }


}
