<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "AddPage",
  data() {
    return {
      name: "",
      birthDate: "",
      birthPlace: "",
      sidang: "",
    };
  },
  methods: {
    submitAddData: async function () {
      try {
        const result = await axios({
          method: "POST",
          url: "http://localhost:3000/data",
          data: {
            name: this.name,
            SidangId: this.$route.params.id,
            birthDate: this.birthDate,
            birthPlace: this.birthPlace,
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
        this.$router.push(`/sidang/${this.$route.params.id}`);
      } catch (err) {
        console.log(err);

        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Gagal menambahkan data",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
  },
  async mounted() {
    const response = await axios.get(
      `http://localhost:3000/sidang/${this.$route.params.id}`
    );

    console.log(response);
    this.sidang = response.data.name;
  },
};
</script>

<template>
  <div class="container pt-5 mt-5">
    <h4>TAMBAH DATA</h4>
    <div>
      <h5>{{ sidang }}</h5>
    </div>
  </div>
  <div>
    <div class="modal-dialog modal-login">
      <div class="modal-content">
        <div class="modal-body">
          <form @submit.prevent="submitAddData">
            <div class="form-group py-3">
              <i class="fa fa-user">Nama</i>
              <input
                type="text"
                class="form-control"
                required="required"
                v-model="name"
              />
            </div>
            <div class="form-group py-3">
              <i class="fa fa-lock">Tanggal Lahir</i>
              <input
                type="date"
                class="form-control"
                required="required"
                v-model="birthDate"
              />
            </div>
            <div class="form-group py-3">
              <i class="fa fa-lock">Tempat Lahir</i>
              <input
                type="text"
                class="form-control"
                required="required"
                v-model="birthPlace"
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
