export interface IGoodsItem {
  id: string;
  category: string;
  name: string;
  price: number;
  discount: number;
  stock: number;
  detail: string[];
  thumbnail: string;
  sellnum: number;
  createAt: Date;
  status: string;
}

export interface GoodsProps {
  item: IGoodsItem;
}

export interface IGoodsResponse {
  pageSize: number;
  totalCount: number;
  totalPage: number;
  items: Array<IGoodsItem>;
}

export interface IGoodsQuery {
  pageNo: number;
  pageSize?: number;
  name?: string;
  category?: string;
  sortBy?: SortMethod;
}
