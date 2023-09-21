import { Module } from '@nestjs/common';
import { Product, ProductSchema } from './schemas/product/product';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './controllers/product/product.controller';
import { CarouselController } from './controllers/carousel/carousel.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { FrontPageController } from './controllers/front-page/front-page.controller';
import { CarouselService } from './services/carousel/carousel.service';
import { CategoriesService } from './services/categories/categories.service';
import { FrontPageService } from './services/front-page/front-page.service';
import { ProductService } from './services/product/product.service';
import { ProductOnSale, ProductOnSaleSchema } from './product-on-sale/product-on-sale';
import { ProductOnSaleController } from './product-on-sale/product-on-sale.controller';
import { ProductOnSaleService } from './product-on-sale/product-on-sale.service';

@Module({
    imports: [MongooseModule.forFeature([
        { name: Product.name, schema: ProductSchema },
        { name: ProductOnSale.name, schema: ProductOnSaleSchema }
    ])],
    controllers: [
        CarouselController,
        CategoriesController,
        FrontPageController,
        ProductController,
        ProductOnSaleController],
    providers: [
        CarouselService,
        CategoriesService,
        FrontPageService,
        ProductService,
        ProductOnSaleService]
})
export class ShopModule { }
