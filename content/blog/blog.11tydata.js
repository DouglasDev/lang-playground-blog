export default {
	tags: ["posts"],
	layout: "layouts/post.njk",
	permalink: (data) => {
		let date = new Date(data.page.date);
		let year = date.getUTCFullYear();
		let month = String(date.getUTCMonth() + 1).padStart(2, "0");
		let day = String(date.getUTCDate()).padStart(2, "0");

		return `/${year}/${month}/${day}/${data.page.fileSlug}/index.html`;
	},
};
