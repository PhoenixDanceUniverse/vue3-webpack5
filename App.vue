<template>
  <div class="example">测试页面{{msg}}{{id}}</div>
  <router-view />
</template>

<script>
export default {
  name:'App',
  data () {
    return {
      msg: 'Hello world!',
      id: this.$store.state.count
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>
