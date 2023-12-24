import { create } from 'zustand'
import createNavigationSlice, { NavigationState } from './NavigationSlice';

export interface UserState {
  prefs: any;
}

export const useRangerStore = create<UserState & NavigationState>()((...state) => ({
  ...createNavigationSlice(...state),
  prefs: {}
}))

export default useRangerStore;

