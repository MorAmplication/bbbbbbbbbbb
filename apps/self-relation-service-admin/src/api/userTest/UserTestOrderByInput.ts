import { SortOrder } from "../../util/SortOrder";

export type UserTestOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  password?: SortOrder;
  username?: SortOrder;
};
