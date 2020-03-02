<template>
  <section class="search">
    <h1>Get your Super Hero Name</h1>
    <!-- v.on handles events -->
    <form v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="surname">Surname</label>
        <input type="text" id="surname" name="surname" v-model="surname" placeholder="John" />
      </div>
      <div class="form-group">
        <label for="givenname">Givenname</label>
        <input type="text" id="givenname" name="surname" v-model="givenname" placeholder="Doe"/>
      </div>
      <div class="form-group">
        <input type="submit" value="Get Super Hero Name" class="btn">
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      surname: this.surname, 
      givenname: this.givenname,
    }
  },
  beforeCreate(){
    // Add background image default
    document.body.className = "body-bg-image";
  },
  methods: {
    onSubmit() {
      if (!this.surname || !this.givenname) {
        this.$toasted.show("You must provide surname and givenname. Please try again.", {
          duration: 3000,
          icon: "exclamation-circle"
        })
      } else {
        this.$router.push(`/superhero`);
      }
    },
  }
};
</script>

<style>
</style>