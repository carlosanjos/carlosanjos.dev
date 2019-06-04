// AddItem.vue
<template v-if="user">
  <section>
    <div>
      <input
        v-model.trim="newTodoText"
        @keyup.enter="addTodo"
        placeholder="Add new todo"/>
      <ul>
        <li v-for="todo in todos" v-bind:key="todo.id"> 
          <input
            :value="todo.text"
            @input="updateTodoText(todo, $event.target.value)"
          />
          <button @click="removeTodo(todo)">X</button>
        </li>
      </ul>
      </div>
      <div v-if="!user">
        <section>
          <button @click="signWithGoogle">Sign in with Google</button>
        </section>
      </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Watch, Component, Prop } from 'vue-property-decorator';
import { firestorePlugin } from 'vuefire';
import firebase, { firestore } from 'firebase/app';
import { store, db } from '../firebaseApp';
import 'firebase/auth';

const todos = store.collection('todos');
const everything = todos.limit(25);

@Component<AddItem>({
  firestore: {
    todos: everything,
  },
})
export default class AddItem extends Vue {
  public newTodoText: any =  '';
  public todos: any = [];
  public user: any = null;

  public beforeCreate(): void {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      }
    });
  }

  public addTodo(): void {
    if (this.newTodoText) {
        todos.add({
          text: this.newTodoText,
        });

        this.newTodoText = '';
      }
  }

  public signWithGoogle(): void {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider)
      .then((result: any) => {
      this.user = result.user;
    });
  }

  public updateTodoText(todo: any, newText: any): void {
    todos.doc(todo.id).update({ text: newText });
  }

  public removeTodo(todo: any): void {
     todos.doc(todo.id).delete();
  }
}
</script>