<template>
  <div class="newsletter">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div
            class="
              newsletter_text
              d-flex
              flex-column
              justify-content-center
              align-items-lg-start align-items-md-center
              text-center
            "
          >
            <h4 class="fw-bold">訂閱我們</h4>
            <p class="fw-bold">訂閱獲取更多資訊!</p>
          </div>
        </div>
        <div class="col-lg-6">
          <form action="post">
            <div
              class="
                newsletter_form
                d-flex
                flex-md-row flex-column flex-xs-column
                align-items-center
                justify-content-lg-end justify-content-center
              "
            >
              <Field
                id="email"
                v-model="email"
                name="email"
                type="email"
                class="form-control fw-bold"
                placeholder="請輸入 Email"
                rules="email|required"
              />

              <ErrorMessage name="email" class="invalid-feedback" />

              <button
                id="newsletter_submit"
                class="newsletter_submit_btn trans_300 fw-bold btn-success"
                value="Submit"
                type="button"
                @click.prevent="subscribe"
              >
                subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: ''
    };
  },
  methods: {
    subscribe () {
      this.$swal({
        icon: 'success',
        title: '感謝您的訂閱！'
      });
      this.email = '';
    }
  }
};
</script>
