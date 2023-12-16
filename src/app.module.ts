import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { CustomerModule } from './customer/customer.module';
import { ShopModule } from './shop/shop.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import database from './config/database.config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule.forRoot({
        load: [database]
      })],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGODB_CONNECTION_STRING')
      })
    }),
    CustomerModule,
    ShopModule,
    ShoppingCartModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
