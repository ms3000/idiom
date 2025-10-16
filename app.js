// app.js
let deferredPrompt = null

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault()
  deferredPrompt = e
  const banner = document.getElementById('installBanner')
  const btn = document.getElementById('installBtn')
  if (banner) banner.style.display = 'block'
  if (btn) btn.style.display = 'inline-block'
})

document.getElementById('installNow')?.addEventListener('click', async () => {
  if (!deferredPrompt) return
  deferredPrompt.prompt()
  const choice = await deferredPrompt.userChoice
  deferredPrompt = null
  document.getElementById('installBanner').style.display = 'none'
})

document.getElementById('installBtn')?.addEventListener('click', async () => {
  if (!deferredPrompt) return
  deferredPrompt.prompt()
  await deferredPrompt.userChoice
  deferredPrompt = null
  document.getElementById('installBtn').style.display = 'none'
})

// Service worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(reg => {
      console.log('SW registered', reg)
    }).catch(console.error)
  })
}

document.getElementById('reloadSW')?.addEventListener('click', async () => {
  if (navigator.serviceWorker?.controller) {
    navigator.serviceWorker.controller.postMessage({ type: 'CHECK_FOR_UPDATE' })
  }
})
