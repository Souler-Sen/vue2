<template>
  <div>
    {{ msg }}
    <hello-world :msg="msg"></hello-world>
  </div>
</template>

<script>
import HelloWorld from "../../components/HelloWorld.vue";
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      msg: '首页'
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {}
}
</script>

<style>

</style>