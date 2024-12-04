import { Module } from '@nestjs/common'
import { ProductGroupsModule } from './product-group/product-group.module';
import { ProductModule } from './product/product.module';
@Module({
  imports: [ProductModule, ProductGroupsModule],
})
export class ProductsModule {}
