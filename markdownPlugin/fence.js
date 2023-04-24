export default (md, options = {}) => {
  const defaultRenderer = md.renderer.rules.fence.bind(md.renderer.rules)

  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    const token = tokens[idx]
    const code = token.content.trim()
    const info = token.info ? md.utils.unescapeAll(token.info).trim() : ''
    let langName = ''

    if (info)
      langName = info.split(/\s+/g)[0]

    switch (langName) {
      case 'mermaid':
        return `<pre class="mermaid">${code}</pre>`
      case 'plantuml':
        return `<pre class="plantuml">${code}</pre>`
      case 'dot':
        return `<pre class="dot">${code}</pre>`
      case 'ditaa':
        // return plantumlParser.functions.getMarkup(code, 'ditaa')
        return `<pre class="ditaa">${code}</pre>`
    }

    return defaultRenderer(tokens, idx, options, env, slf)
  }
}
