<template>
	<v-container text-xs-center>
		<v-layout align-center column>
			<header>
				<Phonetic></Phonetic>
			</header>      

			<section class="header">
				<h2>I love coding and all the stuff around it. My favourite languages are PHP and TypeScript.</h2>
				<h3>TypeScript is the greatest thing since sliced bread, by the way</h3>
			</section>

			<section class="about-me">
				<h2>Who am I?</h2>
				<p>I've been working with computers for most of my professional life. When I was 18 I worked a few months in a catering company. So I can say I know my way around computers and serving drinks.

				Professionally, the first programming language I had contact with was Visual Basic 6, (VB 6 for those who missed it) then I quickly moved to the most loved/hated RDBMS Oracle 9i.

				I had loads of fun with PL/SQL. During this period I was introduced to PHP, then it became my main development tool along with Oracle 9i.

				In the past 5 years, I've been working with Zend Framework, MariaDB, NativeScript, Angular and a bunch of Azure Cloud related stuff.</p>
				
				<h2>What am I up to?</h2>
				<p>I've been working extensively with JavaScript-related projects, including NativeScript, Node.js, Vue.js and Firebase.</p>
			</section>

			<v-footer class="justify-center" inset app>
				<v-btn color="pink" dark small absolute top right fab>
					<v-icon>mdi-bell</v-icon>
				</v-btn>
				<h3>
					<v-btn flat icon href="https://www.linkedin.com/in/carlosanjos/">
						<v-icon size="25px">mdi-linkedin</v-icon>
					</v-btn>
					<v-btn flat icon href="https://github.com/carlosanjos">
						<v-icon size="25px">mdi-github-box</v-icon>
					</v-btn>
					<v-btn flat icon href="https://twitter.com/carlosanjosdev">
						<v-icon size="25px">mdi-twitter</v-icon>
					</v-btn>
					<v-btn flat icon href="mailto:contact@carlosanjos.dev" target="_blank">
						<v-icon size="25px">mdi-email</v-icon>
					</v-btn>
				</h3>
			</v-footer>
		</v-layout>
	</v-container>
</template>

<style lang="scss" scoped>
.my-name {
	text-transform: uppercase;
	font-weight: bold;
	font-family: Lato, sans-serif;
	font-size: 4vmax;
	span {
		opacity: 0.7;
		font-weight: 800;
		mix-blend-mode: darken;
		letter-spacing: 4px;
	}
	&::selection {
		background-color: rgb(230, 230, 250);
	}
}

.header {
	margin: 20px 15px;
	h3 {
	 margin: 10px 0 0; 
	}
}

.about-me {
	margin: 20px 15px;
	h2 {
		font-size: 22px;
	}
	p {
		text-align: justify;
		font-size: 16px;
		line-height: 1.6;
		word-wrap: break-word;
		
	}
}

// $colours: (red: #fa1e44, yellow: #fec925, seawater: #c9e3db, green : #5ab190, blue: #00b4eb);
$colours: (#fa1e44, #fec925, #ab47bc, #5ab190, #00b4eb);

@each $colour in $colours {
	$i: index($colours, $colour);

	.my-name span:nth-child(5n + #{$i}) {
		color: $colour;
	}
}
</style>
<script lang="ts">
import { Component, Vue, Prop, Provide } from 'vue-property-decorator';
import Phonetic from '@/components/Phonetic.vue';

@Component({
	components: {
		Phonetic,
	},
})
export default class Home extends Vue {

}
</script>
