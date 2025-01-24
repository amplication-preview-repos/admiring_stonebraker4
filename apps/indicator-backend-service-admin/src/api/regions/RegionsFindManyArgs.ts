import { RegionsWhereInput } from "./RegionsWhereInput";
import { RegionsOrderByInput } from "./RegionsOrderByInput";

export type RegionsFindManyArgs = {
  where?: RegionsWhereInput;
  orderBy?: Array<RegionsOrderByInput>;
  skip?: number;
  take?: number;
};
