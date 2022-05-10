# Memory Game

live link: https://daygodao.github.io/memory-game/

how far can you go without clicking on the same tile twice

### game structure

- (App.js) hold states of current score and best score
  - (Gallery.js) display gallery of pictures for users to click and hold states of pictures that have been clicked
    - check click results
      - if right add to current score else reset current score and if higher than best score then update to new record
      - shuffle pics after each click
