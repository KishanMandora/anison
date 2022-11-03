const express = require("express");
const app = express();
const port = 3000;

const data = [
  {
    id: "OEZdKA9nffo",
    title: "[AMV] Naruto Shippuden - Samidare (ksolis Trap Remix)",
    channelName: "ksolis",
    channelId: "UCxIf84dVSW2lAiBmCLzQe1Q",
    duration: "2 min 52 sec",
    views: "38346082",
    likes: "728869",
    thumbnails: {
      default: "https://i.ytimg.com/vi/OEZdKA9nffo/default.jpg",
      medium: "https://i.ytimg.com/vi/OEZdKA9nffo/mqdefault.jpg",
      high: "https://i.ytimg.com/vi/OEZdKA9nffo/hqdefault.jpg",
      standard: "https://i.ytimg.com/vi/OEZdKA9nffo/sddefault.jpg",
      max: "https://i.ytimg.com/vi/OEZdKA9nffo/maxresdefault.jpg",
    },
    description:
      "FREE DOWNLOAD: https://www.toneden.io/ksoliss/post/naruto-shippuden-samidare-ksolis-trap-remix-\n\nSupport me: https://www.paypal.me/ksoliss\nSoundcloud: https://soundcloud.com/k-solis\nPartner with BBTV: http://bbtv.go2cloud.org/SH13Z\nksolis MERCHANDISE: http://shop.spreadshirt.com/ksolis/\n\n\n\n\n[AMV] Naruto Shippuden OST- Samidare (Early Summer Rain) [ksolis Trap Remix]\nYamagsumi",
    comments: [
      {
        commentId: "UggEvAFfNezpwngCoAEC",
        comment:
          "This is amazing \nI know it probably took you long to make it \nSo good job man",
        commenter: "Souryuu Asuka Langley",
      },
      {
        commentId: "UgxIA0MWKO3FnqCzfNF4AaABAg",
        comment:
          "To the future generations, please dont let this legendary series die!",
        commenter: "Todoroki Shouto",
      },
      {
        commentId: "Ugyvzbo9EJ_5Pg-3LPZ4AaABAg",
        comment:
          '"Appreciate everything around you before they turn into memories"\n                                            ~Pervy sage',
        commenter: "C.C.",
      },
      {
        commentId: "UgzKUkJzHN8DATFbaLN4AaABAg",
        comment: "No One Should Ever Let This Masterpiece Ever Die😔",
        commenter: "Son Gokuu",
      },
      {
        commentId: "UgwDZsroGiorOEZHs4p4AaABAg",
        comment: "This isnt just a music, its emotion and memory for me.",
        commenter: "Midoriya Izuku",
      },
    ],
    animeId: "anime_naruto",
    anime: "Naruto",
    channelLink: "https://www.youtube.com/channel/UCxIf84dVSW2lAiBmCLzQe1Q",
    channelImage: {
      default:
        "https://yt3.ggpht.com/ytc/AMLnZu-GrtUmhAwBZerCbfm9CyZkdSVsDErShGrxWx_S=s88-c-k-c0x00ffffff-no-rj-mo",
      medium:
        "https://yt3.ggpht.com/ytc/AMLnZu-GrtUmhAwBZerCbfm9CyZkdSVsDErShGrxWx_S=s480-c-k-c0x00ffffff-no-rj-mo",
    },
    likeStr: "729K",
    viewStr: "38M",
    hash: "UEIh1}F?00Mg4rD*~Ukp00$*^koxf{-:4:ra",
  },
  {
    id: "6u5GK11Yt7Q",
    title: "Tokyo Revengers Opening (Full) -Cry Baby- Lyrics",
    channelName: "ZEN",
    channelId: "UChMs3wfRBLDhbIGTZ0fKkRw",
    duration: "4 min 38 sec",
    views: "38154226",
    likes: "502163",
    thumbnails: {
      default: "https://i.ytimg.com/vi/6u5GK11Yt7Q/default.jpg",
      medium: "https://i.ytimg.com/vi/6u5GK11Yt7Q/mqdefault.jpg",
      high: "https://i.ytimg.com/vi/6u5GK11Yt7Q/hqdefault.jpg",
      standard: "https://i.ytimg.com/vi/6u5GK11Yt7Q/sddefault.jpg",
      max: "https://i.ytimg.com/vi/6u5GK11Yt7Q/maxresdefault.jpg",
    },
    description:
      "Anime : Tokyo Revengers\nSong : Cry Baby by Official HIGE DANdism\n\n[Credit]\nLyrics : \nDreamsland Lyrics\n@Save me\naisuru nihongo\n\nArtwork/Thumbnail : https://www.pixiv.net/en/artworks/89380420\n\n《Copyright: Be aware this channel is only for promotion purpose. All music belongs to the original creators.》",
    comments: [
      {
        commentId: "Ugw7h8OmR3IHpBex-BZ4AaABAg",
        comment: "'' cry baby '' is voted as the best opening of spring 2021",
        commenter: "Franky",
      },
      {
        commentId: "UgwROCokl_a8tgJGpcN4AaABAg",
        comment:
          "It already sounds fucking nostalgic. Imagine hearing this after 10 years. The tears 🥲\nEDIT: Thanks for the likes! ❤️",
        commenter: "Greed",
      },
      {
        commentId: "UgyZDpVRiWULZlrQ0TJ4AaABAg",
        comment:
          "At first I thought this song was kind of normal but after reading the manga I just understand this song more. It's so emotional I could cry. Takemichi's efforts to save everyone, the sadness of Mikey, all the characters who deserved better... I attached myself to them so much in such a short time. Please if you haven't read the manga, go. It's a masterpiece",
        commenter: "Stadtfeld Kallen",
      },
      {
        commentId: "Ugw4kts0g6pU5-zJsoB4AaABAg",
        comment:
          '"Oi, Manjiro!!! Just say it once, just say “please help me”, damn it!!! And I’ll definitely come to save you!"\n             - Takemitchi to Mikey',
        commenter: "Harima Kenji",
      },
      {
        commentId: "UgzDzm-836JV_vgzkcF4AaABAg",
        comment:
          "ЭТО ЛУЧШИЙ ОППЕНИНГ КОТОРЫЙ Я СЛЫШАЛА😭😭😭, И Аот это прелесть",
        commenter: "Wong Hau Pepelu Tivrusky IV Edward",
      },
    ],
    animeId: "anime_demon_slayer",
    anime: "Demon Slayer",
    channelLink: "https://www.youtube.com/channel/UChMs3wfRBLDhbIGTZ0fKkRw",
    channelImage: {
      default:
        "https://yt3.ggpht.com/lmGNqeYzBtmplvrP_6wqBFtfvPNhQfNds6XKj3QrjfcJxczRj3YIHkWS-TRfY0cfvshQ2heTlg=s88-c-k-c0x00ffffff-no-rj",
      medium:
        "https://yt3.ggpht.com/lmGNqeYzBtmplvrP_6wqBFtfvPNhQfNds6XKj3QrjfcJxczRj3YIHkWS-TRfY0cfvshQ2heTlg=s480-c-k-c0x00ffffff-no-rj",
    },
    likeStr: "502K",
    viewStr: "38M",
    hash: "UALg;JxZ?b%hL}s:NI?v00ogM{RkPXogM{4n",
  },
  {
    id: "5CCO5JzFtCc",
    title: "DRAGON BALL SUPER Ultra Instinct (OFFICIAL TRAP REMIX)",
    channelName: "TRAP MUSIC NOW",
    channelId: "UCi2bIyFtz-JdI-ou8kaqsqg",
    duration: "3 min 17 sec",
    views: "32868276",
    likes: "519930",
    thumbnails: {
      default: "https://i.ytimg.com/vi/5CCO5JzFtCc/default.jpg",
      medium: "https://i.ytimg.com/vi/5CCO5JzFtCc/mqdefault.jpg",
      high: "https://i.ytimg.com/vi/5CCO5JzFtCc/hqdefault.jpg",
      standard: "https://i.ytimg.com/vi/5CCO5JzFtCc/sddefault.jpg",
      max: "https://i.ytimg.com/vi/5CCO5JzFtCc/maxresdefault.jpg",
    },
    description:
      "🤟 DRAGON BALL SUPER Ultra Instinct (OFFICIAL TRAP REMIX)\n👍 SUBSCRIBE: http://smarturl.it/TN\n👕 TMN MERCH: http://smarturl.it/TMNShop\n✨ SPOTIFY: http://smarturl.it/TMNSPOTIFY\n\n🎵 TrackGonEat\nhttp://www.beatdemons.com\nhttps://twitter.com/TrackGonEat\nhttps://soundcloud.com/trackgoneat\nhttps://instagram.com/TrackGonEat\n\n⚡ TRAP MUSIC NOW\nSubscribe: http://smarturl.it/TN\nOfficial: http://smarturl.it/TMNOFFICIAL\nTMN Merch: http://smarturl.it/TMNShop\nSpotify: http://smarturl.it/TMNSPOTIFY\nTwitter: http://smarturl.it/TMNTW\nInstagram: http://smarturl.it/TMNIG\nSoundcloud: http://smarturl.it/TMNSC\nFacebook: http://smarturl.it/TMNFBK\n\n🎮 KILLJOY\nSubscribe: http://smarturl.it/GVYT\nTwitch: http://smarturl.it/GVLive\nTwitter: http://smarturl.it/GVTW\nFacebook: http://smarturl.it/GVFBK\nInstagram: http://smarturl.it/GVIG\n\n⚠️ Wallpaper published under Creative Commons Zero\n\n🚫 The music in the video is not free to use, if you'd like to use the music in this video, please contact the artist or rights-holder. For more information regarding promotion or label releases, email us through our contact page.\n\n#trap #trapmusic #trapremix #trapremixes #trapmusicnow #bassboost",
    comments: [
      {
        commentId: "UgxfkAURGbthLWuZ0Bp4AaABAg",
        comment: "KAMEHAHAHAHAAAAAAAAAAAAAAAA",
        commenter: "Lamperouge Lelouch",
      },
      {
        commentId: "UgxE0aEsXk46lensuGx4AaABAg",
        comment:
          "If you can like this without thinking then you have ultra instinct",
        commenter: "Levi",
      },
      {
        commentId: "UgyyclrP_c6aceD-hQl4AaABAg",
        comment:
          "Ultra instinct theme is one of the best theme ever created in anime history.",
        commenter: "Monkey D. Luffy",
      },
      {
        commentId: "UgxLEfZB-P4G5bnd6jx4AaABAg",
        comment: "Beat drops harder than my nightmares",
        commenter: "Lawliet L",
      },
      {
        commentId: "Ugwq_XAxQvv-MDVP-8x4AaABAg",
        comment: "The intensity is in the air, this truly is, ULTRA INSTINCT!",
        commenter: "Roronoa Zoro",
      },
    ],
    animeId: "anime_dragon_ball",
    anime: "Dragon Ball",
    channelLink: "https://www.youtube.com/channel/UCi2bIyFtz-JdI-ou8kaqsqg",
    channelImage: {
      default:
        "https://yt3.ggpht.com/JXYD1M-TEcycFVqJN7WbR_gwCwlD9BYhcSQ7Bax9pWw6mFKJcBDDFh2EFLguxWDz2qjJAdOiOw=s88-c-k-c0x00ffffff-no-rj",
      medium:
        "https://yt3.ggpht.com/JXYD1M-TEcycFVqJN7WbR_gwCwlD9BYhcSQ7Bax9pWw6mFKJcBDDFh2EFLguxWDz2qjJAdOiOw=s480-c-k-c0x00ffffff-no-rj",
    },
    likeStr: "520K",
    viewStr: "33M",
    hash: "U9C?pMju#JbH}$fQ%3j[00a{bmja0Oj[5kay",
  },
  {
    id: "rTJjtSP-ORc",
    title: "The Promised Neverland OST - Isabella’s Lullaby",
    channelName: "Lindea",
    channelId: "UCKuKvx1YspXlZ9UETNyk5rw",
    duration: "5 min 24 sec",
    views: "28858627",
    likes: "621494",
    thumbnails: {
      default: "https://i.ytimg.com/vi/rTJjtSP-ORc/default.jpg",
      medium: "https://i.ytimg.com/vi/rTJjtSP-ORc/mqdefault.jpg",
      high: "https://i.ytimg.com/vi/rTJjtSP-ORc/hqdefault.jpg",
      standard: "https://i.ytimg.com/vi/rTJjtSP-ORc/sddefault.jpg",
      max: "https://i.ytimg.com/vi/rTJjtSP-ORc/maxresdefault.jpg",
    },
    description:
      "🎶 Listen Our Peaceful Anime OST Collection on Spotify : https://open.spotify.com/playlist/1Zlw4zdWLNEB50wxXER36j?si=ba98f092b7974290\n\nIsabella’s Lullaby (Extended)\nComposed by Takahiro Obata\n\nWallpaper: https://static.zerochan.net/Yakusoku.no.Neverland.full.2265785.jpg\n\nYakusoku no neverland OST Isabella's theme",
    comments: [
      {
        commentId: "UgxYzpkW0yF6XWQKkR94AaABAg",
        comment:
          "This is one of the many cases where anime ost's are quite literally orchestral masterpieces",
        commenter: "Kakyouin Noriaki",
      },
      {
        commentId: "Ugx0OLgLgK2LTqqv0Lt4AaABAg",
        comment:
          "Imagine raising children with so much love, watching them smile and play, knowing that you're going to have to lead them to their death one day ༎ຶ‿༎ຶ",
        commenter: "Amane Misa",
      },
      {
        commentId: "UgxKW4xqiOvAQgiMe1V4AaABAg",
        comment:
          "If this shit doesn’t play at my funeral and the priest doesn’t say “She’s off to The Promised Neverland” then I’m not dying",
        commenter: "Shanks",
      },
      {
        commentId: "UgxHUZGHT1JpcevCS0N4AaABAg",
        comment:
          "This song hits different when you actually know the meaning behind it. If you listen closely, one of the sentences where she is humming actually sounds like  \"Find your own strength please, my dear run away.\" So Isabella probably knew about their plan of escaping. And did her best to act like she didn't know. Even at the end of season 1 she let's  them escapce.",
        commenter: "Nakano Yotsuba",
      },
      {
        commentId: "Ugwa3DsJvMD3jRZQttN4AaABAg",
        comment:
          '"Ray, how do you know that song?"\nRay: *Smiles* "Mom, why did you have me?"\nIsabella: "To live longer than the rest"\n\nTHAT SCENE HIT HARD\n\nEdit: Mom I\'m famous\nEdit 2: Tysm for the likes',
        commenter: "Satou Tatsuhiro",
      },
    ],
    animeId: "anime_demon_slayer",
    anime: "Demon Slayer",
    channelLink: "https://www.youtube.com/channel/UCKuKvx1YspXlZ9UETNyk5rw",
    channelImage: {
      default:
        "https://yt3.ggpht.com/ytc/AMLnZu-VyDBk-cgJ-4CoyywaO4OsmVlHCRoiBuSKAd09=s88-c-k-c0x00ffffff-no-rj",
      medium:
        "https://yt3.ggpht.com/ytc/AMLnZu-VyDBk-cgJ-4CoyywaO4OsmVlHCRoiBuSKAd09=s480-c-k-c0x00ffffff-no-rj",
    },
    likeStr: "621K",
    viewStr: "29M",
    hash: "UDEDL+xt00NcCmso;0S400M|_1xZ*xNHFzsm",
  },
  {
    id: "BpcOxoqleAU",
    title: "Ultra Instinct OST - EPIC VERSION [身勝手の極意]",
    channelName: "Dragon Ball Epic",
    channelId: "UCGVI6H-NnNzgPWPFcrJyFvw",
    duration: "3 min 14 sec",
    views: "14830385",
    likes: "280744",
    thumbnails: {
      default: "https://i.ytimg.com/vi/BpcOxoqleAU/default.jpg",
      medium: "https://i.ytimg.com/vi/BpcOxoqleAU/mqdefault.jpg",
      high: "https://i.ytimg.com/vi/BpcOxoqleAU/hqdefault.jpg",
      standard: "https://i.ytimg.com/vi/BpcOxoqleAU/sddefault.jpg",
      max: "",
    },
    description:
      "SONG ON SOUNDCLOUD 🔊🔊\nhttps://soundcloud.com/user-241123070/ultra-instinct-ost-epic-version\n\n-----------\nWelcome to another EPIC OST MIX video; it's time to get Ultra Instinct again & surpass every limit, in this blood-pumping EPIC VERSION [身勝手の極意]. Feat. Aviand & Unkos Channel. \n------------------------\n\nHope you'll enjoy this Epic MIX, here it is the tracklist:\n\n1)  Dragon Ball Super - Ultimate Battle (Sad Version) \nhttps://www.youtube.com/watch?v=154UdBuEiec\n\nBe sure to  check out  the UNKOS CHANNEL, plenty of amazing stuff there! \nhttps://www.youtube.com/channel/UCQwNbzht-3kfRuaEA00w6Fw\n\n\n2) MASTERED Ultra Instinct Theme  Clash of Gods  Dragon Ball Super 129 OST Hybrid Orchestra - by AVIAND! \nhttps://www.youtube.com/watch?v=2zA46tkVtw8\n\nBe sure to check out AVIAND's Channel and his Hybrid Orchestra compositions, you won't regret it! \nhttps://www.youtube.com/channel/UCMY4yO-U4TcsWaXCdQ04O3A\n\n3) Clash of Gods, Official Theme\n\n------------------------------------------------------------------------------\n\nThumbnail\nhttps://twitter.com/_Oth_Z/status/1085007590860443648?s=20\n------------------------------------\n\nHope you'll enjoy this video!\nIf you want to, comment below, like, let me know what do you think about it and what would you like to see in the future!\n\nGrazie e....Arigutou :D \n\nDragon Ball Italy -----------------------------",
    comments: [
      {
        commentId: "UgzcB4QUVkTo4p6M7It4AaABAg",
        comment:
          "Just to be clear. \nSome people went to AVIAND's channel, claiming that he was not the original author of parts of the song you hear.\nBut HE IS!  I'm MIXING up existing tracks in a way that i find more Epic-Powerful, and that's the same for every Epic Ost Mix!\nBUT i'm not the original AUTHOR of the Music you can hear in this video, in this case, UNKOS CHANNEL & AVIAND are!\n\nAlways be sure to read credits in description & go support the original authors too! :D",
        commenter: "Ackerman Mikasa",
      },
      {
        commentId: "UgzUZN0c6hQKG1O_INd4AaABAg",
        comment: "0:42 gives me goosebumps every time",
        commenter: "Hikigaya Hachiman",
      },
      {
        commentId: "UgyefHlzP6gNo3fZH0J4AaABAg",
        comment:
          "Its all fun and games until your cat hears this and becomes lord beerus",
        commenter: "Kaneki Ken",
      },
      {
        commentId: "UgwR_-NQ7vP00GYdb6p4AaABAg",
        comment:
          "From a child\nTo a Martial Artist \nFrom a Martial Artist \nTo a Hero \nFrom a hero\nTo a Legend\nFrom a Legend\nTo a God\nNow he is BEYOND the power of the god \nHe is...\n\n\n\n\n\n*S O N G O K U*",
        commenter: "Gojou Satoru",
      },
      {
        commentId: "Ugyh4qcCTi9FUI5P6at4AaABAg",
        comment:
          "**My battery 1%**\nMe: listening to this\nMy battery: *I'll wait*",
        commenter: "Saitama",
      },
    ],
    animeId: "anime_dragon_ball",
    anime: "Dragon Ball",
    channelLink: "https://www.youtube.com/channel/UCGVI6H-NnNzgPWPFcrJyFvw",
    channelImage: {
      default:
        "https://yt3.ggpht.com/ytc/AMLnZu8Qoyzg-TXj7GdQ0aoU7lYILBvab3eb6Wz-d1Nntg=s88-c-k-c0x00ffffff-no-rj",
      medium:
        "https://yt3.ggpht.com/ytc/AMLnZu8Qoyzg-TXj7GdQ0aoU7lYILBvab3eb6Wz-d1Nntg=s480-c-k-c0x00ffffff-no-rj",
    },
    likeStr: "281K",
    viewStr: "15M",
    hash: "UCLXlI00?vyF55E1IAR*00?cM|VX~q?b^+%1",
  },
  {
    id: "7DNWHMqchBM",
    title: 'Naruto - "Wind" Trap Remix',
    channelName: "TrapMusicHDTV",
    channelId: "UCaB_KyYOjfNHBm0f-TvBmiw",
    duration: "3 min 32 sec",
    views: "14263977",
    likes: "194697",
    thumbnails: {
      default: "https://i.ytimg.com/vi/7DNWHMqchBM/default.jpg",
      medium: "https://i.ytimg.com/vi/7DNWHMqchBM/mqdefault.jpg",
      high: "https://i.ytimg.com/vi/7DNWHMqchBM/hqdefault.jpg",
      standard: "https://i.ytimg.com/vi/7DNWHMqchBM/sddefault.jpg",
      max: "https://i.ytimg.com/vi/7DNWHMqchBM/maxresdefault.jpg",
    },
    description:
      "Naruto - \"Wind\" Trap Remix\nRemixed by TrackGonEat\n\n🎧 Follow TrapMusicHD 🎧\nFacebook: https://www.facebook.com/TrapMusicHD\nTwitter: https://twitter.com/TrapMusicHD\nSoundcloud: https://soundcloud.com/trapmusichd\nInstagram: http://instagram.com/trapmusichdtv\nVK: http://vk.com/trapmusichdtv\nSnapchat: TrapMusicHD\nMusical.ly: TrapMusicHD\n\n💎 Follow TrackGonEat 💎\nYoutube: https://www.youtube.com/LightSkinJedi\nSoundcloud: https://soundcloud.com/trackgoneat\nInstagram: https://www.instagram.com/TrackGonEat\n\nArtwork by CTiahao:\nArtstation: https://www.artstation.com/artist/ctiahao\n\n🎶 HD Family 🎶\nRapMusicHD: https://goo.gl/J1Noub\nBassMusicHD: https://goo.gl/0RN70B\nChillMusicHD: https://goo.gl/EXAoAh\nHouseMusicHD: https://goo.gl/l51Abz\nEDMMusicHD: https://goo.gl/iGNNwY\nGanjaMusicHD: https://goo.gl/fXdWrL\n\nAll 'Sunday - Funday' uploads: https://goo.gl/G4KK1d\n\n✅ All Copyright free music playlist: http://goo.gl/lo248y",
    comments: [
      {
        commentId: "Ugw-NkzTsyHNFO7szzd4AaABAg",
        comment:
          "75 % Naruto fans \n10 % Hinata husband fans \n10 % Minato sons fans\n  5  % Boruto fathers fans",
        commenter: "Kageyama Shigeo",
      },
      {
        commentId: "Ugxwh9eNfqWyjcPt7tx4AaABAg",
        comment:
          "How much chakra did you spend to create this Ultimate Masterpiece?",
        commenter: "Saiki Kusuo",
      },
      {
        commentId: "UgyR1F4_F56zQyc5EJV4AaABAg",
        comment:
          "Sharigan is red\nRasengan is blue\nIf you dont get nostalgia from this\nI will summon kurama on you.",
        commenter: "Liebert Johan",
      },
      {
        commentId: "UgwIn_N0qaszhXy7ejB4AaABAg",
        comment: "the nostalgia hits harder than your dads belt.",
        commenter: "Ishigami Yuu",
      },
      {
        commentId: "UgxPhJcLm4hf3FUkfs94AaABAg",
        comment: "Who’s Still Listening To This In 2020?",
        commenter: "Kitagawa Marin",
      },
    ],
    animeId: "anime_naruto",
    anime: "Naruto",
    channelLink: "https://www.youtube.com/channel/UCaB_KyYOjfNHBm0f-TvBmiw",
    channelImage: {
      default:
        "https://yt3.ggpht.com/ytc/AMLnZu9It2dotTOu-QQi_3vQeDfmfVw6t0U2a8qvglUfqQ=s88-c-k-c0x00ffffff-no-rj",
      medium:
        "https://yt3.ggpht.com/ytc/AMLnZu9It2dotTOu-QQi_3vQeDfmfVw6t0U2a8qvglUfqQ=s480-c-k-c0x00ffffff-no-rj",
    },
    likeStr: "195K",
    viewStr: "14M",
    hash: "UTHULgOv9H-4~WxvRlM{0JxU%LI=4.M{oyxt",
  },
  {
    id: "rL2IBrwgLIo",
    title:
      "Dragon Ball Super - Ultra Instinct Remix | [Clash of the Gods] | Hip Hop/Trap | (Musicality Remix)",
    channelName: "Musicality",
    channelId: "UCugVYo6tK-51zscboSgSXNg",
    duration: "4 min 23 sec",
    views: "11941756",
    likes: "182549",
    thumbnails: {
      default: "https://i.ytimg.com/vi/rL2IBrwgLIo/default.jpg",
      medium: "https://i.ytimg.com/vi/rL2IBrwgLIo/mqdefault.jpg",
      high: "https://i.ytimg.com/vi/rL2IBrwgLIo/hqdefault.jpg",
      standard: "https://i.ytimg.com/vi/rL2IBrwgLIo/sddefault.jpg",
      max: "https://i.ytimg.com/vi/rL2IBrwgLIo/maxresdefault.jpg",
    },
    description:
      '*REQUESTED*  By Goku himself\n\nHad to do my take on the Ultra Instinct theme, many of yall have been asking for it, BUT I JUST HAD TO DO IT, ITS JUST TO FIRE\n\n#ultrainstinct #musicality #goku\n\nArtist - https://angelarts2.deviantart.com/\n\nOST Remake by:  @PokéMixr92 - https://www.youtube.com/user/Slhtubit92\n\n\nSoundcloud version: https://soundcloud.com/musicality-beats/ultra-instinct-musicality-remix\n--------------------------------------------------------------------------------------------\nDiscord - https://discord.gg/YkpqgaG\nWant to use my work/Music? READ THIS,\nhttps://www.youtube.com/user/yungjazz101/about\n\nOfficial Website  -  http://www.musicalitymusic.net/\nFree Download: http://bsta.rs/qy329\n\nRapping/Singing on my remixes are non-profit unless you need to lease. You can not distribute my remixes/beats without paying  exclusive rights. \n\nAlways credit me: "@Musicality"\n\nHave a Request? Click Here!! - https://www.youtube.com/watch?v=73hYberWaWg\n\nIf you wanna donate lol - https://www.paypal.me/MusicalityMusic\n\nLike, Sub, and Comment for more beats and remixes!!\n--------------------------------------------------------------------------------------------\nFOLLOW ME AND ADD ME ON,\nTwitter -  https://twitter.com/Musicalitybeats\nMain SoundCloud -  https://soundcloud.com/musicalitymusic\nRemix SoundCloud - https://soundcloud.com/musicality-beats\nTumblr - http://thatjazzymusicality.tumblr.com/\nInstagram - http://instagram.com/musicalitybeats\nPS4 - NeW-ErA_JaZZiiNo\n--------------------------------------------------------------------------------------------\nMusicality - Ultra Instinct (0:00)\nThanks for listening! (4:04)',
    comments: [
      {
        commentId: "Ugz1mkqNvTQWPJSf3LZ4AaABAg",
        comment:
          'FUN FACT: \nIf you listen closely enough you\'ll hear me saying \n"Ultra Instinct" and doing the 3OO war style breathing. \n\nStream on Spotify / Download: https://fanlink.to/UltraInstinctRemix\n\nCeeday gang I see you 😂😂\n\nNew Dragon Ball Super Remix here: https://www.youtube.com/watch?v=5PD_pO6WZew\n\n» Connect with Musicality\nhttps://fanlink.to/musicalitysocials',
        commenter: "Yagami Light",
      },
      {
        commentId: "UgyLx8heC3k22kCNY8B4AaABAg",
        comment: "*when you perfectly peel an orange without stopping*",
        commenter: "Zoldyck Killua",
      },
      {
        commentId: "UgwoiDSNAeOvh8laDbZ4AaABAg",
        comment: "“This product kills 99% of germs!” \n\nThe 1% of germs:",
        commenter: "Okabe Rintarou",
      },
      {
        commentId: "Ugwg1iwntZ9LOu228-F4AaABAg",
        comment:
          "I remember when Ceeday used this as his outro theme. Back then I had no idea it was from Dragon Ball, I just thought it was some random song but then after I started watching Dragon Ball Super a couple years later I realized what it was actually from and nearly had a brain aneurysm.",
        commenter: "Elric Edward",
      },
      {
        commentId: "UgylmpgNLnbwsPY6IR14AaABAg",
        comment: "When your moms belt hits and slaps don’t hurt anymore:",
        commenter: "Uzumaki Naruto",
      },
    ],
    animeId: "anime_dragon_ball",
    anime: "Dragon Ball",
    channelLink: "https://www.youtube.com/channel/UCugVYo6tK-51zscboSgSXNg",
    channelImage: {
      default:
        "https://yt3.ggpht.com/ytc/AMLnZu9xzRSO4VK1iryYU7Q0QBJWngmv3x6cqw2WAdiR4g=s88-c-k-c0x00ffffff-no-rj-mo",
      medium:
        "https://yt3.ggpht.com/ytc/AMLnZu9xzRSO4VK1iryYU7Q0QBJWngmv3x6cqw2WAdiR4g=s480-c-k-c0x00ffffff-no-rj-mo",
    },
    likeStr: "183K",
    viewStr: "12M",
    hash: "UtLg;Tju~poftRofRjjs0Jj[IUayaeayWVj[",
  },
  {
    id: "SVhHhtG4DPM",
    title: "Demon Slayer: Rengoku Theme | EPIC VERSION (Rengoku 9th Form)",
    channelName: "Samuel Kim Music",
    channelId: "UCuoKuTCQ9dmPIgOgyLm9HgQ",
    duration: "6 min 33 sec",
    views: "10425021",
    likes: "145114",
    thumbnails: {
      default: "https://i.ytimg.com/vi/SVhHhtG4DPM/default.jpg",
      medium: "https://i.ytimg.com/vi/SVhHhtG4DPM/mqdefault.jpg",
      high: "https://i.ytimg.com/vi/SVhHhtG4DPM/hqdefault.jpg",
      standard: "https://i.ytimg.com/vi/SVhHhtG4DPM/sddefault.jpg",
      max: "https://i.ytimg.com/vi/SVhHhtG4DPM/maxresdefault.jpg",
    },
    description:
      "Mugen Train OST by Go Shiina and Yuki Kajiura. Epic Cover by Samuel Kim\n♫ Demon Slayer EPIC SPOTIFY PLAYLIST ► https://spoti.fi/3rqG7U1\n♫ Demon Slayer EPIC PLAYLIST ► https://www.youtube.com/playlist?list=PL9PLUrw0CbcRgiyHiI8SLfIKWAmPuyquC\n🎧 Support my work on Patreon (HQ Mp3 & Wave)  ► https://www.patreon.com/samuelkimmusic\n👍 Buy me some Coffee ► https://www.buymeacoffee.com/samuelkimmusic\n\n🎧 My Music is Available Here 🎧\n► Spotify: https://spoti.fi/2vYKPBd\n► Apple Music/iTunes: https://apple.co/2wMUESQ\n► YouTube Music: https://bit.ly/2VFh8z9\n► Deezer: https://bit.ly/3eTNaPt\n\nConnect With Me on Social Media!\n►Instagram: https://www.instagram.com/samuelkimmusic\n►Twitter: https://twitter.com/samuelkimmusic\n\nThumbnail/Artwork #2 by 風李たゆ: https://www.pixiv.net/en/artworks/85126056\nArtwork #1 by: Found on Google with no link to source. (If you are the artist or know the source please email me so I can give proper credit!)\nArtwork #3 by Muztnafi: https://www.deviantart.com/muztnafi/art/Rengoku-837559826\n\nAll copyright belongs to their respective owners. \nDemon Slayer Mugen Train OST by Go Shiina and Yuki Kajiura\nArranged & Orchestrated by Samuel Kim\n\n#DemonSlayerMugenTrain #DemonSlayer #mugentrain #鬼滅の刃\n__________________________________________________________________________________________________ ***DO NOT RE-UPLOAD on YouTube or other platforms (Soundcloud, TikTok, etc.) It is strictly prohibited to use my covers/arrangements for Podcasts (Spotify/Apple Podcasts) Also DO NOT make remixes using my covers, and DO NOT illegally distribute my music to streaming platforms.\nIf you want to use my music for your YouTube videos, please visit: https://bit.ly/3oTIrlr",
    comments: [
      {
        commentId: "Ugxd3UNr6TRzfFpkTVN4AaABAg",
        comment:
          "New Rengoku Theme from the Mugen Train Arc Episode!!!! 🔥 \nhttps://youtu.be/rVlSt4JM2t8",
        commenter: "Inumaki Toge",
      },
      {
        commentId: "UgwLlq-E5UvH6peDG214AaABAg",
        comment:
          '"Rengoku is the best character in all of anime" - Albert Einstein probably',
        commenter: "Haruhara Haruko",
      },
      {
        commentId: "Ugys__F4xF1vneCDjBJ4AaABAg",
        comment:
          "Rengoku's personality was so mesmerizing, bold, innocent and strong I don't think any hashira can become fan favourite in just 2 min of screen time.",
        commenter: "Hyakkimaru",
      },
      {
        commentId: "UgxV3bLJB8ym64EqGw54AaABAg",
        comment:
          '"Both growing old and passing away are things that make being human beautiful"\n- Rengoku',
        commenter: "Edogawa Conan",
      },
      {
        commentId: "UgzCFL-Uhc6QQSDlA654AaABAg",
        comment:
          "Haters : he lost \nReality : saved everyone on the train ,  protected the next generation demon slayers and nearly killed a s class demon",
        commenter: "Nikiforov Victor",
      },
    ],
    animeId: "anime_demon_slayer",
    anime: "Demon Slayer",
    channelLink: "https://www.youtube.com/channel/UCuoKuTCQ9dmPIgOgyLm9HgQ",
    channelImage: {
      default:
        "https://yt3.ggpht.com/aXh5YnRZ_qnY3L2ZsfeXfiXqQj1x1TjAxFO7ywOCp__aDbum1gI2gsG52Q3NTMAectOYNqtqrA=s88-c-k-c0x00ffffff-no-nd-rj",
      medium:
        "https://yt3.ggpht.com/aXh5YnRZ_qnY3L2ZsfeXfiXqQj1x1TjAxFO7ywOCp__aDbum1gI2gsG52Q3NTMAectOYNqtqrA=s480-c-k-c0x00ffffff-no-nd-rj",
    },
    likeStr: "145K",
    viewStr: "10M",
    hash: "UCLMt#9j}+.98wu4?wEL00$yDjNHu6I9D$?a",
  },
  {
    id: "ra9UgspPmXE",
    title: "Pain Theme Remix",
    channelName: "Anime Hip Hop",
    channelId: "UCu-nk5Qp7jj45XTH7jAgu0w",
    duration: "4 min 35 sec",
    views: "9839821",
    likes: "149149",
    thumbnails: {
      default: "https://i.ytimg.com/vi/ra9UgspPmXE/default.jpg",
      medium: "https://i.ytimg.com/vi/ra9UgspPmXE/mqdefault.jpg",
      high: "https://i.ytimg.com/vi/ra9UgspPmXE/hqdefault.jpg",
      standard: "https://i.ytimg.com/vi/ra9UgspPmXE/sddefault.jpg",
      max: "",
    },
    description:
      "Please Like and Subscribe ! \n\nCheck out my shop:\n\nSoundcloud : https://soundcloud.com/torontovibes\n\nTwitter: http://twitter.com/animehiphop\n\nWallpapers: \n\nhttp://66.media.tumblr.com/58d6589475d52eda430eb04f162b053f/tumblr_mwq7r6Z1vp1sfoyqoo1_1280.png\n\nhttp://vignette2.wikia.nocookie.net/narutofanon/images/4/42/Tumblr_static_tumblr_static_640.jpg/revision/latest?cb=20160717180743\n\n\nWe do not own ANY rights to any of the music or footage we share, if you have any concerns, shoot us an email at:\nAnimehiphopmanage@gmail.com",
    comments: [
      {
        commentId: "UgxsaKecKciHlCQlddh4AaABAg",
        comment:
          '"Sometimes you must fall in order to grow, hurt in order to know, lose in order to gain because life\'s greatest lessons are learned through pain" \n-Pain"',
        commenter: "Tempest Rimuru",
      },
      {
        commentId: "UgwHn-pgRlCH8VxO2rh4AaABAg",
        comment:
          "Almost every villain in naruto just needed one hug in their life",
        commenter: "Arlert Armin",
      },
      {
        commentId: "UgzA8op7rFxLjg5PTvd4AaABAg",
        comment: "The beat dropped harder than my Boruto expectations...",
        commenter: "Satou Kazuma",
      },
      {
        commentId: "UgxxlVE160YRWJBvHwd4AaABAg",
        comment:
          "As sick as this beat is, don't let it distract you from the fact that Kurenai tried to use genjutsu on Itachi.",
        commenter: "Koro-sensei",
      },
      {
        commentId: "UgwNQQ0E88kife9bOA54AaABAg",
        comment:
          "Pain only lost because he saved his ultimate banger-no-jutsu for youtube fame.",
        commenter: "Usui Takumi",
      },
    ],
    animeId: "anime_naruto",
    anime: "Naruto",
    channelLink: "https://www.youtube.com/channel/UCu-nk5Qp7jj45XTH7jAgu0w",
    channelImage: {
      default:
        "https://yt3.ggpht.com/ytc/AMLnZu8zHh4JcO9p7HIPXxxbKedrLjLcjrNIIuoTOqpJVw=s88-c-k-c0x00ffffff-no-rj",
      medium:
        "https://yt3.ggpht.com/ytc/AMLnZu8zHh4JcO9p7HIPXxxbKedrLjLcjrNIIuoTOqpJVw=s480-c-k-c0x00ffffff-no-rj",
    },
    likeStr: "149K",
    viewStr: "9.8M",
    hash: "UZMj8i*0_3Md^QpcDijE4oRiMxtSIpnh%MNb",
  },
  {
    id: "3BtEm4loQrM",
    title: "[AMV] Naruto Shippuden - Rainy Day (ksolis Trap Remix)",
    channelName: "ksolis",
    channelId: "UCxIf84dVSW2lAiBmCLzQe1Q",
    duration: "1 min 59 sec",
    views: "8106527",
    likes: "170881",
    thumbnails: {
      default: "https://i.ytimg.com/vi/3BtEm4loQrM/default.jpg",
      medium: "https://i.ytimg.com/vi/3BtEm4loQrM/mqdefault.jpg",
      high: "https://i.ytimg.com/vi/3BtEm4loQrM/hqdefault.jpg",
      standard: "https://i.ytimg.com/vi/3BtEm4loQrM/sddefault.jpg",
      max: "https://i.ytimg.com/vi/3BtEm4loQrM/maxresdefault.jpg",
    },
    description:
      "FREE DOWNLOAD: https://www.toneden.io/ksoliss/post/amv-naruto-shippuden-rainy-day-ksolis-trap-remix\n\nSupport me: https://www.paypal.me/ksoliss\nSoundcloud: https://soundcloud.com/k-solis\nPartner with BBTV: http://bbtv.go2cloud.org/SH13Z\nksolis MERCHANDISE: http://shop.spreadshirt.com/ksolis/\n\n\n\nNaruto Shippuden OST Road To Ninja - Rainy Day (ksolis Trap Remix), Storm, I'm Home, Family, No Home, I WIsh, My Home, Thank You",
    comments: [
      {
        commentId: "UggzKiYcC-gZN3gCoAEC",
        comment: "Sick beat as usual my friend!",
        commenter: "Araragi Koyomi",
      },
      {
        commentId: "UgxQliAr65AMVyC4evV4AaABAg",
        comment:
          "Naruto came into our lives as a story\n\n\n\nAnd he left as a legend 😢",
        commenter: "Sanji",
      },
      {
        commentId: "UgyEK6rInilUhdaWdSp4AaABAg",
        comment: "Only Naruto fans can feel the pain of this masterpiece🔥🔥🤟🏻",
        commenter: "Uchiha Sasuke",
      },
      {
        commentId: "UgwzPcnHxjPzOgTf8xp4AaABAg",
        comment:
          "Real Naruto fans got so many memories from this. Memories of 3rd Hokage and Jiraiyah death, of Naruto saying believe it and sayings he's gonna be hokage, of him getting rejected by sakura, of him at the hot springs with Jiraiyah. Naruto started as a recommended anime and ended as our biggest life lesson. Naruto taught us to never give up on our dream, that we can't let anyone tell us we cant't do or be something, that no matter how hard things are to keep trying, and inspired us ( real naruto fans) more than anything. Real Naruto fans know that Boruto will never compare or come close to being as good as Naruto and will never help us get through life like Naruto did. Watching Naruto was the best decision I have ever made.",
        commenter: "Alucard",
      },
      {
        commentId: "Ugzk-w501gK9QCZ6soJ4AaABAg",
        comment:
          "I started watching Naruto when I was 12, right now I'm 23 and I want to thank Naruto for giving me inner powers and true believe in myself\nThis is not just regular anime,it is real masterpiece\n*Bro tears*\n❤️❤️😭❤️❤️",
        commenter: "Holo",
      },
    ],
    animeId: "anime_naruto",
    anime: "Naruto",
    channelLink: "https://www.youtube.com/channel/UCxIf84dVSW2lAiBmCLzQe1Q",
    channelImage: {
      default:
        "https://yt3.ggpht.com/ytc/AMLnZu-GrtUmhAwBZerCbfm9CyZkdSVsDErShGrxWx_S=s88-c-k-c0x00ffffff-no-rj-mo",
      medium:
        "https://yt3.ggpht.com/ytc/AMLnZu-GrtUmhAwBZerCbfm9CyZkdSVsDErShGrxWx_S=s480-c-k-c0x00ffffff-no-rj-mo",
    },
    likeStr: "171K",
    viewStr: "8.1M",
    hash: "UGF6X;Ri4ot8_Nj]WBay00j]-:js4Tayozj]",
  },
];

app.get("/", (req, res) => {
  res.send("Hello Earth!");
});

app.get("/explore", (req, res) => {
  const videos = data
    .map((vid) => {
      return `
    <h2>  ${vid.title} </h2>
    <img src=${vid.thumbnails.medium} alt=${vid.title} />
    `;
    })
    .join(" ");

  res.send(videos);
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});
