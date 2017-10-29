<template>
    <v-app light>
        <headerbar :headerData='chapterInfo.Title'></headerbar>

        <chapter_viewer :display="chapterInfo.Content"></chapter_viewer>

        <footerbar></footerbar>
    </v-app>
</template>

<script>
    import headerbar from '../components/header.vue'
    import footerbar from '../components/footer.vue'
    import chapter_viewer from '../components/chapter_viewer.vue'

    import {APIGetSingleChapter} from '../../config.js'

    export default {
        name: 'app',
        components: {
            headerbar, footerbar, chapter_viewer
        },

        data () {
            return {
                chapterInfo: []
            }
        },
        created: function () {
            // using placeholder data
            //return;
            var vm = this;
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                    vm.chapterInfo = JSON.parse(xmlHttp.responseText)[0]
                console.log(vm.chapterInfo)
            }
            xmlHttp.open("GET", APIGetSingleChapter + vm.$router.currentRoute.query.titleID, true);
            xmlHttp.send(null);

        }
    }
</script>

<style lang="stylus">
    @import '../stylus/main'
</style>