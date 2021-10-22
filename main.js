const LinksSocialMedia = {
  github: 'joicebarbosa',
  youtube: 'jakelinygracielly',
  facebook: 'joice_barbosa',
  instagram: 'joice_barbosa',
  twitter: 'joice_barbosa'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    alert(li.children[0].href)
  }
}

// i = i + 1
// i++

// ser humano 12345678910
//computador 0123456789

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

 fetch(url).then()   
}

getGitHubProfileInfos()