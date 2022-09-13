Vue.component('v-sorting', {
  data() {
    return {
		
	}
  },
  props: {},
  methods:{
	changeCountry (event) {
      //this.select = event.target.value;
	  console.log(event.target.value);
	}
  },
  template: `
    <div class="product-sorting d-flex">
		<p>Сортировать по:</p>
		<select @change="$emit('onsorting', $event)">
			<option>Все</option>
			<option>Новые</option>
			<option>Скидочные</option>
		</select>
	</div>
  ` 
})