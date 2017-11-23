<template>
	<div id="detail">
		<v-header></v-header>
		<v-content>
             china
		</v-content>
		<v-footer></v-footer>
	</div>
</template>
<style type="text/css">
	
</style>
<script type="text/javascript">
	export default{
		name:'China',
		data(){
			return{
				
			}
		},
		mounted(){ 
			 this.$http.get('http://hotel.elong.com/ajax/list/staywhere?cityId=1302&date=50&_=1511316277541').then(function(els){
               console.log(els)

            })
		}
	}
</script>