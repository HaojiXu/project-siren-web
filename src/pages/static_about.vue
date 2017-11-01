<template>
    <v-app light>
        <headerbar :headerData='headerData'></headerbar>

        <footerbar></footerbar>
    </v-app>
</template>

<script>
    import headerbar from '../components/global/header.vue'
    import footerbar from '../components/global/footer.vue'

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
