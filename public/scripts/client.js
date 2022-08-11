/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

/* global document */

// prepare document to be manipulated
$(document).ready(function() {


  // Fake data taken from initial-tweets.json
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  // function to empty out targeted element and append our created tweet to the element.
  // loops through tweets
  // calls createTweetElement for each tweet
  // appends the tweets to the page
  const renderTweets = function(data) {
    const $tweets = $('.posted-tweet').empty();
    data.forEach(function(tweet) {
      $tweets.append(createTweetElement(tweet));
    });
  };

  // function to create html markup for tweets
  const createTweetElement = function(tweet) {
    const $tweet  = $(
      `<main
        <section class="posted-tweet">
          <div class="posted-tweet-head">
            <div class="icon-name">
            <i class="fas fa-user"></i>
            <span class="user-name">${tweet.user.name}</span>
          </div>
          <span class="posted-tweet-handle">${tweet.user.handle}</span>
          </div>
             <div class="posted-tweet-body">
              <div class="text-body">${tweet.content.text}</div>
          </div>
          <footer class="posted-tweet-footer">
          <span class="post-date">${tweet.created_at}</span>
             <div class="footer-icons">
              <span class="icons" href="#"><i class="fa fa-flag" aria-hidden="true"></i></span>
              <span class="icons" href="#"><i class="fa fa-retweet" aria-hidden="true"></i></span>
              <span class="icons" href="#"><i class="fa fa-heart" aria-hidden="true"></i></span>
            </div>
          </footer>
        </section>
      </main>`
    );
    return $tweet;
  };
  
  // display newly created tweets on our site when refreshred using our hardcoded data.
  renderTweets(data);
 
  // jquery event handler for submit on our #tweet-string
  $("form").submit(function(event) {
    console.log("handler for .submit() was called");
    event.preventDefault();
    $.ajax('/tweets', { method: 'POST', data: $("form").serialize() })
      .then(function(result) {
        console.log('Success: ');
      });
    console.log($("form").serialize());
  });

  $(".tweet-button").click(function() {
    $("#tweet-string").submit();
  });

});