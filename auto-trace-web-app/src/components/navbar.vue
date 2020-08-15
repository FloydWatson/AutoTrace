<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="flex-container">
      <div class="logo">
        <a class="navbar-brand" href="#">
          <img src="../assets/auto_logo.png" id="autoLogo" alt="auto trace icon" />
        </a>
      </div>
      <div class="content">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link" href="#">Map View</a>
            <a class="nav-item nav-link" href="#">Table View</a>
          </div>
        </div>
      </div>
      <div class="logout">
        <a class="nav-item nav-link" href="#">Logout</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      test: "Test Data",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  width: 100vw;
}
.flex-container {
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.content {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.logout {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

#autoLogo {
  height: 5em;
  width: 5em;
}
</style>
