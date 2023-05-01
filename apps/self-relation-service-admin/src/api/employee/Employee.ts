export type Employee = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  employees?: Array<Employee>;
  employee?: Employee | null;
};
