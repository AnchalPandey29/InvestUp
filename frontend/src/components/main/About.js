import React from 'react'


const About = () => {
  const [show, setShow] = useState(false);
  const fade = useSpring({
    opacity: show ? 1 : 0,
    from: { opacity: 0 },
  });

  useEffect(() => {
    setShow(true);
  }, []);


  return (
    <animated.div style={fade}>
      <h1>About Us</h1>
      <p>We are a startup funding website that provides a common platform for fund raising and investing. Our goal is to make it easier for startups to find funding and for investors to discover new investment opportunities.</p>
      <p>Our platform offers various features such as consultancy, direct chat with investors, the ability to organize campaigns, and access to blogs and news. We also offer premium subscriptions for access to advanced services.</p>
      <p>Join us today and take advantage of the opportunities we offer to help your startup succeed!</p>
    </animated.div>
  )
}

export default About