<template>
    <v-card>
        <v-card-title class="grey lighten-2">
            Police Information
        </v-card-title>
        <v-card-text class="pa-2 pt-0 pr-3">
            <v-text-field
                color="grey darken-2"
                label="Officer Name"
                v-model="officerName"
                prepend-icon="person"
                single-line
            ></v-text-field>
            <v-text-field
                color="grey darken-2"
                label="Badge Number"
                v-model="badgeNumber"
                prepend-icon="star"
                single-line
            ></v-text-field>
            <v-text-field
                color="grey darken-2"
                label="Officer Phone Number"
                v-model="phoneNumber"
                prepend-icon="phone"
                single-line
            ></v-text-field>
            <v-text-field
                color="grey darken-2"
                label="Precinct Number"
                v-model="precinct"
                prepend-icon="domain"
                single-line
            ></v-text-field>
            <v-text-field
                color="grey darken-2"
                label="Report Number"
                v-model="reportNumber"
                prepend-icon="assignment"
                single-line
            ></v-text-field>
        </v-card-text>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      officerName: '',
      badgeNumber: '',
      phoneNumber: '',
      precinct: '',
      reportNumber: ''
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentCrash'
    ])
  }
}
</script>
