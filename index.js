function getIssues() {
  const repo = 'https://github.com/user/javascript-fetch-lab/issues'
  fetch(repo).then(response => response.json).then(data => {
    for(let i = 0; i < data.length; i++) {
      return data[i]
    }
  })
}

function showIssues(json) {
}

function createIssue() {
  const issueTitle = document.getElementById('title')
  const issueText = document.getElementById('body')
  const repo = 'user/javascript-fetch-lab'
  const config = {
    method: 'post',
    body: {
      title: issueTitle, body: issueText
    },
    headers: {
      Authorization: `token ${getToken()}`
    }
  }

  fetch(`https://github.com/${repo}/issues`, config)
}

function showResults(json) {
  return JSON.stringify(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const authorization = {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, authorization)
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

function showForkedRepo(repo) {
  const results = document.getElementById('results')
  results.innerHTML = repo
}
