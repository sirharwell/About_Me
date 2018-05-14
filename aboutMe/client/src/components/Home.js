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

class Home extends React.Component {
  render(){
    return(
      <div>
      <Segment inverted textAlign='center' style={{
        backgroundImage: `url(https://lh3.googleusercontent.com/sw2TzwDt3LP5jmrXhhqgqpXPiFY2B7yww5t0Pji8gSfnzBcyHXIlimM2xvYRVLAuHhOGMborkA7TyFCNIT6VUn4luoLN1er91Up7bhWm7rp0KmPvhUCeHZ6yprb1LYBnns3arlBtYxJ6a5LryIA0PneqflQEPhTIF6DRlGcjGUEN-ard7ZvXcjrjtVO5dYC570AcE0mL-eT7flNe3hYVfHi7FBR8lMKEP0SOn5A4rqqqyu1d6IJOtwk-rcpX7fb63WooqDNk61WitPsyk9eKcx3BbGx5CzFnnEjfyV8kgEOHfkTA7U66fA96H6o9zqby0qso3A09mNQ8zmg4L_3gApJ6m_SSuVZmVPep3DlBh-hEc2TUrGhIi2sr5XTr7OBztOe_9JudZyLZtRe-gNbfLg9_5G2tyiGiHSvzzc_VfJG3UjAbaoDfzdOb-KONtHex4MFKD8QC-E7zj8cyDGuDd3LP9UoEGVltau0cEy7TvCtfUBxx0tTMHLuEofWd0T3PodT4KEn_dwZjLi1XaaSVNsQQMHOwN9d5ZgiJ60gXCn72PWu7l-SVNDCGXYzU9qUiW_90DKfhlXKdiEdDkceV2dastAlYVtasVsolepHX=w1239-h697-no)`, backgroundSize: " cover ", minHeight: 700, padding: '1em 0em' }} vertical
      >
        <Container text style={{marginTop:'30px'}}>
          <Segment style={{ backgroundColor: 'rgba(250, 250, 250, .4)', padding: '20px'}}>
            <h1>Ian Harwell</h1>
          </Segment>
        </Container>
      </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '2em' }}>Places I've lived</Header>
              <p style={{ fontSize: '1.33em' }}>
                I've lived in England, Argentina, Colorado, Virginia, Illinois, Washington Dc, Maryland, Utah, and Texas.
              </p>
              <Header as='h3' style={{ fontSize: '2em' }}>Your Contractor Doesn't Get Paid Until You Are 100% Satisfied!</Header>
              <p style={{ fontSize: '1.33em' }}>
                Once you find a contractor and agree to how and when your project will be finished, you fund the project and we hold the funds until you are 100% satisfied with the work done. If you aren't happy, we will refund you 100%.
              </p>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image
                bordered
                rounded
                size='large'
                src='https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?cs=srgb&dl=apartment-architecture-ceiling-259962.jpg&fm=jpg'
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>"I found many professionals who were eager to work on my project and all gave me competitive quotes. I love Can Duu!!!"</Header>
              <p style={{ fontSize: '1.33em' }}>-@james_Jessie</p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>"I never use anyone else to find someone for a project! Can Duu is the best!"</Header>
              <p style={{ fontSize: '1.33em' }}> -@brad-f
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <Header as='h3' style={{ fontSize: '2em' }}>We Have All The Right People!</Header>
          <p style={{ fontSize: '1.33em' }}>
            When you need a handyman, photographer, plumber, landscaper, CPA, tailor, and just about anything else you can think of, we have your back!
            <br/>
            <br/>
            We have all the people you need to get your projects done, and done right. We have partnered with many organizations to provide you with the highest qualified, local professionals to take care of your projects in a timely and cost-effective way. You won't pay a dime for a quote and you can rest assured that the project will be done right the first time or it's on us!
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
                <Header inverted as='h4' content='Contact Us' />
                <div link inverted>
                  <p>Phone: (801) 555-5555</p>
                  <p>Email: info@canduu.com</p>
                  <p>Address: 300 East 370 South<br /> Salt Lake City, Utah 84111</p>
                  <div textAlign='center' relaxed columns={3}>
                      <Button circular color='facebook' icon='facebook' />
                      <Button circular color='twitter' icon='twitter' />
                      <Button circular color='linkedin' icon='linkedin' />
                      <Button circular color='google plus' icon='google plus' />
                    </div>
                </div>
              </Grid.Column>
              <Grid.Column width={10} verticalAlign="middle">
                <Header as='h4' inverted>About</Header>
                <p>We get all of our professionals and run them through a rigerous process to weed out those who do not deserve your business. We only work with the highest quality and affordable professionals who do what they say they will do.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      </div>
    )
  }
}

export default Home;
