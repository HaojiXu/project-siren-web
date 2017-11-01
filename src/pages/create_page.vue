<template>
    <v-app light>
        <headerbar :headerData='headerData'></headerbar>

        <v-container fluid>
            <form ref="form">
                <v-text-field
                        label="Token"
                        v-model="token"
                        required
                ></v-text-field>
                <v-text-field
                        label="Work ID"
                        v-model="termid"
                        required
                ></v-text-field>
                <v-text-field
                        label="Title"
                        v-model="title"
                        required
                ></v-text-field>
                <v-text-field
                        label="Content (Markdown, HTML Music / Script Supported)"
                        v-model="content"
                        required
                ></v-text-field>
                <v-btn
                        v-on:click.native="submit"
                >
                    submit
                </v-btn>
                <v-btn v-on:click.native="clear">clear</v-btn>
            </form>
        </v-container>

        <footerbar></footerbar>
    </v-app>
</template>

<script>
    import headerbar from '../components/global/header.vue'
    import footerbar from '../components/global/footer.vue'
    import axios from 'axios'

    export default {
        name: 'createPage',
        components: {
            headerbar, footerbar
        },

        data () {
            return {
                headerData: "Portal - Create Chapter",
                token: "",
                termid: "",
                title: "",
                content: "",
                vm: this
            }
        },
        methods: {
            submit () {
                axios.post('http://siren.altoria.me/api/api.php/create_new_chapter', {
                    token: this.token,
                    termid: this.termid,
                    title: this.title,
                    content: this.content
                })


            },
            clear () {
                this.$refs.form.reset()
            }
        }
    }

</script>

<style lang="stylus">
    @import '../stylus/main'
</style>
