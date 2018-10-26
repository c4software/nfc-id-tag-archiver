<template>
    <v-app>
        <toolbar />
        <v-content>
            <v-slide-y-transition mode="out-in">
                <router-view/>
            </v-slide-y-transition>
        </v-content>
    </v-app>
</template>

<script>
     import toolbar from './components/toolbar'

  export default {
    name: 'App',
    components: {toolbar}
  }
</script>
