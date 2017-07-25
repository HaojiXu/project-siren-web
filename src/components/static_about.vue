<template>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
            <v-container
                    style="min-height: 0;"
                    grid-list-lg
            >
            <v-spacer></v-spacer>
            <v-card>


                <v-card-media
                        class="white--text"
                        height="200px"
                        src="https://cn.vuejs.org/images/logo.png"
                >
                    <v-container fill-height fluid>
                        <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                                <span class="headline"></span>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-media>
                <v-card-title>
                    <div>
                        <span class="headline">About</span><br>
                        <span></span><br>
                        <span>Project Siren is a website for artists, novelists to combine artwork, music, and novel together to create a immersive experience with least cost.</span>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-btn flat class="orange--text">Share</v-btn>
                    <v-btn flat class="orange--text">Explore</v-btn>
                </v-card-actions>
            </v-card>
            </v-container>
        </v-flex>
    </v-layout>
</template>

<script>
    this.$I18N_CURRENT_TITLE = "About"
    export default {
        data () {
            return {


            }

        }
    }
</script>