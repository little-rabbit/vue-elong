import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//模块封装
// const moduleA={
// 	state:{
// 		count:0,
// 		
// 	},
// 	mutations:{
// 		add(state){
// 			this.state.a.count+=100
// 		},
// 		reduce(state){
// 			this.state.a.count-=100
// 		}
// 	},
// 	actions:{}
// }
// const moduleB={
// 	state:{},
// 	mutations:{},
// 	actions:{}
// }
// export default new Vuex.Store({
// 	modules:{
// 		a:moduleA,
// 		b:moduleB
// 	}
// })
const state={
  count:1,
  bin:{
		names:'chen'
	}
}
const mutations={
  add(state){
  	this.state.count+=1
  },
  reduce(state){
  	this.state.count-=1
  }
}

const actions={

}
const getters={
	
}
export default new Vuex.Store({//$store为了让外部可以引用
	state,//数据存储
	mutations,//行为动作
	actions,//异步改变state状态,也就是提交mutations的一些修改 $store.commit('things')
	getters//获取属性进行操作
})