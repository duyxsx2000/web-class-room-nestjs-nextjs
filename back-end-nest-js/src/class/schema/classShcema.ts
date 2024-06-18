import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
// import { Role } from 'src/auth/manageRoles/role.enum';

export type ClassDocument = HydratedDocument<Class>;

@Schema()
export class Class {
  @Prop()
  name: string;

  @Prop()
  password: string;

  @Prop()
  idClass: string;

  @Prop({ type: Date, default: new Date(Date.now()) })
  postDate: Date;
}

export const ClassSchema = SchemaFactory.createForClass(Class);
