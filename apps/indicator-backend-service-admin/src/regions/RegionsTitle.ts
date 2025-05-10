import { Regions as TRegions } from "../api/regions/Regions";

export const REGIONS_TITLE_FIELD = "id";

export const RegionsTitle = (record: TRegions): string => {
  return record.id?.toString() || String(record.id);
};
