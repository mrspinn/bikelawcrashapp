<template>
    <v-dialog v-model="dialog" width="80%">
        <v-card>
            <v-card-title class="headline warning lighten-1">
                Have you called 911?
            </v-card-title>

            <v-card-text>
                Here are the reasons why you should be calling 911:
                <v-list dense>
                    <v-list-tile>Lorem ipsum dolor</v-list-tile>
                    <v-list-tile>Ipsum dolor lorem</v-list-tile>
                    <v-list-tile>Dolor lorem ipsum</v-list-tile>
                </v-list>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn color="primary" class="darken-4" flat @click="dialog = false">
                    I have called
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="red" class="darken-4" dark>
                    Call 911
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            dialog: true,
        }
    }
}
</script>

<style>

</style>
