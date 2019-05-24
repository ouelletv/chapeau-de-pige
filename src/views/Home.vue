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

    <div v-if="choices.length > 0">
      <span v-for="choice in choices" :key="choice" v-html="choice"></span>
    </div>

    <form @submit.prevent="addChoice">
      <div class="row push-t-xs-60">
        <div class="col-xs-12">
          <div class="form__fieldset">
            <div class="form__control form__control--text-button">
              <label for="text" class="form__field">
                <input ref="input" v-model="choice" id="text" class="form__element" name="text" type="text" placeholder="Who's in!?">
                <button class="form__element" type="button">
                  <svg class="form__element__icon svg svg--arrow-enter"><use xlink:href="#arrow-enter"></use></svg>
                </button>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="row push-t-xs-40">
        <div class="col-xs-12">
          <div class="form__fieldset form__control--button">
            <button class="form__element" type="button">Let's pige!</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  data () {
    return { choice: '' }
  },
  computed: {
    ...mapState(['choices']),
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
