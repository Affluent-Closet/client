enum Path {
  // logged In
  LogoutPage = '/logout',
  OrderPage = '/order',
  ProfilePage = '/profile',
  MyPage = '/mypage',
  CartPage = '/cart',
  PostGoodsPage = '/postgoods',
  PostGoodsSizePage = '/postgoods/:goodsid',
  PostReviewPage = '/postreview',
  PaymentPage = '/payment',
  SuccessPage = '/success',
  MyOrderPage = '/myorder',

  // no Logged In
  LandingPage = '/',
  GoodsPage = '/goods/:goodsid',
  GoodsPath = '/goods',
  SearchPage = '/search',
  SearchResultPage = '/search/result',
  CategoryPage = '/category/:categoryid',
  CategoryPath = '/category',
  LoginPage = '/login',
  RegisterPage = '/register',
  NewPage = '/new',
  BestPage = '/best',
}

export default Path;
