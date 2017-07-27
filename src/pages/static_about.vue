<template>
    <v-app light>
        <headerbar :headerData='headerData'></headerbar>
    </v-app>
</template>

<script>
    import headerbar from '../components/header.vue'

    export default {
        name: 'app',
        components: {
            headerbar
        },

        data () {
            return {
                headerData: "About Project Siren"
            }
        }
    }
</script>

<style lang="stylus">
    @import '../stylus/main'
</style>
