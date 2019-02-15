<template>
    <v-container>
        <emerg-dialog></emerg-dialog>
        <v-layout row wrap>
            <v-flex xs6 class="pr-1">
                <v-dialog
                    ref="dialog"
                    v-model="dateDialog"
                    :return-value.sync="date"
                    persistent
                    lazy
                    full-width
                    width="80%"
                >
                    <v-text-field
                        slot="activator"
                        v-model="date"
                        label="Date of Crash"
                        prepend-icon="event"
                        readonly
                    ></v-text-field>
                    <v-date-picker v-model="date" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="dateDialog = false">Cancel</v-btn>
                        <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                    </v-date-picker>
                </v-dialog>
            </v-flex>
            <v-flex xs6 class="pl-1">
                <v-dialog
                    ref="dialog"
                    v-model="timeDialog"
                    :return-value.sync="time"
                    persistent
                    lazy
                    full-width
                    width="80%"
                >
                    <v-text-field
                        slot="activator"
                        v-model="time"
                        label="Time of Crash"
                        prepend-icon="access_time"
                        readonly
                    ></v-text-field>
                    <v-time-picker
                        v-if="timeDialog"
                        v-model="time"
                        full-width
                    >
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="timeDialog = false">Cancel</v-btn>
                        <v-btn flat color="primary" @click="$refs.dialog.save(time)">OK</v-btn>
                    </v-time-picker>
                </v-dialog>
            </v-flex>
            <v-flex xs12>
                <v-card style="width:100%; height: 100%;" class="pb-2">
                    <!-- <v-card-title>Important Crash Details</v-card-title> -->
                    <v-card-actions class="px-2">
                        <v-layout row wrap>
                            <!-- License Plate -->
                            <v-flex xs9 class="pl-2">
                                <v-text-field
                                    color="grey darken-2"
                                    v-model="licensePlate"
                                    label="License Plate"
                                    prepend-icon="crop_16_9"
                                    single-line
                                ></v-text-field>
                            </v-flex>
                            <v-spacer/>
                            <v-flex xs3>
                                <v-container fill-height>
                                    <v-icon large>photo_camera</v-icon>
                                </v-container>
                            </v-flex>
                            <!-- Driver's Name -->
                            <v-flex xs12 class="pr-4 pl-2">
                                <v-text-field
                                    color="grey darken-2"
                                    v-model="driverName"
                                    label="Driver's Name"
                                    prepend-icon="person"
                                    single-line
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12 class="pr-4 pl-2">
                                <v-text-field
                                    color="grey darken-2"
                                    v-model="driverNumber"
                                    label="Driver's Number"
                                    prepend-icon="phone"
                                    single-line
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12 class="mx-1">
                                <v-card>
                                    <h3 class="subheading pa-1 info">Choose location</h3>
                                    <GmapMap
                                        :center="location"
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
                                        :position="marker.position"
                                        @click="center=marker.position"
                                    />
                                    </GmapMap>
                                </v-card>
                            </v-flex>
                        </v-layout>
                        
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex class="py-2">
                <v-layout>
                    <v-spacer></v-spacer>
                    <v-btn color="secondary" @click="crashInit">Next</v-btn>

                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    import moment from 'moment'
    import { mapActions } from 'vuex';
    import EmergDialog from "../components/EmergDialog";

    export default {
        name: 'NewCrash',
        data() {
            return {
                timeDialog: false,
                dateDialog: false,
                time: moment().format('LT'),
                date: moment().format('ll'),
                driverName: '',
                driverNumber: '',
                licensePlate: '',
                location: {},
                address: '',
                marker: {},
                placeSearch: null,
                error: '',
            }
        },
        computed: {
            
        },
        methods: {
            ...mapActions([
                'createCrash',
                'setEditing'
            ]),
            crashInit() {
                this.createCrash({
                    driverName: this.driverName,
                    driverNUmber: this.driverNumber,
                    licensePlate: this.licensePlate,
                    location: this.location
                })
                .then(() => {
                    this.setEditing(true)
                })
                .then(() => {
                    this.$router.push('crashform')
                });
            }
        },
        components: {
            EmergDialog
        },
        created() {
            var vm = this;
            var onSuccess = function(position) {
                vm.location = { 
                    'lat': position.coords.latitude,
                    'lng': position.coords.longitude,
                };
                vm.marker = {
                    'position': vm.location,
                    'map': vm.$refs.map,
                };
            };
            function onError(error) {
                vm.error = "Unable to get GPS location"
            }
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    }

</script>
