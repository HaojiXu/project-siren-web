<template id="feedcards">

    <!-- https://project-siren.global/# -- Feed Card components -->
    <!-- Describes a collection of cards of feed (retrieved from DB) -->

    <!-- Important Notice: Connect to DB in settings! -->

    <!-- Part of Project Siren, a poorly documented website for artists. -->
    <!-- Just to be humorous, haha. -->
    <v-container
            style="min-height: 0;"
            grid-list-lg
    >

        <v-layout column wrap>
            <v-flex xs24 v-for="title in titles">
                <v-card @click.native.stop="alert('On Click!')">
                    <v-card-media
                            v-bind:src="title.covering"
                            height="200px"
                    >
                    </v-card-media>
                    <v-card-title primary-title>
                        <div>
                            <div class="headline">{{title.title}}</div>
                            <span class="grey--text">{{title.authorid}}</span>
                        </div>
                    </v-card-title>
                    <v-spacer></v-spacer>
                    <v-card-text>
                        Placeholder Content
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>

</template>

<script>
    export default {
        name: 'feedcards',
        props: ['apiDataSource'],
        data () {
            return {
                // TODO: Retrieve data from designated datasource :)
                titles: [
                    {title: "Hello World", authorid: "robinxu", covering: "https://vuejs.org/images/logo.png"},
                    {title: "Bye World", authorid: "Shakesphere", covering: "https://vuejs.org/images/logo.png"}
                ]
            }
        },
        created: function () {
            var vm = this;
            //
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                    //console.log(xmlHttp.responseText)
                    //vm.$set("titles",  JSON.parse(xmlHttp.responseText))
                    vm.titles = JSON.parse(xmlHttp.responseText)
                    console.log(vm.titles)
            }
            xmlHttp.open("GET", vm.apiDataSource, true); // true for asynchronous
            xmlHttp.send(null);

        }
    }
</script>

<style lang="stylus">
    @import '../stylus/main'
</style>
