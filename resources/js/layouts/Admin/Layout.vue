<template>
  <div>
    <v-app>
      <v-app-bar clipped-left app>
        <MainNav/>
        <v-spacer/>
        <ProfileMenu/>
      </v-app-bar>

      <AdminNav/>


      <v-main class="warm">
        <slot></slot>
      </v-main>




      <v-bottom-navigation v-model="bottomDrawer" app>
        <inertia-link href="/dogs" as="v-btn">
          <template #default>
            <span>Dogs</span>
            <v-icon>mdi-dog</v-icon>
          </template>
        </inertia-link>

        <inertia-link href="/litters" as="v-btn">
          <template #default>
            <span>Litters</span>
            <v-icon>mdi-family-tree</v-icon>
          </template>
        </inertia-link>

        <inertia-link href="/litters" as="v-btn">
          <template #default>
            <span>Todo</span>
            <v-icon>mdi-calendar-edit</v-icon>
          </template>
        </inertia-link>

        <inertia-link href="/clients" as="v-btn">
          <template #default>
            <span>Families</span>
            <v-icon>mdi-account-group</v-icon>
          </template>
        </inertia-link>

        <inertia-link href="/settings" as="v-btn">
          <template #default>
            <span>settings</span>
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
        bottomDrawer:null
      };
    },
    components: {
      AdminNav,
      MainNav,
      ProfileMenu
    }
  };
</script>
