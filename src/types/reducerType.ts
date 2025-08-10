export type ActionType =
  | {
      type: "Add Task";
      payload: {
        id?: string | number;
        name?: string;
        date?: string;
        priority?: string;
        category?: string;
        user?: string;
        completed?: boolean;
        createdAt?: string;
      };
    }
  | { type: "Toggle Task"; payload: { id: string | number } }
  | { type: "Remove task"; payload: { id: string | number } }
  | {
      type: "Update Task";
      payload: {
        id?: string | number;
        name?: string;
        date?: string;
        priority?: string;
        category?: string;
        user?: string;
        completed?: boolean;
        createdAt?: string;
      };
    };
