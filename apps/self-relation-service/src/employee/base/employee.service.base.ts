/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Employee } from "@prisma/client";

export class EmployeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.EmployeeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeFindManyArgs>
  ): Promise<number> {
    return this.prisma.employee.count(args);
  }

  async findMany<T extends Prisma.EmployeeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeFindManyArgs>
  ): Promise<Employee[]> {
    return this.prisma.employee.findMany(args);
  }
  async findOne<T extends Prisma.EmployeeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeFindUniqueArgs>
  ): Promise<Employee | null> {
    return this.prisma.employee.findUnique(args);
  }
  async create<T extends Prisma.EmployeeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeCreateArgs>
  ): Promise<Employee> {
    return this.prisma.employee.create<T>(args);
  }
  async update<T extends Prisma.EmployeeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeUpdateArgs>
  ): Promise<Employee> {
    return this.prisma.employee.update<T>(args);
  }
  async delete<T extends Prisma.EmployeeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeDeleteArgs>
  ): Promise<Employee> {
    return this.prisma.employee.delete(args);
  }

  async findEmployees(
    parentId: string,
    args: Prisma.EmployeeFindManyArgs
  ): Promise<Employee[]> {
    return this.prisma.employee
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .employees(args);
  }

  async getEmployess(parentId: string): Promise<Employee | null> {
    return this.prisma.employee
      .findUnique({
        where: { id: parentId },
      })
      .employess();
  }
}
