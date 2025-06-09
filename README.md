# Curious Souls Café

Welcome to the [Curious Souls Café](https://curioussoulscafe.substack.com/about)! This [web app](https://curioussoulscafe.github.io/curious-souls-cafe/) is your companion for exploring fascinating ideas and fostering meaningful connections with others. Through thought-provoking questions, it offers conversation starters for friends, prompts for personal journaling, or fresh ideas to ponder.

Originally created to facilitate meaningful discussions during Curious Souls Café [meetup events](https://curioussoulscafe.substack.com), this app is now available to everyone, bringing the spirit of curiosity and connection to your fingertips.

## 🚀 How to Start the Live Web App

Just click the link below or scan a QR code to open the Curious Souls Café web app in your web browser:

1.  Visit the web app now via this link: <https://curioussoulscafe.github.io/curious-souls-cafe/>

2.  Alternatively, scan the QR code within the main page of the above web app (easier during face-to-face discussions)

<!--<img src="https://github.com/user-attachments/assets/a31b8885-76f9-4dee-bc48-5795d32221f1" alt="QR Code" width="300">-->

## ✨ What You Can Do with the Web App

**Note:** To fully utilize the Curious Souls Café web app, it's highly recommended to first understand how a Curious Souls Cafe event is typically structured, if you haven't attended an event before. The app is designed to complement the in-person experience, providing guided questions that fit seamlessly into the event flow. You can learn more about the event structure [here](https://curioussoulscafe.substack.com/p/event-structure), or view a partial archive of past events [here](https://curioussoulscafe.substack.com/archive).

* **Pick a Topic:** On the [main page](https://curioussoulscafe.github.io/curious-souls-cafe/), you'll see general questions like [Curious Talk](https://curioussoulscafe.github.io/curious-souls-cafe/curious-talk.html) and different topics like [Transitions](https://curioussoulscafe.github.io/curious-souls-cafe/transitions.html) or [Love Relationships](https://curioussoulscafe.github.io/curious-souls-cafe/love-relationships.html). Just click (or tap) on a topic button to dive in!

* **Get Random Questions:** Once you're on a topic page, tell the web app how many questions you'd like, and it will instantly give you new ones to ponder.

* **Find Specific Questions:** Looking for something particular? Use the search bar to find questions that match your keywords.

* **Save Questions:** See a question you like? Simply click or tap on it, and it will be added to your "Saved Questions" list at the bottom of the page. You can clear them anytime.

* **Optimized for On-the-Go:** The web app is designed to work seamlessly on smartphones and tablets, making it the ideal companion for dynamic, on-the-go interactions.

* **Join a Live Discussion**: During special events, a prominent "Live Discussion" button will appear on the main page, giving you access to real-time questions curated for that event.

## 🎲 A Fun Little Secret!

Did you know there's a little Easter egg in the Curious Souls Café web app? The colors of the virtual question cards (when you highlight a question or a saved one by a click/tap) aren't just random! They're designed to subtly match the fun [dice](https://curioussoulscafe.substack.com/i/154389021/the-dice-decides) colors used by our event facilitators to make those in-person discussions even more engaging. It's a small nod to bring a bit of that real-world fun into your digital experience!

## 📂 For the Tech-Savvy: How the Source Code is Structured

The Curious Souls Café web app keeps its questions organized in a simple way:

* The main page (`index.html`) is where you choose your topic.

* Each topic (like "Transitions" or "Love Relationships") has its own separate page (e.g., `transitions.html`).

* All the questions for each topic are stored in simple text files (`.txt`) inside the `questions/` folder. For example, all "Transitions" questions are in `questions/Transitions.txt`.

## 💪 For Event Facilitators: Managing Live Discussion Questions

The "Live Discussion" feature or button is designed for dynamic, event-specific use. Its visibility is controlled directly by the presence of a specific file in the repository, eliminating the need for code changes in `index.html`.

This allows event facilitators to quickly activate and deactivate the live discussion feature as needed for their events.

To enable and disable the "Live Discussion" button for an event:

1. **To Enable the "Live Discussion" Button:**

   * **Place the `Live Discussion.txt` file** (containing the specific event's questions) inside the `questions` folder in the GitHub repository.

   * **Commit and push** these changes to the GitHub repository. (The changes should then be automatically deployed to GitHub Pages within a minute.)

   * The "Live Discussion" button will now be visible on the main page for participants. (Note: For those who already have the page loaded, they may need to refresh their mobile browser.)

2. **To Disable the "Live Discussion" Button (after the event):**

   * **Remove the `Live Discussion.txt` file** from the `questions` folder in the GitHub repository.

   * **Commit and push** these changes to the GitHub repository.

💖 We express our heartfelt gratitude to the Singaporean facilitator(s) for the question sets for the topics [Love Relationships](https://curioussoulscafe.github.io/curious-souls-cafe/love-relationships.html), [Happiness](https://curioussoulscafe.github.io/curious-souls-cafe/happiness.html), and [The Mind Speaks](https://curioussoulscafe.github.io/curious-souls-cafe/the-mind-speaks.html), as well as to all curious souls (participants) who contributed [past questions](https://curioussoulscafe.github.io/curious-souls-cafe/past-questions.html) from our global events.

Thank you for visiting the Curious Souls Café! We hope it sparks many interesting conversations.
