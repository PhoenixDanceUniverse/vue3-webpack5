<template>
  <div class="example">测试页面</div>
  <router-view/>
</template>

<script>
export default {
  name:'App',
  data () {
    return {
      msg: 'Hello world!'   
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>
