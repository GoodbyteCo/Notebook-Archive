<template>

	<div v-if="notFound" class="error">
		<h1>That notebook doesn't exist</h1>
		<p>Maybe you'd rather <router-link to='/'>check out some notebooks that do exist</router-link>?</p>
	</div>

	<div v-else class="notebook-layout">
		
		<header id="info">
			<book-number :number=bookNumber />
			<start-finish :started=started :finished=finished />
			<page-number :page=page :max=totalPages :onSubmit=gotoPage />
		</header>

		<main id="notebook-images" :class=notebookImagesClass>
			<page-image 
				v-show="page == 0"
				:src="'/file/' + bookNumber + '/0.png'"
				:alt="'Front cover of notebook ' + bookNumber"
			/>
			<page-image 
				v-for="index in totalPages"
				v-show="index == page"
				:key="index"
				:src="'/file/' + bookNumber + '/' + index + '.png'"
				:alt="'Page ' + index + ' of notebook ' + bookNumber"
			/>
		</main>

		<nav id="notebook-buttons">
			<page-button
				:dir="'previous'"
				:onclick="() => gotoPage(page - 1)"
				v-show="page > 0"
			/>
			<page-button
				:dir="'next'"
				:onclick="() => gotoPage(page + 1)"
				v-show="page < totalPages"
			/>
		</nav>
		
	</div>
</template>

<style scoped>
	#info
	{
		display: grid;
		grid-template-columns: min-content auto max-content;
		gap: 20px;

		box-sizing: border-box;
		width: 100%;
		max-width: 800px;
		padding: 20px;
		margin: 0 auto;
		margin-top: 3vh;
	}

	#notebook-images
	{
		width: 100%;
		height: calc(97vh - 110px);
		min-height: 400px;
		padding: 0 20px 20px;
		box-sizing: border-box;
		position: relative;
	}

	#notebook-images.first-page
	{
		animation: open-book 0.2s ease;
	}

	#notebook-buttons
	{
		width: 100%;	
		max-width: 900px;
		padding-top: calc(78.5714286% - 30px); /* 7:5.5 aspect ratio */

		position: absolute;
		top: calc(3vh + 110px);
	}

	/* keep height fixed once notebook stops growing */
	@media screen and (min-width: 821px)
	{
		#notebook-buttons
		{
			padding-top: 614px;
		}
	}

	/* keep centered at max-width */
	@media screen and (min-width: 900px)
	{
		#notebook-buttons
		{
			left: calc(50vw - 450px);
		}
	}
</style>

<script>
	import BookNumber from "../components/BookNumber.vue"
	import StartFinish from "../components/StartFinish.vue"
	import PageNumber from "../components/PageNumber.vue"
	import PageImage from "../components/PageImage.vue"
	import PageButton from "../components/PageButton.vue"

	export default 
	{
		name: "notebook-layout",
		data () 
		{
			return {
				page: 0,
				info: "",
				notFound: false,
				notebookImagesClass: ""
			}
		},
		components: 
		{
			BookNumber,
			StartFinish,
			PageNumber,
			PageImage,
			PageButton
		},
		mounted () 
		{
			try 
			{
				let vue = this;
				let params = new URLSearchParams(window.location.search)
				let pageParam = parseInt(params.get('page'))
				this.page = Number.isNaN(pageParam) ? 0 : pageParam
				
				document.title = 'Notebook ' + this.bookNumber

				fetch('/file/' + this.bookNumber + '/info.json')
					.then(response => response.json())
					.then(json => vue.info = json)
					.catch(() => 
					{
						vue.notFound = true
						document.title = '404 - Notebook not found'
					})

				this.page = this.gotoPage(this.page, false)
			}
			catch(e)
			{
				alert('Something broke')
			}
		},
		computed: 
		{
			bookNumber: function() 
			{
				return this.$route.params.number
			},

			totalPages: function()
			{
				return this.info.totalPages
			},

			started: function()
			{
				return this.info.started
			},

			finished: function()
			{
				return this.info.finished
			}
		},
		created () 
		{
			document.title = "Notebooks";
		},
		methods: 
		{
			gotoPage: function(pageNumber, vibrate=true) 
			{
				try
				{
					if(vibrate)
					{
						window.navigator.vibrate(30)
					}
				} 
				catch(e) { /* pass */ }

				if(pageNumber == "" || pageNumber < 0)
				{
					pageNumber = 0
				}
				else if(pageNumber > this.totalPages)
				{
					pageNumber = this.totalPages
				}

				/*
				 * animate a slide-into-position when going from
				 * covers to pages (or visaversa). CSS animation is
				 * located in the PageImage component.
				 */
				if((this.page == 0 && pageNumber == this.totalPages) || (this.page == this.totalPages && pageNumber == 0))
				{
					// cover-to-cover transitions do not need to be animated
					this.notebookImagesClass = ''
				}
				else if(this.xor(this.page == 0, pageNumber == 0))
				{
					// if we are coming from the front cover, or going 
					// to the front cover (but not on a 0 -> 0 move)
					this.notebookImagesClass = 'open-book'
				}
				else if(this.xor(this.page == this.totalPages, pageNumber == this.totalPages))
				{
					// same, but for last page
					this.notebookImagesClass = 'close-book'
				}
				else
				{
					// remove any class from previous animation
					this.notebookImagesClass = ''
				}

				this.updateParam('page', pageNumber)
				this.page = pageNumber

				return pageNumber
			},

			updateParam: function(key, value)
			{
				var url = window.location.href.split('?')
				var baseURL = url[0]
				window.history.replaceState('', '', baseURL + '?' + key + '=' + value)
			},

			xor: function(a, b)
			{
				return (a && !b) || (!a && b)
			}
		}
	}
</script>