<template>
    <v-app>
        <main>
                <v-container
                        style="min-height: 0;"
                        grid-list-lg
                >

                    <v-layout column wrap>
                        <v-flex xs24 v-for="title in titles">
                            <v-card @click.native.stop="alert('On Click!')">
                                <v-card-media
                                        v-bind:src="title.coverimg"
                                        height="200px"
                                >
                                </v-card-media>
                                <v-card-title primary-title>
                                    <div>
                                        <div class="headline">{{title.title}}</div>
                                        <span class="grey--text">{{title.author}}</span>
                                    </div>
                                </v-card-title>
                                <v-spacer></v-spacer>
                                <v-card-text>
                                    <!--{{httpGetAsync("http://google.com/")}} -->
                                    Placeholder Content
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
        </main>


    </v-app>
</template>

<script>

    import HttpUtils from '../utils/api_utils.js'

    export default {
        mixins: [HttpUtils],
        data () {
            return {
                titles: [
                    {title: "Hello World", author: "robinxu", coverimg: "https://vuejs.org/images/logo.png"},
                    {title: "Bye World", author: "Shakesphere", coverimg: "https://vuejs.org/images/logo.png"}
                ]
            }
        }
    }


</script>
