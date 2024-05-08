import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Payload, Ctx, MqttContext } from '@nestjs/microservices';

@Controller('message')
export class MessageController {
    @MessagePattern('notifications')
    getNotifications(@Payload() data: number[], @Ctx() context: MqttContext) {
        console.log(`Topic: ${context.getTopic()}`);
    }
}
