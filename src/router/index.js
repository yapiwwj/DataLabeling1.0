import Vue from 'vue'
import VueRouter from 'vue-router'
// 登录注册
import Login from '@/views/login/index.vue'
import CodeReset from '@/views/login/codeReset'
import ReGister from '@/views/login/reGister'
import RgSuccess from '@/views/login/rgSuccess'
import ResetSuccess from '@/views/login/resetSuccess'
// 用户中心
import UserCenter from '@/views/usercenter/userCenter'
import YWCenter from '@/views/usercenter/YwCenter'
// 工作台
import MyProjects from '@/views/workbench/myProjects.vue'
import WorkBench from '@/views/workbench/workBench'
import DataAnalysis from '@/views/workbench/dataAnalysis'

import Layout from '@/views/layout/index.vue'
// 业务
import YWWorkBench from '@/views/serve/index.vue'
import PerMission from '@/views/serve/perMission'
import PuBlish from '@/views/serve/puBlish'
// 测试
import FourSelect from '@/views/try/fourSelect.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // 登录注册
    { path: '/', component: Layout },
    { path: '/login', component: Login },
    { path: '/login/codeReset', component: CodeReset },
    { path: '/login/reGister', component: ReGister },
    { path: '/login/rgSuccess', component: RgSuccess },
    { path: '/login/resetSuccess', component: ResetSuccess },
    // 用户中心
    { path: '/usercenter', component: UserCenter },
    { path: '/usercenter/YwCenter', component: YWCenter },
    // 工作台
    { path: '/workbench', component: MyProjects },
    { path: '/workbench/workBench', component: WorkBench },
    { path: '/workbench/dataAnalysis', component: DataAnalysis },
    // 业务
    { path: '/serve', component: YWWorkBench },
    { path: '/serve/perMission', component: PerMission },
    { path: '/serve/puBlish', component: PuBlish },
    // 测试
    { path: '/try', component: FourSelect }
  ]
})

export default router
