<template>
    <v-container>
      <v-text-field v-model="test" label="Regular"></v-text-field>
        <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
            <v-btn-toggle v-model="toggle" multiple>
                <v-btn flat :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
                    <v-icon>mdi-format-bold</v-icon>
                </v-btn>

                <v-btn flat :class="{ 'is-active': isActive.italic() }" @click="commands.italic">
                    <v-icon>mdi-format-italic</v-icon>
                </v-btn>

                <v-btn flat :class="{ 'is-active': isActive.strike() }" @click="commands.strike">
                    <v-icon>mdi-format-strikethrough</v-icon>
                </v-btn>

                <v-btn flat :class="{ 'is-active': isActive.underline() }" @click="commands.underline">
                    <v-icon>mdi-format-underline</v-icon>
                </v-btn>

                <v-btn flat :class="{ 'is-active': isActive.code() }" @click="commands.code">
                    <v-icon>mdi-code-tags</v-icon>
                </v-btn>

                <v-btn flat :class="{ 'is-active': isActive.paragraph() }" @click="commands.paragraph">
                    <v-icon>mdi-format-paragraph</v-icon>
                </v-btn>

                <v-btn flat :class="{ 'is-active': isActive.heading({ level: 1 }) }" @click="commands.heading({ level: 1 })">
                    <v-icon>mdi-format-header-1</v-icon>
                </v-btn>

                <v-btn flat :class="{ 'is-active': isActive.heading({ level: 2 }) }" @click="commands.heading({ level: 2 })">
                    <v-icon>mdi-format-header-2</v-icon>
                </v-btn>

                <v-btn flat :class="{ 'is-active': isActive.heading({ level: 3 }) }" @click="commands.heading({ level: 3 })">
                    <v-icon>mdi-format-header-3</v-icon>
                </v-btn>

                <v-btn flat :class="{ 'is-active': isActive.bullet_list() }" @click="commands.bullet_list">
                    <v-icon>mdi-format-list-bulleted</v-icon>
                </v-btn>

                <v-btn flat :class="{ 'is-active': isActive.ordered_list() }" @click="commands.ordered_list">
                    <v-icon>mdi-format-list-numbered</v-icon>
                </v-btn>

                <v-btn flat :class="{ 'is-active': isActive.blockquote() }" @click="commands.blockquote">
                    <v-icon>mdi-format-quote-close</v-icon>
                </v-btn>                

                <v-btn flat @click="commands.horizontal_rule">
                    <v-icon>mdi-ruler</v-icon>
                </v-btn>

                <v-btn flat @click="commands.undo">
                    <v-icon>mdi-undo</v-icon>          
                </v-btn>

                <v-btn flat @click="commands.redo">
                    <v-icon>mdi-redo</v-icon>
                </v-btn>

            </v-btn-toggle>
        </editor-menu-bar>
        <editor-content class="editor__content" :editor="editor"></editor-content>
        
        <v-card>
            <pre><code>{{ html }}</code></pre>
        </v-card>
    </v-container>
</template>

<script>

import { Editor, EditorContent, EditorMenuBar } from 'tiptap';
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions';
import { db } from '../firebaseApp';
import firebaseApp from '../firebaseApp';

export default {
  components: {
    EditorContent,
    EditorMenuBar,

  },
  data() {
    return {
      html: '',
      content: '',
      test: '',
      toggle: [1, 5],
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
        ],
      }),
      onUpdate: ({ getHTML }) => {
        this.html = getHTML();
      },
      onInit: ({ setContent }) => {
        setContent('<p>Foo</p>');
      },
    };
  },
  beforeDestroy() {
    this.editor.destroy();
  },
  methods: {
    add: (content) => {
      db.collection('demo').add({
        html: content,
      });
    },
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;

  &:focus {
    outline: none;
  }
}

*::before,
*::after {
  box-sizing: border-box;
}
.editor {
    
  position: relative;
  max-width: 30rem;
  margin: 0 auto 5rem auto;

  &__content {

    word-wrap: break-word;

    * {
      caret-color: currentColor;
    }

    pre {
      padding: 0.7rem 1rem;
      border-radius: 5px;
      background: black;
      color: white;
      font-size: 0.8rem;
      overflow-x: auto;

      code {
        display: block;
      }
    }

    p code {
      display: inline-block;
      padding: 0 0.4rem;
      border-radius: 5px;
      font-size: 0.8rem;
      font-weight: bold;
      background: rgba(black, 0.1);
      color: rgba(black, 0.8);
    }

    ul,
    ol {
      padding-left: 1rem;
    }

    li > p,
    li > ol,
    li > ul {
      margin: 0;
    }

    a {
      color: inherit;
    }

    blockquote {
      border-left: 3px solid rgba(black, 0.1);
      color: rgba(black, 0.8);
      padding-left: 0.8rem;
      font-style: italic;

      p {
        margin: 0;
      }
    }

    img {
      max-width: 100%;
      border-radius: 3px;
    }

    table {
      border-collapse: collapse;
      table-layout: fixed;
      width: 100%;
      margin: 0;
      overflow: hidden;

      td, th {
        min-width: 1em;
        border: 2px solid grey;
        padding: 3px 5px;
        vertical-align: top;
        box-sizing: border-box;
        position: relative;
        > * {
          margin-bottom: 0;
        }
      }

      th {
        font-weight: bold;
        text-align: left;
      }

      .selectedCell:after {
        z-index: 2;
        position: absolute;
        content: "";
        left: 0; right: 0; top: 0; bottom: 0;
        background: rgba(200, 200, 255, 0.4);
        pointer-events: none;
      }

      .column-resize-handle {
        position: absolute;
        right: -2px; top: 0; bottom: 0;
        width: 4px;
        z-index: 20;
        background-color: #adf;
        pointer-events: none;
      }
    }

    .tableWrapper {
      margin: 1em 0;
      overflow-x: auto;
    }

    .resize-cursor {
      cursor: ew-resize;
      cursor: col-resize;
    }

  }
}
</style>
