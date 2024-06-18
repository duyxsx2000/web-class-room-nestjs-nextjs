import { Module } from '@nestjs/common';
import { ClassController } from './class.controller';
import { ClassService } from './class.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Class, ClassSchema } from './schema/classShcema';

@Module({
  imports:[
    MongooseModule.forFeature([{name: Class.name, schema: ClassSchema}])
  ],
  controllers: [ClassController],
  providers: [ClassService]
})
export class ClassModule {}
