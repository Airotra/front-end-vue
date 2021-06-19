<template>
  <div id="app">
    <keep-alive :include="keepAliveComponents">
      <router-view v-if="isRouterAlive"/>
    </keep-alive>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(() => (this.isRouterAlive = true))
    }
  },
  computed: {
    ...mapState({
      keepAliveComponents: state => state.routecache.keepAliveComponents
    })
  }

}
</script>
