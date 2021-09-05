export {
  register
}

async function register ({ registerHook }) {
  // Run when route is /videos/upload
  registerHook({
    target: 'action:router.navigation-end',
    handler: ({ path }) => {
      if (path === '/videos/upload') {
        // HANDLE HERE
      }
    }
  })

  // Run when refresh or manually enter /videos/upload route in browser
  if (window.location.pathname === '/videos/upload') {
    // HANDLE HERE
  }
}
