<template>
<div class="ui mini compact basic buttons">
  <template v-if="value - item > 0">
    <div class="ui button" v-for="i in Math.min(item, value - 2)" :key="i" @click="toPage(i)">{{ i }}</div>
  </template>
  <div class="ui disabled icon button" v-if="value - item - 2 > 0">
    <i class="ellipsis horizontal icon"></i>
  </div>
  <div class="ui button" v-if="value - 1 > 0" :key="value - 1" @click="toPage(value - 1)">{{ value - 1 }}</div>
  <div class="ui disabled button">{{ value }}</div>
  <div class="ui button" v-if="value + 1 <= countPage" :key="value + 1" @click="toPage(value + 1)">{{ value + 1 }}</div>
  <div class="ui disabled icon button" v-if="countPage - value - item - 1 > 0">
    <i class="ellipsis horizontal icon"></i>
  </div>
  <template v-if="countPage - value - 1 > 0">
    <div class="ui button" v-for="i in tailPage" :key="i" @click="toPage(i)">{{ i }}</div>
  </template>
</div>
</template>

<script>
export default {
  name: 'pagingator',
  props: [ 'countPage', 'value' ],
  data() {
    return {
      item: 1
    }
  },
  computed: {
    tailPage() {
      const app = this
      if (app.countPage - app.value - app.item + 1 <= 0)
        return []
      const num = Math.min(app.item, app.countPage - app.value - app.item + 1)
      return _.map(_.range(num), i => app.countPage + i + 1 - num)
    }
  },
  methods: {
    toPage(val) {
      this.$emit('input', val)
    }
  }
}
</script>