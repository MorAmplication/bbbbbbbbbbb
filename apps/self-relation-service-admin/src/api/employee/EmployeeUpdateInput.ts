import { EmployeeUpdateManyWithoutEmployeesInput } from "./EmployeeUpdateManyWithoutEmployeesInput";
import { EmployeeWhereUniqueInput } from "./EmployeeWhereUniqueInput";

export type EmployeeUpdateInput = {
  employees?: EmployeeUpdateManyWithoutEmployeesInput;
  employee?: EmployeeWhereUniqueInput | null;
};
