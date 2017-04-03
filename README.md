# Codenames - a Rails/React side project
[Codenames](https://boardgamegeek.com/boardgame/178900/codenames) is an awesome tabletop game that many of my friends, near and far, love to play. But that's hard to do when we're not all sitting around a table together... the solution? Putting Codenames online!

This is an app I built both to practice my React and Redux, and also to provide a platform for my friends and I to play this awesome game while we Skype with each other. It currently supports one group of players through the process of assembling teams, setting up a virtual "game board", and playing the game by clicking cards to reveal them. It's designed to be played over a voice call where everyone can talk to each other, so currently there's no functionality for turn tracking or sharing "hints" (a part of the game mechanics) - but those will be coming soon!

#### [View the live app here!](c0d3names.herokuapp.com/play)

## Set Up

To download and configure this project locally on your own machine, follow these steps!

```
git clone https://github.com/cmkoller/codenames.git
cd codenames

# install the necessary gems
bundle install

# set up the database
rake db:create
rake db:migrate

# seed the database with some starting words
rake db:seed
```

To **compile the React code**, run `npm start`. Once a build has completed, you may either exit out of this command, or keep it running to automatically re-build the compiled javascript every time you change your React files!

To **view the application** in your browser, run `rails s` and visit [localhost:3000][http://localhost:3000].

To **run the test suite**, run `rake spec`.
