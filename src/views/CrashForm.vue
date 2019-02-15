<template>
    <v-container>
        <v-bottom-nav
            :active.sync="bottomNav"
            :value="true"
            absolute
            color="transparent"
        >
        <v-layout row>
            <v-flex>
                <v-btn
                    color="primary"
                    flat small
                    value="vehicle"
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
                    value="police"
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
                    value="witnesses"
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
                    value="weather"
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
                    value="bicycle"
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
                    value="other"
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
export default {
    data() {
        return {
            bottomNav: 'vehicle'
        }
    }
}
</script>

<style>
    .v-bottom-nav .v-btn {
        min-width: 0px !important;
    }
</style>
