<template>
  <div v-if="choices.length > 0">
    <span v-for="choice in choices" :key="choice" v-html="choice"></span>
  </div>
</template>

<script>

  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState(['choices']),
    },
  }
</script>