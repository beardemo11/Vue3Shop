import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Admin/Login.vue')
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/Front/Layout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Front/Home.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/Front/About.vue')
      },
      {
        path: 'product_list',
        name: 'ProductList',
        component: () => import('@/views/Front/ProductList.vue')
      },
      {
        path: 'product/:productId',
        name: 'Product',
        component: () => import('../views/Front/Product.vue')
      },
      {
        path: 'cartList',
        name: 'CartList',
        component: () => import('../views/Front/CartList.vue')
      },
      {
        path: 'orderForm/:orderId',
        name: 'OrderForm',
        component: () => import('../views/Front/OrderForm.vue')
      },
      {
        path: 'checkout',
        name: 'Checkout',
        component: () => import('../views/Front/Checkout.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/Admin/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/Admin/Products.vue')
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../views/Admin/Orders.vue')
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/Admin/Coupons.vue')
      }
    ]
  },
  {
    path: '/user',
    name: 'Userboard',
    component: () => import('../views/Test/Userboard.vue'),
    children: [
      {
        path: 'cart',
        name: 'UserCart',
        component: () => import('../views/Test/UserCart.vue')
      },
      {
        path: 'product/:productId',
        name: 'UserProduct',
        component: () => import('../views/Test/UserProduct.vue')
      },
      {
        path: 'checkout/:orderId',
        name: 'UserCheckout',
        component: () => import('../views/Test/UserCheckout.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
