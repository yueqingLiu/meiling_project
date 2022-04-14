import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  // 登录页
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  // 注册页
  {
    path: '/register',
    name: 'register',
    meta: {
      title: 'Register - 注册',
      hideInMenu: true
    },
    component: () => import('@/view/register/register.vue')
  },
  // 首页
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  // 消息中心
  {
    path: '/message',
    name: 'message',
    component: Main,
    meta: {
      hideInBread: true,
      hideInMenu: true
    },
    children: [
      {
        path: 'message_page',
        name: 'message_page',
        meta: {
          icon: 'md-notifications',
          title: '消息中心'
        },
        component: () => import('@/view/single-page/message/index.vue')
      }
    ]
  },
  {
    path: '/argu',
    name: 'argu',
    meta: {
      hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: 'params/:id',
        name: 'params',
        meta: {
          icon: 'md-flower',
          title: route => `{{ params }}-${route.params.id}`,
          notCache: true,
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/view/argu-page/params.vue')
      },
      {
        path: 'query',
        name: 'query',
        meta: {
          icon: 'md-flower',
          title: route => `{{ query }}-${route.query.id}`,
          notCache: true
        },
        component: () => import('@/view/argu-page/query.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  },
  // 菜品
  {
    path: '/dish',
    name: 'dish',
    meta: {
      icon: 'logo-buffer',
      title: '菜品'
    },
    component: Main,
    children: [
      {
        path: 'dish_manage',
        name: 'dish_manage',
        meta: {
          title: '菜品管理'
        },
        component: () => import('@/view/dish/dish_manage.vue')
      },
      {
        path: 'dish_evaluate',
        name: 'dish_evaluate',
        meta: {
          title: '评价管理'
        },
        component: () => import('@/view/dish/dish_evaluate.vue')
      },
      {
        path: 'dish_type',
        name: 'dish_type',
        meta: {
          title: '菜品类型管理'
        },
        component: () => import('@/view/dish/dish_type.vue')
      },
      {
        path: 'dish_order',
        name: 'dish_order',
        meta: {
          title: '订餐'
        },
        component: () => import('@/view/dish/dish_order.vue')
      },
    ]
  },
  // 送餐员
  {
    path: '/waiter',
    name: 'waiter',
    meta: {
      icon: 'logo-buffer',
      title: '送餐员'
    },
    component: Main,
    children: [
      {
        path: 'waiter_manage',
        name: 'waiter_manage',
        meta: {
          icon: 'logo-buffer',
          title: '送餐员管理'
        },
        component: () => import('@/view/waiter/waiter_manage.vue')
      },
    ]
  },
  // 菜单管理
  {
    path: '/dishMenu',
    name: 'dishMenu',
    meta: {
      icon: 'logo-buffer',
      title: '菜单'
    },
    component: Main,
    children: [
      {
        path: 'dish_menu',
        name: 'dish_menu',
        meta: {
          icon: 'logo-buffer',
          title: '菜单管理'
        },
        component: () => import('@/view/dishMenu/dish_menu.vue')
      },
    ]
  },
  // 订单管理
  {
    path: '/order',
    name: 'order',
    meta: {
      icon: 'logo-buffer',
      title: '订单'
    },
    component: Main,
    children: [
      {
        path: 'order_manage',
        name: 'order_manage',
        meta: {
          icon: 'logo-buffer',
          title: '订单管理'
        },
        component: () => import('@/view/order/order_manage.vue')
      },
    ]
  },
  // 销量统计
  {
    path: '/sales',
    name: 'sales',
    meta: {
      icon: 'logo-buffer',
      title: '销量'
    },
    component: Main,
    children: [
      {
        path: 'sales_statistics',
        name: 'sales_statistics',
        meta: {
          icon: 'logo-buffer',
          title: '销量统计'
        },
        component: () => import('@/view/sales/sales_statistics.vue')
      },
    ]
  },
  // 系统管理
  {
    path: '/system',
    name: 'system',
    meta: {
      icon: 'logo-buffer',
      title: '系统管理'
    },
    component: Main,
    children: [
      {
        path: 'login_log',
        name: 'login_log',
        meta: {
          title: '登录日志'
        },
        component: () => import('@/view/system/login_log.vue')
      },
      {
        path: 'role_manage',
        name: 'role_manage',
        meta: {
          title: '角色管理'
        },
        component: () => import('@/view/system/role_manage.vue')
      },
      {
        path: 'user_manage',
        name: 'user_manage',
        meta: {
          title: '用户管理'
        },
        component: () => import('@/view/system/user_manage.vue')
      },
    ]
  },
]
