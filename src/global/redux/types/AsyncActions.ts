export interface AsyncAction {
  payload: Payload;
  type: string;
}

export interface Payload {
  status: PayloadStatus;
  response: any;
}
export type PayloadStatus = "loading" | "error" | "success";
