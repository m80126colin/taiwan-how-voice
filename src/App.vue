<template>
<div id="app" class="ui container">
  <div class="ui center aligned basic segment">
    <Paginator v-model="currentPage" :countPage="countPage"></Paginator>
  </div>
  <div class="ui doubling stackable four column grid">
  <div class="ui column" v-for="item in paging" :key="item.id">
    <Card :item="item"></Card>
  </div>
  </div>
  <div class="ui center aligned basic segment">
    <Paginator v-model="currentPage" :countPage="countPage"></Paginator>
  </div>
</div>
</template>

<script>
import _ from 'lodash';
import Vue from 'vue';
import axios from 'axios';

import Card from '../components/Card';
import Paginator from '../components/Paginator';

export default {
  name: 'App',
  components: { Card, Paginator },
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
    const { data } = await axios.get('videos.json')
    const list = _.chain(data)
      .map(row => _.merge(row, {
        timestamp: (new Date(`${row.date} 00:00:00`)).getTime()
      }))
      .sort((a, b) => {
        if (a.timestamp !== b.timestamp)
          return b.timestamp - a.timestamp
        if (a.song < b.song)
          return -1;
        if (a.song > b.song)
          return 1;
        return 0;
      })
      .value()
    Vue.set(app, 'list', list)
  }
}
</script>

<style>
#app {
  margin-top: 10rem;
  margin-bottom: 10rem;
}
</style>
