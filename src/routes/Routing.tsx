import React, { Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Path from './Path';

const GoodsPage = React.lazy(() => import('pages/GoodsPage'));
const SearchPage = React.lazy(() => import('pages/SearchPage'));
const SearchResultPage = React.lazy(() => import('pages/SearchResultPage'));
const OrderPage = React.lazy(() => import('pages/OrderPage'));
const CategoryPage = React.lazy(() => import('pages/CategoryPage'));
const NotFoundPage = React.lazy(() => import('pages/NotFoundPage'));
const LoginPage = React.lazy(() => import('pages/LoginPage'));
const RegisterPage = React.lazy(() => import('pages/RegisterPage'));
const ProfilePage = React.lazy(() => import('pages/ProfilePage'));
const CartPage = React.lazy(() => import('pages/CartPage'));
const PostGoodsPage = React.lazy(() => import('pages/PostGoodsPage'));
const PostReviewPage = React.lazy(() => import('pages/PostReviewPage'));
const PostSizePage = React.lazy(() => import('pages/PostSizePage'));
const PaymentPage = React.lazy(() => import('pages/PaymentPage'));
const SuccessPage = React.lazy(() => import('pages/SuccessPage'));
const LandingPage = React.lazy(() => import('pages/LandingPage'));
const MyOrderPage = React.lazy(() => import('pages/MyOrderPage'));
const NewBestPage = React.lazy(() => import('pages/NewBestPage'));

const publicRoutingComponents = [
  { path: '*', element: <NotFoundPage /> },
  { path: Path.LoginPage, element: <LoginPage /> },
  { path: Path.RegisterPage, element: <RegisterPage /> },
  { path: Path.LandingPage, element: <LandingPage /> },
  { path: Path.GoodsPage, element: <GoodsPage /> },
  { path: Path.SearchPage, element: <SearchPage /> },
  { path: Path.SearchResultPage, element: <SearchResultPage /> },
  { path: Path.NewPage, element: <NewBestPage /> },
  { path: Path.BestPage, element: <NewBestPage /> },
];

const privateRoutingComponents = [
  // logged in
  { path: '*', element: <NotFoundPage /> },
  { path: Path.LandingPage, element: <LandingPage /> },
  { path: Path.GoodsPage, element: <GoodsPage /> },
  { path: Path.SearchPage, element: <SearchPage /> },
  { path: Path.SearchResultPage, element: <SearchResultPage /> },
  { path: Path.NewPage, element: <NewBestPage /> },
  { path: Path.BestPage, element: <NewBestPage /> },

  // no logged in
  { path: Path.OrderPage, element: <OrderPage /> },
  { path: Path.CategoryPage, element: <CategoryPage /> },
  { path: Path.ProfilePage, element: <ProfilePage /> },
  { path: Path.CartPage, element: <CartPage /> },
  { path: Path.PostGoodsPage, element: <PostGoodsPage /> },
  { path: Path.PostReviewPage, element: <PostReviewPage /> },
  { path: Path.PostGoodsSizePage, element: <PostSizePage /> },
  { path: Path.PaymentPage, element: <PaymentPage /> },
  { path: Path.SuccessPage, element: <SuccessPage /> },
  { path: Path.MyOrderPage, element: <MyOrderPage /> },
];

export function PublicRouting() {
  const publicRoutes = useMemo(() => {
    return publicRoutingComponents.map((component, index) => {
      const { path, element } = component;
      return (
        <Route key={`${component}_${index}`} path={path} element={element} />
      );
    });
  }, [publicRoutingComponents]);

  return (
    <Suspense fallback={<>....laoding</>}>
      <Routes>{publicRoutes}</Routes>
    </Suspense>
  );
}

export function PrivateRouting() {
  // useCheckLogin();
  const privateRoutes = useMemo(() => {
    return privateRoutingComponents.map((component, index) => {
      const { path, element } = component;
      return (
        <Route key={`${component}_${index}`} path={path} element={element} />
      );
    });
  }, [privateRoutingComponents]);

  return (
    <Suspense fallback={<>....loging</>}>
      <Routes>{privateRoutes}</Routes>
    </Suspense>
  );
}
