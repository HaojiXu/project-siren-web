<template>
    <v-app light>
        <headerbar :headerData='chapterInfo.Title'></headerbar>

        <!-- The Chapter Title -->

                <v-card>
                    <v-parallax src="https://images.apple.com/v/mac/home/x/images/home/business_updated_large_2x.jpg" height="600">
                        <v-layout column align-center justify-center>
                            <h2 class="black--text"> {{chapterInfo.Title}} </h2>
                            <a class="black--text">

                                <v-icon>access_time</v-icon>
                                {{chapterInfo.TimeUpdated}}

                            </a>
                        </v-layout>
                    </v-parallax>
                </v-card>


        <chapter_viewer :display="preprocess(chapterInfo.Content)"></chapter_viewer>

        <v-layout row wrap>
            <v-flex xs6 offset-xs3>
                <div id="disqus_thread"></div>
            </v-flex>
        </v-layout>



        <footerbar></footerbar>
    </v-app>
</template>

<script>
    import headerbar from '../components/global/header.vue'
    import footerbar from '../components/global/footer.vue'
    import chapter_viewer from '../components/chapter_viewer.vue'

    import utils from '../components/preprocessing_chapter.js'

    //import {APIGetSingleChapter} from '../../config.js'

    export default {
        name: 'app',
        components: {
            headerbar, footerbar, chapter_viewer
        },

        data () {
            return {
                chapterInfo: [],
                preprocess: utils.preprocess
            }
        },
        created: function () {
            var APIGetSingleChapter = 'http://siren.altoria.me/api/api.php/chapter/';

            var vm = this;
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                    vm.chapterInfo = JSON.parse(xmlHttp.responseText)[0]
                console.log(vm.chapterInfo)
            }
            xmlHttp.open("GET", APIGetSingleChapter + vm.$router.currentRoute.query.titleID, true);
            xmlHttp.send(null);

            // Now further edit chapter Content
            //vm.chapterInfo.Content += "<br\><audio controls autoplay><source src=\"https://upload.wikimedia.org/wikipedia/commons/c/c3/Antonin_Dvorak_-_symphony_no._9_in_e_minor_%27from_the_new_world%27%2C_op._95_-_ii._largo.ogg\" type=\"audio/ogg\"></audio>"
            //vm.chapterInfo.Content = ""

            // Now getting work data
            // TODO

            // Load Disquz
            var d = document, s = d.createElement('script');
            s.src = 'https://project-siren.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        }
    }

</script>

<style lang="stylus">
    @import '../stylus/main'
</style>