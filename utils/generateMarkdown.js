// function to generate markdown for README
function generateMarkdown(data, githubInfo) {
    return `
  # **${data.title}**
  ${data.badge}
  ## Description 
  ${data.description}
  ## Table of contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Licence](#Licence)
  - [Contributors](#Contributors)
  - [RoadMap](#RoadMap)
  - [Test](#Test)
  - [Visuals](#Visuals)
  - [Status](#Status)
  - [Repository Link](#Repository)
  - [Deployed](#Deployed)
  - [GitHub Info](#GitHub) 
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Licence
  ${data.licence}
  ## Contributors
  ${data.contributing}
  ## RoadMap
  ${data.roadmap}
  ## Test
  ${data.test}
  ## Visuals
  ${data.visuals}
  ## Status
  ${data.status}
  ## Repository
  - [Project Repo](${data.repo})
  ## Deployed
  - [Deployed](${data.deployed})
  ## GitHub
  ![GitHub Picture](${githubInfo.githubImage})
  - ${githubInfo.name}
  - [GitHub Profile](${githubInfo.profile})
  - <${githubInfo.email}>
  `;
  }
  
  module.exports = generateMarkdown;