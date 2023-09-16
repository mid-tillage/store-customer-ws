import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
    // constructor(@InjectConnection() private connection: Connection) {}
    // constructor(@InjectConnection('product') private connection: Connection) {}
    constructor(@InjectConnection())
    constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }
}
