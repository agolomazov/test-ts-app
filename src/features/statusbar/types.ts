export enum Status {
  Blank,
  Success,
  Fail,
  InProcess
}

export interface StatusItem {
  title: string;
  label: string;
};

export interface ActiveStatus {
  label: string,
  status: Status,
}

export interface Statusbar {
  stepsList: Array<StatusItem>,
  activeStatus: ActiveStatus | null,
}

export interface Action {
  type: string,
  payload: ActiveStatus | null;
}