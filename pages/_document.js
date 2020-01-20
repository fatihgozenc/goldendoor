import Document, { Html, Head, Main, NextScript } from 'next/document'

class GoldenDoorDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
          dangerouslySetInnerHTML={{ __html: `(function (d, t) {
					var pp = d.createElement(t), s = d.getElementsByTagName(t)[0];
					pp.src = '//app.pageproofer.com/overlay/js/4956/1600';
					pp.type = 'text/javascript';
					pp.async = true;
					s.parentNode.insertBefore(pp, s);
				})(document, 'script');`}} />
        </body>
      </Html>
    )
  }
}

export default GoldenDoorDocument