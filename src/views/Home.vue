<template>
  <div>
    <div class="row">
      <div class="col-xs-12">
        <img src="../assets/images/le-chapeau.png" alt="">
      </div>
    </div>

    <div class="row push-t-xs-20">
      <div class="col-xs-12">
        <img src="../assets/images/logo.png" alt="Chapeau de pige!">
      </div>
    </div>

    <div class="row push-t-xs-60">
      <div class="col-xs-12">
        <p class="size-xs-30">Sooner or later... we will pige again!</p>
      </div>
    </div>
  </div>
</template>

<script>

import choices from '@/components/choices.vue'

export default {
  components: { choices },
  data () {
    return { choice: '' }
  },
  methods: {
    addChoice () {
      this.$store.dispatch('addChoice', this.choice)
        .then(() => {
          this.choice = ""
          this.$refs.input.focus()
        })
    }
  }
}
</script>
