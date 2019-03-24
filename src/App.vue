<template>
  <v-app>
     <v-container grid-list-md text-xs-center>
      <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">    
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
      </div>
     </v-container>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>