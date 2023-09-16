import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ProductDocument = HydratedDocument<Carousel>;

export class Carousel {
    @Prop()
    name: string;

    @Prop()
    description: string;
}

export const CarouselSchema = SchemaFactory.createForClass(Carousel);