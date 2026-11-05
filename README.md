# Team Arcade

Team Arcade is a mini team name card styled like a retro game's “Pick your hero!” screen. Open `index.html` in a browser to play. No installation is required.

## Design brief

- Keep the interface entirely in English.
- Use a cute, compact arcade layout with bright blue and warm cream-brown.
- Give each of the three teammates a selectable hero slot. Players can switch slots by clicking or using the left and right arrow keys.
- Each card includes the teammate's name, major or area of study, an image that represents them, and a fun fact revealed by a button.
- The visual references were a three-person “Meet our team” card layout and the Powerpuff Girls. Victoria's hero is a floating cartoon based on her portrait. Teammates can provide their own representative image.

## Player 1 · Victoria

- **Name** · Yalan Peng (Victoria)
- **Area of study** · Technology, Media, and Learning
- **Focus** · Design of Learning Technology
- **Image** · A Powerpuff Girls inspired superhero based on Victoria's photo. The original generated asset is `victoria.png`, and the page embeds it so it can load without a separate image request.
- **Fun fact** · “I love dogs! My handle on every platform is ‘Responsible Dog Owner.’” The handle is an English translation of 文明养犬.

## Add Player 2 or Player 3

Both slots start empty so teammates can fill them in. Add your image to the project folder, then replace your slot's `null` in the `players` array in `game.js` with an entry like this:

```js
{
  name: "Name shown on the roster",
  fullName: "Full name",
  major: "Major or area of study",
  focus: "Optional concentration",
  image: "your-hero.png",
  alt: "A short description of your image",
  fact: "A fun fact about you!",
}
```

The second entry is Player 2 and the third entry is Player 3. Use English for the card text and match the image filename exactly. Reload the page, select your slot, and click **Reveal fun fact** to check your card. The roster labels and player count update automatically.
