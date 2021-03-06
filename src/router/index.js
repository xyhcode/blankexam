import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store'
import axios from 'axios'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'AppIndex',
        component: () => import('../views/home/Appindex')
      },
      {
        path: '/admin/content/editor',
        name: 'Editor',
        component: () => import('../views/admin/content/ArticleEditor'),
        meta: {
          requireAuth: true
        }
      },
      {
        path: '/jotter',
        name: 'Jotter',
        component: () => import('../views/jotter/Articles')
      },
      {
        path: '/jotter/article',
        name: 'Article',
        component: () => import('../views/jotter/ArticleDetails')
      },
      {
        path: '/library',
        name: 'Library',
        component: () => import('../views/library/LibraryIndex')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/admin/AdminIndex'),
    children: [
      {
        path: '/admin/dashboard',
        name: 'Dashboard',
        component: () => import('../views/admin/dashboard/admin/index')
      },
      {
        path: '/admin/user/profile',
        name: 'profile',
        component: () => import('../views/admin/user/UserProfile')
      },
      {
        path: '/admin/content/book',
        name: 'bookmanagement',
        component: () => import('../views/admin/content/BookManagement')
      },
      {
        path: '/admin/content/article',
        name: 'articlemanagement',
        component: () => import('../views/admin/content/ArticleManagement')
      },
      {
        path: '/admin/content/banner',
        name: 'bannermanagement',
        component: () => import('../views/admin/content/BannerManagement')
      },
      {
        path: '/student/Student',
        name: 'student',
        component: () => import('../views/admin/student/Student')
      },
      {
        path: '/admin/news',
        name: 'news',
        component: () => import('../views/admin/new/New')
      },
      {
        path: '/admin/order',
        name: 'order',
        component: () => import('../views/admin/affairs/Order')
      },
      {
        path: '/admin/flow',
        name: 'flow',
        component: () => import('../views/admin/affairs/Flow')
      },
      {
        path: '/admin/message',
        name: 'message',
        component: () => import('../views/admin/message/Message')
      },
      {
        path: '/admin/log',
        name:'log',
        component: () => import('../views/admin/sysmang/log')
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

//????????????
//??????token; to:?????????  from?????? next??????
router.beforeEach((to,from,next)=>{
  //??????????????? ??????
  if(to.path=='/login' || to.path=='/home' || to.path=='/index' || to.path=='/jotter' || to.path=='/jotter/article' || to.path=='/library' || to.path=='/register'){
    next();
    //??????token????????????
  }else if(localStorage.getItem('token')==null){
    //console.log('?????????');
    next({path:'/login'})
  }else {
    axios.get('/menu/authentication').then(resp => {
      try {
        next();
      }catch (e) {
        next({path:'/login'})
      }
      /* if (resp.data.code!=200) {

      }else{

      } */
    });
  }
});
/* router.beforeEach((to, from, next) => {
    if (store.state.username && to.path.startsWith('/admin')) {
      initAdminMenu(router, store)
    }
    if (store.state.username && to.path.startsWith('/login')) {
      next({
        name: 'Dashboard'
      })
    }
    // ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
    if (to.meta.requireAuth) {
      if (store.state.username) {
        axios.get('/menu/authentication').then(resp => {
          if (resp) {
            next()
          }
        })
      } else {
        next({
          path: 'login',
          query: {redirect: to.fullPath}
        })
      }
    } else {
      next()
    }
  }
)
const initAdminMenu = (router, store) => {
  // ????????????????????????????????????
  if (store.state.adminMenus.length > 0) {
    return
  }
  axios.get('/menu/').then(resp => {
    console.log(resp.data);
    if (resp && resp.data.code === 200) {
      var fmtRoutes = formatRoutes(resp.data.data);
      console.log(fmtRoutes);
      router.addRoutes(fmtRoutes)
      store.commit('initAdminMenu', fmtRoutes)
    }
  })
}

const formatRoutes = (routes) => {
  let fmtRoutes = []
  routes.forEach(route => {
    if (route.children) {
      route.children = formatRoutes(route.children)
    }

    let fmtRoute = {
      path: route.path,
      component: resolve => {
        require(['../views/admin/' + route.component + '.vue'], resolve)
      },
      name: route.name,
      name_zh: route.name_zh,
      icon_cls: route.icon_cls,
      meta: {
        requireAuth: true
      },
      children: route.children
    }
    fmtRoutes.push(fmtRoute)
  })
  return fmtRoutes
} */

export default router
