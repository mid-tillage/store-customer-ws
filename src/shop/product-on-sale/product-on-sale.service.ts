import { Injectable, Logger } from '@nestjs/common';
import { ProductOnSale } from './product-on-sale';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductOnSaleService {
    private readonly logger = new Logger(ProductOnSale.name);

    constructor(@InjectModel(ProductOnSale.name) private productOnSaleModel: Model<ProductOnSale>) { }

    async findAll(): Promise<ProductOnSale[]> {
        const result = await this.productOnSaleModel.find().exec();
        this.logger.debug(`findAll products on sale: ${result}`);
        return result;
    }
}
