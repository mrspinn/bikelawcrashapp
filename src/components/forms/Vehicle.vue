<template>
    <v-card>
        <v-card-title class="grey lighten-2">
            Vehicle and Driver Information
        </v-card-title>
        <v-card-text class="pa-2 pt-0 pr-3">
            <v-text-field
                v-model="driverName"
                label="Driver Name"
                prepend-icon="person"
                single-line
            ></v-text-field>
            <v-text-field
                v-model="ownerName"
                label="Owner Name"
                prepend-icon="person"
                single-line
            ></v-text-field>
            <v-text-field
                v-model="licensePlate"
                label="License Plate"
                prepend-icon="crop_16_9"
                single-line
            ></v-text-field>
            <v-text-field
                v-model="vehicleMake"
                label="Vehicle Make"
                prepend-icon="directions_car"
                single-line
            ></v-text-field>
            <v-text-field
                v-model="vehicleModel"
                label="Vehicle Model"
                prepend-icon="directions_car"
                single-line
            ></v-text-field>
            <v-text-field
                v-model="insuranceCompany"
                label="Insurance Company"
                prepend-icon="domain"
                single-line
            ></v-text-field>
            <v-text-field
                v-model="policyNumber"
                label="Policy Number"
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
      ownerName: '',
      licensePlate: '',
      vehicleMake: '',
      vehicleModel: '',
      insuranceCompany: '',
      policyNumber: ''
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentCrash'
    ]),
    driverName: {
        get () {
            return this.$store.state.crashes[this.getCurrentCrash].driverName
        },
        set (value) {
            const obj = {
                'prop': 'driverName',
                'value': value,
            }
            this.$store.commit('updateValue', obj)
        }
    }
  },
  methods: {

  }
}
</script>
