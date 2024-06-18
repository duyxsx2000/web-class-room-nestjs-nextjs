
import {PartialType} from '@nestjs/mapped-types'
import { CreateClassDto } from './createClass.dto';


export class UpdateJobDto extends PartialType(CreateClassDto) {}