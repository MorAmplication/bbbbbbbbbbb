import { Employee as TEmployee } from "../api/employee/Employee";

export const EMPLOYEE_TITLE_FIELD = "xsdaxsza";

export const EmployeeTitle = (record: TEmployee): string => {
  return record.xsdaxsza || String(record.id);
};
