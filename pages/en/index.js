const Index = ({data}) => {
	console.log(data)
	return (
		<p>Hello Next.js</p>
	);
}

Index.getInitialProps = async () => {
  const res = await fetch('http://goldendoor-api.narcissundtaurus.com/wp-json/gd/en/home')
  const json = await res.json()
  return { data: json }
}

export default Index