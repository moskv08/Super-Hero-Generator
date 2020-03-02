<template>
  <section>
    <div v-if="loading">
      <h3>Loading..</h3>
    </div>

    <div v-if="error">
      <h1>{{error}}</h1>
      <router-link to="/">Go back</router-link>
    </div>

    <div v-if="profileData" class="container">
      <h1 class="gamertag">
        <!-- <img src="" alt="" class="platform-avatar"> -->
        Iron Man
      </h1>
      <div class="grid">
        <div class>
          <img src alt />
        </div>
        <div class>
          <ul>
            <li>
              <h4>Super Power</h4>
              <p>Burn environment</p>
            </li>
            <li>
              <h4>Origin</h4>
              <p>
                Californina,
                <span>USA</span>
              </p>
            </li>
            <li>
              <h4>Classic Quote</h4>
              <p>
                <span>"Look at you, companiero"</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <router-link to="/">Go back</router-link>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Profile",
  data() {
    return {
      loading: false,
      error: null,
      profileData: null
    };
  },
  beforeCreate() {
    // Add background image default
    document.body.className = "body-bg-no-image";
  },
  async created() {
    this.loading = true;
    try {
      const url =
        "https://q9oe54xzol.execute-api.eu-west-1.amazonaws.com/default/generateSuperHero?";

      const respone = axios.get(
        `${url}color=${this.$route.params.surname}&power=${this.$route.params.givenname}`
      );

      this.profileData = respone;
      console.log(this.profileData);
      this.loading = false;
    } catch (err) {
      this.loading = false;
      this.error = err.respone.data.message;
    }
  }
};
</script>

<style scoped>
.container {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  max-width: 700px;
  margin: 1rem auto;
  padding: 2rem 1.5rem;
  border-radius: 20px;
}
h1.gamertag {
  font-size: 2rem;
  background: rgba(0, 0, 0, 0.6);
  padding: 0.3rem 0.5rem;
  text-align: center;
  border-radius: 20px;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
}
a {
  display: inline-block;
  margin-top: 2rem;
  border: #fff 2px solid;
  padding: 0.5rem 0.8rem;
}
a:hover {
  border: #ccc 2px solid;
  color: #ccc;
}
.platform-avatar {
  width: 40px;
  margin-right: 0.7rem;
}
img {
  width: 100%;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}
li {
  background: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  margin-bottom: 0.7rem;
  border-radius: 10px;
}
li p {
  font-size: 2rem;
}
li:first-child p {
  font-size: 1.5rem;
}
li span {
  font-size: 1rem;
  color: #ccc;
}
@media (max-width: 500px) {
  h1 {
    font-size: 1.5rem;
    display: block;
    text-align: center;
  }
  .platform-avatar {
    display: none;
  }
  .grid {
    grid-template-columns: 1fr;
  }
  li p {
    font-size: 1.5rem;
  }
}
</style>