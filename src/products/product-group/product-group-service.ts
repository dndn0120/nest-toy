import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductGroup } from './entities/product-group.entity';
import { CreateProducrGroupDto } from './dto/create-product-group.dto';

@Injectable()
export class ProductGroupService {
    private productGroups: ProductGroup[] = [];

    readProductGroup(): ProductGroup[] {
        return this.productGroups;
    }
    
    procCreateProductGroup(productGroupData: CreateProducrGroupDto): boolean {
        this.productGroups.push({
            product_group_seq: productGroupData.productGroupSeq,
            product_group_descrition: productGroupData.productGroupDescription,
        });

        return true;
    }
}
