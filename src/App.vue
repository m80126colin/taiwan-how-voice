<template>
<div id="app" class="ui container">
  <div class="ui center aligned basic segment">
    <div class="ui compact basic buttons">
      <div v-for="(name, value) in sortName" :key="value"
        @click="sortMethods = value"
        :class="`ui button ${sortMethods === value ? 'disabled' : ''}`">{{ name }}</div>
    </div>
  </div>
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

const songOrder = (a, b) => (a.song > b.song ? 1 : 0) - (a.song < b.song ? 1 : 0)

const sortName = {
  'New to Old': '由新到舊',
  'Old to New': '由舊到新',
  'Name': '相同歌名',
  //'View': '觀看次數',
  //'View Diff': '上升最快'
}

const sortFuncs = {
  'New to Old': (a, b) => {
    if (a.timestamp !== b.timestamp)
      return b.timestamp - a.timestamp
    return songOrder(a, b)
  },
  'Old to New': (a, b) => {
    if (a.timestamp !== b.timestamp)
      return a.timestamp - b.timestamp
    return songOrder(a, b)
  },
  'Name': (a, b) => {
    if (a.song !== b.song)
      return songOrder(a, b)
    return a.timestamp - b.timestamp
  }
}

export default {
  name: 'App',
  components: { Card, Paginator },
  data() {
    return {
      sortName,
      sortFuncs,
      sortMethods: 'New to Old',
      pageIndex: 0,
      perPage: 12,
      originalList: []
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
    },
    list() {
      const app = this
      app.pageIndex = 0
      return _.chain(app.originalList)
        .sort(app.sortFuncs[app.sortMethods])
        .value()
    }
  },
  async mounted() {
    const app = this
    const { data } = await axios.get('videos.json')
    const list = _.map(data, row => _.merge(row, {
        timestamp: (new Date(`${row.date} 00:00:00`)).getTime()
      }))
    Vue.set(app, 'originalList', list)
  }
}
</script>

<style>
#app {
  margin-top: 10rem;
  margin-bottom: 10rem;
}
</style>
