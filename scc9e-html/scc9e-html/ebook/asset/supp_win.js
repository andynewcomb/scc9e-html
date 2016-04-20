/// <reference path="jquery.js" />
xBookUtils.bookID = "scc9e";

var suppwins_Player_subtype = Player_subtype.extend({
     initialize_sections: function () {
         // Do not delete this
         this._super();
         // Add custom JS code below. Anything that needs to be done before
         // the page displays should be done here.
     }, // end initialize_sections
     /*
        You will most likely not make any changes to the initialize method.
     */
     initialize: function (id) {
         // Do not delete this
         this._super(id);
     }, // end initialize

     initialize2: function () {
         // Do not delete this
         this._super();

    //All supplemental window javascript shall be done here

    var pop_content = function (url, w, h) {
        var path = window.location.pathname;
        var newWin = window.open(url, '_blank', 'width=' + w + ',height=' + h + ',menubar=0,location=0,scrollbars=yes', '');
        newWin.moveTo(150, 150);
    };

    // remove page markers
    $('[data-block_type="page_start"]').remove();


    // FIGURE SUPPLEMENTAL WINDOW CODE
    // if in figure supplemental window, remove all event handlers (maybe links in caption?)
    $('[data-type="section"] > [data-type="figure"] *').unbind();

    // replace click event hander on figure references in the text
    $('span[data_href^="figure_"]').unbind();
    $('span[data_href^="figure_"]').click(function () {
        var filename = $(this).attr('data_href');
        var supp_win = "../figures/" + filename;
        pop_content(supp_win, "1015px", "700px");
    });

    
    // TABLE SUPPLEMENTAL WINDOW CODE
    $('[data-type="section"] > [data-type="figure"]').unbind();
    
    
    // EXAMPLE SUPPLEMENTAL WINDOW CODE
    // disable event handler for example title
    $('[data-block_type="h1"] [data-block_type="EXP-T"]').unbind();
    // adjust links for figures, etc.
    // add link on the figure image
    $('[data-block_type="h1"] [data-caption-compass]  > .compassImg img').unbind();
    $('[data-block_type="h1"] [data-caption-compass]  > .compassImg img').click(function () {
        var fignum = $(this).attr('src').replace(/fig_([\d_]+)/i, "$1");
        var supp_win = fignum.replace(/.*0?(\d+)_0?(\d+)\.jpg/, "../figures/figure_$1_$2.html");
        pop_content(supp_win, "1015px", "700px");
    });
    // add link on the figure image (sometimes img is not inside "compass"... occurs when caption in default place under figure)
    $('[data-block_type="h1"] [data-caption-compass]  > img').unbind();
    $('[data-block_type="h1"] [data-caption-compass]  > img').click(function () {
        var fignum = $(this).attr('src').replace(/fig_([\d_]+)/i, "$1");
        var supp_win = fignum.replace(/.*0?(\d+)_0?(\d+)\.jpg/, "../figures/figure_$1_$2.html");
        pop_content(supp_win, "1015px", "700px");
    });
    // add link on the figure number in caption
    $('[data-block_type="h1"] [data-caption-compass] [data-block_type="FG-N-ri"]').unbind();
    $('[data-block_type="h1"] [data-caption-compass] [data-block_type="FG-N-ri"]').click(function () {
        var fignum = $(this).text().replace(/FIGURE ([\d\.]+)/i, "$1");
        var supp_win = fignum.replace(/(\d+)\.(\d+)/, "../figures/figure_$1_$2.html");
        pop_content(supp_win, "1015px", "700px");
    });

    
    // EXERCISE SUPPLEMENTAL WINDOW CODE
    $('[data-type="section"] > [data-type="question"]').unbind();

    //var this_span = $('[data_href]');
    //$('span[data_href^="figure_"]').click(function () {
    //    var filename = $(this).attr('data_href');
    //    filename = filename.replace(/^.*[\\\/]/, '')
    //    //var ch = filename.replace(/figure_(\d+).*/i, "$1");
    //    var swin = "../figures/" + filename;
    //    pop_content(swin, "1015px", "700px");
    //    //Player_subtype.prototype.pop_content.call(swin, "1015px", "700px");
    //});


        //Numbered figures supp windows
            //size of figures in the supplemental windows should be 15% larger than main page
                /*
                $('body#supp_win > #manuscript > img').each(function() {
                    var scale = .23;
                    image = $(this) //update... this will accidentally find <img> in caption too. 
                    var h = image.height() * scale;
                    var w = image.width() * scale;
                    image.css({ height: h, width: w });
                });
                */

     } // end initialize2

}); // end Player_subtype

// Do not delete this
player = new suppwins_Player_subtype();
