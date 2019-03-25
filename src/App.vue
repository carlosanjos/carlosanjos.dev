<template>
  <v-app>
      <v-tabs right>
        <v-tab to="/">Home</v-tab>
        <v-tab to="/about">About</v-tab>        
      </v-tabs>
      
      <v-container fluid text-xs-center>
        <router-view/>
      </v-container>
      <v-footer
    dark
    height="auto">
    <v-card
      class="flex"
      flat
      tile>
      <v-card-title class="teal">
        <strong class="subheading">Find me on!</strong>

        <v-spacer></v-spacer>

        <v-btn flat icon href="https://www.linkedin.com/in/carlosanjos/">
          <v-icon size="24px">mdi-linkedin-box</v-icon>
        </v-btn>
        <v-btn flat icon  href="https://github.com/carlosanjos">
          <v-icon size="24px">mdi-github-box</v-icon>
        </v-btn>
        <v-btn flat icon  href="https://twitter.com/carlosanjosdev">
          <v-icon size="24px">mdi-twitter-box</v-icon>
        </v-btn>
        
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2019 — <strong>carlosanjos.dev</strong>
      </v-card-actions>
    </v-card>
  </v-footer>

    </v-app>
</template>