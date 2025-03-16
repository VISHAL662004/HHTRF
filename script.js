function vote(postId, change) {
    let voteElement = document.getElementById(`vote-${postId}`);
    let currentVotes = parseInt(voteElement.textContent);
    voteElement.textContent = currentVotes + change;
}
