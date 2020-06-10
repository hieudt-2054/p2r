<template>
  <v-data-table
    :headers="headers"
    :items="bots"
    hide-default-footer
    :mobile-breakpoint="0"
  >
    <bot-table-row
      slot="item"
      :key="props.item.id"
      slot-scope="props"
      :item="props.item"
    />
  </v-data-table>
</template>

<script>
import { mapState } from 'vuex'
import BotTableRow from './BotTableRow'

export default {
  components: {
    BotTableRow
  },
  data() {
    return {
      headers: [
        { text: 'Tên BOT', value: 'name' },
        { text: 'Avatar', value: 'avatar' }
      ]
    }
  },
  computed: {
    ...mapState(['bots'])
  }
}
</script>
