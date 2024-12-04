import {
    Body,
    Controller,
    Get,
    Post,
  } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductDisplay } from './entities/product.entity';
  
@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    readProductDisplays(): ProductDisplay[] {
        return this.productService.readProductDisplay();
    }

    @Post('save')
    create(@Body() productData: CreateProductDto): boolean {
        return this.productService.procCreateProductDisplay(productData);
    }
}