export const SocialIcon = ( props ) => {
  let icon;
  switch (props.platform) {
    case 'twitter':
      icon = "lab la-twitter";
      break;
    case 'twitch':
      icon = "lab la-twitch";
      break;
    case 'instagram':
      icon = "lab la-instagram";
      break;
    case 'youtube':
      icon = "lab la-youtube";
      break;
  }

  return (
    <i className={icon}></i>
  )
}