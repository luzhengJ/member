<template>
    <div class="app-main">
        <app-link v-if="!controlLink"></app-link>
           <router-view></router-view>
    </div>
</template>
<script>
import AppLink from "./Link"
export default {
    data () {
        return {
            
        }
    },
    computed:{
        controlLink(){
            return this.$route.path === "/index"
        }
    },
    components: {
        AppLink
    }
}
</script>
<style lang="scss" scoped>
</style>


