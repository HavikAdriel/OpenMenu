<template>
    <van-nav-bar
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
</template>
<script>
export default {
    props:['title'],
    setup(props){
        function onClickLeft(){

        }
        return{
            onClickLeft,
            props
        }
    }
}
</script>