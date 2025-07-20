import MAP from "@/constants/map";

export type Coordinate = [number, number];

export interface FacilityMarker {
  facilityId: string;
  facilityType: keyof typeof MAP.FACILITY_TYPES;
  facilityName: string;
  coordinate: Coordinate;
}
