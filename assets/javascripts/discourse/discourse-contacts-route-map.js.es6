export default function() {
	this.route('contacts', function(){
	  this.route('index', {path: '/'});
	});
}
