<script>
import axios from "axios";

export default {
  name: "DetailPage",
  data() {
    return {
      person: {},
    };
  },
  async mounted() {
    const response = await axios.get(
      `http://localhost:3000/data/${this.$route.params.id}`
    );

    this.person = response.data;
    console.log(this.person);
  },
};
</script>

<template>
  <section class="py-5 mt-5">
    <div class="container px-4 px-lg-5 my-5">
      <div class="row gx-4 gx-lg-5 align-items-center">
        <div class="col-md-6">
          <img
            class="card-img-top mb-5 mb-md-0"
            src="https://resources.premierleague.com/premierleague/photos/players/250x250/p95658.png"
            id="foto"
          />
        </div>
        <div class="col-md-6">
          <h1 class="display-5 fw-bolder">{{ person.name }}</h1>
          <div class="fs-5 mb-2">
            <span>{{ person.sidang }} </span>
          </div>
          <div>
            <span>{{ person.birthPlace }} </span>
          </div>
          <p class="lead">{{ person.formattedBirthDate }}</p>
          <div class="d-flex">
            <button class="btn btn-light flex-shrink-0" type="button">
              <i class="bi-cart-fill me-1"></i>
              Status: {{ person.status }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#foto {
  height: 50%;
  width: 70%;
}
</style>
