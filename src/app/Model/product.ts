
import { ProductCategories } from './ProductCategories';

export interface Product {
    id?: number;
    name: string;
    code: string;
    price: number;
    cost: number;
    description?: string;
    categoryId?: number;
    productCategories?: ProductCategories;
}
