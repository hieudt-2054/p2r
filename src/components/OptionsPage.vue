<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.link" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="blue darken-3" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>P2R Application - Please Review Pull!!!</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer
      color="blue darken-3"
      app
    >
      <span class="white--text">&copy; 2020 Made with <3 by Avengers Group</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        {
          icon: 'mdi-folder',
          text: 'Quản lý Message',
          link: '/'
        },
        {
          icon: 'mdi-account-multiple',
          text: 'Quản lý BOT',
          link: '/bot'
        },
        {
          icon: 'mdi-file-document-box',
          text: 'Hướng dẫn',
          link: '/docs'
        }
      ]
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
