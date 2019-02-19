<template>
    <v-fade-transition mode="out-in">
        <v-container fluid>
            <v-card class="mb-4">
                <v-card-title>
                    My Crash Reports
                </v-card-title>
                <v-list>
                    <v-list-tile v-for="(item, index) in getCrashes" :key="index">
                        <v-subheader>{{ item.date }}</v-subheader>
                    </v-list-tile>
                </v-list>
            </v-card>
            <v-card class="mb-4 red darken-1" to="/new">
                <v-card-title>
                    <v-icon class="mr-3">report</v-icon>
                    New Crash Report
                </v-card-title>
            </v-card>
        </v-container>
    </v-fade-transition>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'getCurrentCrash',
      'getCrashes'
    ])
  }
}
</script>
