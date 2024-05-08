import { Module } from '@nestjs/common';
import { Payload, Ctx, MqttContext } from '@nestjs/microservices';
import { MessageController } from './message.controller';

@Module({
  controllers: [MessageController]
})
export class MessageModule {
    @MessagePattern('notifications')
getNotifications(@Payload() data: number[], @Ctx() context: MqttContext) {
  console.log(`Topic: ${context.getTopic()}`);
}
