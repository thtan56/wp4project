<template>
  <form>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputName">Full Name</label>
        <input type="text" class="form-control" id="inputName" placeholder="Full Name">
      </div>
      <div class="form-group col-md-6">
        <label for="inputEmail4">Email</label>
        <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
      </div>
      <div class="form-group col-md-6">
        <label for="inputPassword4">Password</label>
        <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-4">
        <label for="inputCountry">Country</label>
        <select id="inputCountry" class="form-control">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Register</button>
  </form>
</template>

<script>
  export default {
    name: 'Register',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
