// call from main.js
<template>
  <v-app>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs3><sidebar :drawer="drawer"></sidebar></v-flex>
        <v-flex xs9>
          <topbar @clicked-childhamburger="toggleDrawer"></topbar>
          <router-view />
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import sidebar from '@/components/SideBar';
import topbar from '@/components/TopBar';
export default { 
  name: 'app',
  components: { sidebar, topbar },
  data() {
    return {
      clipped: false,
      drawer: true
    }
  },
  methods: {
    toggleDrawer() { this.drawer = !this.drawer }
  }
}
</script>
