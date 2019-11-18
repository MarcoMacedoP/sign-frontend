export type fetchStatus = "loading" | "error" | "success" | null;
export type toggleFunctions =
  | Function
  | boolean
  | React.Dispatch<React.SetStateAction<boolean>>;
