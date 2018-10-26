<template>
    <div>
        <v-toolbar class="primary" clipped-left app dark>

            <v-slide-x-transition mode="out-in">
                    <v-toolbar-side-icon  dark v-if="!isHome" @click="back">
                        <v-icon>arrow_back</v-icon>
                    </v-toolbar-side-icon>
                    <v-toolbar-title v-else>
                        Tag Archiver
                    </v-toolbar-title>
            </v-slide-x-transition>

        </v-toolbar>
    </div>
</template>

<script>
    export default {
        name: 'toolbar',
        computed: {
            isHome(){
                return this.$route.name === "home"
            }
        },
        methods: {
            back: function () {
                this.$router.go(-1)
            }
        }
    }
</script>
