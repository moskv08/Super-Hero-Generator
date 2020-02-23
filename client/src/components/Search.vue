<template>
  <section class="search">
    <h1>Get your Super Hero Name</h1>
    <!-- v.on handles events -->
    <form v-om:submit.prevent="onSubmit">
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
  name: 'Search',
  data() {
    return {
      surname: "", 
      givenname: ""
    }
  },
  beforeCreate(){
    document.body.className = "body-bg-image";
  }
};
</script>

<style>
</style>