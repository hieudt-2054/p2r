<template>
  <tr class="search-engine-table-row">
    <td v-text="project" />
    <td>
      <v-avatar>
        <img :src="api.avatar" />
      </v-avatar>
      {{ api.name }}
    </td>
    <td v-text="rooms" />
    <td v-text="message" />
    <td>
      <v-icon class="mr-2" color="teal" @click="onEditClick">edit</v-icon>
      <v-icon color="pink" @click="onDeleteClick">delete</v-icon>
    </td>
    <project-dialog
      v-model="dialog"
      :inputs.sync="form"
      title="Sửa bản ghi"
    />
  </tr>
</template>

<script>
import { mapMutations } from 'vuex'
import ProjectDialog from './ProjectDialog'
import { mapState } from 'vuex'

export default {
  components: {
    ProjectDialog
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
        rooms: [],
        message: '',
        project: ''
      }
    }
  },
  computed: {
    api() {
      var b = this.bots.filter((bot) => {
        return bot.api === this.item.api
      })

      return b[0] || '404'
    },
    rooms() {
      return this.item.rooms || '404'
    },
    message() {
      return this.item.message || '404'
    },
    project() {
      return this.item.project || '404'
    },
    ...mapState(['bots'])
  },
  watch: {
    dialog(value) {
      if (!value && this.form) {
        this.setProject({
          id: this.item.id,
          projects: this.form
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
      this.removeProject({ id: this.item.id })
    },
    ...mapMutations(['setProject', 'removeProject'])
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
