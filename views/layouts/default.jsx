const React = require('react')

function Default(html) {
  return (
    <html>
    <head>
      <title>{html.title || 'Default'}</title>
        <link rel="stylesheet" href="/main.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossOrigin="anonymous" />

    </head>
    <body>
      <div className="wrapper">
        <header>
          <h1><a href="/breads">BreadCRUD</a></h1>
        </header>
        <div className="container mt-3">
          {html.children}
        </div>
      </div>
    </body>
    </html>
  )
}

module.exports = Default
