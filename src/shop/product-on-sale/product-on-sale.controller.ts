import { Body, Controller, Get } from '@nestjs/common';
import { ProductOnSaleService } from './product-on-sale.service';
import { ProductOnSale } from './product-on-sale';

@Controller('product-on-sale')
export class ProductOnSaleController {
    constructor(private readonly productOnSaleService: ProductOnSaleService) {}

    @Get()
    async findAll(): Promise<ProductOnSale[]> {
      return this.productOnSaleService.findAll();
    }
}
