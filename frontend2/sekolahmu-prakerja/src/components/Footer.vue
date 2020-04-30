<template>
  <div class="navbar mt-5">
      <b-navbar  variant="faded" type="light" class="shadow-sm pt-3 pb-3 d-flex justify-content-center align-items-center" style="padding-left: 2%; padding-right: 5%; background-color: rgb(244, 248, 252)" sticky="bottom">
          <img src="../assets/logokotak.png" style="width: 4rem"/>
          <p  style="font-family: 'Questrial', sans-serif;" class="mt-3 ml-3">&copy; Adam Primarizki. 2020</p>
      </b-navbar>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.navbar {
  width: 100%;
  padding: 0;
  background-color: rgb(255, 255, 255);
}
.masuk {
  transition: 100ms;
}
.masuk:hover{
  border-width: 2px;
}
</style>
