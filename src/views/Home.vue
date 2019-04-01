<template>
  <div>
    <h1 class="my-name">
      <span>C</span>
      <span>A</span>
      <span>R</span>
      <span>L</span>
      <span>O</span>
      <span>S</span>
      <span>&nbsp;</span>
      <span>A</span>
      <span>N</span>
      <span>J</span>
      <span>O</span>
      <span>S</span>      
    </h1>
    
    <h2>I love coding and all the stuff around it. My favourite languages are PHP and TypeScript. </h2>
    <h3>TypeScript which is the greatest thing since sliced bread</h3>

    <h3>
      <v-btn flat icon href="https://www.linkedin.com/in/carlosanjos/">
          <v-icon size="24px">mdi-linkedin</v-icon>
        </v-btn>
        <v-btn flat icon href="https://github.com/carlosanjos">
          <v-icon size="24px">mdi-github-box</v-icon>
        </v-btn>
        <v-btn flat icon href="https://twitter.com/carlosanjosdev">
          <v-icon size="24px">mdi-twitter</v-icon>
        </v-btn>
        <v-btn flat icon href="mailto:contact@carlosanjos.dev" target="_blank">
          <v-icon size="24px">mdi-email</v-icon>
        </v-btn>
    </h3>
  </div>
</template>

<style lang="scss">
  .my-name {
    display: block;
    font-size: 2em;
    text-transform: uppercase;
    font-weight: bold;
    
    
    font-family: Lato, sans-serif;
    
    span {
      opacity: 0.7;
      font-size: 70px;
      font-weight: 800;
      mix-blend-mode: darken;
      letter-spacing: 4px;
    }
    &::selection {
      background-color: rgb(230, 230, 250);
    }
  }

  h3 {
    font-size: 1.2em;
    font-weight: normal;
    line-height: 0.7em;
  }

  // $colours: (red: #fa1e44, yellow: #fec925, seawater: #c9e3db, green : #5ab190, blue: #00b4eb);
  $colours: ( #fa1e44, #fec925, #ab47bc, #5ab190, #00b4eb);

  @each $colour in $colours {
    $i: index($colours, $colour);
    
    .my-name span:nth-child(5n+#{$i}) {
      color: $colour;
    }
  }  
</style>