<template>
    <v-app>
        <nav-drawer v-model="drawer"/>

        <v-toolbar fixed app color="primary" dark>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click.stop="rightDrawer = !rightDrawer" v-if="editing">
                <v-icon>edit</v-icon>
            </v-btn>
        </v-toolbar>

        <v-content>
            <router-view></router-view>
        </v-content>

        <v-navigation-drawer temporary right v-model="rightDrawer" fixed>

        </v-navigation-drawer>
    </v-app>
</template>
<script>
import NavDrawer from './components/NavDrawer'
export default {
  data () {
    return {
      rightDrawer: false,
      editing: false,
      title: 'Bike Law Crash App',
      drawer: false
    }
  },
  computed: {
    route () {
      return this.$router.currentRoute
    }
    // editing() {
    //     return this.$router.currentRoute == '/crash'
    // }
  },
  components: {
    NavDrawer
  }
}

</script>

<style>
    .router-link-active {
        color: blue;
    }
</style>
