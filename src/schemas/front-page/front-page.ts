import { Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Carousel } from "../carousel/carousel";
import { Product } from "../product/product";

export type ProductDocument = HydratedDocument<FrontPage>;

export class FrontPage {
    
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Carousel' })
    carousel: Carousel;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
    product: Product;
}

export const FrontPageSchema = SchemaFactory.createForClass(FrontPage);