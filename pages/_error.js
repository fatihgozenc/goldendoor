import Link from 'next/link';

function Error({ statusCode }) {
  return (
    <div className="errorpage">
        <div className="errorpage__code">
          {statusCode}
        </div>
        <p>
          Angeforderte Seite nicht gefunden
          <Link href="/">
            <a>&larr;&nbsp;&nbsp;Zur Startseite</a>
          </Link>
        </p>
    </div>
    
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error