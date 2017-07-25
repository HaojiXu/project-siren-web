<template>
  <v-app>
      <!--
    <v-navigation-drawer v-model="sideNav">
        <v-list>
            <v-list-tile>
                <v-list-tile-action>
                    <v-icon>supervisor_account</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    My Info
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
-->
    <v-toolbar>
      <!-- Components -->
        <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav"><!--class="hidden-sm-up"--></v-toolbar-side-icon>
        <v-btn flat @click.native.stop="this.window.history.back()"><v-icon>arrow_back</v-icon></v-btn>
        <v-toolbar-title> Hello World </v-toolbar-title>

        <v-spacer> </v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <router-link to="/view">
             <v-btn flat> <v-icon left> supervisor_account </v-icon> Login </v-btn>
            </router-link>
        </v-toolbar-items>

    </v-toolbar>
    <main>

        <router-view>
        </router-view>

    </main>
  </v-app>
</template>

<script>

  export default {
    data () {
        return {
            sideNav: false
        }
    },
  }

</script>

<style lang="stylus">
  @import './stylus/main'
</style>
