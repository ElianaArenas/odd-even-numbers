import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { SocketIoClientStrategy } from './socket-io-cliente.strategy';
import { SocketIoClientProvider } from './socket-io-client.provider';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const socketIoClientProvider = app.get<SocketIoClientProvider>(
    SocketIoClientProvider
  );
  
  //Connect microservice with the custom strategy socket.io
  app.connectMicroservice<MicroserviceOptions>({
    strategy: new SocketIoClientStrategy(socketIoClientProvider.getSocket()),
  });

  await app.startAllMicroservices();
  
  await app.listen(process.env.PORT,'0.0.0.0', () => console.log(`Listening on port: ${process.env.PORT}`));
}
bootstrap();
