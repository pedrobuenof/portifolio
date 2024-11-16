import WelcomeText from './WelcomeText/WelcomeText'
import WelcomeLinks from './WelcomeLink/WelcomeLinks'
import { useMediaQuery } from 'react-responsive'
import './Welcome.css'

export default function Welcome() {
  const isDesktop = useMediaQuery({ minWidth: 768 })

  return (
    <>
      {isDesktop ? (
        <div className="welcome-content-desktop">
          <div className="welcome-first-content-desktop">
            <WelcomeText />
            <WelcomeLinks />
          </div>

          <div className="welcome-second-content-desktop">
            <img
              className="img-principal-desktop"
              src="./img/4200_3_03.jpg"
              alt=""
            />
          </div>
        </div>
      ) : (
        <div className="welcome-content-mobile">
          <div className="welcome-first-content-mobile">
            <WelcomeText />
            <WelcomeLinks />
          </div>

          <div className="welcome-second-content-mobile">
            <img
              className="img-principal-mobile"
              src="../../../../../public/4200_3_03.jpg"
              alt=""
            />
          </div>
        </div>
      )}
    </>
  )
}
