
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
    
    function addHeadingStar(text) {
      $('span.TreeNode:contains("'+text+'")').append($('<span class="tlr-change-annotation">*</span>'));
      $('span.TreeNodeSelect:contains("'+text+'")').append($('<span class="tlr-change-annotation">*</span>'));
    }
    
    addHeadingStar('Rules');
    addHeadingStar('1 Structure and Use of Citations');
    addHeadingStar('1.5 Parenthetical Information');
    addHeadingStar('3 Subdivisions');
    addHeadingStar('3.2 Pages, Footnotes, Endnotes, and Graphical Materials');
    addHeadingStar('3.5 Internal Cross-References');
    addHeadingStar('5 Quotations');
    addHeadingStar('5.3 Omissions');
    addHeadingStar('8 Capitalization');
    addHeadingStar('12 Statutes');
    addHeadingStar('12.3 Current Official and Unofficial Codes');
    addHeadingStar('12.3.1 Additional Information');
    addHeadingStar('12.3.2 Year of Code');
    addHeadingStar('12.4 Session Laws');
    addHeadingStar('12.10 Short Forms for Statutes');
    
    if (isSection("1.5")) {
      $('<p class="tlr-note">Note: TLR <a href="http://ellbur.com/redrules/B.7.html">RedRule B.7</a> includes two additional parentheticals: “omission in original” and “internal quotation mark(s) omitted.”</p>').insertAfter(
        $('div.inline:contains("When a citation requires ")')
      );
      
      addStar("Parenthetical Information");
    }
    else if (isSection("3.2")) {
      $('<p class="tlr-note">Note: TLR uses only en-dashes for ranges. See <a href="http://ellbur.com/redrules/A.8.html">RedRule A.8</a>.</p>').insertAfter(
        $('p:contains("separated by an en dash")')
      );
      
      addStar("Pages, Footnotes, Endnotes");
    }
    else if (isSection("3.5")) {
      $('<p class="tlr-note">Note: TLR uses “Section” to refer to large roman numeral sections (Section I, Section II) and “Part” to refer to smaller subdivisions (Part I.A, Part III.B.2). See <a href="http://ellbur.com/redrules/A.11.html">RedRule A.11</a>.</p> <p class="tlr-note">Note: Where an internal cross reference would include an explanatory parenthetical, TLR prefers to use a textual sentence. See <a href="http://ellbur.com/redrules/B.8.html">RedRule B.8</a>.</p>').insertAfter(
        $('div.content_plain:contains("Use a consistent naming convention")')
      );
      
      addStar("Internal Cross-References");
    }
    else if (isSection("5.3")) {
      $('<p class="tlr-note">Note: See <a href="http://ellbur.com/redrules/D.3.html">RedRule D.3</a> for more examples of using ellipses.</p>').insertAfter(
        $('h1:contains("Omissions")')
      );
      
      addStar("Omissions");
    }
    else if (isSection("8")) {
      $('<p class="tlr-note">Note: TLR capitalizes Section when referring to a section of the United States Code. See <a href="http://ellbur.com/redrules/A.9.html">RedRule A.9</a>.</p> <p class="tlr-note">Note: TLR capitalizes “Comment,” “Note,” and “Article,” when referring to a specific comment, note, or article</p> <p class="tlr-note">Note: TLR capitalizes “Part,” “Discussion,” “Introduction,” “Conclusion,” and other words describing a component of a piece when referring to components of the current piece. See <a href="http://ellbur.com/redrules/A.11.html">RedRule A.11</a>.</p>').insertAfter(
        $('div.inline:contains("according to the following examples")')
      );
      
      $('<p class="tlr-note">Note: According to this rule, the infinitive “to” should be capitalized. This is different than the CMOS rule. This rule takes precedence: do not capitalize the infinitive “to” in a heading or title unless it follows a colon or begins the title.</p>').insertAfter(
        $('div.inline:contains("words in a heading or title")')
      )
      
      addStar("Capitalization");
    }
    else if (isSection("12.3")) {
      $('<p class="tlr-note">Note: TLR uses U.S.C., not U.S.C.A. or U.S.C.S. See <a href="http://ellbur.com/redrules/B.1.html">RedRule B.1</a>.</p>').insertAfter(
        $('p:contains("Official and unofficial codes for each state ")')
      );
      
      addStar("Current Official and Unofficial Codes");
    }
    else if (isSection("12.3.1")) {
      $('<p class="tlr-note">Note: For state statutes, TLR always uses the (West) version and always includes (West) in the parenthetical. See <a href="http://ellbur.com/redrules/B.12.html">RedRule B.12</a>.</p>').insertAfter(
        $('p:contains("which federal and state codes require this information")')
      );
      
      addStar("Additional Information");
    }
    else if (isSection("12.3.2")) {
      $('<p class="tlr-note">Note: For federal statutes, TLR uses the most recent official publication, which is published every six years, including 2018.</p> <p class="tlr-note">For state statutes, TLR uses the “currentness” information from Westlaw, which will almost always be the current year (2018 or, next Spring, 2019). See <a href="http://ellbur.com/redrules/B.12.html">RedRule B.12</a>.</p>').insertAfter(
        $('h1:contains("Year of Code")')
      );
      
      addStar("Year of Code");
    }
    else if (isSection("12.4")) {
      $('<p class="tlr-note">Note: Examples of state session law citations can be found in T1.3. Be careful to check whether the citation appropriately places page and chapter numbers.</p>').insertAfter(
        $('h1:contains("Session Laws")')
      );

      addStar("Session Laws");
    }
    else if (isSection("12.10")) {
      $('<p class="tlr-note">Note: TLR prefers to spell out “Section” in above-the-line text.</p>').insertAfter(
        $('div.inline:contains("In law review text and footnote text")')
      );
      
      addStar("Short Forms for Statutes");
    }
  });
})();

