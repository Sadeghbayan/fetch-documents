<template>
  <header class="header">
    <div class="header__inner">
      <router-link to="/">
        <img
          alt="Company logo"
          src="../assets/company.svg"
          class="header__logo"
        />
      </router-link>
      <div class="header__links" :class="{ opened: mobileMenuOpen }">
        <nav>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/documents">Documents</router-link></li>
            <li><router-link to="/contacts">Contacts</router-link></li>
          </ul>
        </nav>
        <div class="header__links--user">
          <img src="../assets/avatar.svg" alt="avatar" />
          <div class="user-info">
            <div>{{ userFirstName }}</div>
            <div>{{ userLastName }}</div>
          </div>
        </div>
      </div>
      <button type="button" class="navbar-toggler" @click="showMobileMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useUser from "@/hooks/useUser";
export default defineComponent({
  name: "Header",
  async setup() {
    const { userFirstName, userLastName } = await useUser();
    const mobileMenuOpen = ref(false);
    const showMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value;
    };
    return {
      showMobileMenu,
      mobileMenuOpen,
      userFirstName,
      userLastName,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/main";

.header {
  background: $dark-blue;
  padding: 0 $page-space-20;
  height: 60px;
  color: $white;
  position: relative;
  &__inner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @include mq(md) {
      flex: 1;
      height: 100%;
      justify-content: initial;
      align-items: inherit;
    }
  }

  &__logo {
    padding-top: 8px;
    padding-bottom: 8px;
  }

  &__links {
    display: flex;
    display: none;
    @include mq(md) {
      margin-left: auto;
      align-items: center;
    }
    &.opened {
      display: block;
      position: absolute;
      top: 100%;
      right: 0;
      background: $white;
      box-shadow: $default-boxshadow;
      z-index: 14;
      min-width: 105px;
      @include mq(md) {
        display: flex;
        position: inherit;
        background: none;
        box-shadow: none;
        min-width: inherit;
      }
      //::v-deep didn't work here to select parent in child elements so I had to write syles here
      nav {
        ul {
          flex: 1;
          align-items: flex-start;
          @include mq(md) {
            align-items: inherit;
          }
          li {
            align-items: flex-start;
            width: 100%;
            @include mq(md) {
              align-items: inherit;
              flex-direction: row;
              display: flex;
            }
            a {
              color: $dark-blue;
              background: $white;
              padding: $page-space-10;
              width: 100%;
              @include mq(md) {
                color: $white;
                flex: 1;
                align-items: center;
                display: flex;
                background: none;
                padding: 0 $page-space-15;
              }
              &.router-link-exact-active {
                background: $dark-blue;
                color: $white;
                @include mq(md) {
                  background: $white;
                  color: $dark-blue;
                }
              }
            }
          }
        }
      }
      .header__links--user {
        border-left: medium none;
        border-top: 1px solid $light-silver;
        padding-left: 0;
        @include mq(md) {
          border-top: medium none;
          border-left: 1px solid $white;
          padding-left: $page-space-30;
        }
        .user-info {
          padding: 10px;
          color: $dark-blue;
          @include mq(md) {
            color: $white;
            padding: 0;
          }
          div {
            margin-bottom: 10px;
            &:last-child {
              margin-bottom: 0;
            }
          }
        }
        img {
          display: none;
          @include mq(md) {
            display: block;
          }
        }
      }
    }
    @include mq(md) {
      display: flex;
    }

    nav {
      height: 100%;
      display: flex;
      @include mq(md) {
        margin-right: 50px;
      }
      ul {
        display: flex;
        list-style: none;
        font-size: $font-size-small;
        font-family: $font-family-links;
        margin: 0;
        padding: 0;
        flex-direction: column;
        @include mq(md) {
          flex-direction: row;
        }
        li {
          display: flex;
          flex-direction: column;
          align-items: center;
          a {
            color: $white;
            text-decoration: none;
            padding: 0 15px;
            flex: 1;
            align-items: center;
            display: flex;
            letter-spacing: 0;
            cursor: pointer;
            &.router-link-exact-active {
              background: $white;
              color: $dark-blue;
            }
          }
        }
      }
    }
    &--user {
      font-size: $font-size-small;
      font-family: $font-family-links;
      display: flex;
      height: 100%;
      border-left: 1px solid $white;
      padding-left: $page-space-30;

      img {
        padding-top: 12px;
        padding-right: $page-space-20;
        height: 33px;
      }

      .user-info {
        flex: 1;
        align-self: center;
        div {
          margin-bottom: 4px;
        }
      }
    }
  }

  .navbar-toggler {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    background-image: url("../assets/burger_menu.svg");
    width: 20px;
    height: 17px;
    cursor: pointer;

    @include mq(md) {
      display: none;
    }
  }
}
</style>
