<template>
  <v-dialog v-model="dialog" max-width="520">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-card>
        <v-card-title primary-title>
          <span class="title" v-text="title" />
        </v-card-title>
        <v-card-text v-if="bots.length > 0">
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="form.project"
                label="Tên dự án"
                placeholder="Tên dự án"
                required
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-show="false"
                v-model="form.api"
                label="API Bot"
                placeholder="API Bot"
                type="password"
                required
              />
            </v-col>
            <v-col cols="12" v-if="bots.length > 0">
              <v-select
                v-model="form.api"
                :items="bots"
                item-text="name"
                item-value="api"
                attach
                chips
                label="Chọn Bot"
              ></v-select>
            </v-col>
            <v-col cols="12" v-if="roomShow && rooms.length > 0">
              <v-select
                v-model="form.rooms"
                :items="rooms"
                item-text="name"
                item-value="room_id"
                attach
                chips
                label="Chọn Rooms"
                multiple
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-textarea
                name="input-7-1"
                label="Nội dung message"
                v-model.trim="form.message"
                value="[toall] Example message"
                hint="Sử dụng {url} và {title} để biểu thị giá trị của url & title pull"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-text v-else>
          <v-alert type="error">
            Vui lòng thêm bot tại phần <router-link class="link" to="/bot">Quản lý BOT</router-link>
          </v-alert>
        </v-card-text>
        <v-card-actions v-if="bots.length > 0">
          <v-spacer></v-spacer>
          <v-btn text @click.native="onCloseClick">Hủy</v-btn>
          <v-btn color="primary" text @click.native="onSaveClick">Lưu</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex'

import Service from './../services/index.js'

export default {
  props: {
    value: {
      type: Boolean,
      required: true
    },
    inputs: {
      type: Object,
      default: () => {}
    },
    title: {
      type: String,
      default: 'Thêm dự án'
    }
  },
  data() {
    return {
      valid: false,
      dialog: false,
      roomShow: false,
      items: [],
      rooms: [],
      form: {}
    }
  },
  computed: {
    ...mapState(['bots'])
  },
  watch: {
    value(value) {
      this.dialog = value
      if (value) {
        this.form = { ...this.inputs }
      }
    },
    dialog(value) {
      if (!value) {
        this.$emit('update:inputs', null)
      }
      this.$emit('input', value)
    },
    'form.rooms' (newVal) {
      // console.log(this.form.rooms)
      Service.getRoomsMessage(this.form.rooms[0], this.form.api).then((response) => {
        console.log(response)
      })
    },
    async 'form.api'(newVal) {
      if (newVal !== '') {
        this.roomShow = true
        await Service.getRooms(newVal).then((response) => {
          this.rooms = response
        })
      }
    }
  },
  async created() {
    if (this.form.api) {
      this.roomShow = true
      await Service.getRooms(this.form.api).then((response) => {
        this.rooms = response
      })
    }
  },
  methods: {
    onCloseClick() {
      this.$emit('update:inputs', null)
      this.$emit('input', false)
    },
    onSaveClick() {
      if (!this.$refs.form.validate()) {
        return
      }
      this.$emit('update:inputs', { ...this.form })
      this.$emit('input', false)
    }
  }
}
</script>
<style scoped>
.link {
  text-decoration: none;
  font-weight: bold;
  color: rgb(20, 49, 216);
}
</style>