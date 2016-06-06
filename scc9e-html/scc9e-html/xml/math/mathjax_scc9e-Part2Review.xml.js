var MathJaxMap = {};


MathJaxMap['math_1'] = '<math display=\'inline\'><mrow><mover accent=\'true\'><mi>x</mi><mo stretchy=\'true\'>&#x00AF;</mo></mover></mrow></math>';
MathJaxMap['math_2'] = '<math display=\'inline\'><mrow><mover accent=\'true\'><mi>x</mi><mo stretchy=\'true\'>&#x00AF;</mo></mover></mrow></math>';



for (var key in MathJaxMap) {
  
  if (MathJaxMap.hasOwnProperty(key)) {
    $('[data-math=' + key + ']').html(MathJaxMap[key]);
  }
}

$.ajaxSetup({
  cache: true
});

//configure the mathjax engine
window.MathJax = {
	"HTML-CSS": {
		mtextFontInherit: true,
		scale: 98,
		minScaleAdjust: 100,
		noReflows:false 
	},
	MathML: {
		useMathMLspacing: false
	},
	menuSettings: {
		zoom: "Click"	
	},
	MathMenu: {
		showFontMenu: true
	}
	
  };

$.getScript( "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"); 
