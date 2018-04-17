
import { IProductCategories } from './IProductCategories';

export interface IProduct {
    id?: number;
    name: string;
    code: string;
    price: number;
    cost: number;
    description?: string;
    categoryId?: number;
    productCategories?: IProductCategories;
}
