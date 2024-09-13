<template> 
  <div id="header">
    <v-layout class="rounded rounded-md">      

      <v-app-bar :elevation="2" class="pr-4">
        <v-app-bar-title class="roboto-font font-weight-bold">Application Bar</v-app-bar-title>

        <template v-slot:append>
          <v-app-bar-nav-icon class="ml-2 hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>

          <!-- <nav class="gnb hidden-sm-and-down flex-grow-1">
            <router-link to="/home">Home</router-link>
            <router-link to="/about" class="mx-3">About</router-link>
          </nav> -->
          <nav class="gnb hidden-sm-and-down flex-grow-1">
            <router-link v-for="(link, index) in gnbMenus" :key="index" :to="link.path" class="ml-5">
              {{ link.name }}
            </router-link>
          </nav>
        </template>         
      </v-app-bar>   

      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'left' : undefined"
        temporary
      >
        <h2>LOGO</h2>

        <v-divider class="border-top border-top-info"></v-divider>

        <v-list nav class="mt-5 sidebar-menu-items lnb">
          <v-list-item v-for="(link, index) in lnbMenus" :key="index" :to="link.path" class="cursor-pointer">
            <v-icon class="mr-5">{{ link.icon }}</v-icon> <span class="font-weight-bold">{{ link.name }}</span>
          </v-list-item>
        </v-list> 
      </v-navigation-drawer>         

      <v-footer class="bg-grey-lighten-4 flex-column" :app="true">
        <p class="py-5 font-weight-medium">
          Copyright &copy; 2024. All rights reserved.
        </p>
      </v-footer>
    </v-layout>
  </div>
</template>

<script setup>
  // 여기에 필요한 스크립트 로직을 추가하세요
  import { ref } from 'vue';

  const drawer = ref(false);
  const gnbMenus = ref([
    { name: 'Home', path: '/home'},
    { name: 'About', path: '/about'}
  ]);
  const lnbMenus = ref([
    { name: 'Home', path: '/home', icon: 'mdi-home' },
    { name: 'About', path: '/about', icon: 'mdi-information' }
  ]);
</script>

<style scoped lang="scss">
// 여기에 필요한 스타일을 추가하세요
  #header{
    .v-toolbar{
      z-index: 10 !important;
    }

    .v-navigation-drawer{
      top: 0 !important;
      height: 100vh !important;
    }
  }
</style>
