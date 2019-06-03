
const posts = [];

class Post {

	constructor(post) {
		this.post = post;
	}

	savePost() {
		posts.push(this);
	}

	static getAllPosts() {
		return posts;
	}

}

module.exports = Post;