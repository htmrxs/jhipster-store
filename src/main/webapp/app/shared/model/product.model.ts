import { IProductCategory } from 'app/shared/model/product-category.model';
import { Size } from 'app/shared/model/enumerations/size.model';

export interface IProduct {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  size?: Size;
  imageContentType?: string;
  image?: any;
  productCategory?: IProductCategory;
}

export const defaultValue: Readonly<IProduct> = {};
