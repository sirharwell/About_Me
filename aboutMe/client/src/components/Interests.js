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
                <img src="" />
                <p className="legend"></p>
            </div>
            <div>
                <img src="" />
                <p className="legend"></p>
            </div>
            <div>
                <img src="" />
                <p className="legend"></p>
            </div>
            <div>
                <img src="" />
                <p className="legend"></p>
            </div>
            <div>
                <img src="" />
                <p className="legend"></p>
            </div>
            <div>
                <img src="" />
                <p className="legend"></p>
            </div>
            <div>
                <img src="" />
                <p className="legend"></p>
            </div>
            <div>
                <img src="" />
                <p className="legend"></p>
            </div>
            <div>
                <img src="" />
                <p className="legend"></p>
            </div>
            <div>
                <img src="" />
                <p className="legend"></p>
            </div>
            <div>
                <img src="" />
                <p className="legend"></p>
            </div>
            <div>
                <img src="" />
                <p className="legend"></p>
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
                Not only is she pretty cool, but she's a successful pediatric nurse, currently working at Primary Children's Hospital, which takes the worst patients arcross five different states. She's a great mother and wife.
              </p>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image
                bordered
                rounded
                size='large'
                src='https://lh3.googleusercontent.com/yow1uRDcjz04IaxpBUz_V5kMsxE85IgCDMSPchnkjEUMdlJkHTXZl0DnNXNoFr3zrxaurS5pZOp6EtbJevfP8mWBWmZR2AA-wRmcGtZf-NtD1HX3y_GCwjwqUcbvX1VqbobYyAO45qJviy6LqdbTssvuTNUs8RqnbK1JeehhptiMaaDWXcrQr4-mVQyPjBMqK6D2FeKyeOb91c2UMCT9e3oUzH1YV7QEHgoK4dpnM50y4Io8L07EAznbNs81FaVZVK7C9XjAUcgD5YLkllFGLn4-DFGiDZTzYBaeK_LeNBFzTTndonyPT-iG-YHb7kTSN1OabGli7XaDoq-knFvSKeDJ6SMW8HfUZoRMv3L6ydO2mbX-qGw_JqPdqB6EBdaFzmFJ9iv1OxHmpih06ygoT4yX3ITXVTzNhkbPdvDGdYGZ9nFmx46STG9FpFszDMrFRSQUQtLZDhcjSsgZEMEStRusC1CsstZd92UkaSt6yVnVkte0dwi0TJxn0pyB2hx5ZHYACK9iy9jFhwYUp1x2M6vlQs_9jyBlzcUHX1syV8kMTtM_BasAMu8-jcsEs4QtOqQET15xN94z5lEUQdIXC80xVgaLeD7CFyeGW6iH=w586-h781-no'
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
              src='https://lh3.googleusercontent.com/35HQakmPYlvkTaHe_YhSZnrx1BoL3cKHLWAmcj7pURqOzSO0oeOywOH4JkgqPEXRMnsAkAcl8IRifMnLteQf5eE4kOBazE1kUeuEuJP1DWQBl2QjMSlKVl2ro0XNVsV8tU-8CSl2Kdz6ugi8hKIQTcjjAJNWNnyiqCaaQ84f09M_kWD4JkYxyX7kPCNG0dDdYqQL93YyH-zvTOBs3HI_G6ChxLfKP3x041bcVTNjyiMCcji46RKvhO-JKM8c4B8FLxHD1BnBSYsxrIJLt6C40Vowk1jkJuSvGR6wNPZkODielXBbfSEKkAzv2JKg0_8SpjOgoE8GKf-8UvTZV1m4YN0Y1kOQafM-FAcULkWESKWGQ66y0t8O6D5wLjTmHs8Dp1dTZksh0OWw4v7aKodY_1i5e8r_9vWYKyq3M3aL02icOmaMusoi1pMZYFkBHfrtSACI87zEJt6AmPqnTEC-irMpzX_PK-bzEGGIyJ6o8DRRgobZ6VGYLsreRH-skwm0RBqUmazcuxuC24oA_ZYe9fUokyHkVXBsELhMR3wnxcsUH8xboNZpA_1HtOsLwabB9mclHPW4k9niZmvpVBXMW-DFj5pnJ5E54-cJTLVA=w586-h781-no'
            />
          </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <br/><br/>
            <Header as='h3' style={{ fontSize: '2em' }}>Liam</Header>
              <p style={{ fontSize: '1.33em' }}> After seven years of adventures, we decided to go for the next big one. Liam is the best baby you could ask for. He likes to laugh and will always smile for the camera. His favorite thing to do is say "Hi" to everyone and give them a high five.
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
