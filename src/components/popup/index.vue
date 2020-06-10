<template>
  <v-app>
    <v-app-bar app color="blue darken-3" dark>
      <v-toolbar-title>P2R Application - Please Review Pull!!!</v-toolbar-title>
    </v-app-bar>
    <v-content
      ><br />
      <v-card max-width="344" class="mx-auto">
        <v-list-item>
          <v-list-item-avatar color="grey">
            <v-img
              src="https://images.viblo.asia/70x70/e320bfba-2af6-4763-a14f-be083d1a75ba.png"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline">@Hieudt</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-img
          src="https://lh3.googleusercontent.com/proxy/Ax6CJvJYlLXi6-uFdotgvxOPuPFNPzqIFoXUVQwtUIf3vfYrqr-u4qnUTwPZsrUIM_EXFRYhJ2Uy500hEdwTJJAsKNy2KZya3J6GyOGbl8LaW-cRTF2nqhKyi0-_2wiHaMaDYPKXnl-5igPup3k4mD95b0CTSbnFHm4"
          height="194"
        ></v-img>

        <v-card-text>
          Tôi quá chán với cái việc copy paste template review pull rồi
        </v-card-text>

        <v-card-actions>
          <v-btn text color="deep-purple accent-4" @click="showSetting">
            Cấu hình Tool
          </v-btn>
          <v-btn text color="deep-purple accent-4" @click="showDocs">
            Hướng dẫn
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-content>
    <v-footer color="blue darken-3" app>
      <span class="white--text"
        >&copy; 2020 Made with <3 by Avengers Group - Iron Man - Hieudt  v 1.0.0</span
      >
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null
    }
  },
  methods: {
    showSetting() {
      chrome.tabs.create({ url: 'assets/options.html' })
    },
    showDocs() {
      chrome.tabs.create({ url: 'assets/options.html#/docs' })
    }
  }
}
</script>

<style>
@import '~vuetify/dist/vuetify.min.css';
</style>

<style scoped>
.v-application {
  min-width: 512px;
  min-height: 512px;
}
</style>
