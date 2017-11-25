<template id="chapter_viewer">

    <!-- https://project-siren.global/# -- Feed Card components -->
    <!-- Describes a collection of cards of feed (retrieved from DB) -->

    <!-- Important Notice: Connect to DB in settings. -->

    <v-container
            style="min-height: 0;"
            grid-list-lg
    >


            <vue-markdown :source="display" style="max-width: 70%; margin: auto; font-size: inherit" typographer:false></vue-markdown>



    </v-container>

</template>

<script>
    import VueMarkdown from 'vue-markdown'
    import utils from './preprocessing_chapter.js'

    export default {
        name: 'chapter_viewer',
        components: {
            VueMarkdown
        },
        props: ['display', 'style_override'],
        data () {
            return {
                //final_display: utils.preprocess(this.$parent.$data['chapterInfo.Content'])
                //final_display: this.display
            }
        },


    }
</script>

<style lang="stylus">
    @import '../stylus/main'
</style>
