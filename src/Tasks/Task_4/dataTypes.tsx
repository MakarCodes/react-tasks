export interface IUser {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface IPaginationState {
  actualPageIdx: number;
  lastPageIdx: number;
  entriesOnSelectedPage: () => IUser[];
  isBusy: boolean;
}
export interface IPaginationActions {
  goToFirstPage: () => void;
  goToPreviousPage: () => void;
  goToPage: (pageNumber: number) => void;
  goToNextPage: () => void;
  goToLastPage: () => void;
}

export type paginationTuple = [IPaginationState, IPaginationActions];
