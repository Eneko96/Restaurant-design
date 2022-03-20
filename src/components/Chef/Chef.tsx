import SubHeading from "../SubHeading/Subheading";
import { images } from "../../constants";

export default function Chef() {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt='chef' />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className="headtext_cormorant">What We Believe In</h1>
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt='quote' />
            <p className="p__opensans">lorem neio bnfoeabfeiobf eruifgoe foiub ioweb feiwofbwafoi</p>
          </div>
          <p className="p__opensans">nesioesnfvioerbfv eiufbvesr uivrbvriobvrsiovbr viore bvsio vbrov nriovr nsvion vri vorsv</p>
        </div>
        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  )
}