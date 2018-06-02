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
            <Carousel dynamicHeight infiniteLoop width="fluid" showArrows={true}>
            <div>
                <img src="./photos/jeeping.jpg" />
                <p className="legend">Jeeping</p>
            </div>
            <div>
                <img src="./photos/mountain.jpg" />
                <p className="legend">Mountains</p>
            </div>
            <div>
                <img src="./photos/castle.jpg" />
                <p className="legend">Castles</p>
            </div>
            <div>
                <img src="./photos/stone.jpg" />
                <p className="legend">Stonehenge</p>
            </div>
            <div>
                <img src="./photos/church.jpg" />
                <p className="legend">Church of Harwell</p>
            </div>
            <div>
                <img src="./photos/beach.jpg" />
                <p className="legend">Grand Cayman</p>
            </div>
            <div>
                <img src="./photos/shell.jpg" />
                <p className="legend">Diving</p>
            </div>
            <div>
                <img src="./photos/cave.jpg" />
                <p className="legend">Cave Tubing</p>
            </div>
            <div>
                <img src="./photos/boat.jpg" />
                <p className="legend">Boating</p>
            </div>
            <div>
                <img src="./photos/zip.jpg" />
                <p className="legend">Zip Lining</p>
            </div>
            <div>
                <img src="https://lh3.googleusercontent.com/CiSlsW84alO93BWW9kgpkOZESs8r-f2C89hae19FrUzXI0tso6QlQIkzEnyWfppi7bY4SXNBYPQTb9yHxj3YFqmYlSd4Z_C8PcRLW-GM3c2RSqolAFJpmQw_WFI2VVR8RtOxcPAbRfwLta6oigaHojQ4XvcmfNNofpvun7S20YCgznpZCfsc3q2T7-qQa3RZvSHEn54-MLrBMPcs25-2peEcWetOTIIo5U9gab-pWSC3M1nd74r9Q-kA8zoaMTSFUQI3oaNqhjnCInxpbmlW0nqZvKpIIoRFu9sWmZTBVQznyJwIF2v0wT9Do9eq3VTSR6L5uCd38mP4xzG5fyGTk8knKpJPubywQy5P1cj7XFT_KM9WczSzf6V2XGlfW0XO2EnyiBMKo8OuoW_WS2AZnLrqoDkQiMh1HJMw4yBmzOu7L-i9ZVUoX0f3PjLOOEXXUg33_46B-2UqpazC2c9cGbSXHN3Wk5X79opg4LnoPF8W8GonuUDIZpB89l9Y0YWRpPwYhZpy4b7CwYRTVVIgifQijMtp8waxbxz7ZP9zsO-jH-2Fp8lmokR8nJbolmLcUswUAu6sf37xu_hU7XzQoFiqYrj2iyzxAZgq4CP3=w586-h781-no" />
                <p className="legend">Belgium</p>
            </div>
            <div>
                <img src="https://lh3.googleusercontent.com/BT79N8o0qAaoBP7rJ8KBq8Haih_f1CQYa5sUYlwLNt20efZhDmtre3W2BzvFDNIrC3fYX47sSB3SvslHGg0iDZ4Vof7m9boI2VTZR352m1QVhLlGadXMTE01ZT_cMN2oJsK4JdEC3cwIurhJ0KrpEpkpJLSCrkv5ff-UkR9Zm56-kF1NlTCjVV4J92Gl2B-uVPghWTwaGHADYHkWAg6AYBppp2WXkajavsxgeK-yKVw6xA_s5FTeiQFRzcXKxvmXTO2okzWa_CVX5RAjQxS4UOQsq8eT2OaMEHK_M1lANbhIMJFfm-xxfRRJHxmjZoTIsdL-7WmsIEn8NN5WifUe_APRM1hPfpPlk-D4DySYzudg-27oHrNAwtml98-fBEzdTv85zxvDUbE6G9fz6jawOuYhBDjTtGZ7rIZ_Xe4q3Gz0evqJm4nlgUa-df5Ac2UEiW1zHr6cZTVPgReqWZ4rgbCDR0--kL80EGBDi867vFjK-ZUnfBHeXyZ1Y1BoqoHhC1aJTIQI7pjIMPEousdsN0MGN_yTyxfFtIEALBHD9SLfS4xg03C2zDC_vNfcCldzlGKpHlwRegx2f1E4XmmyfMMabT12g-i9_Kq5bAg=w586-h781-no" />
                <p className="legend">Rome</p>
            </div>

            </Carousel>
            </Segment>
            </Grid.Column>
            </Grid>
        <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '2em' }}>Travel</Header>
              <p style={{ fontSize: '1.33em' }}>
                I live to travel. Most of our extra money goes to seeing the world. There's so much to see and do and I want to see and do it all. Between my wife and I, we've been to 17 countries and we're hoping to expand that. We have a goal to leave the country at least every other year. Our two favorite places have been the UK and basically anywhere in the Caribbean.
              </p>
                <p style={{ fontSize: '1.33em' }}>
                That map has every country that we've been to, all filled. Hopefully as time goes, that map will be much much fuller.
              </p>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image
                bordered
                rounded
                size='large'
                src='./photos/Map.png'
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
              size='large'
              src='https://lh3.googleusercontent.com/Jr5ewy-LtEoxLJmTCDFGYEzUuApoSstGhdd9lw_MplZyZFvFpnncJDYY1YX8OuvZGBvUI_G6pUtOt07anghXrbUlT0eCJlWXGfs8q4wbbYrtKaHJKHbzt6UMXR5drRCowHATebpo8BnV3xZFZE57ZX1myjUCll87dSIsCbHuXxlz0NHWCZMNwFY2sClL39IhkE0et6PEvbYTSw0T9naNfwUpJm_b1V07Hc4eSnmM2JekYVCf8N7IImWRaMUH5JswPXG-mWa_Rj-3NqtfFUi5NSwTlZrFF8jhS86GJsaDGpahZLSR8swewdzO7DIJosivM61qxc3_CD3M-ezYKrPBu9FQvaPKjHiYrP_EFYDbUEkBEok1M_aI_9PIRlB8YuJ4C-ZuhhcGLK-2ESzs0PKLfAN8364nj-gl5nP-wTPE11AE_WmeCY4M6YZk03amuxHj_jXsOqeDQ464sScKVlaREo5Dago6mZrpqBLxeWiiFd5z9Dyhb5nt1y8WHzosXrPOhu3wukuCmsNP4E2_RZx9jd7c-yx_W7W1_8c8oCbHL8ghIXXnBIVsRU9Egi2euF8ofC2jhTG534wsTtYn2cZZENsaVBct2OF09rp6eaAM=w1243-h700-no'
            />
          </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>Camping</Header>
              <p style={{ fontSize: '1.33em' }}> When we're not galavanting the world, we like to spend time outdoors. We camp a lot. I like to camp in tents and sometimes not even those if the weather is nice, Cori likes to camp in cabins. So we've reached a good compromise in that we almost always stay in cabins.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <br/><br/>
            <Header as='h3' style={{ fontSize: '2em' }}>Animals</Header>
              <p style={{ fontSize: '1.33em' }}> I love animals. If I could set up a private animal sanctuary in my backyard, I totally would. We take my son to the zoo, but we all really know who that zoo trip is really for.
              </p>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image
                bordered
                rounded
                size='medium'
                src='https://lh3.googleusercontent.com/8qWDjtQmOpFtPnNGfLib1R_aCDnYYozzSaAQwuFj8D6jHUIcZSi4rqWXDHhwGE_zW1mz3PYHtWDiHtsxpvLLtkbfSE1YrlWBrIpBZOnTXN0KemQmur0oNbG9Ws-iIzhyqWulLBxmbxC8klEGnY6cX59hBRZ0iN9mWA1qlcQIDn0y9kx8vjDKlA_xrlCheliqaeJD_AW__Ku9xoTIjz7kaDAO1F6e4sd1AWySsbm0wP6VNaALx0zpYkTk6MH_Ny8pDnSbc50Jkjde6NQUiBlAIHWl7-HZRdrm34tlotKygwa9BHlxeFjvLCQzanlv6jRf5O0F0WSU5uBcDDgbYgmN_KqdSPxlF-haHMMK4w5hil6iYbp17nG8gWcqWP_jkT-nwKHUzK5JyZsndsN0jXtz6MNzb8AVrTfJY08kcvHYK2bUhbDopVzOycsAkfzmtr6yz5nm-gdt7K9FAeNNvBVwSgkVEZSKj3DNrDX8lKuvbsQqQt8wKK8P7_Yp50v2jNE9rm9Wxko6tH9e7bENgJaRRvS2lQMkP_6G3htZMlWnDCsf0R5RwkuYFEehPglzPciYsJzgRj4pBfE6RdeW6Wv533s8rTsQfxTR-U2ukTk=w586-h781-no'
              />
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
