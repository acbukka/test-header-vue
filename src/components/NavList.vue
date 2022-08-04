<template>
  <ul class="header-list">
    <li class="header-list__item">
     <a href="#" class="header-list__item-link">Направления</a> 
    </li>
    <li class="header-list__item">
     <a href="#" class="header-list__item-link">Специалисты</a> 
    </li>
    <li class="header-list__item">
     <a href="#" class="header-list__item-link">Предложения</a> 
    </li>
    <li class="header-list__item">
     <a href="#" class="header-list__item-link">Клиники</a> 
    </li>
    <li class="header-list__item">
     <a href="#" class="header-list__item-link">Аппараты</a>
    </li>
    <li class="header-list__item">
     <a href="#" class="header-list__item-link">Пациентам</a> 
    </li>
    <li class="header-list__item">
     <a href="#" class="header-list__item-link">Новости и медиа</a> 
    </li>
    <li class="header-list__item">
     <a href="#" class="header-list__item-link">О
     клинике</a>
    </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .header-list {
    opacity: 1;
    display: flex;
    transform: translateY(0);
    z-index: -1;
    transition: all .3s ease-in-out;
    list-style: none;
    width: 100%;
    padding: 25px 0;
    background: transparent;
    &__item {
      font-size: 12px;
      &-link {
        color: #2e3135;
        text-decoration: none;
      }
    }
  }
  .header-list__item + .header-list__item {
    margin-left: 3%;
  }

  @media (max-width: 768px) {
    .header-list__item + .header-list__item {
      margin-left: 0;
      margin-top: 13px;
    }
    .header-list__item {
      font-size: 14px;
    }
  }

</style>