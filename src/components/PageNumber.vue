<template>
	<div>
		<label id="page-input-label" for="page-input">page</label>
		<input
			id="page-input"
			labeled-by="page-input-label"
			type="text"  maxlength="2" size="1"
			placeholder="0"
			pattern="[0-9]*"
			v-on:keyup.enter=run()
			v-model=page
		/>
	</div>
</template>

<style scoped>
	*
	{
		font-family: var(--font);
		font-size: 32px;
		line-height: 0;
		letter-spacing: -0.02em;
		padding: 0;
		margin: 0;
	}

	div
	{
		padding-top: 20px;
		width: max-content;
	}

	label
	{
		margin-right: 0.2ch;
	}

	input
	{
		border: none;
		outline: none;
		width: 2ch;
		text-align: center;
		letter-spacing: -0.05em;
		border-radius: 2px;

		box-shadow: 0 0 0 3px transparent;
		background-color: transparent;
		transition: background-color 0.1s ease, box-shadow 0.1s ease;
	}

	input:hover
	{
		background-color: #eee;
		box-shadow: 0 0 0 3px #eee;
	}

	input:focus
	{
		background-color: #eee;
		box-shadow: 0 0 0 3px var(--color);
	}

	input::placeholder
	{
		color: var(--color);
	}
</style>

<script>
	export default
	{
		name: 'page-number',
		props:
		[
			'page',
			'max',
			'onSubmit'
		],
		data () 
		{
			return {
				oldValue: null,
				oldSelectionStart: null,
				oldSelectionEnd: null
			}
		},
		mounted ()
		{
			this.setInputFilter()
		},
		methods: 
		{
			run: function() 
			{
				this.page = this.onSubmit(this.page)
				document.getElementById("page-input").blur()
			},

			setInputFilter: function()
			{
				let vue = this
				let element = document.getElementById("page-input")
				let isNumber = function(value)
				{ 
					return /^\d*\.?\d*$/.test(value)
				};

				["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"]
				.forEach(function(event)
				{
					element.addEventListener(event, function()
					{
						if(isNumber(this.value))
						{
							if(this.value.charAt(0) == '0')
							{
								this.value = this.value.slice(1)
							}

							vue.oldValue = this.value
							vue.oldSelectionStart = this.selectionStart
							vue.oldSelectionEnd = this.selectionEnd
						}
						else if(vue.oldValue != null)
						{
							vue.page = vue.oldValue
							this.setSelectionRange(vue.oldSelectionStart, vue.oldSelectionEnd)
						}
						else
						{
							vue.page = 0
						}
					})
				})
			}
		}
	}
</script>