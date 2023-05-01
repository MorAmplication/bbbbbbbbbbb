import { EmployeeCreateNestedManyWithoutEmployeesInput } from "./EmployeeCreateNestedManyWithoutEmployeesInput";
import { EmployeeWhereUniqueInput } from "./EmployeeWhereUniqueInput";

export type EmployeeCreateInput = {
  employees?: EmployeeCreateNestedManyWithoutEmployeesInput;
  employee?: EmployeeWhereUniqueInput | null;
};
