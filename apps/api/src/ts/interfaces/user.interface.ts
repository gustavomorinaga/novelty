import { TDocument } from '@/ts';

export interface IUser extends TDocument {
  id: number;
  name: string;
  displayName: string;
  email: string;
  password: string;
}
