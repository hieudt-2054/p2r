<template>
  <v-data-table
    :headers="headers"
    :items="projects"
    hide-default-footer
    :mobile-breakpoint="0"
  >
    <project-table-row
      slot="item"
      :key="props.item.id"
      slot-scope="props"
      :item="props.item"
    />
  </v-data-table>
</template>

<script>
import { mapState } from 'vuex'
import ProjectTableRow from './ProjectTableRow'

export default {
  components: {
    ProjectTableRow
  },
  data() {
    return {
      headers: [
        { text: 'Tên dự án', value: 'project' },
        { text: 'API BOT', value: 'api' },
        { text: 'Rooms ID', value: 'rooms' },
        { text: 'Message', value: 'message' },
        { text: 'Actions', sortable: false }
      ]
    }
  },
  computed: {
    ...mapState(['projects'])
  }
}
</script>
