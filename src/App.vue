<template>
    <v-app>
        <toolbar />
        <v-content>
            <v-slide-x-transition mode="out-in">
                <router-view/>
            </v-slide-x-transition>
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
