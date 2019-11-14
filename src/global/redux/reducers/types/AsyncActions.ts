export interface AsyncAction {
  payload: Payload;
  type: string;
}

export interface Payload {
  status: AsyncActionStatus;
  response: any;
}
export enum AsyncActionStatus {
  loading,
  error,
  success
}
