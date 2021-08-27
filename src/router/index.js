import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
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
        path: 'product_list',
        name: 'ProductList',
        component: () => import('@/views/Front/ProductList.vue')
      },
      {
        path: 'product/:productId',
        component: () => import('../views/Front/Product.vue')
      },
      {
        path: 'cartList',
        component: () => import('../views/Front/CartList.vue')
      },
      {
        path: 'orderForm/:orderId',
        component: () => import('../views/Front/OrderForm.vue')
      },
      {
        path: 'checkout',
        component: () => import('../views/Front/Checkout.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/Admin/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Admin/Products.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/Admin/Orders.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/Admin/Coupons.vue')
      }
    ]
  },
  {
    path: '/user',
    component: () => import('../views/Front/Userboard.vue'),
    children: [
      {
        path: 'cart',
        component: () => import('../views/Front/UserCart.vue')
      },
      {
        path: 'product/:productId',
        component: () => import('../views/Front/UserProduct.vue')
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/Front/UserCheckout.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
