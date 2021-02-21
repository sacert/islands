import logo from './islands.png';
import info from './info.png';
import test from './test.png';
import dev from './dev.jpg';
import ds from './datascience.png';
import demo from './demo.png';
import testing from './testing.png';
import vector from './vector.svg';
import slack from './slack.png';
import breakdown from './breakdown.png';
import { useEffect } from 'react';
import './App.css';

const Header = () => {
  return(
    <div className="header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="App-name">
        Islands
      </div>
      <div className="App-quote">
        - 
        <img src={slack} className="slack-header-icon" />
        app
      </div>
    </div>
  )
}

const Description = () => {
  return (
    <div className="description">
      <div className="info">
        <div>
          <div className="quote">
            "self destructive EC2 instaces - for 👨‍💻/👩‍💻s"
          </div>

          <div className="explanation">
            Speed up dev productivity by giving the option to easily spin up machines for your devs that doesn't involve being blocked by devops. Self destructive for security 👮‍♂️ and money saving 💰!
          </div>
          <div className="okay">
            <div className="info-holder-description">
              <img src={info} className="App-info" alt="info" />
            </div>
            <div className="buttons">
              <button className="interested" onClick={() => { 
                document.getElementById('email').scrollIntoView({behavior: 'smooth'});
                document.getElementById('email').focus({preventScroll:true});
              }}>I'm interested</button>
              <button className="contact" onClick={() => { window.open('mailto:islandsslackapp@gmail.com')}}>Contact</button>
            </div>
          </div>
        </div>
        <div className="divider">
        </div>
        <div className="info-holder">
          <img src={info} className="App-info" alt="info" />
        </div>
      </div>
      <div className="bg">
        <img src={test} className="App-bg" alt="bg" />
      </div>
    </div>
  )
}

const Divider = () => {
  return (
    <div className="App-divider"></div>
  )
}

const Profiles = () => {
  return (
    <div className="profiles">
      <div className="profiles-description">
        Create custom profiles
      </div>
      <div className="profiles-info">
        Easily allow devs to spin up profile defined EC2 instances to test, demo, experiment, etc by setting profiles such as: 
      </div>
      <div className="profile-data">
        <div className="all-profiles">
          <div className="profile">
            <img src={dev} className="dev-icon" />
            <div className="profile-text">
              development
            </div>
          </div>
          <div className="profile">
            <img src={ds} className="dev-icon" />
            <div className="profile-text">
              data science
            </div>
          </div>
          <div className="profile">
            <img src={demo} className="dev-icon" />
            <div className="profile-text">
              demo
            </div>
          </div>
          <div className="profile">
            <img src={testing} className="dev-icon" />
            <div className="profile-text">
              testing
            </div>
          </div>
          <div className="profile">
            <div className="profile-text-last">
              and many more!
            </div>
          </div>
        </div>
        <div className="profile-img">
          <img src={vector} className="profile-icon-img" />
        </div>
      </div>
    </div>
  )
}

const Slack = () => {
  return (
    <div className="slack">
      <div className="slack-title">
        <div className="slack-description">
          All connected through Slack
          <img src={slack} className="slack-logo" alt="logo" />
        </div>
      </div>
      <div className="profiles-info">
        Features include seeing all running instances, daily/weekly/monthly cost analysis, user limits, available instance time windows, and many more!
      </div>
      <div className="breakdown">
        <img src={breakdown} className="breakdown-img" />
      </div>
    </div>
  )
}

const Interested = () => {
  return (
    <div className="interest">
      <div className="slack-description">
        Interested?
      </div>
      <div className="profiles-info">
        Sign up now to get notified when Islands gets released and recieve up to a <b>50% discount</b> when it does 💰!
      </div>
      <div className="subscribe">
        <form>
          <input id="email" className="email" placeholder="Your Email Address..." type="text" name="name" />
          <input className="email-submit" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}

function App() {

  return (
    <div className="App">
      <Header />
      <Description />
      <Divider />
      <Profiles/>
      <Divider />
      <Slack />
      <Divider />
      <Interested />
    </div>
  );
}

export default App;
