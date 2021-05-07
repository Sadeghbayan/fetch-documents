<template>
  <footer class="footer">
    <div class="footer__inner">
      <!-- Since they are not real links I decided to not use a tag -->
      <ul class="footer__inner--nav">
        <li class="footer__inner--nav-item">© Copyrights</li>
        <li class="footer__inner--nav-item">All rights reserved</li>
      </ul>
      <ul class="footer__inner--nav">
        <li class="footer__inner--nav-item">Imprint</li>
        <li class="footer__inner--nav-item">Terms of use</li>
        <li class="footer__inner--nav-item">Privacy policy</li>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>

<style lang="scss">
.footer {
  background: $dark-blue;
  padding: $page-space-15 0;
  color: $white;
  font-size: $font-size-small;
  display: flex;
  justify-content: center;
  @include mq(md) {
    height: 40px;
    padding: 0;
  }

  &__inner {
    display: flex;
    align-items: center;
    flex-direction: column;
    @include mq(md) {
      flex-direction: row;
    }
    &--nav {
      display: flex;
      margin-bottom: $page-space-10;
      @include mq(md) {
        margin-bottom: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
      &-item {
        list-style: none;
        position: relative;
        line-height: 1.2;
        letter-spacing: 0;
        margin-right: $page-space-10;
        padding: 0 $page-space-10 0 0;
        &:last-child {
          &::after {
            display: none;
            @include mq(md) {
              display: block;
            }
          }
        }
        &::after {
          content: "";
          width: 1px;
          height: 100%;
          display: inline-block;
          position: absolute;
          top: 0;
          right: 0;
          background: $white;
        }
        @include mq(md) {
        }
      }

      & + ul {
        .footer__inner--nav-item {
          &:last-child {
            &:after {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>
