
import { IProductCategories } from './ProductCategories';

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
