export default function() {
	this.route('qa', function(){
	  this.route('index', {path: '/:username'});
	  this.route('pages', {path: '/'});	
	});
}
