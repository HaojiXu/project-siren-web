<template id="headerbar">

    <!-- <h1> Testing component: {{ headerData }}</h1> -->

    <!-- Header bar, Navigation, always on top. -->

    <v-toolbar dark class="primary">
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title class="white--text"> {{ headerData }} </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>search</v-icon>
        </v-btn>
        <v-btn icon @>
            <v-icon>refresh</v-icon>
        </v-btn>
        <v-btn icon @click.native="vm.$router.push({path: '/create_page'})">
            <v-icon>file_upload</v-icon>
        </v-btn>
    </v-toolbar>


</template>

<script>
  export default {
      name: 'headerbar',
      props: ['headerData'],
    data () {
      return {
        vm: this.$root
      }
    }
  }
</script>

<style lang="stylus">
  @import '../../stylus/main'
</style>
