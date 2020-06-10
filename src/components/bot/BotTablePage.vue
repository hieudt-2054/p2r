<template>
  <v-container class="pa-0" fluid>
    <v-card class="pa-3" flat>
      <div class="text-right">
        <v-btn color="primary" depressed @click="onAddClick">
          Thêm BOT
        </v-btn>
      </div>
      <bot-table />
      <bot-dialog v-model="dialog" :inputs.sync="form" />
    </v-card>
  </v-container>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import BotDialog from './BotDialog'
import BotTable from './BotTable.vue'

export default {
  components: {
    BotDialog,
    BotTable
  },
  data() {
    return {
      dialog: false,
      form: {}
    }
  },
  computed: {
    ...mapState(['bots'])
  },
  watch: {
    dialog(value) {
      if (!value && this.form) {
        this.addBot({ bots: this.form })
      }
    },
    bots(value, oldValue) {
      if (value.length > oldValue.length) {
        this.$nextTick(() => {
          window.scrollTo(0, document.body.scrollHeight)
        })
      }
    }
  },
  methods: {
    onAddClick() {
      this.dialog = true
    },
    ...mapMutations(['addBot'])
  }
}
</script>
