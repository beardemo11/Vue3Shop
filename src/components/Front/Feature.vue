<template>
  <!-- Start Promo section -->
  <section id="aa-promo">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="aa-promo-area">
            <div class="row">
              <!-- promo left -->
              <div class="col-md-5 no-padding">
                <div class="aa-promo-left">
                  <div class="aa-promo-banner">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Xyb3MWE8LxZLE9HkIkruMfah4Z62q1QqUomKnwQWsk4OXeU33koeLvXZy7TmNditWPXswGzrh3dWhWx_8GJQvg"
                      alt="img"
                    />
                    <div class="aa-prom-content">
                      <a href="#" @click.prevent="goToProduct('首爾')">
                        <h1 class="h1c">首爾</h1></a
                      >
                      <h5 class="h5c">
                        景點包含現代摩天大樓、古廟、景福宮和首爾塔。
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <!-- promo right -->
              <div class="col-md-7 no-padding">
                <div class="aa-promo-right">
                  <div class="aa-single-promo-right">
                    <div class="aa-promo-banner">
                      <img
                        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRy0EK9ShbOxkTm6Mmk6Xm7d5Gie_RBIoEzo5-xon-TfdsXAGfcaqucJdRecmUKp1gaPbNwFxhOE_IT7KgLPEvjPg
"
                        alt="img"
                      />
                      <div class="aa-prom-content">
                        <a href="#" @click.prevent="goToProduct('釜山')">
                          <h1 class="h1c">釜山</h1></a
                        >
                        <h5 class="h5c">
                          以海雲台海灘、梵魚寺和金井山步道聞名。
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div class="aa-single-promo-right">
                    <div class="aa-promo-banner">
                      <img
                        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTl1H8o7mr5pL0bDCOGR53nvemcEB-szhFIVQ96C2dUgF5AKYZWhg7yq-SygsPCfa4HMz106s5L2K_xmE7sHcQYWg
"
                        alt="img"
                      />
                      <div class="aa-prom-content">
                        <a href="#" @click.prevent="goToProduct('濟州市')">
                          <h1 class="h1c">濟州市</h1></a
                        >
                        <h5 class="h5c">
                          特色包含民俗博物館、亂打秀劇場和海水三溫暖。
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div class="aa-single-promo-right">
                    <div class="aa-promo-banner">
                      <img
                        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS3liBXocMwkztPWiuUNNty3bW0HDSS7ySPjRF8iGyjXV21g-BxNtG_Isqcl2vDtPKKLLWyRoRHqyNzr9lm2IH3fw
"
                        alt="img"
                      />
                      <div class="aa-prom-content">
                        <a href="#" @click.prevent="goToProduct('仁川')">
                          <h1 class="h1c">仁川</h1></a
                        >
                        <h5 class="h5c">特色包含大型機場和海灘附近的島嶼。</h5>
                      </div>
                    </div>
                  </div>
                  <div class="aa-single-promo-right">
                    <div class="aa-promo-banner">
                      <img
                        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQtb43nr9Bd2awA4brp7O9-91Do8bMFztcEN-KQdLx0MthVuZHjrVdSBlSsRd1l4xHO4TCG0xIDSE7uz6nXT60sRA
"
                        alt="img"
                      />
                      <div class="aa-prom-content">
                        <a href="#" @click.prevent="goToProduct('慶州市')">
                          <h1 class="h1c">慶州市</h1></a
                        >
                        <h5 class="h5c">
                          景點包含佛國寺和石窟庵等歷史悠久的新羅王朝遺跡。
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- / Promo section -->
</template>

<script>
export default {
  data () {
    return {};
  },
  methods: {
    goToProduct (id) {
      this.$router.push(`/product_list?productCategory=${id}`);
    }
  }
};
</script>

<style scoped>
.h1c {
  font-weight: 600;
  color: white;
}
.h5c {
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercas;
}
a {
  text-decoration: none;
}
</style>
