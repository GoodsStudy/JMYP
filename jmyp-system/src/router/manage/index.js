const manage = [{
    path: '/manage',
    component: () => import('../../pages/Manage'),
    children: [{
        path: 'goods',
        component: () => import('../../pages/Goods/GoodsList')
    },
    {
        path: 'add',
        component: () => import('../../pages/Goods/GoodsAdd')
    },
    {
        path: 'classify',
        component: () => import('../../pages/Goods/GoodsClassify')
    },
    {
        path: 'type',
        component: () => import('../../pages/Goods/GoodsType')
    },
    {
        path: 'comodity',
        component: () => import('../../pages/Goods/GoodsComodity')
    }
    ]
}]
export default manage