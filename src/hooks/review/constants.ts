import { SortMethod } from 'model/enums';
import { IRatingResponse } from 'model/review';

export const INITIALQUERYSTRING = {
  goodsId: '31',
  pageNo: 1,
  pageSize: 8,
  sortBy: SortMethod.NEW,
};

export const INITIALRATINGDATA: IRatingResponse = {
  countPoint: {
    onePoint: 0,
    twoPoint: 0,
    threePoint: 0,
    fourPoint: 0,
    fivePoint: 0,
  },
  averagePoint: 0,
};
