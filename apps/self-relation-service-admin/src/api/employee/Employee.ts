export type Employee = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  employess?: Employee | null;
  employees?: Array<Employee>;
};
