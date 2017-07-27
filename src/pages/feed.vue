<template>
    <v-app light>
        <headerbar :headerData='headerData'></headerbar>

        <main>
            <bannerdev></bannerdev>
            <feedcards :apiDataSource='designatedAPI'></feedcards>
        </main>

    </v-app>
</template>

<script>
    import headerbar from '../components/header.vue'
    import feedcards from '../components/feed_cards.vue'
    import bannerdev from '../components/banner_dev.vue'

    import {APIFeedConfig} from '../../config.js'

    export default {
        name: 'app',
        components: {
            headerbar, feedcards, bannerdev
        },

        data () {
            return {
                headerData: "Feed - Project Siren",
                designatedAPI: APIFeedConfig
            }
        }
    }
</script>

<style lang="stylus">
    @import '../stylus/main'
</style>
