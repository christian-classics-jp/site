const { execSync } = require('child_process')
const { join } = require('path')

/**
 * Pull repository
 */
function pull (repos) {
  const command = 'git pull origin master'
  console.log(`> ${command}`)
  let message = execSync(command, { cwd: join(__dirname, `../../repos/${repos}`) })
  console.log(message.toString())
}

module.exports = pull
