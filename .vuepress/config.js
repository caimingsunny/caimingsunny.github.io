module.exports = {
  "title": "CAI Mingqing",
  "description": "",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [{
      "text": "Home",
      "link": "/",
      "icon": "reco-home"
    },
    {
      "text": "TimeLine",
      "link": "/timeline/",
      "icon": "reco-date"
    },/*
    {
      "text": "Docs",
      "icon": "reco-message",
      "items": [{
        "text": "vuepress-reco",
        "link": "/docs/theme-reco/"
      }]
    },*/
    {
      "text": "Contact",
      "icon": "reco-message",
      "items": [{
        "text": "GitHub",
        "link": "https://github.com/caimingsunny",
        "icon": "reco-github"
      }]
    }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [{
      "title": "LU Xinbo",
      "desc": "Final Year Undergraduate Student in HKUST majoring in Computer Science",
      "email": "xluap@connect.ust.hk",
      "link": "https://github.com/lxb007981"
    },
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "CAI Mingqing",
    "authorAvatar": "/avatar.png",
    "startYear": "2021"
  },
  "markdown": {
    "lineNumbers": true
  },
  "noFoundPageByTencent": false
}