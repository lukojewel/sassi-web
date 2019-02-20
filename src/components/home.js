/*Package importing*/
import React, { Component } from 'react';
import playIcon from '../assets/images/play-icon.svg';
import ideaImage1 from '../assets/images/fyers-themes-images-1.png';
import leftArrow from '../assets/images/left-arrow.svg';
import publicTheme1 from '../assets/images/publicTheme1.png';
import news1 from '../assets/images/news1.png';

class Home extends Component {
  render() {
    return (
      <div className="ft-body">
        <section className="ft-banner-wrap ft-hm-banner-wrap">
          <div className="container vh-100 d-flex align-items-center">
            <div className="align-middle">
              <h6 className="ft-c-primary ft-letter-space">THEMATIC</h6>
              <h1 className="ft-banner-head ft-c-black">Invest in the next <span>significant idea.</span></h1>
              <h5 className="ft-c-brown ft-p-bottom-30">Be wealthy. Be successful.</h5>
              <div>
                <span className="ft-p-btn ft-m-right-20">LOG IN</span><span className="ft-s-btn">OPEN AN ACCOUNT</span>
              </div>
              <div>
                <span className="ft-hm-play-icn-wrap ft-m-top-20">
                  <img className="ev-nav-logo-dark" src={playIcon} alt="Watch about Thematic"/>
                </span>
                <span className="ft-s-txt ft-c-brown ft-p-left-10 ft-relative ft-hm-play-icn-txt ft-txt-underline">Watch a quick video</span>
              </div>
            </div>
          </div>
        </section>
        <section className="ft-p-top-100 ft-p-bottom-100">
          <div className="container">
            <div className="row">
              <div className="col-7">
                <h2 className="ft-p-bottom-20">Brilliant Ideas for <br/><span className="ft-c-grey">Zero Fee</span></h2>
                <h5 className="ft-c-brown">We help you to build a data-driven, diversified, low cost & long term successful portfolio based on the trend in the economy for free!</h5>
              </div>
              <div className="col-5 ft-p-0">
                <div className="row ft-ftheme-card-wrap ft-bg-white ft-absolute">
                    <div className="col-8">
                      <h4>Energy takeout targets</h4>
                      <p className="ft-card-p-txt ft-c-brown">This is to gain exposure to mergers & amo acquisitions activity among oil & gas companies.</p>
                      <div className="d-flex align-items-end flex-column">
                        <p className="ft-card-pl-txt ft-c-brown mt-auto p-2">MONTHLY RETURNS <span className="ft-c-green">5.6%</span></p>
                      </div>
                    </div>
                    <div className="col-4 ft-align-center ft-p-right-0">
                      <img className="ft-ftheme-card-img ft-m-bottom-10" src={ideaImage1} alt="Themes by Fyers"/>
                      <a href="/">Invest Now</a>
                    </div>
                </div>
                <div className="ft-align-right ft-card-arrow-wrap ft-relative"> 
                  <span className="ft-m-right-20">
                    <img className="ft-ftheme-card-img" src={leftArrow} alt="Left arrow"/>
                  </span>
                  <span className="active">
                    <img className="ft-ftheme-card-img ft-right-arrow" src={leftArrow} alt="Right arrow"/>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ft-bg-primary ft-p-top-100 ft-p-bottom-100">
          <div className="container">
            <div className="col-6 ft-p-bottom-30">
              <h2 className="ft-p-bottom-20 ft-c-white">How to start <br/><span className="ft-c-dull-secondary">Thematic?</span></h2>
              <h5 className="ft-c-brown ft-hm-how-head-sec">With 3 simple steps you can begin your bright investment future with us</h5>
            </div>
            <div className="col-11 ft-p-top-50 ft-hm-how-items-wrap">
              <div className="row">
                <div className="col-3 offset-md-1 ft-hm-how-pick-wrap">
                  <img className="ft-p-bottom-10" alt="How to work pick image"/>
                  <h3 className="ft-c-white ft-p-bottom-10">Pick</h3>
                  <p className="ft-hm-how-para ft-p-bottom-10">Choose an existing theme from our inventory to start investing, evaluating or follow it.</p>
                  <a href="/">VIEW THEMES</a>
                </div>
                <div className="col-3 offset-md-1 ft-hm-how-customize-wrap">
                  <img className="ft-p-bottom-10" alt="How to work pick image"/>
                  <h3 className="ft-c-white ft-p-bottom-10">Pick</h3>
                  <p className="ft-hm-how-para ft-p-bottom-10">If you want to add or remove any instrument to or from the chosen theme, you can do that.</p>
                  <a href="/">VIEW THEMES</a>
                </div>
                <div className="col-3 offset-md-1 ft-hm-how-invest-wrap">
                  <img className="ft-p-bottom-10" alt="How to work pick image"/>
                  <h3 className="ft-c-white ft-p-bottom-10">Invest</h3>
                  <p className="ft-hm-how-para ft-p-bottom-10">If you believe the chosen theme or your customised idea can perform, start buying it.</p>
                  <a href="/">VIEW THEMES</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="  ft-p-top-100 ft-p-bottom-100">
          <div className="container">
            <div className="col-6 ft-p-bottom-30">
              <h2 className="ft-p-bottom-20 ft-c-black">Why investment in <br/><span className="ft-c-grey">Ideas?</span></h2>
              <h5 className="ft-c-black">Investing in multiple stocks can reduce risk and can beat other investment techniques, also</h5>
            </div>
            <div className="col-11 ft-p-top-50 ft-hm-why-items-wrap">
              <div className="row">
                <div className="col-3 offset-md-1">
                  <div className="row ft-p-bottom-50 ft-hm-why-easy-wrap">
                    <div className="col-4">
                      <img alt="Easy & simple method to invest"/>
                    </div>
                    <div className="col-8 ft-p-right-0">
                      <p className="ft-c-black">Easy & simple method to invest</p>
                    </div>
                  </div>
                  <div className="row ft-p-bottom-50 ft-hm-why-customizable-wrap">
                    <div className="col-4">
                      <img alt="Highly customizable to perform"/>
                    </div>
                    <div className="col-8 ft-p-right-0">
                      <p className="ft-c-black">Highly customizable to perform</p>
                    </div>
                  </div>
                  <div className="row ft-hm-why-uPortfolio-wrap">
                    <div className="col-4">
                      <img alt="100+ unique portfolios to follow"/>
                    </div>
                    <div className="col-8 ft-p-right-0">
                      <p className="ft-c-black">100+ unique portfolios to follow</p>
                    </div>
                  </div>
                </div>
                <div className="col-3 offset-md-1">
                  <div className="row ft-p-bottom-50 ft-hm-why-researched-wrap">
                    <div className="col-4">
                      <img alt="Gets thoroughly researched portfolios"/>
                    </div>
                    <div className="col-8 ft-p-right-0">
                      <p className="ft-c-black">Gets thoroughly researched portfolios</p>
                    </div>
                  </div>
                  <div className="row ft-p-bottom-50 ft-hm-why-fee-wrap">
                    <div className="col-4">
                      <img alt="No management fee,no hidden costs"/>
                    </div>
                    <div className="col-8 ft-p-right-0">
                      <p className="ft-c-black">No management fee,no hidden costs</p>
                    </div>
                  </div>
                  <div className="row ft-hm-why-ideas-wrap">
                    <div className="col-4">
                      <img alt="Invest in your own ideas you believe"/>
                    </div>
                    <div className="col-8 ft-p-right-0">
                      <p className="ft-c-black">Invest in your own ideas you believe</p>
                    </div>
                  </div>
                </div>
                <div className="col-3 offset-md-1">
                  <div className="row ft-p-bottom-50 ft-hm-why-mfunds-wrap">
                    <div className="col-4">
                      <img alt="Outperform mutual funds in every way"/>
                    </div>
                    <div className="col-8 ft-p-right-0">
                      <p className="ft-c-black">Outperform mutual funds in every way</p>
                    </div>
                  </div>
                  <div className="row ft-p-bottom-50 ft-hm-why-fcontrol-wrap">
                    <div className="col-4">
                      <img alt="Full control over your portfolio"/>
                    </div>
                    <div className="col-8 ft-p-right-0">
                      <p className="ft-c-black">Full control over your portfolio</p>
                    </div>
                  </div>
                  <div className="row ft-hm-why-more-wrap">
                    <div className="col-4">
                      <img alt="And a lot more"/>
                    </div>
                    <div className="col-8 ft-p-right-0">
                      <p className="ft-c-black">And a lot more</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ft-p-bottom-100 ft-top-themes-outer-wrap">
          <div className="">
            <div className="col-9 ft-p-bottom-30 ft-top-theme-head-wrap ">
              <h2 className="ft-p-bottom-20 ft-c-black ft-p-top-100">Top performing <br/><span className="ft-c-grey">Themes</span></h2>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-7">
                <h5 className="ft-c-black">Themes from Fyers which outperform the mutual funds</h5>
              </div>
              <img className="ft-top-theme-pattern-img-1" alt="Fyers pattern"/>
            </div>
            <div className="col-12 ft-p-top-50 ft-ptheme-items-wrap ft-p-left-0">
              <div className="row">
                <div className="col-3">
                  <div className="ft-ptheme-card-wrap">
                    <img className="ft-m-bottom-10 ft-border-5" src={publicTheme1} alt="Themes by Fyers"/>
                    <h4>Energy takeout targets</h4>
                    <p className="ft-card-p-txt ft-c-brown">This is to gain exposure to mergers & amo acquisitions activity among oil & gas companies.</p>
                    <div className="d-flex flex-row d-flex justify-content-between">
                      <p className="ft-card-chrg-txt ft-c-brown mt-auto ft-p-0 ft-m-0">CARG <span className="ft-c-green">5.6%</span></p>
                      <a href="/">Invest now</a>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="ft-ptheme-card-wrap">
                    <img className="ft-m-bottom-10 ft-border-5" src={publicTheme1} alt="Themes by Fyers"/>
                    <h4>Energy takeout targets</h4>
                    <p className="ft-card-p-txt ft-c-brown">This is to gain exposure to mergers & amo acquisitions activity among oil & gas companies.</p>
                    <div className="d-flex flex-row d-flex justify-content-between">
                      <p className="ft-card-chrg-txt ft-c-brown mt-auto ft-p-0 ft-m-0">CARG <span className="ft-c-green">5.6%</span></p>
                      <a href="/">Invest now</a>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="ft-ptheme-card-wrap">
                    <img className="ft-m-bottom-10 ft-border-5" src={publicTheme1} alt="Themes by Fyers"/>
                    <h4>Energy takeout targets</h4>
                    <p className="ft-card-p-txt ft-c-brown">This is to gain exposure to mergers & amo acquisitions activity among oil & gas companies.</p>
                    <div className="d-flex flex-row d-flex justify-content-between">
                      <p className="ft-card-chrg-txt ft-c-brown mt-auto ft-p-0 ft-m-0">CARG <span className="ft-c-green">5.6%</span></p>
                      <a href="/">Invest now</a>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="ft-ptheme-card-wrap">
                    <img className="ft-m-bottom-10 ft-border-5" src={publicTheme1} alt="Themes by Fyers"/>
                    <h4>Energy takeout targets</h4>
                    <p className="ft-card-p-txt ft-c-brown">This is to gain exposure to mergers & amo acquisitions activity among oil & gas companies.</p>
                    <div className="d-flex flex-row d-flex justify-content-between">
                      <p className="ft-card-chrg-txt ft-c-brown mt-auto ft-p-0 ft-m-0">CARG <span className="ft-c-green">5.6%</span></p>
                      <a href="/">Invest now</a>
                    </div>
                  </div>
                </div>
              </div>
              <img className="ft-top-theme-pattern-img-2" alt="Fyers pattern"/>
            </div>
            <div className="row">
              <div className="ft-align-right ft-card-arrow-wrap ft-relative"> 
                <span className="ft-m-right-20">
                  <img className="ft-ftheme-card-img" src={leftArrow} alt="Left arrow"/>
                </span>
                <span className="active">
                  <img className="ft-ftheme-card-img ft-right-arrow" src={leftArrow} alt="Right arrow"/>
                </span>
                <a className="ft-c-primary ft-m-left-20 ft-relative ft-top-themes-more-txt" href="/">MORE THEMES</a>
              </div>
            </div>
          </div>
        </section>
        <section className="ft-p-top-100 ft-p-bottom-100">
          <div className="container">
            <div className="col-6 ft-p-bottom-30">
              <h2 className="ft-p-bottom-20 ft-c-black">Our <br/><span className="ft-c-grey">News</span></h2>
              <h5 className="ft-c-black">Latest news, breaking stories & more</h5>
            </div>
            <div className="col-12 ft-p-top-20 ft-ptheme-items-wrap ft-p-left-0">
              <div className="row">
                <div className="col-4">
                  <div className="ft-ptheme-card-wrap">
                    <img className="ft-m-bottom-10 ft-border-5" src={news1} alt="Themes by Fyers"/>
                    <h4>Benefits of Investing in a Diversified Portfolio</h4>
                    <span className="ft-x-small-txt ft-c-grey">1 day ago</span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="ft-ptheme-card-wrap">
                    <img className="ft-m-bottom-10 ft-border-5" src={news1} alt="Themes by Fyers"/>
                    <h4>Benefits of Investing in a Diversified Portfolio</h4>
                    <span className="ft-x-small-txt ft-c-grey">1 day ago</span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="ft-ptheme-card-wrap">
                    <img className="ft-m-bottom-10 ft-border-5" src={news1} alt="Themes by Fyers"/>
                    <h4>Benefits of Investing in a Diversified Portfolio</h4>
                    <span className="ft-x-small-txt ft-c-grey">1 day ago</span>
                  </div>
                </div>
              </div>
              <img className="ft-top-theme-pattern-img-2" alt="Fyers pattern"/>
            </div>
            <div className="row">
              <div className="ft-align-right ft-card-arrow-wrap ft-relative"> 
                <span className="ft-m-right-20">
                  <img className="ft-ftheme-card-img" src={leftArrow} alt="Left arrow"/>
                </span>
                <span className="active">
                  <img className="ft-ftheme-card-img ft-right-arrow" src={leftArrow} alt="Right arrow"/>
                </span>
                <a className="ft-c-primary ft-m-left-20 ft-relative ft-top-themes-more-txt" href="/">MORE THEMES</a>
              </div>
            </div>
          </div>
        </section>
        <section className="ft-bg-primary ft-p-top-100 ft-p-bottom-100">
          <div className="container">
            <div className="col-6 ft-p-bottom-30">
              <h2 className="ft-p-bottom-20 ft-c-white">Know more <br/><span className="ft-c-dull-secondary">About Us?</span></h2>
              <h5 className="ft-c-brown ft-hm-how-head-sec">Need clarification for opening an account or have queries?</h5>
            </div>
          </div>
        </section>
      </div> 
    ); 
  } 
}

export default Home;
