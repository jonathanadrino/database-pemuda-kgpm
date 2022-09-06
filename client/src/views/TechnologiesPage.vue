<script>
export default {
  name: "TechnologiesPage",
};
</script>

<template>
  <div class="d-flex mt-5 pt-5 justify-content-center">
    <h3>Server</h3>
  </div>
  <div class="d-flex mt-2 px-5 justify-content-start">
    <img
      src="data:image/png;base64,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"
      alt=""
      id="node"
    />
    <img
      src="data:image/png;base64,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"
      alt=""
      id="express"
    />
    <h1 class="mt-5 pt-3">BCRYPTJS</h1>
    <h1 class="mt-5 pt-3 px-4">CORS</h1>
    <img
      src="https://cdn.iconscout.com/icon/free/png-256/sequelize-1-1175002.png"
      alt=""
      id="sequelize"
    />
    <img
      src="https://www.postgresqltutorial.com/wp-content/uploads/2012/08/What-is-PostgreSQL.png"
      alt=""
      id="postgres"
    />
  </div>
  <div class="d-flex mt-2 pt-2 justify-content-center">
    <h3>Client</h3>
  </div>
  <div class="d-flex mt-2 px-5 justify-content-center">
    <img
      src="https://mochikit.com/wp-content/uploads/2019/01/vue-js-logo.png"
      alt=""
      id="vue"
    />
    <img
      src="https://jay.holtslander.ca/img/svg/skills/bootstrap-logo.svg"
      alt=""
      id="bootstrap"
    />
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Axios_%28computer_library%29_logo.svg/1280px-Axios_%28computer_library%29_logo.svg.png"
      alt=""
      id="axios"
    />
  </div>
</template>
<style>
#sequelize {
  height: 70%;
  width: 20%;
  margin-top: -37px;
}
#node {
  height: 60%;
  width: 15%;
  margin-top: 37px;
}
#postgres {
  height: 30%;
  width: 15%;
  margin-top: 30px;
  margin-left: 30px;
}

#bootstrap {
  height: 10%;
  width: 20%;
  margin-top: -20px;
  margin-left: 30px;
}
#axios {
  height: 10%;
  width: 17%;
  margin-top: 40px;
  margin-left: 30px;
}

#express {
  height: 50%;
  width: 50%;
  margin-top: 5px;
}

#vue {
  height: 70%;
  width: 17%;
  margin-top: 26px;
}
</style>
