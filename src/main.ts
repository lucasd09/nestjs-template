import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle("Nest.js Template API")
    .setDescription("API template to kickstart a project")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup("api", app, document);

  const port = process.env.PORT ?? 3000;

  await app.listen(port);

  // biome-ignore lint/suspicious/noConsoleLog: Swagger API
  console.log(`Swagger Docs -> http://localhost:${port}/api`);
}
bootstrap();
