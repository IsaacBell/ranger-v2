import { presentCoords } from "@/utils/supabase/present";
import { StateCreator } from "zustand";

export interface NavigationState {
  nearbyLocations?: any[]; // todo - supabase
  lat?: number;
  lon?: number;
  altitude?: number;
}

export const createNavigationSlice: StateCreator<NavigationState, [], [], NavigationState> = (set, get) => ({
  coordinates: '',
  nearbyLocations: [],
  setCoordinates: (lat: number, lon: number, altitude?: number) => set(state => ({
    lat,
    lon,
    altitude,
    coordinates: presentCoords(lat, lon, altitude),
  })),
  setLocations: (locs: string[]) => set(state => ({
    nearbyLocations: locs,
  })),
  locationsOfType: (type: string) => get().nearbyLocations?.filter(loc => loc.type === type)
});

export default createNavigationSlice;