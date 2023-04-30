import { EmployeeWhereUniqueInput } from "./EmployeeWhereUniqueInput";
import { EmployeeCreateNestedManyWithoutEmployeesInput } from "./EmployeeCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  employess?: EmployeeWhereUniqueInput | null;
  employees?: EmployeeCreateNestedManyWithoutEmployeesInput;
};
