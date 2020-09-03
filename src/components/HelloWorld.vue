<template>
   <header class="d-flex justify-content-center">
          <h1 class="text-primary p-5">Dashboard</h1>
    </header>
     <div class="row">
            <div class="col-md-6">
              <button class="btn btn-primary btn-md float-right" @click="logOut"> Logout </button>
            </div>
            <div class="col-md-6">
              <span class="mr-3 text-secondary float-right" > {{$store.getters.getUser}}</span>
            </div>
        </div>  
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
import { Component, Prop} from 'vue-property-decorator'

export default class HelloWorld extends Vue {
  [x: string]: any;
  public logOut () {
    this.$router.replace('login');
    this.$store.dispatch('signOut')
  }
}
</script>
