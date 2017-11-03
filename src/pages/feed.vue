<template>
    <v-app light>
        <headerbar :headerData='headerData'></headerbar>

        <main>
            <bannerdev></bannerdev>
            <feedcards :apiDataSource='GetAllChaptersAPI'></feedcards>
        </main>

        <footerbar></footerbar>

    </v-app>
</template>

<script>
    import headerbar from '../components/global/header.vue'
    import feedcards from '../components/feed_cards.vue'
    import bannerdev from '../components/global/banner_dev.vue'
    import footerbar from '../components/global/footer.vue'

    import {APIGetAllChapters} from '../../config.js'

    export default {
        name: 'app',
        components: {
            headerbar, feedcards, bannerdev, footerbar
        },

        data () {
            return {
                headerData: "Feed - Project Siren",
                GetAllChaptersAPI: APIGetAllChapters
            }
        }
    }
</script>

<style lang="stylus">
    @import '../stylus/main'
</style>
