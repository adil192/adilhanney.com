My `BlackboardTheme` project encompasses a collection of (unofficial) tweaks and improvements to the University of Manchester's websites including Blackboard. It does this with the browser extensions [Stylus](https://addons.mozilla.org/en-GB/firefox/addon/styl-us/) for styles and [Tampermonkey](https://addons.mozilla.org/en-GB/firefox/addon/tampermonkey/) for scripts, which inject my custom CSS and JavaScript into the pages.

This project was originally only intended to apply Google's Material Design to my university's Blackboard website,
but as it grew, I began to theme more of my university's websites and then started adding small scripts to add features or boost usability.
Every time I encountered an issue, or saw something that I found difficult to use, I would try to fix it.

One of the most improved areas is the video player. The course content videos were difficult to use as you had to use the mouse to click on the buttons to play/pause, click somewhere on the razor-thin progress bar to rewind, and go through a series of popups and dialogs to configure captions at the start of every video!
I added the standard keyboard shortcuts for play/pause, rewind/fast-forward, volume control, captions, and fullscreen.
I also set sensible defaults, including a larger font size, better fonts, and a smaller width so your eyes don't have to move as far to read the captions.
I also changed the upscaling algorithm to favour sharpness over smoothness, as the fuzziness of lower quality videos was harder to read.

Another notable area is the course selection screen. The default layout was a compacted list of courses with very long names, which made it difficult to find the course you wanted.
I added a grid layout with course cards, which stay in the same position over time to help you remember where your courses are.
I assigned each of my modules and departments an image which is displayed on the card, and left instructions on how to change the image for your own courses.
I also added a feature that dims courses from semester 1 when you're in semester 2, to help you focus on the courses you're currently studying.

It's hard to describe all the changes I've made, so I recommend you check out the [GitHub repository](https://github.com/adil192/BlackboardTheme) which has a more complete list of features, before and after screenshots, and instructions on how to install it.
