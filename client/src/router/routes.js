import store from '@/state/store'

export default [
  {
    path: '/',
    name: 'default',
    meta: {
      authRequired: true,
    },
    component: () => import('./views/dashboards/default'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./views/account/login'),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters['auth/loggedIn']) {
          // Redirect to the home page instead
          next({ name: 'default' })
        } else {
          // Continue to the login page
          next()
        }
      },
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('./views/account/register'),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters['auth/loggedIn']) {
          // Redirect to the home page instead
          next({ name: 'default' })
        } else {
          // Continue to the login page
          next()
        }
      },
    },
  },
  {
    path: '/forgot-password',
    name: 'Forgot password',
    component: () => import('./views/account/forgot-password'),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters['auth/loggedIn']) {
          // Redirect to the home page instead
          next({ name: 'default' })
        } else {
          // Continue to the login page
          next()
        }
      },
    },
  },
  {
    path: '/logout',
    name: 'logout',
    meta: {
      authRequired: true,
      beforeResolve(routeTo, routeFrom, next) {
        if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
          store.dispatch('auth/logOut')
        } else {
          store.dispatch('authfack/logout')
        }
        const authRequiredOnPreviousRoute = routeFrom.matched.some(
          (route) => route.push('/login')
        )
        // Navigate back to previous page, or home as a fallback
        next(authRequiredOnPreviousRoute ? { name: 'default' } : { ...routeFrom })
      },
    },
  },
  {
    path: '/lead-dashboard',
    name: 'Dashboard',
    component: () => import('./views/dashboards/lead-dashboard'),
    meta: {
      authRequired: true
    }
  },
  {
    path: '/head-dashboard',
    name: 'Dashboard',
    component: () => import('./views/dashboards/head-dashboard'),
    meta: {
      authRequired: true
    }
  },
  {
    path: '/create-task',
    name: 'Create Task',
    component: () => import('./views/task/CreateTask'),
    meta: {
      authRequired: true
    }
  },
  {
    path: '/create-team',
    name: 'Create Team',
    component: () => import('./views/task/CreateTeam'),
    meta: {
      authRequired: true
    }
  },
  {
    path: '/create-project',
    name: 'Create Project',
    component: () => import('./views/task/CreateProject'),
    meta: {
      authRequired: true
    }
  },
  {
    path: '/task-list',
    name: 'Task List',
    component: () => import('./views/task/TaskList'),
    meta: {
      authRequired: true
    }
  },
  //  About Site
  {
    path: '/about-site',
    name: 'About Site',
    component: () => import('./views/about-site/About'),
    meta: {
      authRequired: true
    }
  },
  {
    path: '/privacy',
    name: 'Privacy & Policy',
    component: () => import('./views/about-site/Privacy'),
    meta: {
      authRequired: true
    }
  },
  {
    path: '/setting',
    name: 'Setting ',
    component: () => import('./views/about-site/Setting'),
    meta: {
      authRequired: true
    }
  },
  {
    path: '/terms',
    name: 'Terms & Condition',
    component: () => import('./views/about-site/Tearms'),
    meta: {
      authRequired: true
    }
  },
  //  Site Features
  {
    path: '/task-option',
    name: 'Task Menu Divide',
    component: () => import('./views/account/task-devide'),
    meta: {
      authRequired: true
    }
  },
  {
    path: '/massage-box',
    name: 'Inbox',
    component: () => import('./views/communications/Massage-Box'),
    meta: {
      authRequired: true
    }
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: () => import('./views/communications/Notifications'),
    meta: {
      authRequired: true
    }
  },
  {
    path: '/teams',
    name: 'Teams',
    component: () => import('./views/account/teams'),
    meta: {
      authRequired: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('./views/account/profile'),
    meta: {
      authRequired: true
    }
  },
  {
    path: '/attendance',
    name: 'Attendance',
    component: () => import('./views/attendance/Attendance'),
    meta: {
      authRequired: true
    }
  },


]
