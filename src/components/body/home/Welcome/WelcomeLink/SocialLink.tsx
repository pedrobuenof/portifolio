import './WelcomeLink.css'

interface SocialLinksProps{
  linkHref: string;
  customClassNameA: string;
  customClassNameDiv: string;
  customClassNameImg: string;
  linkSrcImg: string;
  altImg: string;
  spanText: string
}

export default function SocialLink(props: SocialLinksProps) {
  return (
    <a className={props.customClassNameA} href={props.linkHref}>
      <div className={props.customClassNameDiv}>
        <img className={props.customClassNameImg} src={props.linkSrcImg} alt={props.altImg}/>
        <span>{props.spanText}</span>
      </div>
    </a>
  )
}