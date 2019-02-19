<template>
  <v-card>
        <v-card-title class="grey lighten-2">
            Vehicle and Driver Information
        </v-card-title>
        <v-card-text class="pa-2 pt-0 pr-3">
            <v-text-field
                v-model="bikeMake"
                label="Bike Make"
                prepend-icon="directions_bike"
                single-line
            ></v-text-field>
            <v-text-field
                v-model="bikeModel"
                label="Bike Model"
                prepend-icon="directions_bike"
                single-line
            ></v-text-field>
            <v-text-field
                v-model="bikeDamage"
                label="Damage to Bike"
                prepend-icon="report_problem"
                single-line
            ></v-text-field>
            <v-text-field
                v-model="personalInjuries"
                label="Personal Injuries"
                prepend-icon="healing"
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
      bikeMake: '',
      bikeModel: '',
      bikeDamage: '',
      personalInjuries: '',
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentCrash'
    ])
  }
}
</script>
