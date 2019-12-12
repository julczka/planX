<template>
	<nav :style="{ background: background || '#333' }">
		<ul :style="{ background: background || '#333' }" ref="nav">
			<figure class="image-logo" @click="toggleNav">
				<img :src="imagePath" height="50px" width="110px" />
			</figure>
			<li
				v-for="(link, index) in navLinks"
				:key="index"
				
			>

			<!-- @mouseenter="$event.currentTarget.style.background = hoverBackground || '#999'"
				@mouseleave="$event.currentTarget.style.background = background || '#333'" -->

				<router-link
					:to="link.path"
					:style="{ color: linkColor || '#DDD' }"
				>
					{{ link.text }}
					<i :class="link.icon" />
				</router-link>
			</li>

			<div class="social">
				<a href="https://github.com/julczka/local-storage-test" target="_blank">
				<i class="icon ion-logo-github socIcon"></i>
				</a>
			</div>

		</ul>
	</nav>
</template>

<script>
export default {
	props: ['navLinks', 'background', 'linkColor', 'hoverBackground', 'imagePath'],
	methods: {
		toggleNav () {
			const nav = this.$refs.nav.classList
			nav.contains('active') ? nav.remove('active') : nav.add('active')
		}
	}
}
</script>

<style scoped lang="scss">

a {
	text-decoration: none;
	color: $color;
}

nav {
	height: 80px;
	width: 100%;
	position: sticky;
	top: 0;
	z-index: 99;
	box-shadow: 0px 0px 15px rgba(230,230,218,.1);

	ul {
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: space-between;	
		margin-block-start: 0;
		margin-block-end: 0;
		padding-inline-start: 0;
		box-shadow: 0px 0px 15px rgba(230,230,218,.1);
		
		

		

		figure {
			cursor: pointer;
			margin-right: 0px;
			
		}

		a {
			text-decoration: none;
			display: flex;
			flex-direction: row-reverse;
			align-items: center;

			
		}

		i {
			margin-right: 10px;
			font-size: 1.5em;
		}

		li {
			list-style-type: none;
			padding: .4em 1.2em;
			position: relative;
			background: $gradientRainbow bottom / 0 .2em no-repeat;;
			background-color: $bgcolor;
			transition: 0.2s linear;

			&:hover {
				background-size: 100% .2em;
			}

			&:focus {
				background-size: 100% .2em;
			}
			
			

			
		}
	}
}

.social {
	
	height: 100%;
	width: 10%;
	display: flex;	
	align-items: center;
	justify-content: center;
	margin-right: 10px;
	background-color: $bgcolor;

	.socIcon {
		padding: .3em;
		font-size: 2.5em;
		margin:0;
		transition: .1s ease-in-out;
		

			
			&:hover {
				transform: scale(1.2)
			}
		
	}
}

@media screen and (max-width: 770px) {
	nav {
			
	
		ul {
			position: absolute;
			width: 300px;
			flex-direction: column;
			justify-content: flex-start;
			left: -240px;
			transition: 300ms ease all;
			top: 80px;
			//background-color: azure;

			&.active {
				left: 0px;
			}

			figure {
				position: fixed;
				z-index: 1;
				top: 10px;
				left: 2px;
			}

			li {
				width: 100%;
				padding-left: 0;
				padding-right: 0;
			}

			a {
				flex-direction: row;
				margin-left: 20px;
				justify-content: space-between;
				margin-right: 13px;
			}
		}
	}

	.social {
		display: none;
	}
}
</style>
