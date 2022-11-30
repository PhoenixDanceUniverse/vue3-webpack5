<template>
  <div class="example">测试页面{{msg}}{{id}}</div>
  <Button> vant按钮a</Button>
  <router-view />
</template>

<script>
import { Button } from 'vant';

export default {
  name:'App',
  components: {
    Button,
  },
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
