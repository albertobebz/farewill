# Farewill React Code Task

This is a React code task for applicants for software engineering roles at Farewill. It's intended to help us get an idea of how familiar you are with writing idiomatic React components, and how you approach other front-end good practices.

This task is to be completed in your own time, but please don't spend more than 2 hours on it! An incomplete version is okay.

We're looking to see how you approach the work as much as the end product. As well as the code you write, we also want to understand why you've chosen your solution, and what you'd do if you had more time. There are questions at the bottom of this readme that we'd love your thoughts on when you submit your answers.

## 👋 Intro

For this scenario, we're making a UI for showing random quotes from The Simpsons. This isn't exactly the next product we're thinking of launching, but their use of yellow works quite nicely with our brand colours.

We have:

- a template for the application
- a function to fetch random quotes
- designs for what the page should look like

---

## ❓ What you have to do

You'll need to add one or more components so that the app:

- Fetches 4 random quotes when the "Load quotes" button is clicked.
- Has some kind of "loading" state for the button while quotes are being fetched.
- Displays them in a format similar to the designs.
- Places the character images so they're facing towards their quotes.

#### Fetching quotes

A function is provided in `src/fetchQuotes.js` that selects 4 random quotes and returns them after a short delay (to simulate an API request.) You shouldn't need to modify this function.

The data returned by the quote function has information to position the character's image correctly.

#### The designs

You should follow the designs, but you don't have to match them exactly. If you style things differently, just let us know your reasoning!

##### Wide displays:

![Quote task wide](https://cdn.glitch.com/ca443201-d6f2-4d35-b5c6-8ae30c922edb%2Fquote_task_wide.png?v=1595602129785)

##### Narrow displays:

![Quote task narrow](https://cdn.glitch.com/ca443201-d6f2-4d35-b5c6-8ae30c922edb%2Fquote_task_narrow.png?v=1595602131478)


#### Technology

The provided application uses JavaScript, React, and styled-components. You're welcome to use other libraries if you're more familiar with them and think they're suitable.

---

### 💻 To get started

1. ['Remix' this application](https://glitch.com/edit/#!/remix/farewill-react-task). This will create a copy of all this code for yourself with a unique URL. If possible please do this with an account, as Glitch deletes anonymous applications after a while and we'd hate for your work to get lost!
1. Work on your code until you're happy
   - The relevant code is in the `src` folder.
   - `src/constants.js` contains constants related to styles.
1. When you've finished, copy your unique Glitch URL.
1. Email us that link with your notes on your thoughts and reasoning behind the decisions you made.

If you don't want to use Glitch for any reason, you can [download the project](https://glitch.happyfox.com/kb/article/26-how-can-i-download-or-backup-my-glitch-project/) and submit your completed task via email attachment or another platform such as GitHub.

#### What we're looking for
- First off, we're looking to see whether you have solved the problem (or have written a good awareness of what would be needed if you haven't finished)
- We're looking at things like your code readability
- We're also going to look at the way you've chosen to structure it
- Finally, we'll be looking at how you've chosen to use the languages, including JS/React, modern CSS, semantic and accessible HTML

#### Things you may wish to cover in your notes:

Alberto Ferioli

- Thoughts and reasonings behind your decisions
   - I opted for the creation of 2 components, one for the wrapper of the cards and the other one for the card itself. Both components have been styled using styled-component.
   The primary goal was to have all the ACs completed as MVP, once done it I wanted to add few coverage, testing the components with Jest and Enzyme, also adding a tiny animation on the hover over of the card. I've decided to do not use any state managment for the app, but having all the state at App level
- What went well?
   - I liked the initial boilerplate provided, didn't expect that 😅. I enojoyed completing the rest of the requirments and adding the missing functionality. I love the Simpson! 
- What could have gone better?
   - The requirements asked to complete the application on glitch but was really slow on my end, not sure if it was my internet connection or the service at the time I tried the test but that slowed down my development process, so I opted to work locally and provide the files.
- Is there anything particular you'd like to come back and improve if you had time? Why?
   With more time I'd definetly improve the following area
   - error handling in the app (there's already a state in place which can be used), definetly something to conside if we fetch data from a 3rd party API
   - test the application on different browsers/devices and fix potential CSS issues
   - if app grows I'd personally implement a state managment such as context/Redux/Mobx
   - use of typescript to make the app more robust
   - bump the test coverage
   
   
### HOW TO RUN THE APP
- cd farewill
- npm install
- npm run start
- npm run test
