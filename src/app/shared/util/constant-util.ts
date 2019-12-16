export const DEFAULT_APP_CONFIG = {
  "name": "Know My People",
  "organization": "KnowMyPeople",
  "version": "0.0.1",
  "authorities": [
    "ROLE_ADMIN",
    "ROLE_AGENT",
    "ROLE_DIST"
  ],
  "mode": "qe",
  "default-menu-id":"settings",
  "default-lang": "en",
  "menus": [
    {
      "id": "voters",
      "title": "VOTERS",
      "url": "/voters",
      "direct": "forward",
      "icon": "people",
      "active": false,
      "authorities": [
        "ROLE_ADMIN",
        "ROLE_AGENT"
      ]
    },
    {
      "id": "about",
      "title": "ABOUT",
      "url": "/about",
      "direct": "forward",
      "icon": "information-circle-outline",
      "active": false,
      "authorities": [
        "ROLE_ADMIN",
        "ROLE_AGENT"
      ]
    },
    {
      "id": "settings",
      "title": "SETTINGS",
      "url": "/settings",
      "direct": "root",
      "icon": "cog",
      "active": false,
      "authorities": [
        "ROLE_ADMIN",
        "ROLE_AGENT"
      ]
    }
  ],
  "servers": {
    "prod": "https://knowmypeople.com",
    "qe": "https://knowmypeople.com",
    "dev": "http://localhost"
  },
  "links": {
    "instagram": "https://www.instagram.com/",
    "facebook": "https://www.facebook.com/",
    "twitter": "https://twitter.com/",
    "website": "https://knowmypeople.com/",
    "whatsapp": "https://www.whatsapp.com/"
  },
  "about": {
    "title": "Know My App",
    "image": "assets/img/ionic4start-ico.png",
    "contents": [
        "The New Android Mobile App called 'Know My People' App provides estimated Voter's turnout in the real-time basis for every Citizen. Earlier, this used to be announced at the end of the Poll.",
        "The Election Commission of India for the first has launched a new application for giving live information to everybody about the estimated voter turnout during the poll. The application captures the real-time information from the data inputted by the Returning Officers and calculates the estimated totals and displays in the user-friendly android mobile application. The application is called as ‘Voter Turnout’ application.",
        "The application is designed to show the Estimated Voter Turnout for each State which can further be drilled down to Parliamentary"
    ]
  },
  "privacy": {}
};

export const LOGIN_BACKGROUNDS = [
  'assets/img/background/background-1.png',
  'assets/img/background/background-2.png',
  'assets/img/background/background-3.png'
];

export const SIGNUP_BACKGROUNDS = [
  'assets/img/background/background-5.png',
  'assets/img/background/background-6.png',
  'assets/img/background/background-7.png'
];

export const FORGOT_PASSWORD_BACKGROUNDS = [
  'assets/img/background/background-3.png',
  'assets/img/background/background-7.png',
  'assets/img/background/background-5.png'
];
