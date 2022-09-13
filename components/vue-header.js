Vue.component('v-header', {
  data() {
    return {}
  },
  props: {
    quantity: Number,
  },
  methods:{
	onSearch(event){
	  event.preventDefault();
	  this.$emit('onsearch', event.target.value.trim().toLowerCase());
	}
  },
  template: `
    <header class="header_area">
        <div class="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
            <!-- Classy Menu -->
            <nav class="classy-navbar" id="essenceNav">
                <!-- Logo -->
                <a class="nav-brand" href="index.html"><img src="img/core-img/logo.png" alt=""></a>
                <!-- Navbar Toggler -->
                <div class="classy-navbar-toggler">
                    <span class="navbarToggler"><span></span><span></span><span></span></span>
                </div>
                <!-- Menu -->
                <div class="classy-menu">
                    <!-- close btn -->
                    <div class="classycloseIcon">
                        <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                    </div>
                    <!-- Nav Start -->
                    <div class="classynav">
                        <ul>
                            <li><a href="index.html">Главная</a></li>
                            <li><a href="shop.html">Магазин</a></li>
                            <li><a href="blog.html">Блог</a></li>
                            <li><a href="contact.html">Контакты</a></li>
                        </ul>
                    </div>
                    <!-- Nav End -->
                </div>
            </nav>

            <!-- Header Meta Data -->
            <div class="header-meta d-flex clearfix justify-content-end">
                <!-- Search Area -->
                <div class="search-area">
                    <form>
                        <input @keyup.enter="onSearch($event)" type="search" id="headerSearch" placeholder="Найти товар">
                        <button><i class="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                </div>
                <!-- User Login Info -->
                <div class="user-login-info">
                    <a href="#"><img src="img/core-img/user.svg" alt=""></a>
                </div>
                <!-- Cart Area -->
                <div class="cart-area">
                    <a @click="$emit('onopenbasket')"><img src="img/core-img/bag.svg" alt=""> <span>{{quantity}}</span></a>
                </div>
            </div>

        </div>
	</header>
  ` 
})