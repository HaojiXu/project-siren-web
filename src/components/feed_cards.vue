<template id="feedcards">

    <!-- https://project-siren.global/# -- Feed Card components -->
    <!-- Describes a collection of cards of feed (retrieved from DB) -->

    <!-- Important Notice: Connect to DB in settings. -->

    <v-container
            style="min-height: 0;"
            grid-list-lg
    >

        <v-layout column wrap>
            <v-flex xs24 v-for="title in titles" :key="title.id">
                <v-card v-on:click='vm.$router.push({ path: "/view", query: { titleID: title.id} })'>
                    <v-card-media
                            :src="title.CoverImg"
                            height="400px"
                    >
                    </v-card-media>
                    <v-card-title primary-title>
                        <div>
                            <div class="headline">{{title.Title}}</div>
                            <span class="grey--text">{{title.AuthorID}}, {{title.TimeUpdated}}</span>
                        </div>
                    </v-card-title>
                    <v-spacer></v-spacer>
                    <v-card-text>
                        {{title.Content}}
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
                titles: [],
                a: 0,
                vm: this.$root
            }
        },
        created: function () {

            var vm = this;
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                    vm.titles = JSON.parse(xmlHttp.responseText)
                    console.log(vm.titles)
            }
            xmlHttp.open("GET", vm.apiDataSource, true);
            xmlHttp.send(null);

        }

    }
</script>

<style lang="stylus">
    @import '../stylus/main'
</style>
