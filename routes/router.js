
const path = require('path')
express = require('express'),
Post = require('../controllers/posts'),
router = express.Router();

router.get('/', (req, res) => { res.status(200).render('index', { title: "Home" }); });

router.get('/blog', (req, res) => { new Post(req, res).allPosts; });

router.get('/about', (req, res) => { res.status(200).render('page', { title: "About" }); });

router.use((req, res, next) => { res.status(404).render('404'); });

module.exports = router;