<template>
    <v-container fluid>
        <component :is="bottomNav"></component>
        <div style="height: 56px;"></div>
        <v-bottom-nav
            :active.sync="bottomNav"
            :value="true"
            fixed
        >
        <v-layout row>
            <v-flex>
                <v-btn
                    color="primary"
                    flat small
                    value="vehicleForm"
                    class="pa-1"
                >
                    <span>Vehicle</span>
                    <v-icon small>directions_car</v-icon>
                </v-btn>
            </v-flex>
            <v-flex>
                <v-btn
                    color="primary"
                    flat small
                    value="policeForm"
                    class="pa-1"
                >
                    <span>Police</span>
                    <v-icon small>star</v-icon>
                </v-btn>
            </v-flex>
            <v-flex>
                <v-btn
                    color="primary"
                    flat small
                    value="witnessForm"
                    class="pa-1"
                >
                    <span>Witnesses</span>
                    <v-icon small>people</v-icon>
                </v-btn>
            </v-flex>
            <v-flex>
                <v-btn
                    color="primary"
                    flat small
                    value="weatherForm"
                    class="pa-1"
                >
                    <span>Weather</span>
                    <v-icon small>cloud</v-icon>
                </v-btn>
            </v-flex>
            <v-flex>
                <v-btn
                    color="primary"
                    flat small
                    value="bicycleForm"
                    class="pa-1"
                >
                    <span>Bicycle</span>
                    <v-icon small>directions_bike</v-icon>
                </v-btn>
            </v-flex>
            <v-flex>
                <v-btn
                    color="primary"
                    flat small
                    value="otherForm"
                    class="pa-1"
                >
                    <span>Other</span>
                    <v-icon small>more_horiz</v-icon>
                </v-btn>
            </v-flex>
        </v-layout>
        </v-bottom-nav>
    </v-container>
</template>

<script>
import vehicleForm from '../components/forms/Vehicle'
import policeForm from '../components/forms/Police'
import weatherForm from '../components/forms/Weather'
import witnessForm from '../components/forms/Witness'
import otherForm from '../components/forms/Other'
import bicycleForm from '../components/forms/Bicycle'

export default {
  data () {
    return {
      bottomNav: 'vehicleForm'
    }
  },
  components: {
    vehicleForm,
    policeForm,
    weatherForm,
    witnessForm,
    otherForm,
    bicycleForm
  }
}
</script>

<style>
    .v-bottom-nav .v-btn {
        min-width: 0px !important;
    }
</style>
