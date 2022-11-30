<template>
  <div class="example">测试页面{{msg}}{{id}}</div>
  <Button> vant按钮a</Button>
  <router-view  class="menban"/>
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
.menban{
  filter:grayscale(100%);
  /* filter:url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");
  filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1) */
}
</style>
