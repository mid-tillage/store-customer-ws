import { Module } from '@nestjs/common';
import { Product, ProductSchema } from './product';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }], 'eshop')],
    controllers: [ProductController],
    providers: [ProductService]
})
export class ProductModule {}
