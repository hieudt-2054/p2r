<template>
  <v-dialog v-model="dialog" max-width="520">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-card>
        <v-card-title primary-title>
          <span class="title" v-text="title" />
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="form.api"
                label="API Bot"
                placeholder="API Bot"
                required
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="name"
                label="Name Bot"
                placeholder="Name Bot"
                required
              />
            </v-col>
            <v-col cols="12">
              <v-avatar>
                <img :src="avatar" alt="John" />
              </v-avatar>
            </v-col>
            <!-- <v-col cols="12" v-if="roomShow && rooms.length > 0">
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
            </v-col> -->
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click.native="onCloseClick">Hủy</v-btn>
          <v-btn color="primary" text @click.native="onSaveClick">Lưu</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
import Service from './../../services/index.js'

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
      default: 'Thêm BOT'
    }
  },
  data() {
    return {
      valid: false,
      dialog: false,
      roomShow: false,
      items: [],
      avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
      name: '',
      rooms: [],
      form: {}
    }
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
    name(value) {
      this.form.name = value
    },
    avatar(value) {
      this.form.avatar = value
    },
    async 'form.api'(newVal) {
      if (newVal !== '') {
        await Service.getMe(newVal).then((response) => {
          this.name = response.name
          this.avatar = response.avatar_image_url
        })
      }
    }
  },
  async created() {
    if (this.form.api) {
      //   this.roomShow = true
      //   await Service.getRooms(this.form.api).then((response) => {
      //     this.rooms = response
      //   })
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
