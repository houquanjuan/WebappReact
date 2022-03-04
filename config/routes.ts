export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    name: 'insight',
    icon: 'table',
    path: '/insight',
    component: './InsightAnalysis',
  },
  {
    name: 'analysis',
    icon: 'smile',
    path: '/analysis',
    routes: [
      {
        path:'/analysis',
        redirect: '/analysis/general'
      },
      {
        path: '/analysis/general',
        name: 'general',
        icon: 'icon-iconhuodongtongji2x',
        component: './GeneralAnalysis'
      },
      {
        path: '/analysis/event',
        name: 'event',
        icon: 'icon-iconhuodongtongji2x',
        component: './EventAnalysis'
      }
    ]
  },
  // {
  //   path: '/analysis/event',
  //   name: 'event',
  //   icon: 'icon-iconhuodongtongji2x',
  //   hideInMenu: false,
  //   component: './EventAnalysis'
  // },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
