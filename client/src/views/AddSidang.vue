<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "AddSidang",
  data() {
    return {
      name: "",
      cityOrRegency: "",
      wilayah: "",
    };
  },
  methods: {
    submitAddSidang: async function () {
      try {
        const result = await axios({
          method: "POST",
          url: "http://localhost:3000/sidang",
          data: {
            name: this.name,
            cityOrRegency: this.cityOrRegency,
            wilayah: this.wilayah,
            id: this.id
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
          title: "Gagal menambahkan sidang",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
  },
};
</script>

<template>
  <div class="container pt-5 mt-5">
    <h2>TAMBAH SIDANG</h2>
  </div>
  <div>
    <div class="modal-dialog modal-login">
      <div class="modal-content">
        <div class="modal-body">
          <form @submit.prevent="submitAddSidang">
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
              <button type="submit" class="btn btn-dark btn-block">
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
