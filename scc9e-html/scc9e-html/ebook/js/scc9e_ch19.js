var MathJaxMap = {};


MathJaxMap['math_1'] = '<math display=\'inline\'><mstyle fontfamily=\"MathematicalPiLTStd-3\"><mi>y</mi></mstyle></math>';
MathJaxMap['math_2'] = '<math display=\'inline\'><mo>=</mo><mfrac><mrow><mn>23</mn></mrow><mrow><mn>25</mn></mrow></mfrac><mo>=</mo><mrow><mn>0.92</mn></mrow></math>';
MathJaxMap['math_3'] = '<math display=\'inline\'><mo>=</mo><mfrac><mrow><mn>9</mn></mrow><mrow><mn>14</mn></mrow></mfrac><mo>=</mo><mrow><mn>0.64</mn></mrow></math>';
MathJaxMap['math_4'] = '<math display=\'inline\'><mo>=</mo><mfrac><mrow><mn>7</mn></mrow><mrow><mn>14</mn></mrow></mfrac><mo>=</mo><mrow><mn>0.5</mn></mrow></math>';
MathJaxMap['math_5'] = '<math display=\'inline\'><mo>=</mo><mfrac><mrow><mn>9</mn></mrow><mrow><mn>10</mn></mrow></mfrac><mo>=</mo><mrow><mn>0.9</mn></mrow></math>';
MathJaxMap['math_6'] = '<math display=\'inline\'><mo>/</mo></math>';
MathJaxMap['math_7'] = '<math display=\'inline\'><mo>/</mo></math>';
MathJaxMap['math_8'] = '<math display=\'inline\'><mo>/</mo></math>';
MathJaxMap['math_9'] = '<math display=\'inline\'><mo>/</mo></math>';



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
