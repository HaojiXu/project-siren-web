<template id="footerbar">

    <v-footer class="pa-3" absolute=True>
        <v-spacer></v-spacer>
        <div>© {{ new Date().getFullYear() }}</div>
    </v-footer>

</template>

<script>
    export default {
        name: 'footerbar',
        data () {
            return {

            }
        }
    }
</script>

<style lang="stylus">
    @import '../stylus/main'
</style>
