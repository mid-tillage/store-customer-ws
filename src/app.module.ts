import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './schemas/product/product.module';
import { ProductController } from './schemas/product/product.controller';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost/nest', {
    //   connectionName: 'nest',
    // }),
    MongooseModule.forRoot('mongodb://localhost/test', {
      connectionName: 'eshop',
    }),
    // MongooseModule.forRoot('mongodb://localhost/users', {
    //   connectionName: 'users',
    // }),
    ProductModule],
  controllers: [AppController, ProductController],
  providers: [AppService],
})
export class AppModule {}
