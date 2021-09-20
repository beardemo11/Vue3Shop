<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination pagination-lg justify-content-end">
      <li class="page-item" :class="{ disabled: !paginationData.has_pre }">
        <button type="button" class="page-link" @click="changePage('pre')">
          <span aria-hidden="true">&laquo;</span>
        </button>
      </li>
      <li
        class="page-item"
        v-for="page in paginationData.total_pages"
        :key="page"
        :class="{ active: page === paginationData.current_page }"
      >
        <button
          type="button"
          class="page-link"
          @click="changePage(page)"
          :disabled="page === paginationData.current_page"
        >
          {{ page }}
        </button>
      </li>
      <li class="page-item" :class="{ disabled: !paginationData.has_next }">
        <button
          type="button"
          class="page-link"
          aria-label="Next"
          @click="changePage('next')"
        >
          <span aria-hidden="true">&raquo;</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  emits: ['getData'],
  props: ['paginationData'],
  methods: {
    changePage (page) {
      let toPage = page;
      if (page === 'next') {
        toPage = this.paginationData.current_page + 1;
      } else if (page === 'pre') {
        toPage = this.paginationData.current_page - 1;
      }
      this.$emit('getData', toPage);
    }
  }
};
</script>
