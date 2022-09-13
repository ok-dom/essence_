Vue.component('v-filters', {
  data() {
    return {}
  },
  props: {
	filters: Object
  },
  template: `
    <div class="col-12 col-md-4 col-lg-3">
		<div class="shop_sidebar_area">

			<!-- ##### Single Widget ##### -->
			<div class="widget catagory mb-50">
				<!-- Widget Title -->
				<h6 class="widget-title mb-30">Категории</h6>

				<!--  Catagories  -->
				<div class="catagories-menu">
					<ul id="menu-content2" class="menu-content collapse show">
						<!-- Single Item -->
						<li data-toggle="collapse" data-target="#clothing">
							<a href="#">Одежда</a>
							<ul class="sub-menu collapse show" id="clothing">
								<li><a @click="$emit('onll', 'ОДЕЖДА')">Все</a></li>
								<li v-for="item in filters.clothing" :key="item"><a @click="$emit('onsubcategory', 'ОДЕЖДА', item)">{{item}}</a></li>
							</ul>
						</li>
						<!-- Single Item -->
						<li data-toggle="collapse" data-target="#shoes" class="collapsed">
							<a href="#">Обувь</a>
							<ul class="sub-menu collapse" id="shoes">
								<li><a @click="$emit('onall', 'ОБУВЬ')">Все</a></li>
								<li v-for="item in filters.shoes" :key="item"><a @click="$emit('onsubcategory', 'ОБУВЬ', item)">{{item}}</a></li>
							</ul>
						</li>
						<!-- Single Item -->
						<li data-toggle="collapse" data-target="#accessories" class="collapsed">
							<a href="#">Аксессуары</a>
							<ul class="sub-menu collapse" id="accessories">
								<li><a @click="$emit('onall', 'АКСЕССУАРЫ')">Все</a></li>
								<li v-for="item in filters.accessories" :key="item"><a @click="$emit('onsubcategory', 'АКСЕССУАРЫ', item)">{{item}}</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>

			<!-- ##### Single Widget ##### -->
			<div class="widget price mb-50">
				<!-- Widget Title -->
				<h6 class="widget-title mb-30">Фильтровать по:</h6>
				<!-- Widget Title 2 -->
				<p class="widget-title2 mb-30">Price</p>

				<div class="widget-desc">
					<div class="slider-range">
						<div data-min="49" data-max="360" data-unit="$" class="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-value-min="49" data-value-max="360" data-label-result="Range:">
							<div class="ui-slider-range ui-widget-header ui-corner-all"></div>
							<span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
							<span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
						</div>
						<div class="range-price">Range: $49.00 - $360.00</div>
					</div>
				</div>
			</div>

			<!-- ##### Single Widget ##### -->
			<div class="widget color mb-50">
				<!-- Widget Title 2 -->
				<p class="widget-title2 mb-30">Цвета</p>
				<div class="widget-desc">
					<ul class="d-flex">
						<li v-for="item in filters.colors" :key="item"><a @click="$emit('oncolor', item)" :style="{'background-color':item}"></a></li>
					</ul>
				</div>
			</div>

			<!-- ##### Single Widget ##### -->
			<div class="widget brands mb-50">
				<!-- Widget Title 2 -->
				<p class="widget-title2 mb-30">Бренды</p>
				<div class="widget-desc">
					<ul>
						<li v-for="item in filters.brands" :key="item"><a @click="$emit('onbrand', item)">{{item}}</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
  `
})