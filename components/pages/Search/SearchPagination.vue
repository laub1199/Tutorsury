<template>
  <div v-if="lastPage > 1" class="search-pagination">
    <div class="pagination-container">
      <div class="pagination-btn hover-disable">
        <img src="/media/elements/pagination_left.svg" alt="left arrow button" height="25" width="15">
      </div>
      <div v-for="index in 3" :key="`s${index}`" class="pagination-btn hover-disable" :class="{ 'active': currentPage === index, 'd-none': currentPage > 3 || index > lastPage}">
        {{ index }}
      </div>
      <div v-if="currentPage > 3" class="pagination-btn">
        1
      </div>
      <div v-if="currentPage > 3" class="pagination-btn hover-disable click-disable">
        ...
      </div>
      <div v-for="index in 3" :key="`${index}`" class="pagination-btn" :class="{ 'active': currentPage === (index - 2 + currentPage), 'd-none': currentPage <= 3 || (index - 2 + currentPage) > lastPage}">
        {{ index - 2 + currentPage }}
      </div>
      <div v-if="lastPage > 4 && currentPage < lastPage - 2" class="pagination-btn hover-disable click-disable">
        ...
      </div>
      <div v-if="currentPage < lastPage - 1" class="pagination-btn">
        {{ lastPage }}
      </div>
      <div class="pagination-btn hover-disable">
        <img src="/media/elements/pagination_right.svg" alt="right arrow button" height="25" width="15">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchPagination',
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    lastPage: {
      type: Number,
      default: 2
    }
  }
}
</script>

<style lang="scss" scoped>
.search-pagination {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  .pagination-container {
    display: flex;
    .pagination-btn {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #343A41;
      border-radius: 3px;
      font-size: 18px;
      line-height: 21px;
      &:not(.click-disable) {
        cursor: pointer;
      }
      &.active {
        color: #FFFFFF;
        background: #343A41;
      }
      &:hover:not(.hover-disable) {
        color: #FFFFFF;
        background: #343A41;
      }
    }
  }
}
</style>
