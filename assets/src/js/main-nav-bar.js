Vue.component('main-nav-bar', {
	props: 
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
	`,
	
	mounted() {
		
	}
});

Vue.component('brand-logo-image', {
	props: {
		file: 'images/logos/color/personal_logo_grey-01.png'
	},
	 
	template: `
		<a class="navbar-brand" href="index.html">
			<img class="logo" name="CM" src=this.file alt="Logo"/>
		</a>
	`
});