import React from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Work extends React.Component {
  render(){
    return(
      <div>
      <Segment inverted textAlign='center' style={{
        backgroundImage: `url(https://lh3.googleusercontent.com/xozwtcTAexOfoLmqvGjLmwt141ZfwsAGKJDAldLnfHOnc0msmNsjcoK7-sGuEAELkDoY8clHtNynwv-OkB6v8JJFzVS1BDfrhioGFZtCwj-Worcd65uvucxXDeJ0fwE6PXMgkz9N_Ueq3QjEYzLDaZLtCybvLDxAMlJH7ViQNnqwOfGt_98xfC0o44a_ABzyeHEx5sOexgsjiK91mpYEPWesdE1jzkkdZN2FTNuPnBY7pUWpUPovJOdt2x5fATY__oNRyf3HXIe3tsgMwQCzu6oQuidyj5vwzG8ug88V9h5IjqsRfS3YmGX51ncBIQooicZMfwPe6V8hqnkXG3uNy8pqzDgoT7T5Y4uehPGPajJ3ZNpNmaukwQ5hmSUtKXLv8iHSVyMDGBI76MEmCqgr9PrMFosakl8T8N2KfneCmMH5pkgxxUOVNNjDfl7V2KxyvCnsixM7XBcUIZQ1J4HVN8uti-5U6PNvZ9Tb3q9lDo2XrdGzibm5zX6RjiupTn28uNaENOPerTzEakmZSlNP7fMxmxN7U5rGZeF3r66wy9Mv3sa7kAVcI9r1cvwX1qi9cdl9tVF47yuJLLug9QS_Wzx6YzkMeSpHCzC1F944=w1012-h759-no)`, backgroundSize: " cover ", minHeight: 700, padding: '1em 0em' }} vertical
      >
        <Container text style={{marginTop:'30px'}}>
          <Segment style={{ backgroundColor: 'rgba(250, 250, 250, .0)', padding: '20px'}}>
            <Header as='h3' inverted style={{ fontSize: '4em', textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black' }}>Work Experience</Header>
          </Segment>
        </Container>
      </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '2em' }}>Programming stuff I have learned</Header>
              <p style={{ fontSize: '1.33em' }}>
              Ruby,	Rails,	UI Frameworks, ReactJS,
              CSS,	HTML,	Authentication,
              a11y,	Fundamentals,	Deployment,	Flux,
              JavaScript,	GIT,	Testing,	Redux,
              SQL,	QA,	Webpack,	Native,
              Command Line,	jQuery,	AJAX / Fetch / Axios,	Routing,
              Functional Programming,	OOP	Performance,
              Real Time Applications,	PWA	Package Publishing, and more.
                             </p>
              <Header as='h3' style={{ fontSize: '2em' }}>Certifications</Header>
              <p style={{ fontSize: '1.33em' }}>
              Professional Education - Full-Stack Web Development Certificate
              Series 7 - General Securities & Series 63 - Uniform Securities
              </p>
              <a href='https://www.youracclaim.com/badges/95705a7f-f8ff-4b32-8594-9245e4f0e5a5'>Full-Stack proof</a><br/>
              <a href='http://brokercheck.finra.org/individual/summary/6546083#examsSection'>Securities Proof</a>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image
                bordered
                rounded
                size='large'
                src='https://acclaim-production-app.s3.amazonaws.com/images/1d1c9176-df19-4109-9538-4368de8358f9/dev-point-badge-graphic.png'
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
        <Image
        rounded
        centered
        size='huge'
        src='https://gradsoflife.org/wp-content/uploads/2013/10/FIDELITY-logo.jpg'/>
        <Divider hidden/>
      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>Stock Plan Consultant</Header>
              <p style={{ fontSize: '1.33em' }}>I worked with several large companies facilitating their equity compensation plans. I helped individual employees accept, review, and cash in their stock options and restricted stocks. I specifically worked with high net worth employees (awards worth over $100k) and offered different forms of managed accounts to help them with their money.</p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>Financial Representative</Header>
              <p style={{ fontSize: '1.33em' }}>I worked with the non-retirement clients. I placed stock and mutual fund trades. I helped do account maintenance and planning. Recommended different managed accounts.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
        <Image.Group centered>
        <Image
        rounded
        size='medium'
        src='https://mms.businesswire.com/media/20150601006340/en/458641/5/Allconnect_2015_logo.jpg'/>
        <Image
        rounded
        size='medium'
        src='https://assets.themuse.com/uploaded/companies/1146/small_logo.png?v=5b1b32122448bd9e8c926027371bc6de4a445857c0b7e5c1eeff7cb54abe9228'/>
        </Image.Group>
          <Header as='h3' style={{ fontSize: '2em' }}>Different Companies, same job</Header>
          <p style={{ fontSize: '1.33em' }}>
            I sold various telecom providers. I sold for both major as well as regional companies. For example, big companies like Xfinity as well as small ones like Cincinnati Bell. We had requirements to hit conversion rates (sales per call) as well as maintaining a high level of customer satisfaction and a rigorous QA requirement.
            <br/>
            <br/>
          </p>
          <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
          </Divider>
        </Container>
      </Segment>
      <Segment inverted vertical style={{ padding: '2em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={5}>
                <Header inverted as='h4' content='Contact Me' />
                <div link inverted>
                  <p>Phone: (801) 874-7127</p>
                  <p>Email: sirharwell@gmail.com</p>
                  <div textAlign='center' relaxed columns={3}>
                    <a href='https://www.facebook.com/ian.harwell'>
                      <Button circular color='facebook' icon='facebook'  />
                    </a>
                    <a href='https://www.linkedin.com/in/ian-harwell/'>
                      <Button circular color='linkedin' icon='linkedin' />
                    </a>
                    <a href='https://github.com/sirharwell'>
                      <Button circular color='github' icon='github' />
                    </a>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column width={10} verticalAlign="middle">
                <Header as='h4' inverted>About</Header>
                <p>I am a full stack developer. After a career in sales/finance I went back to school to pursue a career that both challenged and excited me. I am ready to work in a fast-paced environment where I can continue learning to do what I love.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      </div>
    )
  }
}

export default Work;
