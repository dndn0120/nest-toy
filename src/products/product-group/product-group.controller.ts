import {
    Body,
    Controller,
    Get,
    Post,
  } from '@nestjs/common';
import { ProductGroupService } from './product-group-service';
import { CreateProducrGroupDto } from './dto/create-product-group.dto';
import { ProductGroup } from './entities/product-group.entity';
  
  @Controller('products/group')
  export class ProductGroupController {
    constructor(private readonly productGroupService: ProductGroupService) {}

    @Get()
    readProductDisplays(): ProductGroup[] {
        return this.productGroupService.readProductGroup();
    }

    @Post('save')
    create(@Body() producrGroupData: CreateProducrGroupDto): boolean {
      return this.productGroupService.procCreateProductGroup(producrGroupData);
    }
  }