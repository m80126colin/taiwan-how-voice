<template>
<div class="ui segments">
  <div class="ui segment">
    <h4 class="header">{{ item.song }}</h4>
  </div>
  <div class="ui embed" data-source="youtube" :data-id="item.id"></div>
  <div class="ui segment">
    <span v-for="author in item.credit" :key="author"><i class="user icon"></i>{{ author }}</span>
    <span class="ui basic circular blue label" v-for="tag in item.tag" :key="tag">#{{ tag }}</span>
  </div>
  <div class="ui segment">
    <i class="eye icon"></i>
    <i class="like icon"></i>
  </div>
</div>
</template>

<script>
export default {
  name: 'card',
  props: [ 'item' ],
  mounted() {
    this.updateEmbed()
    console.log('mount', this.item.id)
  },
  updated() {
    this.updateEmbed()
    console.log('update', this.item.id)
  },
  methods: {
    updateEmbed() {
      $('.ui.embed').embed()
    }
  }
}
</script>

<style scoped>
</style>