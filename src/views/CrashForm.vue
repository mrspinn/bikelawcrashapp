<template>
    <v-container fluid>
        <v-window v-model="bottomNav">
            <v-window-item v-for="form in forms" :key="form">
                <keep-alive>
                    <component :is="form" />
                </keep-alive>
            </v-window-item>
        </v-window>
                
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
import { mapGetters } from 'vuex';

export default {
  data () {
    return {
      bottomNav: 0,
      transitionType: "scroll-x-reverse-transition",
      forms: [
          'vehicleForm',
          'policeForm',
          'witnessForm',
          'weatherForm',
          'bicycleForm',
          'otherForm',
      ]
    }
  },
  components: {
    vehicleForm,
    policeForm,
    weatherForm,
    witnessForm,
    otherForm,
    bicycleForm
  },
  computed: {
      ...mapGetters([
          'getCurrentCrash',
      ]),
      activeForm () {
        switch (this.bottomNav) {
          case 0: return 'vehicleForm'
          case 1: return 'policeForm'
          case 2: return 'witnessForm'
          case 3: return 'weatherForm'
          case 4: return 'bicycleForm'
          case 5: return 'otherForm'
        }
      }
  },
  methods: {
  },
  created() {
    navigator.notification.confirm('Hello', ()=>console.log("Hello"));
      if (this.getCurrentCrash === null) {
          console.log('Null Current Crash');
          
          this.$router.push('/')
      }
  }
}
</script>

<style>
    .v-bottom-nav .v-btn {
        min-width: 0px !important;
    }
</style>
