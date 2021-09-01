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
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Xyb3MWE8LxZLE9HkIkruMfah4Z62q1QqUomKnwQWsk4OXeU33koeLvXZy7TmNditWPXswGzrh3dWhWx_8GJQvg
"
                      alt="img"
                    />
                    <div class="aa-prom-content">
                      <span>75% Off</span>
                      <h4>
                        <router-link
                          :to="{
                            path: '/product_list',
                            query: { productCategory: '釜山' }
                          }"
                          ><a href="#">For Women</a>
                        </router-link>
                      </h4>
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
                        <span>Exclusive Item</span>
                        <h4><a href="#">For Men</a></h4>
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
                        <span>Sale Off</span>
                        <h4><a href="#">On Shoes</a></h4>
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
                        <span>New Arrivals</span>
                        <h4><a href="#">For Kids</a></h4>
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
                        <span>25% Off</span>
                        <h4><a href="#">For Bags</a></h4>
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
      this.$router.push(`/product_list/Category=${id}`);
    }
  }
};
</script>
