
const fs = require('fs'),

Post = require('../models/post.js'); 

class Posts {

	constructor(req, res) {
		this.req = req;
		this.res = res;
	}

	get allPosts() {
		const posts = Post.getAllPosts();
		//let data = JSON.parse(fs.readFileSync('./data/data.json', 'utf-8'));
		//console.log(data);
		return this.res.render('archive', { title: "Blog", data: "data" });
	}

	savePost() {
		const post = new Post(this.req.body.content);
		post.savePost();
		res.redirect('/');
	}
}

module.exports = Posts;