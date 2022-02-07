import { AttributeValue, DynamoDB, DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Logger } from '@nestjs/common';
import { AppService } from './app.service';


const dbClient = new DynamoDB({region: process.env.REGION ?? 'eu-west-2'});

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {}
  
  @Get('/hello')
  getHello(): object {
    return this.appService.getHello();
  }

  @Get('/version')
  getApiversion(): object {
    return {
      apiVersion: 1,
      apiName: 'Serverless NestJS starter'
    }
  }
}


export interface UserDto {
  name: string;
  userId: number;
  email: string;
}