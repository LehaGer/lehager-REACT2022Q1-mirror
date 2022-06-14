import { IPagination } from '../types/interfaces';

export enum paginationReducerActionVariants {
  SET_PAGE_CAPACITY = 'SET_PAGE_CAPACITY',
  SET_PAGES_COUNT = 'SET_PAGES_COUNT',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  SET_NAVIGATION_INFO = 'SET_NAVIGATION_INFO',
}
export interface IPaginationReducerAction {
  type: paginationReducerActionVariants;
  payload: IPagination;
}

export const paginationReducer = (state: IPagination, action: IPaginationReducerAction) => {
  switch (action.type) {
    case paginationReducerActionVariants.SET_PAGE_CAPACITY:
      return <IPagination>{ ...state, pageCapacity: action.payload.pageCapacity };
    case paginationReducerActionVariants.SET_PAGES_COUNT:
      return <IPagination>{ ...state, pagesCount: action.payload.pagesCount };
    case paginationReducerActionVariants.SET_CURRENT_PAGE:
      return <IPagination>{ ...state, currentPage: action.payload.currentPage };
    case paginationReducerActionVariants.SET_NAVIGATION_INFO:
      const pagesCount = action?.payload?.navigationInfo?.count
        ? Math.ceil(action?.payload?.navigationInfo?.count / state.pageCapacity)
        : 0;
      return <IPagination>{
        ...state,
        navigationInfo: action.payload.navigationInfo,
        pagesCount: pagesCount,
      };
    default:
      return <IPagination>state;
  }
};
