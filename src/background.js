import browser from 'webextension-polyfill'
import createStore from './store'
import Service from './services/index.js'
import './assets/icon.png'

const getSettings = async () => {
  const store = await createStore(true)
  return JSON.parse(JSON.stringify(store.state))
}
const updateContextMenus = async () => {
  await browser.contextMenus.removeAll()

  const { projects } = await getSettings()
  for (let engine of projects) {
    await browser.contextMenus.create({
      title: `Send PR dự án ${engine.project}`,
      contexts: ['selection'],
      onclick: (info) => {
        engine.rooms.forEach(element => {
          var newMsg = engine.message
          newMsg = newMsg.replace('{url}', info.pageUrl)
          newMsg = newMsg.replace('{title}', info.selectionText)
          Service.addMessages(element, newMsg, engine.api)
        })
      }
    })
  }
}

browser.runtime.onMessage.addListener(async (message) => {
  const { id } = message

  switch (id) {
    case 'settingsChanged':
      await updateContextMenus()
      break
  }
})

updateContextMenus()
