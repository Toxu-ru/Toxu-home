export default function() {
	this.route('facts', function(){
	  this.route('index', {path: '/'});
	});
}
