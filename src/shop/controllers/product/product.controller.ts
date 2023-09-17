import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateProductDto } from 'src/shop/dto/create-product.dto';
import { Product } from 'src/shop/schemas/product/product';
import { ProductService } from 'src/shop/services/product/product.service';

@Controller('product')
export class ProductController { 
    constructor(private readonly productService: ProductService) {}

    @Post()
    async create(@Body() createProductDto: CreateProductDto) {
      await this.productService.create(createProductDto);
    }
  
    @Get()
    async findAll(): Promise<Product[]> {
      return this.productService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Product> {
      return this.productService.findOne(id);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return this.productService.delete(id);
    }
}
