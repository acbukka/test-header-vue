<template>
  <div class="header" v-on:mouseenter="handleMove('enter')" v-on:mouseleave="handleMove('leave')">
    <div class="container">
      <div class="header-wrapper">
        <h1 class="header-title">Олимп клиник</h1>
        <div class="header-inner">
          <div class="header-info">
            <my-input class="header-info__input" placeholder="Поиск по сайту..."></my-input>
            <my-button class="header-info__btn">
              <img class="header-info__btn-icon" src="../assets/icons/search.png" alt="">
            </my-button>
          </div>
          <nav-list class="header-list"></nav-list>
          <div class="header-btns">
            <my-button class="header-btns__call">Обратный звонок</my-button>
            <my-button class="header-btns__user">
              <img class="header-btns__user-img" src="../assets/icons/user.svg" alt="">
            </my-button>
          </div>
        </div>
        <my-button class="header-menu__btn" v-on:click="handleMove('active')">
            <svg width="40" height="10" viewBox="0 0 40 10" fill="#000" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="2" rx="1" />
              <rect x="16" y="8" width="24" height="2" rx="1" />
            </svg>
          </my-button>
      </div>
    </div>
    <div class="white"></div>
  </div>
</template>

<script>
import NavList from "@/components/NavList";

export default {
  components: {
    NavList
  },
  created() {
    window.addEventListener("scroll", this.handleMove);
    let media = window.matchMedia("(max-width: 768px)");
    if (media.matches) { // If media query matches
      window.removeEventListener("scroll", this.handleMove);
    } 
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleMove);
  },
  methods: {
    handleMove(event) {
      console.log(event);
      const ourItem = document.querySelector('.header-list');
      const ourPhone = document.querySelector('.white');
      // Добавим логику "добавления классов" чтобы создать анимацию выезжания меню, попутно повесив слушатель на скролл
      // и на наведение мыши как втроенную директиву Вью
      if (window.scrollY > 0) {
        ourItem.classList.add('out');
        ourPhone.classList.add('out');
        if (event === 'enter') {
          ourItem.classList.remove('out');
          ourPhone.classList.remove('out');
        }
      } else {
        ourItem.classList.remove('out');
        ourPhone.classList.remove('out');
      }
      // 
      const menuBlock = document.querySelector('.header-inner');
      if (event === 'active') {
        if (menuBlock.classList.contains('active')) {
          menuBlock.classList.remove('active');
        } else {
          menuBlock.classList.add('active');
        }
      }
    },
  },
}

</script>

<style lang="scss" scoped>
.header {
  background: #fff;
  width: 100%;
  position: fixed;
  z-index: 10;
  &-wrapper {
    position: relative;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
  }

  &-inner {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-title {
    margin-right: 13%;
    width: 150px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 20px;
    white-space: nowrap;
  }

  &-info {
    width: 100%;
    border: 1px solid #f1f1f1;
    border-radius: 5px;
    background: #f1f1f1;
    display: flex;
    margin: 0 15px;
  }

  &-info__btn {
    &-icon {
      width: 15px;
    }
  }

  &-list {
    position: absolute;
    bottom: -55px;
    left: 0;
    right: 0;
  }

  &-btns {
    margin-left: 13%;
    display: flex;
  }

}

.header-btns {
  &__call {
    margin-right: 8px;
  }

  &__user-img {
    width: 15px;
  }
}

.btn.header-info__btn {
  border: none;
  border-left: 2px solid #d8d8d8;
  border-radius: 0;

  &:hover {
    border: none;
    border-left: 2px solid #d8d8d8;
    color: none;
  }
}

.btn.header-menu__btn {
  padding: 9px 0;
  border: none;
  display: none;
  &:hover {
    border: none;
  }
}

.white {
  transition: all .3s ease-in-out;
  position: absolute;
  z-index: -2;
  width: 100%;
  height: 65px;
  top: 68px;
  left: 0;
  background: #fff;
}

.out {
  opacity: 0;
  transform: translateY(-60px);
}

// Adaptive

@media (max-width: 768px) {
  body {
    height: 100vh;
  }
  .header {

    &-inner {
      background: #fff;
      padding: 20px;
      justify-content: flex-start;
      width: 100%;
      height: 100%;
      position: fixed;
      top: 63px;
      right: 0;
      flex-direction: column;
      align-items: start;
      transform: translateX(100%);
      transition: all .3s ease-in-out;
    }

    &-info {
      margin: 0 0;
    }

    &-list {
      position: static;
      z-index: 0;
      flex-direction: column;
      align-items: flex-start;
    }

    &-btns {
      margin-left: 0;
    }
  }

  .btn.header-menu__btn {
    display: block;
    &:hover {
      border: none;
    }
  }

  .white {
    display: none;
  }

  .active {
    transform: translateX(0);
  }

  .header-info {
    width: 65%;
  }
}

</style>