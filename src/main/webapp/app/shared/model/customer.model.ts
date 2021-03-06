import { IUser } from 'app/shared/model/user.model';
import { IProductOrder } from 'app/shared/model/product-order.model';
import { Gender } from 'app/shared/model/enumerations/gender.model';

export interface ICustomer {
  id?: string;
  firstName?: string;
  lastName?: string;
  gender?: Gender;
  email?: string;
  phone?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  country?: string;
  user?: IUser;
  orders?: IProductOrder[];
}

export const defaultValue: Readonly<ICustomer> = {};
