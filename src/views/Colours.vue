<template>
    <v-card>
        <v-container>
          <v-layout row wrap>
            <v-flex
              v-for="x in colours"
              :key="x.hex"
              xs4
            >
              <v-card :color='x.hex'>
                <v-card-text>{{ x.colour }}</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
    </v-card>
</template>

<script>

export default {
  data () {
    return {
      colours: []
    }
  },
  mounted () {
    for (var key in this.$vuetify.theme) {
      if (this.$vuetify.theme.hasOwnProperty(key)) {
        this.colours.push({
          'colour': key,
          'hex': this.$vuetify.theme[key]
        })
      }
    }
  }
}
</script>
