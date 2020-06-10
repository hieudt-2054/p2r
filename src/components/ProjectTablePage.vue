<template>
  <v-container class="pa-0" fluid>
    <v-card class="pa-3" flat>
      <div class="text-right">
        <v-btn color="primary" depressed @click="onAddClick">
          Thêm dự án
        </v-btn>
      </div>
      <project-table />
      <project-dialog v-model="dialog" :inputs.sync="form" />
    </v-card>
  </v-container>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import ProjectDialog from './ProjectDialog'
import ProjectTable from './ProjectTable'

export default {
  components: {
    ProjectDialog,
    ProjectTable
  },
  data() {
    return {
      dialog: false,
      form: {}
    }
  },
  computed: {
    ...mapState(['projects'])
  },
  watch: {
    dialog(value) {
      if (!value && this.form) {
        this.addProject({ projects: this.form })
      }
    },
    projects(value, oldValue) {
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
    ...mapMutations(['addProject'])
  }
}
</script>
