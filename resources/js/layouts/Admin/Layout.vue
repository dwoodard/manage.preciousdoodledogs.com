<template>
  <div>
    <v-app>
      <v-app-bar clipped-left app>
        <MainNav/>
        <v-spacer/>
        <ProfileMenu/>
      </v-app-bar>


      <v-main>
        <slot></slot>
      </v-main>


      <v-bottom-navigation v-model="bottomDrawer" app>
        <inertia-link v-ripple href="/admin/dogs" as="v-btn">
          <span>Dogs</span>
          <v-icon>mdi-dog</v-icon>
        </inertia-link>

        <inertia-link v-ripple href="/admin/litters" as="v-btn">
          <span>Litters</span>
          <v-icon>mdi-family-tree</v-icon>
        </inertia-link>

        <inertia-link v-ripple href="/admin/todos" as="v-btn">
          <span>Todo</span>
          <v-icon>mdi-calendar-edit</v-icon>
        </inertia-link>

        <inertia-link v-ripple href="/admin/families" as="v-btn">
          <span>Families</span>
          <v-icon>mdi-account-group</v-icon>
        </inertia-link>

        <inertia-link v-ripple href="/admin/settings" as="v-btn">
          <span>Settings</span>
          <v-icon>mdi-cog</v-icon>
        </inertia-link>
      </v-bottom-navigation>
    </v-app>


    <!-- Modal Portal -->
    <portal-target name="modals" multiple/>
  </div>
</template>

<script>
  import ProfileMenu from '@/layouts/nav/ProfileMenu';
  import MainNav from '@/layouts/nav/MainNav';

  export default {
    data() {
      return {
        bottomDrawer: null,
        touching: false,
        showSnackbar: false,
        snackbarText: ''
      };
    },
    methods: {
      updateSnackbar(data) {
        debugger;
        console.log(data);
      },
      toggleBottomDrawer(drawer) {
        this.bottomDrawer = drawer;
      }
    },
    components: {
      MainNav,
      ProfileMenu
    }
  };
</script>
