#!/usr/bin/perl

# Use this file as a front-end for add_termrefs.pl to add glossary terms to multiple
# XML files, listed by chapter below.

my $inputfile;
my $outputfile;

for $chapter (1..16){#(1..16) {
	
	print STDERR "CHAPTER $chapter\n";
	
#####################################################################################
# Add glossary term references to XML file
# Function: Searches for and wraps glossary terms with <termref> tags in the XML file.
# Input: Uses the current XML file (e.g. XML/2_ch4_math.xml) and an external asset/terms.js file.
#         Terms.js may be delivered to us or may be produced by extracting the terms from
#         either the XML file (if included there) or from the chapter PDF.
# Output: XML/3_ch4_terms.xml
#####################################################################################

my $fbase = sprintf('scc9e-ch%02d', $chapter);
$inputfile = "xml/${fbase}.xml";
$outputfile = "xml/${fbase}-terms.xml";

system("perl add_termrefs.pl < $inputfile > $outputfile");

print STDERR "$outputfile written (add_termrefs.pl)\n";

print STDERR "\n";
}
