const BASE_URL = 'https://api.github.com/repos/caninodev/javascript-fetch-lab/'
const token = 'c1b938c952634efe66171b7294844e5f8902705a'
const title = document.getElementById('title')
const body = document.getElementById('body')
const issues = document.getElementById('issues')

function showIssues (json) {
  const ul = document.createElement('ul')
  issues.appendChild('ul')

  json.forEach(obj => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.setAttribute('href', `${obj.html_url}`)
    a.setAttribute('target', '_blank')
    a.innerText = `${obj.title}`
    li.innerHTML = `${obj.body}`
    li.appendChild(a)
    ul.appendChild(li)
  })
  console.log('done')
}

function createIssue () {
  let config = {
    method: /post/,
    headers: {
      Authorization: `token ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: `${title.value}`,
      body: `${body.value}`
    })
  }
  window.fetch(`${BASE_URL + 'issues'}`, config).then(response => response.json()).then(getIssues)
}

function showForkedRepo (json) {
  let link = json.url
  return `<a href="https://github.com/${link.split('https://api.github.com/repos/')[1]}" target="_blank">${json.name}</a>`
}

function showResults (json) {
  let results = document.getElementById('results')
  results.innerHTML += showForkedRepo(json)
}

function forkRepo () {
  const subURL = 'learn-co-curriculum/javascript-fetch-lab'
  // use fetch to fork it!
  const config = {
    method: /post/,
    headers: {
      Authorization: `token ${token}`
    }
  }

  window.fetch(`https://api.github.com/repos/${subURL}/forks`, config).then(response => response.json()).then(json => showResults(json))
}
function getIssues () {
  let url = 'https://api.github.com/repos/caninodev/javascript-fetch-lab/issues'
  window.fetch(url).then(resp => resp.json()).then(data => showIssues(data))
}

function getToken () {
  // change to your token to run in browser, but set
  // back to '' before committing so all tests pass
  return ''
}
