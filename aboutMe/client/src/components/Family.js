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
import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
// general styles
import './main.css';
// carousel styles
import './carousel.css';

class Family extends Component {
    render() {
        return (
          <div>
          <br/><br/><br/>
          <Grid centered columns={2}>
          <Grid.Column>
          <Segment textAlign="center" >
            <Carousel autoPlay infiniteLoop width="fluid" showArrows={true}>
                <div>
                    <img src="./photos/snow.JPG" />
                    <p className="legend">Cori and I when we first started dating</p>
                </div>
                <div>
                    <img src="./photos/wedding.jpg" />
                    <p className="legend">Wedding Day</p>
                </div>
                <div>
                    <img src="./photos/vegas.jpg" />
                    <p className="legend">"My Family"</p>
                </div>
                <div>
                    <img src="./photos/sanderson.jpg" />
                    <p className="legend">"Cori's Family"</p>
                </div>
                <div>
                    <img src="./photos/baby.jpg" />
                    <p className="legend">"Baby Liam joins the family"</p>
                </div>
                <div>
                    <img src="./photos/usie.jpg" />
                    <p className="legend">The Harwell Clan</p>
                </div>
            </Carousel>
            </Segment>
            </Grid.Column>
            </Grid>
        <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '2em' }}>Married for 8 years</Header>
              <p style={{ fontSize: '1.33em' }}>
                I met Cori during my senior year of high school. We quickly became best of friends even if we didn't see each other as romantic partners. Fast forward a bit forward and we realize that we were being dumb and were meant to be together. We got married and have been happy together ever since.
                </p>
                <p style={{ fontSize: '1.33em' }}>
                Not only is she pretty cool, but she's a successful pediatric nurse, currently working at Primary Children's Hospital, which takes the worst patients across five different states. She's a great mother and wife.
              </p>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image
                bordered
                rounded
                size='large'
                src='./photos/splash.jpg'
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
          <Grid.Column floated='right' width={6}>
            <Image
              bordered
              rounded
              size='medium'
              src='./photos/liam.jpg'
            />
          </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <br/><br/>
            <Header as='h3' style={{ fontSize: '2em' }}>Liam</Header>
              <p style={{ fontSize: '1.33em' }}> After seven years of adventures, we decided to go for the next big one. Liam is the best baby you could ask for. He likes to laugh and will always smile for the camera. His favorite thing to do is say "Hi" to everyone and give them a high five. He runs around the park all day and makes friends with all the kids, even though the kids don't know it. 
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
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

export default Family;
