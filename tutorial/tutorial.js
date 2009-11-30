$(function(){
	
	$('head').append("<link href='tutorial.css' rel='stylesheet' type='text/css'></link>");
	
	$('head').append("<script type='text/javascript' src='../js/codemirror/codemirror.js'></script>");
	$('head').append("<script type='text/javascript' src='../js/codemirror/mirrorframe.js'></script>");
	
	$.ajax({
		url: window.location.href,
		dataType: 'text',
		success: function(text){
			var src = text; var encoded = src.replace(/</g, '&lt;'); 
			$('h1:last').after('<code>'+encoded+'</code>');
			
			var options = {
				height: "300px",
				path: "../js/codemirror/",
				autoMatchParens: true,
				reindentOnLoad: false,
				tabMode: "shift"
			};
			
			$('code').each(function(){
				new CodeMirror(CodeMirror.replace(this), $.extend(null, options, {
					content: src,
					parserfile: ["parsexml.js", "parsecss.js", "tokenizejavascript.js", "parsejavascript.js", "parsehtmlmixed.js"],
					stylesheet: ["../js/codemirror/xmlcolors.css", "../js/codemirror/csscolors.css", "../js/codemirror/base.css"]
				}));
			});
		}
	});
})