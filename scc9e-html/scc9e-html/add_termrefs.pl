#!/usr/bin/perl

use utf8;
use strict;

# my $basename = "ch4";
my $termsfile = "ebook/asset/terms.js";
# my $xmlfile = "XML/3_${basename}_clean.xml";
# my $xml_out_file = "XML/4_${basename}_terms.xml";

# testing
# my $termsfile = "../html/asset/terms.js";
# my $xmlfile = "../XML/2_${basename}_math.xml";
# my $xml_out_file = "3_${basename}_terms_test2.xml";

# my $sec;
# my $min;
# my $hour;
# my 3_ch${chapter}_clean.xml";$mday;
# my $mon;
# my $year;
# my $wday;
# my $yday;
# my $isdst;
# ($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = localtime;
# print STDERR "$sec seconds\n";

######################################################################################################
# GLOSSARY TERM FILE PROCESSING
# grab all lines from file
open my $fh, "<$termsfile" or die;
my @all_term_lines = <$fh>;
close $fh;

# extract terms from the term lines
my @terms;
foreach my $termline (@all_term_lines) {
	$termline =~ s/xBookUtils.terms\['(.*)'\].*/$1/s;
	push @terms, $termline;
}

# sort the terms by size so that longer forms are processed before shorter ones
@terms = sort { length $b <=> length $a } @terms;


######################################################################################################
# XML CHAPTER FILE PREPARATION
# read in the XML file

my $lines;
my $temp_line;

# read in solutions file from STDIN
while ($temp_line = <STDIN>) {
    $lines .= $temp_line;
}


# nab off any XML before the first section ...
$lines =~ s/(.*?)(<section.*)/$2/si;
my $preXML = $1;

# extract all sections from chapter
my @sections;
while ($lines =~ s/(<section.*?<\/section>)//si) {
    my $section = $1;
    push @sections, $section;
}
# print STDERR "$#sections sections\n";

# ... and after the last section, nab the remainder
$lines =~ m/\s+(.*)/si;
my $postXML = $1;

######################################################################################################
# PERFORM XML FILE PROCESSING
# Array for storing the matched term text
my @terms_bank;
my $counter = 0;

######################################################################################################
# FOR EACH SECTION IN THE XML FILE
# go through each section of XML chapter document
foreach my $section (@sections) {
	
	print STDERR "\nNew Section\n";

	######################################################################################################
	# BUILD ARRAY OF XML BLOCKS TO SEARCH
	# push target elements (p, caption) onto array, ignoring all other content
	# block are actually removed from XML, saved for searching, then replaced back into the XML (see CLEAN UP below)
	my @p_li_caption_elements;
	while ($section =~ s/((<p [^>]*>.*?<\/p>)|(<caption\s?[^>]*>.*?<\/caption>))/!P_TAG_SWAP!/is) {
		my $para = $1;
		push @p_li_caption_elements, $para;
	}
	
	######################################################################################################
	# SEARCH FOR TERMS IN EACH XML BLOCK
	# now search through terms list, marking those found in the XML
	foreach my $term (@terms) {
		# go through each target XML block
		foreach my $para (@p_li_caption_elements) {
			
			# skip title elements
			next if ($para =~ m/(example_title|section_title|box_title|case_title|case_num|example_num|question_number|title=)/is);
			
			# mark each term found in XML and in "matched array"
			if ($para =~ s/(\b|>)($term)(\b|<)/$1<match$counter>$3/si) {
				$terms_bank[$counter] = $2; # use $2 (not $term) to retain original capitalization
				$counter++;
				print STDERR "----> term found ---> $term ($counter)\n";
				# look no further in block array for this term
				last;
			}
		}
	}

	######################################################################################################
	# CLEAN UP AFTER SUBSTITUTION WORK ABOVE
	# put p elements back into section
	while ($section =~ m/!P_TAG_SWAP!/) {
		my $tag = shift @p_li_caption_elements;
		$section =~ s/!P_TAG_SWAP!/$tag/;
	}
	
	######################################################################################################
	# APPLY TERMREFS
	# revert term placeholders back to term matches, wrapping in termref tags
	$section =~ s/<match(\d+)>/<termref term="$terms_bank[$1]">$terms_bank[$1]<\/termref>/sg;
}

######################################################################################################
# WRITE OUT TERMREF XML CODE TO NEW FILE

###################################
# Final output of processed file to STDOUT

print "$preXML", "\n";
print join "\n", @sections;
print "\n$postXML";

# open my $fh, '>', "$xml_out_file" or die;
# print STDERR "----> $xml_out_file written (add_termrefs.pl)\n";

# print $fh "$preXML";
# print $fh join "\n", @sections;
# print $fh "\n$postXML";

# close $fh;
# ($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = localtime;
# print STDERR "$sec seconds\n";