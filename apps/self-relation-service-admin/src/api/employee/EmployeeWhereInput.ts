import { StringFilter } from "../../util/StringFilter";
import { EmployeeListRelationFilter } from "./EmployeeListRelationFilter";
import { EmployeeWhereUniqueInput } from "./EmployeeWhereUniqueInput";

export type EmployeeWhereInput = {
  id?: StringFilter;
  employees?: EmployeeListRelationFilter;
  employee?: EmployeeWhereUniqueInput;
};
