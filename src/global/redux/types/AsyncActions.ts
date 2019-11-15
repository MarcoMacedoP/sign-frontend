export interface AsyncAction {
  payload: Payload;
  type: string;
}

export interface Payload {
  status: "loading" | "error" | "success";
  response: any;
}
