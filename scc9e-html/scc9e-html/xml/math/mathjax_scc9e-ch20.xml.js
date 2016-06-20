var MathJaxMap = {};


MathJaxMap['math_1'] = '<math display=\'block\'><mrow><mo>&#x24;</mo><mn>250</mn></mrow><mfrac><mrow><mn>1</mn></mrow><mrow><mn>1000</mn></mrow></mfrac><mo>+</mo><mrow><mo>&#x24;</mo><mn>0</mn></mrow><mfrac><mrow><mn>999</mn></mrow><mrow><mn>1000</mn></mrow></mfrac><mo>=</mo><mrow><mo>&#x24;</mo><mn>0</mn><mi>.</mi><mn>25</mn></mrow></math>';
MathJaxMap['math_2'] = '<math display=\'block\'><mover accent=\'true\'><mi>x</mi><mo>&#x00AF;</mo></mover><mo>=</mo><mfrac><mrow><mn>2</mn><mo>+</mo><mn>1</mn><mo>+</mo><mn>1</mn><mo>+</mo><mn>1</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>1</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>1</mn></mrow><mrow><mn>10</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>17</mn></mrow><mrow><mn>10</mn></mrow></mfrac><mo>=</mo><mrow><mn>1</mn><mi>.</mi><mn>7</mn></mrow></math>';



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
