var MathJaxMap = {};


MathJaxMap['math_1'] = '<math display=\'inline\'><mi>/</mi></math>';
MathJaxMap['math_2'] = '<math display=\'inline\'><mi>/</mi></math>';
MathJaxMap['math_3'] = '<math display=\'inline\'><mi>/</mi></math>';
MathJaxMap['math_4'] = '<math display=\'inline\'><mi>/</mi></math>';
MathJaxMap['math_5'] = '<math display=\'inline\'><mi>/</mi></math>';
MathJaxMap['math_6'] = '<math display=\'inline\'><mi>/</mi></math>';



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
