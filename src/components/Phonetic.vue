<template>
  <v-layout align-center>

    <v-flex>
      <v-window v-model="window" vertical>
        <v-window-item>
            <v-card color="transparent" width="100%">
                <v-layout align-center justify-center fill-height tag="v-card-text">
                    <div class="name-card">
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
                    </div>
                </v-layout>
            </v-card>
        </v-window-item>

         <v-window-item>
             <v-card color="transparent" width="100%">
                <v-layout align-center justify-center fill-height tag="v-card-text">
                    <div class="name-card">
                        <h1 class="my-name">
                            <span>/'</span>
                            <span>k</span>
                            <span>a:</span>
                            <span>r</span>
                            <span>l</span>
                            <span>ʊ</span>
                            <span>z/</span>

                            <span>/ɐ̃.</span>
                            <span>ʒ</span>
                            <span>ʊ</span>
                            <span>s/</span>
                        </h1>
                    </div>
                </v-layout>
             </v-card>
        </v-window-item>

        <v-item-group v-model="window" mandtory class="shrink text-xs-center">
            <v-item>
                <v-btn slot-scope="{ active, toggle }" :input-value="active" icon @click="toggle">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <span v-on="on" class="language-button">a</span>
                        </template>
                        <span>Latin Alphabet</span>
                    </v-tooltip>
                </v-btn>
            </v-item>
            <v-item>
                <v-btn slot-scope="{ active, toggle }" :input-value="active" icon @click="toggle">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <span v-on="on" class="language-button">æ</span>
                        </template>
                        <span>IPA</span>
                    </v-tooltip>
                </v-btn>
            </v-item>
        </v-item-group>
      </v-window>

    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Phonetic extends Vue {
    public window: number = 0;
}
</script>

<style lang="scss">

.language-button {
    text-transform: lowercase;
}

.my-name {
    font-size: 4vmax;  
    font-weight: bold;
    font-family: Lato, sans-serif;
    span {
        opacity: 0.7;
        font-weight: 800;
        mix-blend-mode: darken;
        letter-spacing: 4px;
        &::selection {
            background-color: rgb(230, 230, 250);
        }
    }
}

$colours: (#fa1e44, #fec925, #ab47bc, #5ab190, #00b4eb);

@each $colour in $colours {
  $i: index($colours, $colour);

  .my-name span:nth-child(5n + #{$i}) {
    color: $colour;
  }
}
</style>
