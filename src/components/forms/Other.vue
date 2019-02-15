<template>
    <v-card>
        <v-card-title class="grey lighten-2">
            Location
        </v-card-title>
        <GmapMap
            :center="getCurrentCrash.location"
            :zoom="15"
            map-type-id="terrain"
            style=" height: 200px; width: 100%;"
            ref="map"
            :options="{
                zoomControl: true,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: true,
                disableDefaultUi: false
            }"
        >
        <GmapMarker
            :position="getCurrentCrash.marker.position"
            @click="center=marker.position"
        />
        </GmapMap>
        <v-card-text class="pa-2 pt-0 pr-3">
            <v-text-field
                color="grey darken-2"
                v-model="address"
                label="Address"
                prepend-icon="crop_16_9"
                single-line
            ></v-text-field>
            <v-text-field
                color="grey darken-2"
                v-model="driverLastName"
                label="License Plate"
                prepend-icon="crop_16_9"
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

    }
  },
  computed: {
    ...mapGetters([
      'getCurrentCrash'
    ])
  }
}
</script>
