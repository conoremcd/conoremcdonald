Vue.component('main-header', {
	data: function() {
		return {
			fields: {
				logo: null,
				home: '',
				items: []
			}
		}
	},
	methods: {
		getContent() {
			this.$prismic.client.getSingle('header')
				.then((document) => {
					this.fields.logo = document.data.logo;
					this.fields.home = document.data.home;
					this.fields.items = document.data.nav;
				})
		}
	},
	created() {
		this.getContent();
	},
	template: `
		<nav id="mainMenu" class="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
			
			<!-- Brand -->
			<router-link class="navbar-brand" :name="Home" :to="fields.home">
				<prismic-image class="logo" name="Logo" :field="fields.logo" alt="Logo"/>
			</router-link>
	
			<!-- Toggler/collapsibe Button -->
			<button class="navbar-toggler" name="Navigation" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
				<span class="navbar-toggler-icon"></span>
			</button>

			<!-- Navbar links -->
			<div class="collapse navbar-collapse" id="collapsibleNavbar">
				<ul class="navbar-nav ml-auto">
					<main-nav-item v-for="item in fields.items" :key="fields.items.name">
						<router-link class="nav-link" :name="item.name" :to="item.path">{{item.name}}</router-link>
					</main-nav-item>
				</ul>
			</div>
		</nav>
	`
})

Vue.component('main-nav-item', {
	props: {
		item: Object
	},
	template: `
		<li class="nav-item">
			<slot></slot>
		</li>
	`
})

Vue.component('main-footer', {
	data: function() {
		return {
			fields: {
				phone: '',
				email: '',
				links: []
			}
		}
	},
	methods: {
		getContent() {
			this.$prismic.client.getSingle('footer')
				.then((document) => {
					this.fields.phone = document.data.phone;
					this.fields.email = document.data.email;
					this.fields.links = document.data.links;
				})
		}
	},
	created() {
		this.getContent();
	},
	template: `
		<footer class="container-fluid py-2">
			<div class="row">
				<div class="col"></div>
				<div class="col-sm-3 col-lg-2 col-xl-2">
					<prismic-rich-text :field="fields.phone"/>
					<prismic-rich-text :field="fields.email"/>
				</div>
				<div class="col"></div>
				<div class="col-sm-3 col-lg-2 col-xl-2">
					<social-link v-for="item in fields.links" :key="fields.links.link"></social-link>
				</div>
				<div class="col"></div>
			</div>
		</footer>


	`
})

Vue.component('social-link' , {
	props: {
		item: Object
	},
	template: `
		<prismic-link :field="item.link">
			<prismic-image :field="item.icon" class="icon"/>
		</prismic-link>
	`
})

Vue.component('main-background', {
	data: function() {
		return {
			fields: {
				image: ''
			}
		}
	},
	methods: {
		getContent() {
			this.$prismic.client.getSingle('background')
				.then((document) => {
					this.fields.image = document.data.image;
				})
		}
	},
	created() {
		this.getContent();
	},
	template: `	
		<prismic-image class="bg img-fluid" :field="fields.image"/>
	`
})

Vue.component('about-section', {
	
	template: `
		<div class="row py-2 about">
			<div class="col"></div>
			<div class="col-sm-2 col-xl-2">
				<div class="mx-auto text-center py-4">
					<prismic-image class="portrait rounded-circle" :field="fields.profile" alt="self portrait"/>
				</div>
			</div>
			<div class="col-sm-6 col-xl-5 p-4">
				<prismic-rich-text class="lt-t about-info mx-auto text-justify" :field="fields.description"/> 
			</div>
			<div class="col"></div>
		</div>
	`
})

Vue.component('main-button-section', {
	template: `
		<div class="row main-btn-grp">
			<div class="col"></div>
			<div class="col-sm col-xl-2 pt-4 text-center">
				<a href="Conor_McDonald_resume-grey.pdf" name="Resume" class="btn btn-lg btn-block main-btn" target="_blank">Resume</a>
			</div>
			<div class="col-sm col-xl-2 pt-4 text-center">
				<router-link class="mx-auto btn btn-lg btn-block main-btn" name="Projects" to="/projects">Projects</router-link>
			</div>
			<div class="col-sm col-xl-2 py-4 text-center">
				<router-link class="mx-auto btn btn-lg btn-block main-btn" name="Gallery" to="/gallery">Gallery</router-link>
			</div>
			<div class="col"></div>
		</div>
	`
})

Vue.component('stat-section', {
	template: `
		<div>
			<div class="row stats pt-2">
				<div class="col-1 col-xl"></div>
				<div class="col col-xl-8 pt-2 mb-2 brdr-btm">
					<h5 class="text-center clr-t">MONTHLY STATS</h5>
				</div>
				<div class="col-1 col-xl"></div>
			</div>
			<div class="row stats pb-2">
				<div class="col-1 col-lg-2 col-xl-2"></div>
				<div class="col">
					<h1 class="text-center md-t">1 pint</h1>
					<pre class="text-center md-t">mint chocolate chip
	ice cream consumed</pre>
				</div>
				<div class="col">
					<h1 class="text-center md-t">>9,000</h1>
					<pre class="text-center md-t">current power level</pre> 
				</div>
				<div class="col-1 col-lg-2 col-xl-2"></div>
			</div>
		</div>
	`
})