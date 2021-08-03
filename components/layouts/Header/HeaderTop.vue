<template>
  <div class="header-top">
    <div class="search-mobile d-flex d-md-none">
      <img src="/media/elements/search.svg" alt="search" height="30" width="30" @click="toggleFilter">
    </div>
    <div class="logo-container">
      <img src="/media/Tutorsury_logo.png" alt="Logo" width="156px" height="42px">
    </div>
    <div class="search d-none d-md-flex">
      <div class="search-bar">
        <form action="">
          <label for="search-input">
            <input id="search-input" type="text" placeholder="在此搜尋">
          </label>
        </form>
      </div>
      <div class="more-links">
        <a href="#">線上資源</a>
        <span class="line-separator" />
        <a href="#">聯校活動</a>
      </div>
    </div>
    <div class="login">
      <nuxt-link to="/">
        Login
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderTop',
  computed: {
    openFilter () {
      return this.$store.getters['filter/openFilter']
    }
  },
  methods: {
    toggleFilter () {
      this.$store.commit('filter/TOGGLE_FILTER')
      document.body.style.overflow = this.openFilter ? 'hidden' : 'auto'
    }
  }
}
</script>

<style lang="scss" scoped>
.header-top {
  width: 100%;
  height: 70px;
  background-color: $tutorsury-dark;
  display: flex;
  .search-mobile {
    width: 15%;
    padding-left: 2rem;
    img {
      cursor: pointer;
    }
  }
  .logo-container {
    width: 25%;
    display: flex;
    align-items: center;
    padding-left: 2rem;
    @include media-breakpoint-down(sm) {
      padding: 0;
      width: 75%;
      justify-content: center;
    }
  }
  .search {
    flex: 1;
    .search-bar {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      form {
        width: 95%;
        label {
          width: 100%;
          margin: 0;
          input {
            border: 1px solid #58636E;
            background-color: $tutorsury-dark;
            color: white;
            height: 28px;
            font-size: 13px;
            width: 100%;
            padding-left: 13px;
            &::placeholder {
              color: #58636E;
            }
            &:-ms-input-placeholder {
              color: #58636E;
            }
            &::-ms-input-placeholder {
              color: #58636E;
            }
          }
        }
      }
    }
    .more-links {
      display: flex;
      color: white;
      align-items: center;
      a {
        font-size: 22px;
        padding: 2px 12px;
        color: white;
        &:hover {
          text-decoration: none;
          color: white;
        }
      }
      .line-separator {
        height: 24px;
        width: 2px;
        background-color: white;
      }
    }
  }
  .login {
    width: 10%;
    display: flex;
    justify-content: flex-end;
    padding-right: 1rem;
    a {
      color: white;
      height: 100%;
      padding: 0 1rem;
      display: flex;
      align-items: center;
      &:hover {
        text-decoration: none;
        color: white;
      }
    }
  }
}
</style>
