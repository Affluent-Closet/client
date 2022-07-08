import { Gender } from './enums';
import { IGoodsItem } from './goods';

export interface IReviewQuery {
  goodsId: string;
  pageNo: number;
  pageSize?: number;
  sortBy?: SortMethod;
}
export interface IReviewItem {
  createdAt: string;
  id: string;
  detail: string;
  img: Array<string>;
  height: number;
  weight: number;
  rating: number;
  gender: Gender;
  goods: IGoodsItem;
}
export interface IReviewResponse {
  pageSize: number;
  totalCount: number;
  totalPage: number;
  items: Array<IReviewItem>;
}
export interface ICountPoint {
  onePoint: number;
  twoPoint: number;
  threePoint: number;
  fourPoint: number;
  fivePoint: number;
}
export interface IRatingResponse {
  countPoint: ICountPoint;
  averagePoint: number;
}
