import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Web from '@material-ui/icons/Web';

import WlAvatar from '../assets/wl.png';

import type { MembersData } from './type';

const members: MembersData = {
  water_lift: {
    name: 'Asakura Mizu',
    desc: 'a.k.a. water_lift',
    avatar: WlAvatar,
    links: {
      blog: {
        name: 'Blog',
        url: 'https://blog.solariar.tech',
        icon: Web,
      },
      gh: {
        name: 'GitHub',
        url: 'https://github.com/AsakuraMizu',
        icon: GitHubIcon,
      },
      email: {
        name: 'Email',
        url: 'mailto:0xWATERx0@gmail.com',
        icon: EmailIcon,
      },
      tg: {
        name: 'Telegram',
        url: 'https://t.me/water_lift',
        icon: TelegramIcon,
      },
      tweet: {
        name: 'Twitter',
        url: 'https://twitter.com/water_lift',
        icon: TwitterIcon,
      },
    },
    tags: {
      owner: {
        name: 'Owner',
        color: 'primary',
      },
      developer: {
        name: 'Developer',
      },
    },
  },
};

export default members;
