<template>
<div class="ui segments">
  <div class="ui clearing cardtitle segment">
    <h3 class="ui right floated header"><span class="sub header">{{ item.date }}</span></h3>
    <h3 class="ui left floated header">{{ item.song }}</h3>
  </div>
  <div class="ui embed" :id="item.id"></div>
  <div class="ui segment">
    <span class="mini sub header">{{ item.title }}</span>
    <div>
      <span v-for="author in item.credit" :key="author">
        <i class="user icon"></i>{{ author }}
      </span>
    </div>
    <span class="ui blue" v-for="tag in item.tag" :key="tag">#{{ tag }}</span>
  </div>
  <div class="ui clearing segment">
    <div class="ui views left floated basic segment">
      <i class="eye icon"></i> --
      <i class="like icon"></i> --
    </div>
    <a class="ui right floated red circular icon button"
      target="_blank" :href="`https://www.youtube.com/watch?v=${item.id}`"><i class="youtube icon"></i></a>
  </div>
</div>
</template>

<script>
export default {
  name: 'card',
  props: [ 'item' ],
  mounted() {
    this.updateEmbed()
  },
  methods: {
    updateEmbed() {
      const app = this
      $(`#${app.item.id}.ui.embed`).embed({
        id: app.item.id,
        source: 'youtube'
      })
    }
  }
}
</script>

<style scoped>
h3.ui.right.floated.header {
  margin-bottom: 0;
}
div.views {
  position: relative;
  top: 50%;
  transform: translateY(50%);
  padding: 0 0 0 0;
}
</style>