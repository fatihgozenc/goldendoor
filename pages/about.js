const About = ({data}) => {
	// console.log(data)
	return (
		<p>Hello Next.js</p>
	);
}

About.getInitialProps = async () => {
  const res = await fetch('http://goldendoor-api.narcissundtaurus.com/wp-json/gd/de/aboutus')
  const json = await res.json()
  return { data: json }
}

export default About