import SocialLink from './SocialLink'
import './WelcomeLink.css'

export default function WelcomeLinks() {
  return (
    <div className="welcome-links-container">
      <div className="social-links-container">
        <SocialLink
          customClassNameA="linkedin"
          customClassNameDiv="linkedin-content"
          customClassNameImg="border-white"
          linkHref="https://www.linkedin.com/in/pedro-bueno-956910230/"
          linkSrcImg="../../../../../../public/linkedin.png"
          altImg="Logo Linkedin"
          spanText="Linkedin"
        />

        <SocialLink
          customClassNameA="github"
          customClassNameDiv="github-content"
          customClassNameImg="border-white"
          linkHref="https://github.com/pedrobuenof"
          linkSrcImg="../../../../../../public/github.png"
          altImg="Logo Github"
          spanText="Github"
        />
      </div>
    </div>
  )
}
