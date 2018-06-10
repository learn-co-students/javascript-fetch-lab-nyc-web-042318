function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
  var titleIssue = document.getElementById('title');
  var bodyIssue = document.getElementById('body');

  let config = {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: {
      title: titleIssue,
      body: bodyIssue
    }
  }
  fetch(`https://github.com/user/javascript-fetch-lab/issues`, config)
};

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  const authorization = {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }
  fetch(`https://api.github.com/repos/${repo}/forks`, authorization)
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
