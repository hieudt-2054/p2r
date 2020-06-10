<template>
  <tr class="search-engine-table-row">
    <td v-text="name" />
    <td>
      <v-avatar>
        <img :src="avatar" alt="John" />
      </v-avatar>
    </td>
    <td>
      <v-icon class="mr-2" color="teal" @click="onEditClick">edit</v-icon>
      <v-icon color="pink" @click="onDeleteClick">delete</v-icon>
    </td>
    <bot-dialog v-model="dialog" :inputs.sync="form" title="Sửa bản ghi" />
  </tr>
</template>

<script>
import { mapMutations } from 'vuex'
import BotDialog from './BotDialog'

export default {
  components: {
    BotDialog
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dialog: false,
      form: {
        api: '',
        avatar: '',
        name: ''
      }
    }
  },
  computed: {
    name() {
      return this.item.name || '404'
    },
    avatar() {
      return this.item.avatar || '404'
    },
    api() {
      return this.item.api || '404'
    }
  },
  watch: {
    dialog(value) {
      if (!value && this.form) {
        this.setBot({
          id: this.item.id,
          bots: this.form
        })
      }
    }
  },
  methods: {
    onEditClick() {
      this.form = this.item
      this.dialog = true
    },
    onDeleteClick() {
      this.removeBot({ id: this.item.id })
    },
    ...mapMutations(['setBot', 'removeBot'])
  }
}
</script>

<style scoped>
.name {
  max-width: 128px;
}
.url {
  max-width: 256px;
}
</style>
