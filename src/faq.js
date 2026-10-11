// Landing-page FAQ. Rendered on the page and as FAQPage structured data,
// so the two never drift apart. Keep answers factual (see PRODUCT.md).
export const FAQ = [
  {
    question: "What is planning poker?",
    answer:
      "Planning poker (also called scrum poker) is a way for agile teams to estimate work. Everyone picks a card with their estimate in secret, then all cards are revealed at once. Big differences start the conversation, and the team votes again until it agrees.",
  },
  {
    question: "Is PokerEstima free? Do I need an account?",
    answer:
      "It's free, open source and has no ads. Nobody needs an account: the facilitator types a name and the task, shares the link, and everyone else types a name to take a seat.",
  },
  {
    question: "Which cards are in the deck?",
    answer:
      "A modified Fibonacci deck for story points: 0, 1, 2, 3, 5, 8, 13, 20, 40 and 100. After the reveal you see every vote, the average, the nearest card and how the votes split.",
  },
  {
    question: "Does it work with Zoom, Google Meet and Microsoft Teams?",
    answer:
      "Yes. It runs in the browser, so you paste the room link into the call chat. The layout fits a narrow window next to the video call, and it works on phones too.",
  },
  {
    question: "How many people can join a room?",
    answer: "Up to 10 people per room, including the facilitator.",
  },
  {
    question: "What happens to our votes afterwards?",
    answer:
      "Nothing is kept. A room closes after 10 minutes (the facilitator can add 5 more minutes once), or 30 seconds after the last person leaves, and its task and votes are deleted with it.",
  },
];
