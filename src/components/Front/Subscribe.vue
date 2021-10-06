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
          <form ref="form" @submit.prevent="subscribe">
            <div
              class="
                newsletter_form
                d-flex
                flex-md-row flex-column flex-xs-column
                align-items-center
                justify-content-lg-end justify-content-center
              "
            >
              <input
                type="email"
                class="form-control"
                placeholder="請輸入您的電子信箱"
                v-model="email"
              />

              <button
                id="newsletter_submit"
                class="newsletter_submit_btn trans_300 fw-bold btn-success"
                value="Submit"
                type="submit"
              >
                訂閱
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data () {
    return {
      email: ''
    };
  },
  methods: {
    subscribe () {
      emailjs
        .send(
          'gmail',
          'template_bxizo7a',
          { userMail: this.email },
          'user_ExC2pAvCYRYPBmORN8HBR'
        )
        .then(
          (result) => {
            console.log('SUCCESS!', result.text);
            this.$swal({
              icon: 'success',
              title: '感謝您的訂閱！'
            });
            this.email = '';
          },
          (error) => {
            console.log('FAILED...', error.text);
            this.$swal({ icon: 'error', title: error.text });
            this.email = '';
          }
        );
    }
  }
};
</script>
