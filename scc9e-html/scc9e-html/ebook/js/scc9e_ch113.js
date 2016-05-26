var MathJaxMap = {};


MathJaxMap['math_1'] = '<math display=\'block\'><mrow><mtext>standard</mtext><mtext>&#x00A0;</mtext><mtext>score</mtext></mrow><mo>=</mo><mfrac><mrow><mtext>observation</mtext><mtext>&#x00A0;</mtext><mo>&#x2212;</mo><mtext>&#x00A0;</mtext><mtext>mean</mtext></mrow><mrow><mrow><mtext>standard</mtext><mtext>&#x00A0;</mtext><mtext>deviation</mtext></mrow></mrow></mfrac></math>';
MathJaxMap['math_2'] = '<math display=\'block\'><mfrac><mrow><mn>600</mn><mo>&#x2212;</mo><mn>500</mn></mrow><mrow><mn>100</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>100</mn></mrow><mrow><mn>100</mn></mrow></mfrac><mo>=</mo><mn>1</mn><mo>.</mo><mn>0</mn></math>';
MathJaxMap['math_3'] = '<math display=\'block\'><mfrac><mrow><mn>21</mn><mo>&#x2212;</mo><mn>18</mn></mrow><mrow><mn>6</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn></mrow><mrow><mn>6</mn></mrow></mfrac><mo>=</mo><mn>0</mn><mo>.</mo><mn>5</mn></math>';
MathJaxMap['math_4'] = '<math display=\'inline\'><mi>c</mi></math>';
MathJaxMap['math_5'] = '<math display=\'block\'><mfrac><mrow><mn>430</mn><mo>&#x2212;</mo><mn>500</mn></mrow><mrow><mn>100</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mo>&#x2212;</mo><mn>70</mn></mrow><mrow><mn>100</mn></mrow></mfrac><mo>=</mo><mo>&#x2212;</mo><mn>0</mn><mo>.</mo><mn>7</mn></math>';
MathJaxMap['math_6'] = '<math display=\'block\'><mfrac><mrow><mn>725</mn><mo>&#x2212;</mo><mn>500</mn></mrow><mrow><mn>100</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>225</mn></mrow><mrow><mn>100</mn></mrow></mfrac><mo>=</mo><mn>2</mn><mo>.</mo><mn>25</mn></math>';



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
