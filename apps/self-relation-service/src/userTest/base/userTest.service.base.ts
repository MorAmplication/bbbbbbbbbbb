/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, UserTest } from "@prisma/client";

export class UserTestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.UserTestFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserTestFindManyArgs>
  ): Promise<number> {
    return this.prisma.userTest.count(args);
  }

  async findMany<T extends Prisma.UserTestFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserTestFindManyArgs>
  ): Promise<UserTest[]> {
    return this.prisma.userTest.findMany(args);
  }
  async findOne<T extends Prisma.UserTestFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserTestFindUniqueArgs>
  ): Promise<UserTest | null> {
    return this.prisma.userTest.findUnique(args);
  }
  async create<T extends Prisma.UserTestCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserTestCreateArgs>
  ): Promise<UserTest> {
    return this.prisma.userTest.create<T>(args);
  }
  async update<T extends Prisma.UserTestUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserTestUpdateArgs>
  ): Promise<UserTest> {
    return this.prisma.userTest.update<T>(args);
  }
  async delete<T extends Prisma.UserTestDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserTestDeleteArgs>
  ): Promise<UserTest> {
    return this.prisma.userTest.delete(args);
  }
}