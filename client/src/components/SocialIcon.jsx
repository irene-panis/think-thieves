export const SocialIcon = ( platform ) => {
  let icon;
  switch (platform) {
    case 'twitter':
      icon = "lab la-twitter";
      break;
    case 'stream':
      icon = "lab la-twitch";
      break;
  }

  return (
    <i className={icon}></i>
  )
}