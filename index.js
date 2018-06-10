function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
  let iTitle = document.getElementById('title')
  let iBody = document.getElementById('body')
  const repo = 'user/javascript-fetch-lab-nyc-web-042318'
  let config = {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: {
      title: iTitle,
      body: iBody
    }
  }

  fetch(`https://api.github.com/user/javascript-fetch-lab/issues`, config)
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab-nyc-web-042318'
  //use fetch to fork it!
  const auth = {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }
  fetch(`https://api.github.com/repos/${repo}/forks`, auth)
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
