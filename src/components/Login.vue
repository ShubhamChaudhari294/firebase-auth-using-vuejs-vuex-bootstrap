<template>
  <div>
    <header class="d-flex justify-content-center">
          <h1 class="text-primary p-5">Login</h1>
    </header>
    <form @submit.prevent="signIn">
      <div class="row mt-5">
        <div class="form-group col-md-6">
          <label>Email</label>
          <input type= "text" class= "form-control" v-model= "user.email" required />
        </div>
        <div class="form-group col-md-6">
          <label>Password</label>
          <input type="password" class="form-control" v-model="user.password" required />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <button class="btn btn-primary btn-md float-right">Login</button>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <router-link :to="'register'" class="text-secondary float-right mt-3">Not signed in? Register</router-link>
        </div>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
import User from "@/interfaces/user";
import firebase from 'firebase';
export default class Login extends Vue {
  [x: string]: any;
  public user: User = {
    email: "",
    password: "",
    passwordCopy: ""
  };
  public signIn() {
    this.$store.dispatch('signIn', this.user)
  }
}
</script>