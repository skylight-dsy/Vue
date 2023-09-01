<template>
    <pro-header></pro-header>
    <el-carousel indicator-position="outside">
            <el-carousel-item class="inspir">
                <div class="pro-maxwidth">
                    <div class="inspir-left"></div>
                </div>
            </el-carousel-item>
            <el-carousel-item class="revol">
            
            </el-carousel-item> 
    </el-carousel>        
</template>
<script>
import ProHeader from '../../components/header.vue'
export default {
    components: { ProHeader }
}
</script>
<style lang="less" scoped>
.el-carousel__item.inspir.is-animating ,
.el-carousel__item.revol.is-animating {
    padding: 111px 0 51px;
    background: url(@/assets/images/bg1.jpg) center center no-repeat;
    background-size: cover;
}
.el-carousel__item.revol.is-animating {
    background: linear-gradient(94.8deg, #F8F9FF 1.51%, #EFEBFF 55.73%, #FAFAFF 103.01%);
}
:deep(.el-carousel__indicators button) {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #B154F5;
    opacity: 0.7;
}
:deep(.el-carousel__indicator.is-active button) {
    width: 29px;
    height: 10px;
    border-radius: 18px;
    opacity: 1;
}
</style>