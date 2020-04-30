<template>
  <div class="navbar">
      <b-navbar  variant="faded" type="light" class="shadow-sm pt-3 pb-3" style="padding-left: 11%; padding-right: 11%; background-color: rgb(244, 248, 252)" fixed="top">
        <b-navbar-brand href="#">
          <img src="../assets/logo.png" style="width: 8rem"/>
        </b-navbar-brand>
        <b-navbar-nav>
          <b-nav-item style="font-size: 14px; border-bottom: 2px solid rgb(13, 4, 68)" class="pt-1 ml-4">Home</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <div>
            <b-button @click="$bvModal.show('bv-modal-example')" style="border-radius: 20px; font-weight: bold; color: rgb(13, 4, 68); border-color: rgb(13, 4, 68); background-color: white;" class="pt-2 pb-2 pr-4 pl-4 masuk">Masuk</b-button>
            <b-modal id="bv-modal-example" hide-footer>
              <div class="d-block text-center">
                <h3 class="title-1">Yuk, Belajar di Sekolah.mu!</h3>
                <p class="mt-3 mb-3" style="font-family: 'Questrial', sans-serif;">Jika sudah pernah daftar di Sekolah.mu, gunakan opsi Kirim Password Baru untuk masuk ke website ini.</p>
                <img src="../assets/logo.png" style="width: 8rem" class="mb-3"/>
                <div class="mr-5 ml-5">
                  <b-form-input placeholder="Email" class="mb-3"></b-form-input>
                  <b-form-input placeholder="Password" class="mb-3"></b-form-input>
                  <div class="d-flex justify-content-between">
                    <b-form-checkbox
                      id="checkbox-1"
                      value="accepted"
                      unchecked-value="not_accepted"
                    >
                      Ingat saya
                    </b-form-checkbox>
                    <p style="font-family: 'Questrial', sans-serif; cursor: pointer">Kirim password baru</p>
                  </div>
                  <b-button type="submit" variant="primary" style="width: 100%; font-weight: bold;  background-color: rgb(13, 4, 68); border: 0" class="pt-2 pb-2">Masuk</b-button>
                  <p class="mt-3 mb-5" style="font-family: 'Questrial', sans-serif;">Lapor kendala login ke <b>suaramu@sekolahmu.co.id</b></p>
                </div>
              </div>
            </b-modal>
          </div>
        </b-navbar-nav>
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
.title-1 {
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-size: 24px;
    margin: 0;
    color:  rgb(13, 4, 68);
}
</style>
