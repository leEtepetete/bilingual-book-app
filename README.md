This is a practice playground to build muscle memory for the concepts 
I already learned on freeCodeCamp.org as I progress further.
Hopefully at some point it is an app for customizing your own bilingual childrens books.

This is the MVP concept:
Select 2 languages to create a bilingual childrens book. 
Books come with age recommendation (i.e. +18M)
Print the book.
WIP.
I draw images with Krita, story written by myself. 

//to do:
//fix paragraph/img scaling issues on different viewport sizes
  // on mobile img is too large, lang2 p not visible
  // on desktop img shrinks as viewport grows while p grow
  // on desktop navigating the book card (viewing preview window and selection lang1 and lang2) should not require scrolling down
  // text in p is selectable rightnow


//implement app language selection
//add mediaquery for scissor help-lines in print view (illustration-module)
//add multiple pages
  //add page navigation to book card
  //pages need to inherit language selection
//allow 1 language to work:
  //add "none" to language 2 selection
  //when lang2 = none, remove paragraph lang2 from illustration
  //print-function must respect change


//artwork:
  //increase saturation and contrast, img looks bleak on screen
  //aim for 10 pages
