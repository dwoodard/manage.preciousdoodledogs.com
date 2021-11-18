<template>
  <v-container fluid class="pa-8">
    <inertia-link href="/admin/dogs" as="span">
      <v-icon>mdi-arrow-left</v-icon>
    </inertia-link>

    <h1>Add dog</h1>


    <form @submit="store">
      <v-container>
        <v-row>
          <v-col cols="12" sm="12" md="4">
            <v-text-field
              v-model="form.name"
              counter
              :error-messages="form.errors.name"
              label="Name"
              required/>
          </v-col>
          <v-col cols="12" sm="12"md="4">
            <v-select v-model="form.gender"
                      :error-messages="form.errors.gender"
                      label="Gender"
                      :items="['male', 'female']"
                      item-text="name"
                      item-value="id"/>
          </v-col>
          <v-col md="4">
            <v-menu
              v-model="fromDateMenu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px">
              <template #activator="{ on }">
                <v-text-field
                  label="Birthday"
                  prepend-icon="mdi-calendar"
                  readonly
                  :value="form.birthday"
                  v-on="on"/>
              </template>
              <v-date-picker
                v-model="form.birthday"
                locale="en-in"
                scrollable
                no-title
                @input="fromDateMenu = false"/>
            </v-menu>
          </v-col>
        </v-row>

        <v-row>
          <v-file-input
            show-size
            accept="image/*"
            label="Dog Image"
            prepend-icon="mdi-camera"
            @change="selectFile"/>
        </v-row>


        <v-select v-model="form.breed"
                  :error-messages="form.errors.breed"
                  label="Breed"
                  :items="[
                    'poodle',
                    'goldendoodles',
                    'labradoodle',
                    'cavapoo'
                  ]"
                  item-text="name"
                  item-value="id"/>

        <v-select v-model="form.size"
                  :error-messages="form.errors.size"
                  label="Size"
                  :items="[
                    'toy',
                    'teacup',
                    'micro',
                    'mini',
                    'medium',
                    'pocket',
                    'standard'
                  ]"
                  item-text="name"
                  item-value="id"/>

        <v-select v-model="form.generation"
                  :error-messages="form.errors.generation"
                  label="Generation"
                  :items="[ 'f1b', 'f1', 'f2b', 'f2bb', 'multigen' ]"
                  item-text="name"
                  item-value="id"/>


        <v-checkbox v-model="form.outside_stud"
                    :error-messages="form.errors.outside_stud"
                    label="Outside Stud"/>

        <v-text-field v-model="form.weight"
                      type="number"
                      :error-messages="form.errors.weight"
                      label="Weight (oz)"/>

        <v-text-field v-model="form.height"
                      type="number"
                      :error-messages="form.errors.height"
                      label="Height (inches)"/>
      </v-container>


      <!--      submit-->
      <v-btn type="submit"
             color="primary"
             :loading="form.loading">
        Submit
      </v-btn>
    </form>
  </v-container>
</template>

<script>
  import Layout from '@/layouts/Admin/Layout';

  export default {
    data() {
      return {

        fromDateMenu: false,
        form: this.$inertia.form({
          name: '',
          gender: '',
          birthday: '',
          breed: '',
          size: '',
          generation: '',
          outside_stud: '',
          weight: '',
          height: '',
          image: '',
          imageProgress: 0
        })
      };
    },
    computed: {
      fromDateDisp: {
        get() {
          return this.form.birthday ? this.form.birthday.format('MMMM Do, YYYY') : '';
        },
        set(value) {
          this.form.birthday = value;
        }
      }
    },
    methods: {
      selectFile(file) {
        this.form.imageProgress = 0;
        this.form.image = file;
      },
      store() {
        this.form.post(this.route('admin.dogs.store'))
          .then(() => {
            this.$toast.open({
              message: 'Dog created successfully',
              type: 'success'
            });
            this.$inertia.replace();
          })
          .catch((error) => {
            this.form.errors.record(error.response.data.errors);
          });
      }
    },
    components: {
    },
    layout: Layout,
    remember: 'form'
  };
</script>
