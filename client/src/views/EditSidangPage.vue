<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "EditSidangPage",
  data() {
    return {
      id: this.$route.params.id,
      name: "",
      cityOrRegency: "",
      wilayah: "",
      titleName: "",
    };
  },
  async mounted() {
    const response = await axios.get(
      `http://localhost:3000/sidang/${this.$route.params.id}`
    );

    console.log(response);

    this.name = response.data.name;
    this.titleName = response.data.name;
    this.cityOrRegency = response.data.cityOrRegency;
    this.wilayah = response.data.wilayah;
  },
  methods: {
    submitUpdateSidang: async function () {
      console.log("masuk");
      try {
        const result = await axios({
          method: "PUT",
          url: `http://localhost:3000/sidang`,
          data: {
            name: this.name,
            cityOrRegency: this.cityOrRegency,
            wilayah: this.wilayah,
            id: this.id,
          },
        });

        console.log(result);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: result.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        this.$router.push("/");
      } catch (err) {
        console.log(err);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Gagal ubah data sidang",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    cancelUpdate() {
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <div class="container pt-5 mt-5">
    <h2>UBAH DATA SIDANG</h2>
    <div>
      <h5>{{ titleName }}</h5>
    </div>
  </div>
  <div>
    <div class="modal-dialog modal-login">
      <div class="modal-content">
        <div class="modal-body">
          <form @submit.prevent="submitUpdateSidang">
            <div class="form-group py-3">
              <i class="fa fa-user">Nama sidang</i>
              <input
                type="text"
                class="form-control"
                required="required"
                v-model="name"
              />
            </div>
            <div class="form-group">
              <i class="fa fa-lock">Kota / Kabupaten</i>
              <input
                type="text"
                class="form-control"
                required="required"
                v-model="cityOrRegency"
              />
            </div>
            <div class="form-group py-3">
              <i class="fa fa-lock">Wilayah</i>
              <input
                type="text"
                class="form-control"
                required="required"
                v-model="wilayah"
              />
            </div>
            <div class="d-flex justify-content-end">
              <button
                class="btn btn-danger btn-block mx-1"
                @click="cancelUpdate"
              >
                CANCEL
              </button>
              <button type="submit" class="btn btn-success btn-block">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
