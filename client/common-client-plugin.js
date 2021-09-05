export {
  register
}

async function register ({ registerHook, peertubeHelpers }) {
  const settings = await peertubeHelpers.getSettings()

  const showInstructions = async () => {
    const { instructionsStatus, instructionsBody } = settings

    if (instructionsStatus) {
      const { markdownRenderer, showModal } = peertubeHelpers

      showModal({
        title: 'Upload instructions',
        content: await markdownRenderer.enhancedMarkdownToHTML(instructionsBody),
        confirm: {
          value: 'OK'
        }
      })
    }
  }

  // Run when route is /videos/upload
  registerHook({
    target: 'action:router.navigation-end',
    handler: ({ path }) => {
      if (path === '/videos/upload') {
        showInstructions()
      }
    }
  })

  // Run when refresh or manually enter /videos/upload route in browser
  if (window.location.pathname === '/videos/upload') {
    showInstructions()
  }
}
