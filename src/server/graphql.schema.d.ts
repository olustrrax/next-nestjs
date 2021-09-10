/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class User {
  id: number
  email: string
  name: string
}

export abstract class IQuery {
  abstract users(): User[] | Promise<User[]>
}

export abstract class IMutation {
  abstract createUser(email: string, name: string): User | Promise<User>
}
