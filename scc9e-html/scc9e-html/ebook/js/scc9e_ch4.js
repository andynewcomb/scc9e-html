var MathJaxMap = {};


MathJaxMap['math_1'] = '<math display=\'block\'><mrow><mfrac><mrow><mn>500</mn></mrow><mrow><mn>30</mn><mo>,</mo><mn>000</mn></mrow></mfrac><mtext>&#160;</mtext><mo>=</mo><mtext>&#160;</mtext><mfrac><mn>1</mn><mrow><mn>60</mn></mrow></mfrac></mrow></math>';
MathJaxMap['math_2'] = '<math display=\'block\'><mrow><mfrac><mrow><mn>200</mn></mrow><mrow><mn>3000</mn></mrow></mfrac><mtext>&#160;</mtext><mo>=</mo><mtext>&#160;</mtext><mfrac><mn>1</mn><mrow><mn>15</mn></mrow></mfrac></mrow></math>';
MathJaxMap['math_3'] = '<math display=\'block\'><mrow><mfrac><mrow><mn>300</mn></mrow><mrow><mn>27</mn><mo>,</mo><mn>000</mn></mrow></mfrac><mtext>&#160;</mtext><mo>=</mo><mtext>&#160;</mtext><mfrac><mn>1</mn><mrow><mn>90</mn></mrow></mfrac></mrow></math>';
MathJaxMap['math_4'] = '<math display=\'block\'><mrow><mfrac><mn>1</mn><mrow><msqrt><mrow><mn>200</mn></mrow></msqrt></mrow></mfrac><mtext>&#160;</mtext><mo>=</mo><mtext>&#160;</mtext><mn>0.07</mn><mtext>&#160;&#160;&#160;&#160;</mtext><mrow><mo>(</mo><mrow><mtext>that&#160;is</mtext><mo>,</mo><mtext>&#160;</mtext><mn>7</mn><mo>%</mo></mrow><mo>)</mo></mrow></mrow></math>';
MathJaxMap['math_5'] = '<math display=\'block\'><mrow><mfrac><mn>1</mn><mrow><msqrt><mrow><mn>300</mn></mrow></msqrt></mrow></mfrac><mtext>&#160;</mtext><mo>=</mo><mtext>&#160;</mtext><mn>0.058</mn><mtext>&#160;&#160;&#160;&#160;</mtext><mrow><mo>(</mo><mrow><mtext>that&#160;is</mtext><mo>,</mo><mtext>&#160;</mtext><mn>5.8</mn><mo>%</mo></mrow><mo>)</mo></mrow></mrow></math>';
MathJaxMap['math_6'] = '<math display=\'inline\'><mo>/</mo></math>';



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
