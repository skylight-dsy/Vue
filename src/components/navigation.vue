<template>
    <div class="menu">
        <el-menu 
            class="el-menu-demo" 
            mode="horizontal" 
            :ellipsis="false" 
            @select="handleSelect"
        >
            <el-sub-menu index="0">
                <template #title>Online Tools</template>
                <el-menu-item index="0-1">You can't miss it</el-menu-item>
                <el-menu-item index="0-2">Audio Tools</el-menu-item>
                <el-sub-menu index="0-3">
                    <template #title>Photo Tools</template>
                    <el-menu-item index="0-3-1">ai-art-generator</el-menu-item>
                    <el-menu-item index="0-3-2">ai-art-generator</el-menu-item>
                    <el-menu-item index="0-3-3">ai-art-generator</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <!-- 点击跳转到页面,导航栏显示紫色代表停在这个页面,逻辑也是对的 -->
            <el-menu-item index="1">Learn</el-menu-item> 
            <el-sub-menu index="2">
                <template #title>Support</template>
                <el-menu-item index="2-1">Tips Center</el-menu-item>
                <el-menu-item index="2-2">Support Center</el-menu-item>
                <el-sub-menu index="2-3">
                    <template #title>FAQS</template>
                    <el-menu-item index="2-3-1">Answer to common troubles and issues.</el-menu-item>
                    <el-menu-item index="2-3-2">Answer to common troubles and issues.</el-menu-item>
                    <el-menu-item index="2-3-3">Answer to common troubles and issues.</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
        </el-menu>
        <div class="gift">
            <picture>
                <source type="image/png" srcset="@/assets/images/gift.png">
                <img src="@/assets/images/gift.png" alt="surprise gift">
            </picture>
        </div>    
        <div class="shop">
            <picture>    
                <source type="image/png" srcset="@/assets/images/shop.png">
                <img src="@/assets/images/shop.png" alt="shop">    
            </picture>
            <span>Pricing</span>
        </div>
    </div>           
</template>
  
<script lang="ts">
    // setup也是默认导出,<script lang="ts" setup>
    import { ref } from 'vue'
    export default {
        data() {
            return {    // 只能放在函数体中
                isActive: false
            };
        },
        methods: {
            handleSelect(key: string, keyPath: string[]){   // string key方法可以,还可以key: string
                console.log(key, keyPath)
            }
        }
    }    
</script>
  
<style lang="less" scoped>
.menu {
    display: flex;
    align-items: center;
    max-width: 580px;
    height: 52px;
    margin-left: 30px;
}
.gift {
    width: 39px;
    height: 47px;
    margin-left: 62px;
}
.shop {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95px;
    height: 25px;
    margin-left: 33px;
    background-color: #ED8646;
    border-radius: 5px;
    span {
        font: 400 16px/24px Poppins;
        color: #FFFFFF;
        margin-left: 4px;
    }
}
// 主菜单去掉下边框
:deep(.el-menu--horizontal.el-menu) {
    border-bottom: none;
}
// 一级菜单样式
:deep(.el-menu--horizontal>.el-sub-menu .el-sub-menu__title) ,
:deep(.el-menu--horizontal>.el-menu-item) {
    font: 400 16px/24px Poppins;
    color: #1F1F1F;
}
// 图标样式
:deep(.el-icon svg) {
    width: 14px;
    color: #9442FD;
}
/* !important只能靠之后的!important来抵消 */
// 一级菜单被选中时的样式
:deep(.el-menu--horizontal>.el-menu-item.is-active) , 
:deep(.el-menu--horizontal>.el-sub-menu.is-active .el-sub-menu__title) {
    border-bottom: 2px solid transparent;
    color: #9442FD !important;
}
// 一级菜单悬浮时的样式
:deep(.el-menu--horizontal .el-menu-item:not(.is-disabled):focus), 
:deep(.el-menu--horizontal .el-menu-item:not(.is-disabled):hover) ,
:deep(.el-menu--horizontal>.el-sub-menu .el-sub-menu__title:hover) {
    color: #9442FD;
    background-color: transparent;
}
</style>
  