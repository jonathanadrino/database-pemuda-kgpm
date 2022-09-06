<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "editPage",
  data() {
    return {
      id: this.$route.params.id,
      name: "",
      SidangId: "",
      birthDate: "",
      birthPlace: "",
      titleName: "",
      sidangBefore: "",
    };
  },
  async mounted() {
    console.log(this.$route.params);

    const response = await axios.get(
      `http://localhost:3000/data/${this.$route.params.id}`
    );

    const arr1 = response.data.birthDate.split(/[-T]+/);
    this.name = response.data.name;
    this.titleName = response.data.name;
    this.SidangId = response.data.SidangId;
    this.sidangBefore = response.data.SidangId;
    this.birthDate = `${arr1[0]}-${arr1[1]}-${arr1[2]}`;
    this.birthPlace = response.data.birthPlace;
  },
  methods: {
    submitUpdate: async function () {
      try {
        const result = await axios({
          method: "PUT",
          url: "http://localhost:3000/data",
          data: {
            id: this.id,
            name: this.name,
            SidangId: this.SidangId,
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
        this.$router.push(`/sidang/${this.SidangId}`);
      } catch (err) {
        console.log(err);

        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Gagal update data",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    cancelUpdate() {
      this.$router.push(`/sidang/${this.sidangBefore}`);
    },
  },
};
</script>

<template>
  <div class="container pt-5 mt-5">
    <h2>UBAH DATA</h2>
    <div>
      <h5>{{ titleName }}</h5>
    </div>
  </div>
  <div>
    <div class="modal-dialog modal-login">
      <div class="modal-content">
        <div class="modal-body">
          <form @submit.prevent="submitUpdate">
            <div class="form-group py-3">
              <i class="fa fa-user">Nama</i>
              <input
                type="text"
                class="form-control"
                required="required"
                v-model="name"
              />
            </div>
            <div class="form-group">
              <i class="fa fa-lock">Kode Sidang</i>
              <input
                type="text"
                class="form-control"
                required="required"
                v-model="SidangId"
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
