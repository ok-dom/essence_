Vue.component('v-product', {
  data() {
    return {}
  },
  props: {
    product: Object
  },
  template: `
    <div class="single-product-wrapper">
		<!-- Product Image -->
		<div class="product-img">
			<img :src="product.image" alt="">

			<!-- Product Badge -->
			<div style="left:20px" class="product-badge offer-badge">
				<span>-30%</span>
			</div>
			
			<!-- Product Badge -->
			<div style="right:20px" class="product-badge new-badge">
				<span>Новый</span>
			</div>

		</div>
		<!-- Product Description -->
		<div class="product-description">
			<span>{{product.brand}}</span>
			<a href="product.html">
				<h6>{{product.title}}</h6>
			</a>
			<p class="product-price"><span class="old-price">{{product.oldprice}}</span> {{product.price}}</p>

			<!-- Hover Content -->
			<div class="hover-content">
				<!-- Add to Cart -->
				<div class="add-to-cart-btn">
					<a href="#" class="btn essence-btn">В корзину</a>
				</div>
			</div>
		</div>
	</div>
  `
})