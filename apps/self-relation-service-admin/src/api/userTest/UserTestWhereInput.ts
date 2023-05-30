import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserTestWhereInput = {
  id?: StringFilter;
  password?: StringNullableFilter;
  username?: StringNullableFilter;
};
