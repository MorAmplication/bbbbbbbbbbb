import { EmployeeWhereUniqueInput } from "./EmployeeWhereUniqueInput";
import { EmployeeUpdateManyWithoutEmployeesInput } from "./EmployeeUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  employess?: EmployeeWhereUniqueInput | null;
  employees?: EmployeeUpdateManyWithoutEmployeesInput;
};
