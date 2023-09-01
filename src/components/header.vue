<template>
    <el-header>
        <el-row class="pro-maxwidth">
            <div class="logo">
                <picture>
                    <source type="image/png" srcset="@/assets/images/logo.png">
                    <img src="@/assets/images/logo.png" alt="TopMediAI Logo">
                </picture>
            </div>
            <navigation></navigation>
        </el-row>
    </el-header>
</template>
<script>
import Navigation from './navigation.vue'
export default {
    components: { Navigation }
}
</script>
<style lang="less" scoped>
.el-row {
    justify-content: space-between;
    align-items: center;
}

</style>