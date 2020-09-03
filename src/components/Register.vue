<template>
  <div>
      <header class="d-flex justify-content-center">
          <h1 class="text-primary p-5">Register user</h1>
      </header>
        <form @submit.prevent="saveUser">
          <div class="row mt-5">
            <div class="form-group col-md-4">
              <label>Email</label>
              <input type="text" class="form-control" v-model="user.email" required/>
            </div>
            <div class="form-group col-md-4">
              <label>Password</label>
              <input type="password" class="form-control" v-model="user.password" required/>
            </div>
            <div class="form-group col-md-4">
              <label>Retype password</label>
              <input type="password" class="form-control" v-model="user.passwordCopy" required/>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
              <button class="btn btn-primary btn-md float-right"> Save </button>
            </div>
        </div>         
      </form> 
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
import { Component, Prop} from 'vue-property-decorator'
import firebase from 'firebase';
import User from '../interfaces/user'
export default class Register extends Vue {
  [x: string]: any;
  @Prop() msg!: string;
  public user: User = {
    email: '',
    password: '',
    passwordCopy: ''

  };
  public saveUser () {
      if (this.user.password === this.user.passwordCopy) {
        this.$store.dispatch('register', this.user)
      }
       
  }
}
</script>
