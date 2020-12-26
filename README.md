# Field Notes Archive

A museum of one's own past notebooks.

## Setup

Begin by cloning the project and running:

```
npm install
```

Once complete, build the project by running:

```
npm run serve
```

## Sitemap

The website has three (types of) pages: [the homepage](/src/pages/Home.vue), [the notebook page](/src/pages/Notebook.vue), and [the 404 page](/src/pages/404.vue). I say "types of" because the notebook page is really more of a template than a page. Unlike the other two, it is used multiple times (for each notebook).

## Adding a notebook

Create a new folder in the [`public/file/`](/public/file/) directory, named whatever number notebook this is (_1_, _2_, _96_, etc). In the folder, place all scans of the notebook, titled: `0.png`, `1.png`, etc, up to the number of pages there are. Create a new file in the folder titled: `info.json`. The contents should look like this:

```json
{
	"totalPages": 4,
	"started": "Kingston, November 19th, 2018",
	"finished": "Wassenaar, February 20th, 2019"
}
```

Obviously, replace the `totalPages` value with the number of pages in this notebook—i.e the highest number photo in the folder. Also replace the started/finished values with the correct information. [See here for an example](/public/file/1/).

As well, you must update the [`NUMBER_OF_NOTEBOOKS`](https://github.com/GoodbyteCo/Field-Notes-Archive/blob/main/src/pages/Home.vue#L23) value in the [`src/pages/Home.vue`](/src/pages/Home.vue) file to the correct number of notebooks on the site.
