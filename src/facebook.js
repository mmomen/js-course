var posts = [
  {
    status: "This is a status",
    likes: 5,
    likedByMe: false,
    id: 0,
    comments: [{
      comment: "hello world",
      id: 0
    },
    {
      comment: "wuz up",
      id: 1
    }]
  },
  {
    status: "This is another status",
    likes: 8,
    likedByMe: true,
    id: 1,
    comments: []
  }
];

var onLoad = function() {
  posts.forEach(function(e) {
    displayPost(e);
    e.comments.reverse().forEach(function(element) {
      displayComment(e.id,element);
    });
  });
};

var createPost = function(post) {
  var postsNum = $(".posts").find(".post").length;
  var x = {
    status: post,
    likes: 0,
    likedByMe: false,
    id: postsNum,
    comments: []
  };
  displayPost(x);
  posts.push(x);
};

var likePost = function(postId) {
  var $postToMod = $("#post" + postId).find(".like-count");
  if (posts[postId].likedByMe) {
    posts[postId].likedByMe = false;
    posts[postId].likes--;
  } else {
    posts[postId].likedByMe = true;
    posts[postId].likes++;
  }
  $postToMod.text("This has " + posts[postId].likes + " likes");
};

var addComment = function(postId, comment) {
  var commentId = $("#post" + postId).find(".comment").length;
  var commentObj = {
    comment: comment,
    id: commentId
  };
  displayComment(postId, commentObj);
  posts[postId].comments.push(commentObj);
};

var shortText = false;

var toggleShortText = function() {};
