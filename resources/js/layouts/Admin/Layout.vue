<template>
  <div>
    <v-app>
      <v-app-bar clipped-left app>
        <MainNav/>
        <v-spacer/>
        <ProfileMenu/>
      </v-app-bar>

      <!-- <AdminNav/> -->



        <v-main >
          <slot></slot>
        </v-main>



      <v-bottom-navigation v-model="bottomDrawer" app>
        <inertia-link href="/admin/dogs" as="v-btn" v-ripple>
          <template>
            <span>Dogs</span>
            <v-icon>mdi-dog</v-icon>
          </template>
        </inertia-link>

        <inertia-link href="/admin/litters" as="v-btn" v-ripple>
          <template>
            <span>Litters</span>
            <v-icon>mdi-family-tree</v-icon>
          </template>
        </inertia-link>

        <inertia-link href="/admin/todos" as="v-btn" v-ripple>
          <template>
            <span>Todo</span>
            <v-icon>mdi-calendar-edit</v-icon>
          </template>
        </inertia-link>

        <inertia-link href="/admin/families" as="v-btn" v-ripple>
          <template>
            <span>Families</span>
            <v-icon>mdi-account-group</v-icon>
          </template>
        </inertia-link>

        <inertia-link href="/admin/settings" as="v-btn" v-ripple>
          <template #default>
            <span>Settings</span>
            <v-icon>mdi-cog</v-icon>
          </template>
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
  import AdminNav from '@/layouts/Admin/nav/AdminNav';

  export default {
    data() {
      return {
        bottomDrawer:null,
        touching: false
      };
    },
    methods: {
      toggleBottomDrawer(drawer) {
        this.bottomDrawer = drawer;
      }
    },
    components: {
      AdminNav,
      MainNav,
      ProfileMenu
    }
  };
</script>
