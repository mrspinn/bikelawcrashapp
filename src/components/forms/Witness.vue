<template>
    <div>
        <v-card>
            <v-card-title class="grey lighten-2">
                Witnesses
            </v-card-title>
            <template v-for="(witness, index) in witnesses">
                <v-card :key="'witnessCard' + index">
                    <v-card-text class="pa-2 pr-3">
                        <v-text-field
                            color="grey darken-2"
                            v-model="witness.name"
                            label="Witness Name"
                            prepend-icon="crop_16_9"
                            single-line
                        ></v-text-field>
                        <v-text-field
                            color="grey darken-2"
                            v-model="witness.phoneNumber"
                            label="Phone Number"
                            prepend-icon="crop_16_9"
                            single-line
                        ></v-text-field>
                    </v-card-text>
                </v-card>
                <v-divider :key="'divider' + index"></v-divider>
            </template>
        </v-card>
        <v-btn @click="addWitness" class="mt-2">Add Witness</v-btn>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      witnesses: [
        {
          name: '',
          phoneNumber: ''
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentCrash'
    ])
  },
  methods: {
    addWitness () {
      this.witnesses.push({
        name: '',
        phoneNumber: ''
      })
    }
  }
}
</script>
