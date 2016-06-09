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
             
         };

         //unbind all references to supplemental windows.
         //Will need to put in new URLs anyways, so removing now so we can start from scratch
         // in-text links
         $('span[data_href^="figure_"], [data_href^="exercise_"],[data_href^="example_"],[data_href^="table_"]').unbind(); //intext references
         // links in features
         $('[data-block_type="h1"] [data-block_type="EXP-T"]').unbind(); //example titles
         $('[data-block_type="TABLE"] [data-type="table_caption"]').unbind(); //table captions
         $('[data-type="question"] [data-block_type="BX2-QUE-N-ri"]').unbind(); // Titles for "Now it's your turn" exercises
         $('[data-type="question"] [data-block_type="CR-X-NL-N-ri"]').unbind(); // Titles for end of chapter exercises
         // $('[data-block_type="h1"] [data-caption-compass]  > img').unbind();
         // $('[data-block_type="h1"] [data-caption-compass]  > .compassImg img').unbind();
         $('[data-caption-compass] [data-block_type="FG-N-ri"]').unbind();
         // $('[data-type="figure"][data-block_type="UN-FIGURE"] img').unbind();
         // unbind all image events -- will be rebound below, if needed
         $('img').unbind();


         //don't want any cross-section/page/chapter linking in supplemental windows
         $('a[href^="scc9e-ch"][href$=".xml"]').attr("href", "");
         //jquery to remove page links
         //jquery to remove section links

         // add relative paths for inline links
         $('span[data_href^="figure_"]').click(function() {
             var filename = $(this).attr('data_href');
             var ch = filename.replace(/figure_([\dIV]+).*/i, "$1");
             var supp_win = "../../../ch" + ch + "/supp_wins/figures/" + filename;
             supp_win = supp_win.replace(/chI\//i, "part1/"); //account for part figures too
             supp_win = supp_win.replace(/chII\//i, "part2/"); //account for part figures too
             supp_win = supp_win.replace(/chIII\//i, "part3/"); //account for part figures too
             supp_win = supp_win.replace(/chIV\//i, "part4/"); //account for part figures to
             pop_content(supp_win, "1015px", "700px");
         });
         // add links on exercise references in the text
         $('span[data_href^="exercise_"]').click(function () {
             var filename = $(this).attr('data_href');
             var ch = filename.replace(/exercise_([\dIV]+).*/i, "$1");
             var supp_win = "../../../ch" + ch + "/supp_wins/exercises/" + filename;
             supp_win = supp_win.replace(/chI\//i, "part1/"); //account for part figures too
             supp_win = supp_win.replace(/chII\//i, "part2/"); //account for part figures too
             supp_win = supp_win.replace(/chIII\//i, "part3/"); //account for part figures too
             supp_win = supp_win.replace(/chIV\//i, "part4/"); //account for part figures to
             pop_content(supp_win, "1015px", "700px");
         });
         // add links on example references in the text
         $('span[data_href^="example_"]').click(function () {
             var filename = $(this).attr('data_href');
             var ch = filename.replace(/example_(\d+).*/i, "$1");
             var supp_win = "../../../ch" + ch + "/supp_wins/examples/" + filename;
             pop_content(supp_win, "1020px", "500px");
         });
         // add links on table references in the text
         $('span[data_href^="table_"]').click(function () {
             var filename = $(this).attr('data_href');
             var ch = filename.replace(/table_([\div]+).*/i, "$1");
             var supp_win = "../../../ch" + ch + "/supp_wins/tables/" + filename;
             supp_win = supp_win.replace(/chI\//i, "part1/"); //account for part figures too
             supp_win = supp_win.replace(/chII\//i, "part2/"); //account for part figures too
             supp_win = supp_win.replace(/chIII\//i, "part3/"); //account for part figures too
             supp_win = supp_win.replace(/chIV\//i, "part4/"); //account for part figures to
             pop_content(supp_win, "1020px", "500px");
         });

         // adjust all image paths
         $('img[src^="asset/ch"]').each(function () {
             var path = $(this).attr('src');
             path = path.replace(/asset/, "../../..");
             $(this).attr('src', path);
         });
         // also do for images found in part sections
         $('img[src^="asset/part"]').each(function () {
             var path = $(this).attr('src');
             path = path.replace(/asset/, "../../..");
             $(this).attr('src', path);
         });
         // adjust global images relative to supp_wins directory
         $('img[src^="asset/global_images"]').each(function () {
             var path = $(this).attr('src');
             path = path.replace(/asset/, "../../..");
             $(this).attr('src', path);
         });




         // add click events for contents of supplemental windows, leaving the event that invoked
         // the window disabled (see above unbind()s.




    // IF NOT FIGURE SUPPLEMENTAL WINDOW CODE, enable click events
         if (($('[data-type="section"] > [data-type="figure"]').length == 0) &&
             (($('[data-type="section"] > [data-block_type="FIGURE"]').length == 0))) {
         // add link on the figure image
        $('[data-caption-compass]  > .compassImg img').click(function () {
            var fignum = $(this).attr('src').replace(/fig_([\d_]+)/i, "$1");
            var supp_win = fignum.replace(/.*0?(\d+)_0?(\d+)\.jpg/, "../../../ch$1/supp_wins/figures/figure_$1_$2.html");
            pop_content(supp_win, "1015px", "700px");
        });
        // add link on the figure image 
        $('[data-caption-compass]  > img').click(function () {
            // original code - changing for parts, but check against all other chapters
            var fignum = $(this).attr('src').replace(/fig_([\d_]+)/i, "$1");
            var supp_win = fignum.replace(/.*_0?(\d+)_0?(\d+)\.jpg/, "../../../ch$1/supp_wins/figures/figure_$1_$2.html");
            // next clause added for part image supp wins which are not named "fig_"
            if (supp_win.includes(".jpg")) {
                // now get figure supp win from parent data-filename
                var filename = $(this).parent().attr("data-filename");
                var supp_win = "../figures/" + filename;
            }

            pop_content(supp_win, "1015px", "700px");
        });
        // add link on the figure number in caption
        $('[data-caption-compass] [data-block_type="FG-N-ri"]').click(function () {
            var fignum = $(this).text().replace(/FIGURE ([\d\.iv]+)/i, "$1");
            var supp_win = fignum.replace(/([\div]+)\.(\d+)/i, "../../../ch$1/supp_wins/figures/figure_$1_$2.html");
            supp_win = supp_win.replace(/chI\//i, "part1/"); //account for part figures too
            supp_win = supp_win.replace(/chII\//i, "part2/"); //account for part figures too
            supp_win = supp_win.replace(/chIII\//i, "part3/"); //account for part figures too
            supp_win = supp_win.replace(/chIV\//i, "part4/"); //account for part figures to
            pop_content(supp_win, "1015px", "700px");
        });

        //UNNUMBERED FIGURE IMAGE LINKS
        // add link on the figure image
        //$('[data-type="figure"][data-block_type="UN-FIGURE"] img').click(function () {
        //    var filename = $(this).parent().attr("data-filename");
        //    var supp_win = filename.replace(/(.*0?(\d+)_0?\d+\.html)/, "../../../ch$2/supp_wins/figures/$1");
        //    pop_content(supp_win, "1015px", "700px");
        //});

         } else {
             // place caption above figure image in number figure supplemental windows
             var figImg = $('[data-type="figure"] > img');
             var figText = $('[data-block_type="FIGURE"] [data-type="figure_text"]');
             if (figText.length > 0) {
                 figText.insertBefore(figImg);
             }

             var scale = 1.15;
             figImg.css('width', 'auto');
             var w = parseInt(figImg.css('width'));
             if (w > 0) { // if statement tests that the image has loaded... because sometimes this code runs before the image is loaded, and therefore gives a value of 0... which we don't want.
                 var neww = w * scale;
                 figImg.css('width', neww);
             }
         }

    
        // EXERCISE SUPPLEMENTAL WINDOW CODE
        // "Now it's your turn" exercises - wrap in BX2 box for styling
         $('[data-type="section"][data-block_type="h1"] > [data-type="question"]').wrap('<div data-type="box" data-block_type="BX2"></div>');
         // "Now it's your turn" exercises need title "Now it's your turn" added to the supplemental window
         $('[data-type="section"][data-block_type="h1"] [data-block_type="BX2"]').prepend('<div data-block_type="BX2-H"><p>NOW IT&apos;S YOUR TURN</p></div>');

         

        // Figure supp windows
        // size of figures in the supplemental windows should be 15% larger than main page
            //$('[data-type="section"] > [data-type="figure"] > img').each(function() {
            //    var scale = 1.15;
            //    var image = $(this); //update... this will accidentally find <img> in caption too.
            //    var natimg = document.getElementsByTagName("img")[0];
            //    var natWidth = natimg.naturalWidth;
            //    var w = natWidth * scale;
            //    image.css({ width: w });
            //});

     } // end initialize2

}); // end Player_subtype

// Do not delete this
player = new suppwins_Player_subtype();
