import { Module } from '@nestjs/common';
import { PaymentInfoController } from './controllers/payment-info/payment-info.controller';
import { ProductListInfoController } from './controllers/product-list-info/product-list-info.controller';
import { ContactInfoController } from './controllers/contact-info/contact-info.controller';
import { DeliveryInfoController } from './controllers/delivery-info/delivery-info.controller';
import { ShoppingCartController } from './controllers/shopping-cart.controller';
import { ShoppingCartService } from './services/shopping-cart.service';

@Module({
  controllers: [ShoppingCartController, ContactInfoController, DeliveryInfoController, PaymentInfoController, ProductListInfoController],
  providers: [ShoppingCartService],
})
export class ShoppingCartModule {}
