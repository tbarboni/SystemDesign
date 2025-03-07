# SystemDesignProject
Midterm project for system design.

Making a very bad website.
This uses a bit of javascript to start a web server using express.

First Clone the repository.
To install the dependencies, run `npm install`.
After run `npm start` to start the server.
The server will be running on `localhost:1337`.
Go to your browser and enter http://localhost:1337/ to see the website.

# Instructions:
You’ve just been hired on by (pick your company) to design/redesign their webpage.  
They are a very very picky bunch. They have some very specific requests from you and want  
you to **FOLLOW THEM EXACTLY**. Even if you disagree with them!  

These requests can be vague at times. Just implement them in a way that makes sense  
for your website.  

### Their requests:

- **“That photo at the top? Make it bigger. We want that to take up the entire screen when  
  someone visits the page.”**  
- **“The text is too close. Give it some breathing room. Actually, a lot of breathing room.”**  
- **“I think it would be really fun if each image was of varying size. Bring some life to the  
  page.”**  
- **“We definitely need a ‘thanks for visiting’ blurb.”**  
- **“The straight line of our hierarchy? Too stale. I think spread it around some more. We’re  
  thinking innovation, here, folks.”**  
- **“The links are all very important. Put them with the other hierarchy elements.”**  
- **“Our buttons are looking a little short, we might need better text descriptions for some of  
  them.”**  
- **“Man, we need more color. What if we made some of the text red on a green  
  background?”**  
- **“We need to GRAB our user’s attention. Figure out how to call attention to a link on the  
  page.”**  

---

The goal of this project is to see how well you understand what’s been taught so far and to  
practice taking requests from the person who is hiring you. You may complete this project in any  
language you like and are free to use any HTML page as a template.  

No, it does not have to be functional. **Please don’t waste time getting it functional.** I’m checking  
how well you understand the terms you’ve learned.  

Yes, you may use placeholders. **I encourage placeholders.** Take creative freedom as long as  
you’re meeting the outlined requirements.  

Also, **make sure you keep the code of this website. You’ll be using it for project 2.**  

### Deliverables:

- The code for your website  
- A writeup of what you see wrong with what the client asked (**However long you need to  
  get your point across**)  
- A writeup of what you may not have been able to achieve on a technical level, but  
  acknowledge the request of the client  


# The deliverables and what is wrong with them:
### “That photo at the top? Make it bigger. We want that to take up the entire screen when someone visits the page.”
There were several photos at the top of the page. It could mean the icon photo on the tab, the fanny-pack rock photo, or what I went with, which was the burry Minecraft pig. The instruction also didn't provide specific information for how the image should take up the entire page. I decided to make it the background of the page. No photo should be too big where it dominates the majority of the page.
###  “The text is too close. Give it some breathing room. Actually, a lot of breathing room.”
I interpreted this instruction in a few ways. The first way was by adjusting the font spacing between each individual character and the other way was by creating a lot of padding in some of the buttons. This creates a little too much white space on the page in a way that makes the text difficult to read.
### “I think it would be really fun if each image was of varying size. Bring some life to the page.”
I really brought life to the page with CSS animations and giving to images a very different amount of size. One picture being to small to even see that well. The varying sizes make the images difficult to see and in one case creates an unnatural stretch to the photo where it shouldn't.
### “We definitely need a ‘thanks for visiting’ blurb.”
I put this in two places. I wanted to make the visitor of the site know how grateful we really are. The word "blurb" wasn't very specific to exact amount of size the message should take nor where it should be located. Most sites shouldn't have a thank you for visiting blurb as it wastes the visitors time and they don't typically care.
### “The straight line of our hierarchy? Too stale. I think spread it around some more. We’re thinking innovation, here, folks.”
The hierarchy was innovated to hell and back. The buttons and their associated links are all over the place and of a variety of different sizes. This makes it difficult to be even sure that there is a hierarchy in the first place and none of it really connects and in most cases is disorienting. This overall ruins the symmetry and balance of the page as a whole.
### “The links are all very important. Put them with the other hierarchy elements.”
As I just said. The links were placed in the buttons of the hierarchy and are the bulk of the subject in the hierarchy elements. This isn't great, because not all links are important and/or don't belong as a part of the hierarchy.
### “Our buttons are looking a little short, we might need better text descriptions for some of them.”
For this spec, I extended the physical size of the buttons as well as gave the links much more text than needed. Some now have very clear and specific instructions of what you are supposed to do with them. This isn't good, because not only does it make the visitor think, it may make them overthink or even get completely confused about what they are doing.
### “Man, we need more color. What if we made some of the text red on a green background?”
All buttons have red text on a green background. But I took this a step further and had the color of the text and background change when you hover. This is terrible, because the color combinations clash horribly and can be painful to have to read. It also doesn't match any clear color palette for the site.
### “We need to GRAB our user’s attention. Figure out how to call attention to a link on the page.”
The whole page is attention grabbing. Moving text and all. To grab the user's attention for some links the text is bolded and basically begging to be clicked, others have a much larger font size, and one even has a moving arrow pointing to it. The methods used to grab the users attention are not the best, because they are distracting or a waste of text space. The structure of the website and it's hierarchy should be able to grab the user's attention naturally and without flashy distractions.

# Technicality
Pretty much all of the requests were achievable in some fashion on the technical level. Obviously the ambiguity made it difficult to decipher exactly what was technically being asked, but I still managed to deliver my interpretation of the specification. The images being at different sizes and locations made it difficult to place on the page without it overlapping with the text or hierarchy at some point. With more time spent, I feel I could have fixed that but I think it plays into the *magic* of the site.
