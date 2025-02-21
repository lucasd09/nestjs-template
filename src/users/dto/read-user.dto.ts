import { OmitType } from "@nestjs/swagger";
import { CreateUserDto } from "./create-user.dto";

export class ReadUserDto extends OmitType(CreateUserDto, ["password"]) {}
