<template>
    <v-app light>
        <headerbar :headerData='chapterInfo.Title'></headerbar>

        <!-- The Chapter Title -->

                <v-card>
                    <v-parallax src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Universit%C3%A9_Paris_1_Panth%C3%A9on_-_Sorbonne._Entr%C3%A9e_du_Centre_Panth%C3%A9on_%281%29.JPG/1200px-Universit%C3%A9_Paris_1_Panth%C3%A9on_-_Sorbonne._Entr%C3%A9e_du_Centre_Panth%C3%A9on_%281%29.JPG" height="600">
                        <v-layout column align-center justify-center>
                            <h2 class="black--text"> {{chapterInfo.Title}} </h2>
                            <a class="black--text">

                                <v-icon>access_time</v-icon>
                                {{chapterInfo.TimeUpdated}}

                            </a>
                        </v-layout>
                    </v-parallax>
                </v-card>


        <v-container
                style="min-height: 0;"
                grid-list-lg
        >


            <vue-markdown :source="display" style="max-width: 70%; margin: auto; font-size: inherit" typographer:false toc:true class="rendered_view"></vue-markdown>


        </v-container>

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

    import utils from '../components/preprocessing_chapter.js'
    import VueMarkdown from 'vue-markdown'
    //import howler from  'https://cdnjs.cloudflare.com/ajax/libs/howler/2.0.5/howler.js'

    export default {
        name: 'app',
        components: {
            headerbar, footerbar, VueMarkdown
        },

        data () {
            return {
                chapterInfo: [],
                preprocess: utils.preprocess,
                display: "",
                control_script: "",
                toHeight: 0,
                fromHeight: 0,
                current_sound: 0,
                sounds: null
            }
        },

        methods: {
            loadScripts() {
                return new Promise(resolve => {

                    let scriptEl = document.createElement("script");
                    scriptEl.src = "https://cdnjs.cloudflare.com/ajax/libs/howler/2.0.5/howler.js";
                    scriptEl.type = "text/javascript";

                    // Attach script to head
                    document.getElementsByTagName("head")[0].appendChild(scriptEl);
                    // Wait for tag to load before promise is resolved
                    scriptEl.addEventListener('load',() => {
                        resolve();
                    });
                });

            },
            handleScroll () {
                //this. = window.scrollY > 0;
                this.toHeight = document.getElementById("detector").offsetTop
                this.fromHeight = window.pageYOffset
                if(this.toHeight - this.fromHeight < 30 && this.toHeight - this.fromHeight > 0) {
                    if (this.sounds[this.current_sound] != null)
                        var sound = new Howl({src: this.sounds[this.current_sound]}).play();
                    this.current_sound += 1;
                }
            }
        },
        created: function () {
            var APIGetSingleChapter = 'http://siren.altoria.me/api/api.php/chapter/';

            var vm = this;
            var xmlHttp = new XMLHttpRequest();
            vm.loadScripts();

            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                    vm.chapterInfo = JSON.parse(xmlHttp.responseText)[0];
                    console.log(vm.chapterInfo)

                    var temp_arr = utils.preprocess(vm.chapterInfo.Content)
                    vm.display = temp_arr[0]
                    vm.sounds = temp_arr[1]["sounds"]
                    vm.current_sound = 0
                }
            }
            xmlHttp.open("GET", APIGetSingleChapter + vm.$router.currentRoute.query.titleID, true);
            xmlHttp.send(null);

            // Now further edit chapter Content
            //vm.chapterInfo.Content += "<br\><audio controls autoplay><source src=\"https://upload.wikimedia.org/wikipedia/commons/c/c3/Antonin_Dvorak_-_symphony_no._9_in_e_minor_%27from_the_new_world%27%2C_op._95_-_ii._largo.ogg\" type=\"audio/ogg\"></audio>"
            //vm.chapterInfo.Content = ""

            // Load Disquz
            var d = document, s = d.createElement('script');
            s.src = 'https://project-siren.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);

            // Create event handlers
            window.addEventListener('scroll', this.handleScroll);
        },

        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        }


    }

</script>

<style lang="stylus">
    @import '../stylus/main'
</style>