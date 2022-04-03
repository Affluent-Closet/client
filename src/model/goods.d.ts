export interface IGoodsItem {
  id: string;
  category: string;
  name: string;
  price: number;
  discount: number;
  stock: number;
  datail: string[];
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
  items: IGoodsItem;
}
