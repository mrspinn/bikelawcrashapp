<template>
    
</template>

<script>
export default {
  data() {
    return {
      bottomNav: 0,
      transitionType: 'scroll-x-transition'
    }
  },
  computed: {
      activeForm () {
        switch (this.bottomNav) {
          case 0: return 'v-a'
          case 1: return 'v-b'
          case 2: return 'v-c'
          case 3: return 'v-d'
          case 4: return 'v-e'
          case 5: return 'v-f'
        }
      }
  },
  components: {
    'v-a': {
      template: "<v-card height='100px' class='ma-1'><v-card-title class='grey'>Component A</v-card-title></v-card>"
    },
    'v-b': {
      template: "<v-card height='100px' class='ma-1'><v-card-title class='grey'>Component B</v-card-title></v-card>"
    },
    'v-c': {
      template: "<v-card height='100px' class='ma-1'><v-card-title class='grey'>Component C</v-card-title></v-card>"
    },
    'v-d': {
      template: "<v-card height='100px' class='ma-1'><v-card-title class='grey'>Component D</v-card-title></v-card>"
    },
    'v-e': {
      template: "<v-card height='100px' class='ma-1'><v-card-title class='grey'>Component E</v-card-title></v-card>"
    },
    'v-f': {
      template: "<v-card height='100px' class='ma-1'><v-card-title class='grey'>Component F</v-card-title></v-card>"
    }
  }
}

</script>

<style>

</style>
