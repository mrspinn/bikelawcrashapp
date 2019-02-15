<template>

    <v-card>
        <v-card-title class="grey lighten-2">
            Weather Conditions
        </v-card-title>
        <v-card-text class="pa-2 pt-0 pr-3">
            <v-select
                :items="weatherItems"
                label="Weather Conditions"
                prepend-icon="cloud"
            />
            <v-select
                :items="roadItems"
                label="Road Conditions"
                prepend-icon="directions_bike"
            />
            <v-select
                :items="lightItems"
                label="Light Conditions"
                prepend-icon="brightness_5"
            />
            <v-select
                :items="windItems"
                label="Wind Conditions"
                prepend-icon="waves"
            />
        </v-card-text>
    </v-card>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      weatherItems: ['Cloudy', 'Clear', 'Rainy', 'Snowy', 'Fog/Smog/Smoke', 'Sleet/Hail/Freezing Rain'],
      roadItems: ['Dry', 'Wet', 'Water (Standing)', 'Ice', 'Snow', 'Slush', 'Sand/Dirt/Gravel', 'Fuel/Oil'],
      lightItems: ['Daylight', 'Dusk', 'Dawn', 'Dark (Lighted Road)', 'Dark (Non-lighted Road)'],
      windItems: ['None', 'Light Breeze', 'Gentle Breeze', 'Moderate Breeze', 'Strong Breeze', 'High Wind', 'Gale', 'Severe/Storm']
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentCrash'
    ])
  }
}
</script>
