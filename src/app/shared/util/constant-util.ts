export const DEFAULT_APP_CONFIG = {
  name: 'Know My People Local',
  organization: 'KnowMyPeople',
  version: '0.0.1',
  menus: [
    {
      title: 'Voters',
      url: '/voters',
      direct: 'root',
      icon: 'people',
      active: false,
      roles: ['ROLE_ADMIN', 'ROLE_AGENT']
    },
    {
      title: 'About',
      url: '/about',
      direct: 'forward',
      icon: 'information-circle-outline',
      active: false,
      roles: ['ROLE_ADMIN', 'ROLE_AGENT']
    },

    {
      title: 'Settings',
      url: '/settings',
      direct: 'forward',
      icon: 'cog',
      active: false,
      roles: ['ROLE_ADMIN', 'ROLE_AGENT']
    }
  ],
  servers: {
    prod: 'https://knowmypeople.com',
    qe: 'https://knowmypeople.com',
    dev: 'http://localhost'
  },
  links: {
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
    twitter: 'https://twitter.com/',
    website: 'https://knowmypeople.com/',
    whatsapp: 'https://www.whatsapp.com/'
  },
  about: {

  },
  privacy: {
    
  }
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
