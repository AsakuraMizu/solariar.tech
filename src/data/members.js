import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';

var Data = [
  {
    "key": "waterlift",
    "name": "water_lift",
    "describe": "qwq",
    "avatar": "https://cdn.jsdelivr.net/gh/water-lift/cloud@latest/img/wl.png",
    "links": [
      {
        "key": "blog",
        "name": "Blog",
        "link": "https://blog.solariar.tech/"
      },
      {
        "key": "github",
        "name": "Github",
        "link": "https://github.com/water-lift/",
        "icon": <GitHubIcon />
      }
    ],
    "tags": [
      {
        "key": "owner",
        "name": "Owner",
        "color": "primary"
      },
      {
        "key": "dev",
        "name": "Developer"
      }
    ]
  }
];

export default Data;
