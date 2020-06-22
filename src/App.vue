<template>
<div id="app" class="ui container">
<div class="ui doubling stackable four column grid">
<div class="ui column" v-for="item in paging" :key="item.id">
  <Card :item="item"></Card>
</div>
</div>
</div>
</template>

<script>
import _ from 'lodash';
import Vue from 'vue';
import axios from 'axios';

import Card from '../components/Card';

export default {
  name: 'App',
  components: { Card },
  data() {
    return {
      pageIndex: 0,
      perPage: 12,
      list: []
    }
  },
  computed: {
    countPage() {
      const app = this
      return Math.ceil(app.list.length / app.perPage)
    },
    currentPage: {
      get() { return this.pageIndex + 1 },
      set(val) { this.pageIndex = val - 1 }
    },
    paging() {
      const app = this
      const start = app.pageIndex * app.perPage
      return app.list.slice(start, start + app.perPage)
    }
  },
  async mounted() {
    const app = this
    const { data : list } = await axios.get('videos.json')
    Vue.set(app, 'list', list)
    console.log(app.list)
    console.log('ACK!')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, 'Microsoft JhengHei', sans-serif;
  /*text-align: center;
  color: #2c3e50;*/
  margin-top: 10rem;
  margin-bottom: 10rem;
}
</style>
