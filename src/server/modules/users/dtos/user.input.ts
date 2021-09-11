import 'reflect-metadata'
import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class UserCreateInput {
  @Field()
  email: string

  @Field({ nullable: true })
  name: string
}
