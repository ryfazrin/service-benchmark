const express = require('express')
const app = express()
const port = 3000

app.use(express.static('./dist/', {
  setHeaders (res, path, stat) {
    // res.header('access-control-allow-origin', '*')
    // res.header("Cache-Control", "no-cache, no-store, must-revalidate") // HTTP 1.1.
    // res.header('Cross-Origin-Embedder-Policy', 'require-corp')
    res.header('Cross-Origin-Embedder-Policy', 'credentialless')
    res.header('Cross-Origin-Opener-Policy', 'same-origin')
  }
}))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})