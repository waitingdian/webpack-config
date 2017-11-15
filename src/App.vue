<template>
    <div class="box">
        {{msg}}
    </div>
</template>

<script>
  export default {
      data(){
          return {
              msg:"赛赛"
          }
      }
    }  
</script>

<style lang="less">
    @color:pink;
    .box{
        background:@color;
    }
</style>


