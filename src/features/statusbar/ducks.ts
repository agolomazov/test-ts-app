import { ActiveStatus, StatusItem, Statusbar, Action } from './types';

export const RESET_STATUS = 'RESET_STATUS';
export const CHANGE_STATUS = 'CHANGE_STATUS';

export const resetStatus = () => ({
  type: RESET_STATUS,
});

export const changeStatus = (payload: ActiveStatus) => ({
  type: CHANGE_STATUS,
  payload,
});

export interface Action {
  type: string,
  payload: ActiveStatus | null;
}

const stepsList: Array<StatusItem> = [
  {
    title: 'Данные клиента',
    label: 'clientCheck',
  },
  {
    title: 'Проверка ЕПГУ',
    label: 'epguCheck',
  },
  {
    title: 'Проверка ЕСИА',
    label: 'esiaCheck',
  },
  {
    title: 'Выпуск сертификата',
    label: 'createCert',
  },
  {
    title: 'Завершение',
    label: 'completed',
  }
];

const initialState: Statusbar = {
  stepsList,
  activeStatus: null,
};

export const statusbarReducer = (
  state: Statusbar = initialState,
  { type, payload }: Action
) => {
  switch (type) {
    case RESET_STATUS:
      return initialState;
    case CHANGE_STATUS:
      return {
        ...state,
        activeStatus: payload,
      }
    default:
      return state;
  }
};