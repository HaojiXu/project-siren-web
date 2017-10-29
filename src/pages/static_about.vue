<template>
    <v-app light>
        <headerbar :headerData='headerData'></headerbar>

        <footerbar></footerbar>
    </v-app>
</template>

<script>
    import headerbar from '../components/header.vue'
    import footerbar from '../components/footer.vue'

    export default {
        name: 'app',
        components: {
            headerbar, footerbar
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
