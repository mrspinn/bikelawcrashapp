<template>
    <v-navigation-drawer fixed clipped v-model="localDrawer" app>
        <v-list>
            <v-list-tile
                v-for="(item, i) in drawerItems"
                :key="i"
                :to="item.linkpath"
                exact
            >
                <v-list-tile-action>
                    <v-icon v-html="item.icon"></v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data() {
        return {
            drawerItems: [
                { icon: 'home', title: 'Home', linkpath: '/' },
                { icon: 'add', title: 'New Crash Report', linkpath: '/new' },
                { icon: 'person', title: 'Profile', linkpath: '/profile' },
                { icon: 'color_lens', title: 'Colours', linkpath: '/colours' },
            ],
            localDrawer: this.value
        }
    },
    props: { 
        value: { type: Boolean } 
    },
    watch: {
     value: function() {
       this.localDrawer = this.value
     },
     localDrawer: function() {
       this.$emit('input', this.localDrawer)
     }
    }
}
</script>

<style>

</style>
