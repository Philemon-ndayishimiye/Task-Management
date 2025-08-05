export interface InputType {
  name: string;
  type: string;
  placeholder?: string;
  value: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonType {
  label: string;
  type: "submit" | "reset" | "button";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface SelectType {
  name: string;
  value: string | number;  
  options: (string | number)[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
