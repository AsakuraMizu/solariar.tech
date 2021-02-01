import SibotImg from '../assets/sibot.png';
import PhiXImg from '../assets/phix.jpg';

import type { ProjectsData } from './type';

const projects: ProjectsData = {
  mergeig: {
    name: 'Merge Igallta',
    star: 'https://img.shields.io/github/stars/AsakuraMizu/MergeIgallta?style=social',
    desc: '合成Igallta',
    url: 'https://github.com/AsakuraMizu/MergeIgallta',
    devs: {
      water_lift: {
        name: 'Asakura Mizu',
      },
    },
  },
  phix: {
    name: 'PhiX Project',
    desc: 'Phigros Fanmade Project',
    coop: true,
    img: PhiXImg,
    url: 'https://github.com/phi-x',
    devs: {
      water_lift: {
        name: 'Asakura Mizu',
      },
      za: {
        name: 'ZeroAurora',
      },
    },
    teams: {
      phix: {
        name: 'PhiX Dev Team',
        url: 'https://github.com/phi-x',
      },
    },
  },
  sibot: {
    name: 'SiGNAL',
    star: 'https://img.shields.io/github/stars/AsakuraMizu/SiGNAL?style=social',
    desc: 'A QQ bot.',
    img: SibotImg,
    url: 'https://github.com/AsakuraMizu/SiGNAL',
    devs: {
      water_lift: {
        name: 'Asakura Mizu',
      },
    },
  },
};

export default projects;
