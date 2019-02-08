Vue.component('main-background', {
	props: {
		src: String
	},
	template: `
		<img class="bg img-fluid" v-bind:src=src alt="banner"/>
	`
});

Vue.component('main-header', {
	template: `
		<nav id="mainMenu" class="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
			
			<!-- Brand -->
			<a class="navbar-brand" href="index.html">
				<img class="logo" name="CM" src="images/logos/color/personal_logo_grey-01.png" alt="Logo"/>
			</a>
	
			<!-- Toggler/collapsibe Button -->
			<button class="navbar-toggler" name="Navigation" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
				<span class="navbar-toggler-icon"></span>
			</button>

			<!-- Navbar links -->
			<div class="collapse navbar-collapse" id="collapsibleNavbar">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
						<a class="nav-link" name="Home" href="index.html">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" name="Resume" href="Conor_McDonald_resume-grey.pdf" target="_blank">Resume</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" name="Projects" href="projects.html">Projects</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" name="Gallery" href="gallery.html">Gallery</a>
					</li>
				</ul>
			</div>
		</nav>
	`
});

Vue.component('main-footer', {
	template: `

	`
	
});

Vue.component('about-section', {
	template: `
		<div class="row py-2 about">
			<div class="col"></div>
			<div class="col-sm-2 col-xl-2">
				<div class="mx-auto text-center py-4">
					<img class="portrait rounded-circle" src="Images/self_portrait.jpeg" alt="self portrait"/>
				</div>
			</div>
			<div class="col-sm-6 col-xl-5 p-4">
				<p class="lt-t about-info mx-auto text-justify">
					&emsp;&emsp;Conor McDonald is a web designer
					and developer with a passion for user centered design.
					His interests include software development,
					computer animation, game design, and sustainable
					technology. Conor currently lives in Burbank, CA, where
					he also spends his time painting, creating generative
					art, graphic designing, and hiking. 
				</p>
			</div>
			<div class="col"></div>
		</div>
	`
});

Vue.component('main-button-section', {
	template: `
		<div class="row main-btn-grp">
			<div class="col"></div>
			<div class="col-sm col-xl-2 pt-4 text-center">
				<a href="Conor_McDonald_resume-grey.pdf" name="Resume" class="btn btn-lg btn-block main-btn" target="_blank">Resume</a>
			</div>
			<div class="col-sm col-xl-2 pt-4 text-center">
				<a href="projects.html" name="Projects" class="mx-auto btn btn-lg btn-block main-btn">Projects</a>
			</div>
			<div class="col-sm col-xl-2 py-4 text-center">
				<a href="gallery.html" name="Gallery" class="mx-auto btn btn-lg btn-block main-btn">Gallery</a>
			</div>
			<div class="col"></div>
		</div>
	`
});

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