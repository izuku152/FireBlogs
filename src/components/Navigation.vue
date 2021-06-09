<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link :to="{ name: Home }">FireBlogs</router-link>
      </div>
      <div class="nav-links" v-show="!mobile">
        <ul>
          <router-link class="link" to="#">Home</router-link>
          <router-link class="link" to="#">Blogs</router-link>
          <router-link class="link" to="#">Create Post</router-link>
          <router-link class="link" to="#">Login / Register</router-link>
        </ul>
      </div>
    </nav>
    <MenuIcon class="menu-icon" @click="toggleMobileMenu()" v-show="mobile" />
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileMenu">
        <router-link class="link" to="#">Home</router-link>
        <router-link class="link" to="#">Blogs</router-link>
        <router-link class="link" to="#">Create Post</router-link>
        <router-link class="link" to="#">Login / Register</router-link>
      </ul>
    </transition>
  </header>
</template>

<script>
import MenuIcon from "../assets/Icons/bars-regular.svg";
export default {
  name: "Navigation",
  components: { MenuIcon },
  data() {
    return {
      mobile: null, // to show menu button
      mobileMenu: null, // to show mobile navbar
      windowWidth: null, // to store window width
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen); //when resize happens
    this.checkScreen(); // when the page first loads
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileMenu = false;
      return;
    },
    toggleMobileMenu() {
      this.mobileMenu = !this.mobileMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #fff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;

  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;

    &:hover {
      color: #1eb8b8;
    }
  }
}

nav {
  display: flex;
  padding: 25px 0;

  .branding {
    display: flex;
    align-items: center;
    .header {
      font-weight: 600;
      font-size: 24px;
      color: #000;
      text-decoration: none;
    }
  }

  .nav-links {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;

    ul {
      margin-right: 32px;
      .link {
        margin-right: 32px;
      }
      .link:last-child {
        margin-right: 0px;
      }
    }
  }
}
.menu-icon {
  cursor: pointer;
  position: absolute;
  top: 25px;
  right: 25px;
  height: 25px;
  width: auto;
}

.mobile-nav {
  padding: 20px;
  width: 70%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  background-color: #303030;
  top: 0;
  left: 0;

  .link {
    color: #fff;
    padding: 30px 0;
  }
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 1s ease;
}

.mobile-nav-enter {
  transform: translateX(-250px);
}
.mobile-nav-enter-to {
  transform: translateX(0);
}
.mobile-nav-leave-to {
  transform: translateX(-250px);
}
</style>
