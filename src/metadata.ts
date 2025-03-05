/* eslint-disable */
export default async () => {
    const t = {
        ["./users/dto/read-user.dto"]: await import("./users/dto/read-user.dto")
    };
    return { "@nestjs/swagger": { "models": [[import("./users/dto/create-user.dto"), { "CreateUserDto": { name: { required: true, type: () => String }, email: { required: true, type: () => String }, password: { required: true, type: () => String } } }], [import("./users/dto/read-user.dto"), { "ReadUserDto": {} }], [import("./users/dto/update-user.dto"), { "UpdateUserDto": {} }], [import("./users/entities/user.entity"), { "User": { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, email: { required: true, type: () => String }, password: { required: true, type: () => String } } }]], "controllers": [[import("./base/base.controller"), { "BaseController": { "create": {}, "findAll": {}, "findOne": {}, "update": {}, "remove": {} } }], [import("./users/users.controller"), { "UsersController": { "findByEmail": { type: t["./users/dto/read-user.dto"].ReadUserDto } } }]] } };
};