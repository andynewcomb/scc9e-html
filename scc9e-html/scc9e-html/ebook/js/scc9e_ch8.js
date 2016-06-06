var MathJaxMap = {};


MathJaxMap['math_1'] = '<math display=\'block\'><mrow><mtext>unemployment&#x00A0;rate&#x00A0;=</mtext><mfrac><mrow><mtext>number&#x00A0;of&#x00A0;people&#x00A0;unemployed</mtext></mrow><mrow><mtext>number&#x00A0;of&#x00A0;people&#x00A0;in&#x00A0;the&#x00A0;labor&#x00A0;force</mtext></mrow></mfrac></mrow></math>';
MathJaxMap['math_2'] = '<math display=\'block\'><mtable columnalign=\'left\'><mtr><mtd><mfrac><mrow><mtext>motor&#x00A0;vehicle&#x00A0;deaths</mtext></mrow><mrow><mtext>100s&#x00A0;of&#x00A0;millions&#x00A0;of&#x00A0;miles&#x00A0;driven</mtext></mrow></mfrac><mo>=</mo><mfrac><mrow><mtext>33,561</mtext></mrow><mrow><mtext>29,690</mtext></mrow></mfrac></mtd></mtr><mtr><mtd><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>&#x2009;</mtext><mtext>=&#x00A0;1</mtext><mtext>.1</mtext></mtd></mtr></mtable></math>';
MathJaxMap['math_3'] = '<math display=\'block\'><mrow><mfrac><mrow><mtext>executions</mtext></mrow><mrow><mtext>population&#x00A0;in&#x00A0;thousands</mtext></mrow></mfrac><mo>&#x00D7;</mo><mtext>1000</mtext></mrow></math>';



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
