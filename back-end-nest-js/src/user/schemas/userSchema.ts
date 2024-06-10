import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
// import { Role } from 'src/auth/manageRoles/role.enum';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  role: String;

  @Prop()
  idUser: string;

  @Prop({ type: Date, default: new Date(Date.now()) })
  postDate: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
