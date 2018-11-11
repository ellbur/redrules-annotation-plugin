
// vim: tabstop=2
// vim: shiftwidth=2

(function() {
  'use strict';
  $(document).ready(function() {
    function isSection(s) {
      return document.title.includes("R" + s + " ") || document.title.includes("R" + s + "(");
    }
    
    function addStar(titleText) {
      $('h1:contains("' + titleText + '")').append($('<span class="tlr-change-annotation">*</span>'));
    }
    
    if (isSection("3.2")) {
      $('<p class="tlr-note">Note: TLR uses only en-dashes for ranges.</p>').insertAfter(
        $('p:contains("separated by an en dash")')
      );
      
      addStar("Pages, Footnotes, Endnotes");
    }
    else if (isSection("8")) {
      $('<p class="tlr-note">Note: TLR capitalizes Section when referring to a section of the United States Code</p> <p class="tlr-note">Note: TLR capitalizes “Comment,” “Note,” and “Article,” when referring to a specific comment, note, or article</p> <p class="tlr-note">Note: TLR capitalizes “Part,” “Discussion,” “Introduction,” “Conclusion,” and other words describing a component of a piece when referring to components of the current piece.</p>').insertAfter(
        $('div.inline:contains("according to the following examples")')
      );
      
      $('<p class="tlr-note">Note: according to this rule, the infinitive “to” should be capitalized. This is different than the CMOS rule. This rule takes precedence.</p>').insertAfter(
        $('div.inline:contains("words in a heading or title")')
      )
      
      addStar("Capitalization");
    }
    else if (isSection("12.3")) {
      $('<p class="tlr-note">Note: TLR uses U.S.C., not U.S.C.A. or U.S.C.S.</p>').insertAfter(
        $('p:contains("Official and unofficial codes for each state ")')
      );
      
      addStar("Current Official and Unofficial Codes");
    }
    else if (isSection("12.3.1")) {
      $('<p class="tlr-note">Note: For state statutes, TLR always uses the (West) version and always includes (West) in the parenthetical.</p>').insertAfter(
        $('p:contains("which federal and state codes require this information")')
      );
      
      addStar("Additional Information");
    }
    else if (isSection("12.3.2")) {
      $('<p class="tlr-note">Note: For federal statutes, TLR uses the most recent official publication, which is published every six years, including 2018.</p> <p class="tlr-note">For state statutes, TLR uses the “currentness” information from Westlaw, which will almost always be the current year (2018 or, next Spring, 2019).</p>').insertAfter(
        $('h1:contains("Year of Code")')
      );
      
      addStar("Year of Code");
    }
  });
})();

