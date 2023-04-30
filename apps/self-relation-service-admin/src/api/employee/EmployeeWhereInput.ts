import { StringFilter } from "../../util/StringFilter";
import { EmployeeWhereUniqueInput } from "./EmployeeWhereUniqueInput";
import { EmployeeListRelationFilter } from "./EmployeeListRelationFilter";

export type EmployeeWhereInput = {
  id?: StringFilter;
  employess?: EmployeeWhereUniqueInput;
  employees?: EmployeeListRelationFilter;
};
