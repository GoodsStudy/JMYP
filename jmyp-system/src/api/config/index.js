const TopList = [{
    path: '/manage',
    list: [{
        name: '首页',
    }]
},
{
    path: '/manage/goods',
    list: [{
        name: '首页',
        path: '/manage'
    }, {
        name: '商品',
        path: '/manage/goods'
    }, {
        name: '商品列表',
        path: '/manage/goods'
    }]
},
{
    path:'/manage/add',
    list: [{
        name: '首页',
        path: '/manage'
    }, {
        name: '商品',
        path: '/manage/goods'
    }, {
        name: '添加商品',
        path: '/manage/add'
    }]
},
{
    path:'/manage/classify',
    list: [{
        name: '首页',
        path: '/manage'
    }, {
        name: '商品',
        path: '/manage/goods'
    }, {
        name: '商品分类',
        path: '/manage/classify'
    }]
},
{
    path:'/manage/type',
    list: [{
        name: '首页',
        path: '/manage'
    }, {
        name: '商品',
        path: '/manage/goods'
    }, {
        name: '商品类型',
        path: '/manage/type'
    }]
},
{
    path:'/manage/comodity',
    list: [{
        name: '首页',
        path: '/manage'
    }, {
        name: '商品',
        path: '/manage/goods'
    }, {
        name: '商品管理',
        path: '/manage/comodity'
    }]
}
]

export default TopList