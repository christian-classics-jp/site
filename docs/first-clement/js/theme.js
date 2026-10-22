(function () {
  var root = document.documentElement
  var systemDark = window.matchMedia('(prefers-color-scheme: dark)')

  try {
    var saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved)
  } catch (e) {}

  function isDark () {
    var theme = root.getAttribute('data-theme')
    return theme ? theme === 'dark' : systemDark.matches
  }

  document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('.header')
    if (!header) return

    var button = document.createElement('button')
    button.type = 'button'
    button.className = 'theme-toggle'
    button.title = 'ダークモードの切り替え'
    button.setAttribute('aria-label', 'ダークモード')
    button.innerHTML =
      '<svg class="theme-icon-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/></svg>' +
      '<svg class="theme-icon-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/></svg>'

    function render () {
      button.setAttribute('aria-pressed', String(isDark()))
    }

    button.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark'
      root.setAttribute('data-theme', next)
      try { localStorage.setItem('theme', next) } catch (e) {}
      render()
    })
    systemDark.addEventListener('change', render)

    render()
    header.appendChild(button)
  })
})()
