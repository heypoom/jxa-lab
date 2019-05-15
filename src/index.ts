import '@jxa/global-type'

import {GoogleChrome} from '../types/Google Chrome'

import {run} from '@jxa/run'

function currentUserName(): String {
  const sys = Application('System Events')
  console.log(sys.name())

  const chrome = Application<GoogleChrome>('Google Chrome')
  console.log(chrome.version(), chrome.id(), chrome.name(), '\n')

  // chrome.viewSource(chrome.tab)

  console.log(chrome.commandsOfClass())

  const user = sys.currentUser()

  return user.name()
}

async function index() {
  const userName = await run(currentUserName)

  console.log('User =', userName)
}

index()
