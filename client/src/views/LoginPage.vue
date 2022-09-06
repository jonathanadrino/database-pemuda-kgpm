<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "LoginPage",
  emits: ["loggedIn"],
  data() {
    return {
      username: "",
      password: "",
      showPassword: false,
    };
  },
  methods: {
    submitLogin: async function () {
      try {
        const result = await axios({
          method: "POST",
          url: "http://localhost:3000/login",
          data: {
            username: this.username,
            password: this.password,
          },
        });

        console.log(result);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Berhasil masuk",
          showConfirmButton: false,
          timer: 1500,
        });

        localStorage.setItem("access_token", result.data.access_token);
        this.$emit("loggedIn");
        this.$router.push("/");
      } catch (err) {
        console.log(err);

        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Wrong username/password",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<template>
  <section class="vh-100">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card" style="border-radius: 1rem">
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block mt-4">
                <div class="d-flex justify-content-center mt-5 pt-4">
                  <img
                    src="https://d1fdloi71mui9q.cloudfront.net/tv9lRdXaTWGZSCmoOrcp_Hk8NM52Sk669Qay3"
                    alt="login form"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
                  <form @submit.prevent="submitLogin">
                    <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px">
                      DATABASE PEMUDA KGPM
                    </h5>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form2Example17"
                        >Username</label
                      >
                      <input
                        type="text"
                        id="form2Example17"
                        class="form-control form-control-lg"
                        v-model="username"
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form2Example17"
                        >Password</label
                      >
                      <input
                        type="password"
                        id="form2Example17"
                        class="form-control form-control-lg"
                        v-model="password"
                      />
                    </div>
                    <center>
                      <div class="pt-1 mb-4">
                        <button
                          class="btn btn-dark btn-lg btn-block"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                    </center>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.img-fluid {
  height: 200px;
  width: 200px;
}
</style>
