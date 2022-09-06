<script>
import Swal from "sweetalert2";

export default {
  name: "Navbar",
  emits: ["loggedOut"],
  methods: {
    clickHome() {
      this.$router.push("/");
    },
    // clickAdd() {
    //   this.$router.push("/add");
    // },
    clickLogout() {
      localStorage.clear();
      this.$emit("loggedOut");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Berhasil keluar",
        showConfirmButton: false,
        timer: 1500,
      });
      this.$router.push("/login");
    },
    clickTech() {
      this.$router.push("/technologies");
    },
  },
};
</script>

<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <img
        src="https://d1fdloi71mui9q.cloudfront.net/tv9lRdXaTWGZSCmoOrcp_Hk8NM52Sk669Qay3"
        alt="login form"
        id="img-fluid"
      />
      <button class="btn btn-dark px-4" @click.prevent="clickHome">
        DATABASE PEMUDA KGPM
      </button>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <button class="btn btn-dark px-5" @click.prevent="clickHome">
              DASHBOARD
            </button>
          </li>
          <!-- <li class="nav-item">
            <button class="btn btn-dark px-5" @click.prevent="clickAdd">
              TAMBAH DATA
            </button>
          </li> -->
          <li class="nav-item">
            <button class="btn btn-dark px-5" @click.prevent="clickTech">
              TEKNOLOGI
            </button>
          </li>
        </ul>
        <div>
          <div class="row-2 float-right">
            <button
              class="btn btn-danger px-5 mt-1 float-right"
              @click="clickLogout"
            >
              KELUAR
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.btn:hover {
  color: #000000;
  background-color: rgb(255, 255, 255);
  border-color: #000000;
}

.nav {
  background-color: #000000;
}

#img-fluid {
  height: 50px;
  width: 53px;
}
</style>
