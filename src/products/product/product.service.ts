import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductDisplay } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
    private products: ProductDisplay[] = [];

    readProductDisplay(): ProductDisplay[] {
        return this.products;
    }

    procCreateProductDisplay(productData: CreateProductDto): boolean {
        this.products.push({
            product_display_seq: productData.productDisplaySeq,
            product_name: productData.productName,
        });

        return true;
    }
}
