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
                <img src="https://lh3.googleusercontent.com/Lf4ayFDDO6X0yCwZHYSgBMEN6LhPxal0iWMaoT-iFKWU0ATsSN0pMze02eqi7rP1SExLqTrE0RiEtM7nOb0MB6Uwf-u-O-DgbqjpRl90g5fVrtjNHbLgNuaLISPoomftHqhnvcliVaj5S_tvQR7pguF6zMiAaa6SaAq5z41JCp3mc5ppZYwD8Kkj5QGTRnsKSif9tebXqF6Mjoed9afPPtbx1uEBuqsKECQDFz98UZ5XahFECwQ-tqlNpCjwTLNUdGwuuYY6F8oKzU4yKIe4sX8oHmI3BINuLEQ6LWcPAzjBGS9cQMmL6AJkPt1Dvfwe7IuUTmslNQOL6bFGGiutxuvosI7euDYnTa_2SmEgMQ3W64bAkU3ao5ZmoTzWr58qEfSUQSCbjQ5JxLNj-LyhRbakRWjlHo4mAIRRocczGBipIv_3TAljJVjQp0WL_L1lHDWKgAUJS-mAmjB9Qcb92iTPWhotQYjZDPeWRiglRObbC1klZO1mpdwik2-fRKpVVQv5P5OfVKHwmj_g_bp80XizcQCu-jzsje_taqJf4GEuKRkOF90THRuwIQko11OUUP-JvzZcFLyB0f8nsPOwWqEMwCgiF4P9pUc-pOfJ=w1243-h700-no" />
                <p className="legend">Jeeping</p>
            </div>
            <div>
                <img src="https://lh3.googleusercontent.com/d7FPa0SJv96DeRYZA8WPe1quGfZ0aZi3Xrs66vr5XKDbuyep9fSKrdqMZv8Nvv4RGnYjC00Ui8a2WDaNgiO9YWJyfFnDlJn2WefWmdPTX1NsWwsbr-EzM2cZHowO87LJGTowR5CfuAJoaxFRlsdBAy-AbUuI58ZYKMkXrun61TUhFradRRKFU7tuJX0SxayJk-bZB0tuvQU3AiQ-0wgboS0Th8HEHZI7daNHoycfkRgN2Qw0VuGEbVq8g6s3xmah7xPBBrIpbhmWG-yFQ9Hepl5-8Rcp3tpaHOmeqPRPnq0kZCYfGtF--P3_ZWc7CRb_4EBIrCCvQ2MJiLA-lCcpyeKWSEWn7NCNVUAgEY5noi5A4qPxv8uQP2igPVeIWY5UKiVb5tXPCFICcCprSm-6h8GBlnOkX1rPr6-h7_wMIxzkktG9hpCUAnRk8OWFip32YIfvr5nWySKSmp170XOSbDQ1vu4u-t2gdvI8i-qI7d6Dm0976EzrE_LPBvv3mLYFlw17OfmeirThxe9I7Gsfcu4PgJAzfPikJECqTpqplDXdiF4titXXGMpGpP0qX80ozqo20NnGrOFCaWiYJrXaOcAgYkhhXH6NRSPtZi0=w1243-h700-no" />
                <p className="legend">Mountains</p>
            </div>
            <div>
                <img src="https://lh3.googleusercontent.com/LpSQDGcFxXfhjqo8wGQjhWnUHGQuYqAPUZCKkq8DnH5ihPYHf1Aw9t62ks0_LPpB4PMb461jYFUT4jhRrLXk59DYURL2Iy6Aj44iU6_p63edE0-VXSgx_cT5p9i3QFTFPlxTdnStxIQA6ZjAmjIHdXdECITR0Puefcen9YS-JZazggm2q2KiOiRPOuX4CfWPC1MUxrtcTZs76fMLp__1Cb7NoLYwIxsI0Ie7OhM0Kzdg4IkNFI7Fgc6hbkj1vCTfQac3fkJVlVgM0W7uXHTL56FI9qXnALVJlI2otibolzBhYumkRbq6fvJHDgyyfb12Q9xVDHnqw5iFLsBoNwxeLpTf8uc21xkTdMlX-TR9qXEEjBqPJpcQS7R5vI8E8QQ8zjL_T0WRxMrq4iNYMxqe0sqTOt6RFiU5n1-myg_PzuqvB_rXidVcDq0Pduyihutnv_O0mx7BYjeQvj385U2VMA_eZTVVufuTQfqxvvjnWcWfld55EeyEv1zuGptC69ouCEzx-3ZgJNkj-54ECcb-vOqa2ANeccYSuk11NAM3-0SCZT9_-EdvK_Q5a2L8krPv7xzbxFesAPjYDgW24E7CNObPaqUJpbfIFRNxA50i=w586-h781-no" />
                <p className="legend">Castles</p>
            </div>
            <div>
                <img src="https://lh3.googleusercontent.com/lJFh7BheE_YdTcSDmz34pw05GZtZm0nexwGUBSWHG5a6_jCjcJ6KnE-aTPFvOdrA2Fb87cU94iAA38wKFZhBczDed46nBghRw7N7As5txYZqXa4UD_tmFe9INDk3WItSC58FngKfA5yI6FQ7mUkS-8z2jJib9sTRgMBsXsVKCu2M-9rVh4V1OQgXVn2PRPtT952mXPINN56VGcbcCMUKh6QDKGv4LhTaijygGUYrHaq44j24OOEV6SOW7B15LBMw1LLPjdr2hWcAr7GGyS9lKrgFUa9UXWWMRutB_CWOoE1Dgu-3YwvXRdL0WQfjj3plMCpV4_qw3bdpYFbuiymMcWBktSH8SPAOFgWp6Bz2TLYUOcv4a8o-Uxm44dh15uNUq5xQzqEgZHRTaCy1mW-tp9EhYSpZtUjnbCRY_upz0g0huA1Vz1bBiaOj0qdC8c54gNqQTq8eMY_SiYQlnss7O198lyqxOn7z2Nscxz97QqPrlWAiB-Gi4f_QStAar3FIlnyFF9eHU-UEWJ9ejDlGcc4Y4FktxI7Ny4vx0gKz_w870z7uqIXOilYfmBbx1UpEuPT8_qD7J2q21O_cY8foDuHJhD5rP5sDSSsT158=w1042-h781-no" />
                <p className="legend">Stonehenge</p>
            </div>
            <div>
                <img src="https://lh3.googleusercontent.com/Ns_O_xpQZYEqaFBcS_dvBa0QN4sf4-sFz_a5WvQ8KY5BGfvuP46JBcaLVLgcMfAw7QvnsIBQIw5Q7i7Q-Rzvc48mNwZbGCDWv5AFTx1DrIlztzX2T3IPk382W7bAnp1614J2ggtoekUsw0yTf6m11KHDFRadTvAYGOayp75eEmH_dHCERlU9mrT2hjilEO5OoNTzD1NnenBYAomA9qftU4gOvcnEntIjFQU1KD3oEP76FxQVkzzjZletFrtmiVspQ4lFWmisi_CsTMgVibuZE-UOin0SiYEeEojywcg-lvUjEicG5Pvnc5LnbegLWIZ1bWyrufBXPOdhAKZV7ZSnh7dSjvealLXVaa3yH3C6L1sOEmF46ZhE6dcUiGDL6RyyE2ellQKvzdMKsPClyTMBqWXhlZ2mlZhKXrFiX9cKGuKy-mczX9EwpOwbPz9BDqwjRxlAdbWJ-ScPsI5b8qRvn3YnmN0ZVi33CfA58SXmKaB7XbMnWaH0anmDWVvh-haSogBQsNMOZOYY74S2gIdO87TFHS3g3pTeh4EAekbgb2n3Fxl9aWKpEXIcsz74sNW9DSg4MQQSR8exqjWBZ76SWS3A43Jhle5tOGA2yRxT=w586-h781-no" />
                <p className="legend">Church of Harwell</p>
            </div>
            <div>
                <img src="https://lh3.googleusercontent.com/uVei6FexAs-obJ1392TVNgjMUBFA2coxmtnmoMDZCykVryedHYZCyxI7NVp0u3EbhrjmWuWZmJsSSTYVelY7417OCXdxgmqZ3EHP2jlWfRcgEV0QriIQhMRBc6V-bYCzQ3RlPTjz5_Skli-YG8WmpIDrK7gP3EtH4neiBMIkls_9AtFibfT0w4xaE1DRVzw13_qHE5YuImbUoxUwBagBmei3Ubehrp7enp_3WUxl6BFpKavjIR4JpUgTHMk-LUatFJSs41DhoDMin9wDrnBBnRUk8dDBE8OwWGPC4GtI_7ZI3QKdFZIAmWaieYJa2KR5WKkoN7ET0TiJTkqSddqUTbphGQyOxo9VkarvzxZ7Hq17_IdhFwIZsTGDpbpDoFF5tP9IfTxhuYE3UeUKXx6VqvGW7UyT4dFqpWyxSaZZ_IlbbM6YEwZME3xoiYsrz5vmTsr1JQKAhqRyOeSAZx5AekS9VmEkx1H9Ey6EhRjU4oM3hU0ywOY262V_gkS92SoloC6uY7YXmDehsd7kKaZR2M-LcakOCuupZ8Wgc6l7fIKjf-TAh29ausQgBZ3cx-GKYdBJYFcKiAMVWkkPw5d09QbeLd89CYDPxML6K7M=w1042-h781-no" />
                <p className="legend">Grand Cayman</p>
            </div>
            <div>
                <img src="https://lh3.googleusercontent.com/tH4mauhUXaVmol5KG8zbC6DgLMAgqF0sSoToYCl53Wr8aoxGzW930SckeLVUQnG906vzAZJ6-aZU7dZrVeBdjH7lokdsuv2-mGHPB_P5F7g9WG4v6xk4eWidLdAjEgRmhRrKQx9mO51bInEaEKsSVv1Z4-eyBZsoh1Khp_6dCrLR0zXn3Wm20e4kUhhrm9q-uD3x3mg0W0WEhMs1S_qPvmuO34bKfo3NRiU_IAh_sBpd9amtZf1gQtXHu4v72i70O0YPcgQKfT2wp_bEs8jkcgVxvl8gNmI7TWtoG18DPB0iBlF7-5bjaPj1Ep4el4YRx0wH63VfAlYID953_VN17c5s9YGhSMUCGHF5Dt-R8P98LnKfWr03cSY9y31ZrLrBFYcLUS8o9mmhcBiUSiyoDFlhZzNwB5Dkra5e2qjw7B0ZCu8h9yTB4VlfIQCnOblgKV_FWv8_40sdQbFYrLNL9nT32q3nARvmBCTENUBoPEnl9G4hWXU3Ps1M8INkqbng8KpRla9pJdCYqeH0LNzs8MwmegsIrCsSH8j-wIoAHVePQpmkyQZH99nx_xzfzmDqX90oaHX7kzTEgjWzwoxQUT5s96IolIS-mTiXyOI=w1042-h781-no" />
                <p className="legend">Diving</p>
            </div>
            <div>
                <img src="https://lh3.googleusercontent.com/C-mEEratBLMC3NrFiC1Unw55MW9YgQBKtN2ZJNn_vzxF2Wh3BB7RgBsVKL-JxKhXU3_APkEAAdZNXDqwV4uc4ykNfrkXt3jkIqLP4QrEy0rCCTunkfcncIdHd8OVaIdlEoD5c62JBaV2CJPHMrnkN4C3xbL8AUSfD-V_xxv926FIzvrd8xNadQpMVBc8NuSudjI2aoVA9L0cKZ7sca8Yjnebt0cBMci6PdMs1hRUrUxklZokrpIhVyRXhWGdhKpC7DiWXFPD9WP5_ZqeSm-J1OIX3FG6D-zRcHeOcXVTPqEgTofVmR2AiROwd0aakLpxVUmr_vFeqwsycwdWQvzQYmHtXQhUE65ru89DmJcmn1CfiVRlNP0i2KkfaR50lpFF5a0c1doiqg70qZdsLSH2BQVZa-dXMS91fz7VeNkgVPu4gziix0cmAh5R19-0Y46xCXuc4Zup0IsQ4zqJDidU8CEAl1MyeIbKPcmqvS0JYuF_xk24Exibkjg6jDBkDYP8OZOVo3CyWrCQSh4F9JHAOfkYvQzce0OzJg3wDerZMjyFMp7Ba2xdQGmUAgsBkdyhPJhOFeRJsrpdDFpUvz0_n_XTu54gHbnTMpmmHpg=w1042-h781-no" />
                <p className="legend">Cave Tubing</p>
            </div>
            <div>
                <img src="https://lh3.googleusercontent.com/kKbTBqT-P4ZP-bJ6SRqXNVIyKCpLrY5G-XBjPDKWz1OQzjfY95QWldCs8_-IgyFpjGWEInddu1DC3JIHcvphQP_tGGzAdi_CZulKzPhjzIxl8xf9rm5A8LRxy2LPsOIxQSwI5JvarXzni-XAP-qq8BQddiyRr72SlE2trCS1qQjv7qUTwLNHA_gQGQ0IavrHENy3QK-JLaOMf4tW_g2PjEe9mLLa4LDu2FdiD51w7y6eX7vv3fIJXGgWHm5Gd7M8iezl0hVaxQaTb96LZDIe5hMOYlXW2Fcx2HoLSyK4rFIFtUVHSKKXKbFqwenynDFkh9QQtEt5FtzRjHC1jV7L2TwJCBPjxyfNfh7YMnMVl5e_sfQpapD-ot0pOEOCE6DIB71v0ufo7JtSHxOqM3QrweM7DnrBhhrQtnzLK-Z-OHG4Ku4CE_QOebEDujHgE1OLg-BguqR4lfaa0oxlqaDmQqA8HGBv_1v8E7uNqemY76mRtqK2LjRWO_uYSrmDbqPvZ8V7PO15WG08J5wZr8FMwF5rh7w66Q3zDnUYV8ocBaJIhmUJ5Gk2AxpJoMagjJ6t3WoJ6kxGm30nLPZBNtaWZPCu1gEcDrGW6FAobXw=w1042-h781-no" />
                <p className="legend">Boating</p>
            </div>
            <div>
                <img src="https://lh3.googleusercontent.com/wutkU5rJxMeDyjTjpmHDXDJ_Jgrb3iVaswsSzKEZq3tRElzNxAwxUwJK5haMd_5s3nBOcHmjDT96Gm7AltDwfBfuCGmbofhpEqEy_oUbuqby6Bt439pY-FlQH0HOTtLTkIfi-ZEAJiHjmfqxZAD6y1yoEUWWn7lsqUS91XqouCwZJre9mr5LtUt2oKgXv_GjAkaxSmjLzvD5OEBbBaTRcHiHcRqcTEA8gNvquG1g7kIhcEFgAKe9vNatPg3MPPJgGLMjQxi-kDrByIAKaUvnvlT6ZR_eGSROQjDNqL5s_awGEjmyCAA12_3i6Xbr0aqo8T2YHOhKFHe5VpfgTilf8prEwyYR2-eVAAMwoIIZBaxAhfpwHi0N-CfoCvnabb92tL90TX5NXa1I6fOHFcLL98HkAyXrhznq_coRIBgXwzjCur_LwIYeEpWK3--N7aUdk8_FSKV0C7UmviCgCvFlz5qrxOGvt6koztlsmp121BLNmYNkxzfVABOMGIH7Ln5B7-HLHDmSu0_qQO4ubXPdTXWiO9B39bdB6_Q2tDgya7kWO2I7kCRNmwoOC-n_Z5KiH_JLTXHJdJVBXpd8R1qIB0IOxEkBRCcA6ieNzpg=w521-h781-no" />
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
                That Map has every country that we've been to, all filled. Hopefully as time goes, that map will be much much fuller.
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
              <p style={{ fontSize: '1.33em' }}> I love animals. If I could set up a private animal sanctuary in my back yard, I totally would. We take my son to the zoo, but we all really know who that zoo trip is really for.
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
