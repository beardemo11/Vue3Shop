<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="OrderFormOffcanvas"
    aria-labelledby="offcanvasRight3Label"
  >
    <div class="offcanvas-header border-bottom">
      <h5 id="offcanvasRight3Label" class="fw-bold">查詢訂單</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body pt-0 bg-white">
      <ul>
        <li class="d-flex align-items-center py-4 px-3">
          <div class="d-flex">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control fw-bold"
                placeholder="輸入訂單號碼"
                v-model.trim="orderSearilNumber"
              /><button
                class="btn btn-success fw-bold"
                @click="findOrder"
                type="button"
              >
                <i class="fa fa-fw fa-search text-white"></i>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return { order: {}, orderSearilNumber: '' };
  },

  methods: {
    findOrder () {
      if (this.orderSearilNumber.length > 0) {
        this.$http
          .get(
            `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderSearilNumber}`
          )
          .then((res) => {
            if (res.data.success) {
              const { order } = res.data;
              if (order !== null) {
                this.$swal({
                  title: '謝謝您的訂購',
                  icon: 'success',
                  confirmButtonColor: '#59ab6e'
                }).then((result) => {
                  if (result.isConfirmed) {
                    this.$router.push(`/orderForm/${order.id}`);
                  }
                });
              } else {
                this.$swal({
                  title: '查無訂單',
                  icon: 'error',
                  confirmButtonColor: '#59ab6e'
                });
              }
              this.orderSearilNumber = '';
            }
          });
      } else {
        this.$swal({
          title: '請輸入訂單號碼',
          icon: 'error',
          confirmButtonColor: '#59ab6e'
        });
      }
    }
  }
};
</script>
