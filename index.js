const token = getToken()

function getIssues() {
  let url = "https://api.github.com/repos/blevm/javascript-fetch-lab/issues"
  fetch(url).then(resp => resp.json()).then(data => showIssues(data))
}

function showIssues(json) {
  let issues = document.getElementById('issues')
  issues.innerHTML += '<ul>'
  json.forEach(obj => {
    issues.innerHTML += `<li><a href="${obj.html_url}" target="_blank">${obj.title}</a> | ${obj.body}</li>`
  })
  issues.innerHTML += '</ul>'
  console.log('done')
}

function createIssue() {
  let title = document.getElementById('title');
  let body = document.getElementById('body');
  let url = "https://api.github.com/repos/blevm/javascript-fetch-lab/issues"

  let config = {
    method: /post/,
    headers: {
      Authorization: `token ${token}`,
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      title: `${title.value}`,
      body: `${body.value}`
    })
  }
  fetch(url, config).then(resp => resp.json()).then(getIssues)
}

function showForkedRepo(json) {
  let link = json.url
  return `<a href="https://github.com/${link.split('https://api.github.com/repos/')[1]}" target="_blank">${json.name}</a>`
}

function showResults(json) {
  let results = document.getElementById('results')
  results.innerHTML += showForkedRepo(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  const config = {
    method: /post/,
    headers: {
      Authorization: `token ${token}`
    },
  }

  fetch(`https://api.github.com/repos/${repo}/forks`, config).then(resp => resp.json()).then(data => showResults(data))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
