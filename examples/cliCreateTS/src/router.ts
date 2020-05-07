import Vue from 'vue'
//这里仅示范npm安装方式的引入，其它方式引入请看最上面【安装】部分
import Router,{RouterMount, Route} from 'uni-simple-router'

Vue.use(Router)
//初始化
const router = new Router({
    routes: ROUTES
});

//全局路由前置守卫
router.beforeEach((to:Route, from:Route, next:Function) => {
    console.log(to)
    setTimeout(()=>{
        next()
    },2000)
})
// 全局路由后置守卫
router.afterEach((to:Route, from:Route) => {
})
export {
    router,
    RouterMount
};