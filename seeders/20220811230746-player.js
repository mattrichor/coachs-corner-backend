'use strict'
const falso = require('@ngneat/falso')
const { Coach, sequelize } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    ////// LOGIC FOR RANDOMLY GENERATED PLAYERS - leaving in
    //
    // const players = await Promise.all(
    //   [...Array(12)].map(async () => {
    //     let coach = await Coach.findOne({
    //       order: sequelize.random(),
    //       raw: true
    //     })
    //     let firstName = `${falso.randFirstName()}`
    //     let lastName = `${falso.randLastName()}`

    //     let primaryPositionMath = falso.randNumber({ min: 0, max: 8 })
    //     let primaryPosition
    //     let proPic

    //     switch (primaryPositionMath) {
    //       case 0:
    //         primaryPosition = 'Pitcher'
    //         proPic =
    //           'https://heavy.com/wp-content/uploads/2015/07/gettyimages-51564472-1-e1437886101338.jpg'
    //         break
    //       case 1:
    //         primaryPosition = 'Catcher'
    //         proPic =
    //           'https://tomahawktake.com/wp-content/uploads/usat-images/2017/02/9883298-mlb-atlanta-braves-workouts.jpeg'
    //         break
    //       case 2:
    //         primaryPosition = 'First Baseman'
    //         proPic =
    //           'https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F330e2668-4a87-11e9-9ce9-2870f730ce44.jpg?crop=1600%2C900%2C0%2C0'
    //         break
    //       case 3:
    //         primaryPosition = 'Second Baseman'
    //         proPic =
    //           'https://cdn.vox-cdn.com/thumbor/m-caVtAIldqIeYJC242bJxewdpY=/0x0:4000x2667/1200x800/filters:focal(0x0:4000x2667)/cdn.vox-cdn.com/uploads/chorus_image/image/24833303/20130903_ter_ae5_128.0.jpg'
    //         break
    //       case 4:
    //         primaryPosition = 'Third Baseman'
    //         proPic =
    //           'https://www.fanrankings.com/media/mqoj2auw/rafael_devers.jpg?crop=0,0,0,0.47709880841844632&cropmode=percentage&width=718&height=529'
    //         break
    //       case 5:
    //         primaryPosition = 'Shortstop'
    //         proPic = 'http://cdn0.vox-cdn.com/assets/4266189/shortstopssox.jpg'
    //         break
    //       case 6:
    //         primaryPosition = 'Center Fielder'
    //         proPic =
    //           'http://www.baseballessential.com/wp-content/uploads/2019/01/GettyImages-1035613300.jpg'
    //         break
    //       case 7:
    //         primaryPosition = 'Right Fielder'
    //         proPic =
    //           'https://cdn.vox-cdn.com/thumbor/yGEdf2FY6MnJ7e5QWQLU08AGJr4=/0x272:1478x1046/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/16301110/Screen_Shot_2019_05_26_at_4.44.11_PM.png'
    //         break
    //       case 8:
    //         primaryPosition = 'Left Fielder'
    //         proPic =
    //           'http://cdn.chatsports.com/thumbnails/5273-31579-original.jpeg'
    //     }

    //     let secondaryPosition

    //     const generateSecondaryPos = (primary) => {
    //       let secondaryPositionMath = falso.randNumber({ min: 1, max: 9 })

    //       switch (secondaryPositionMath) {
    //         case 0:
    //           secondaryPosition = 'Pitcher'
    //           break
    //         case 1:
    //           secondaryPosition = 'Catcher'
    //           break
    //         case 2:
    //           secondaryPosition = 'First Baseman'
    //           break
    //         case 3:
    //           secondaryPosition = 'Second Baseman'
    //           break
    //         case 4:
    //           secondaryPosition = 'Third Baseman'
    //           break
    //         case 5:
    //           secondaryPosition = 'Short Stop'
    //           break
    //         case 6:
    //           secondaryPosition = 'Center Fielder'
    //           break
    //         case 7:
    //           secondaryPosition = 'Right Fielder'
    //           break
    //         case 8:
    //           secondaryPosition = 'Left Fielder'
    //       }

    //       if (secondaryPosition !== primary) {
    //         return secondaryPosition
    //       } else {
    //         generateSecondaryPos(primaryPosition)
    //       }
    //     }

    //     generateSecondaryPos(primaryPosition)

    //     return {
    //       name: `${firstName} ${lastName}`,
    //       email: `${firstName}.${lastName}@gmail.com`,
    //       passwordDigest: `1234`,
    //       proPic: proPic,
    //       primaryPosition: primaryPosition,
    //       secondaryPosition: `${secondaryPosition}`,
    //       height: falso.randNumber({ min: 60, max: 80 }),
    //       weight: falso.randNumber({ min: 110, max: 250 }),
    //       age: falso.randNumber({ min: 12, max: 16 }),
    //       isActive: falso.randBoolean(),
    //       coachId: coach.id
    //     }
    //   })
    // )
    ///// HARD CODED PLAYER DATA FOR SEED
    return queryInterface.bulkInsert('players', [
      {
        name: `Jason Kendricks`,
        email: `jkendricks@gmail.com`,
        passwordDigest: `1234`,
        proPic:
          'https://www.gannett-cdn.com/presto/2021/04/12/NAAS/d6e39359-eac3-467d-a23e-ff82a5e4158d-starkey.JPG?width=660&height=450&fit=crop&format=pjpg&auto=webp',
        primaryPosition: `Catcher`,
        secondaryPosition: `First Baseman`,
        height: falso.randNumber({ min: 50, max: 70 }),
        weight: falso.randNumber({ min: 110, max: 200 }),
        age: falso.randNumber({ min: 12, max: 16 }),
        isActive: falso.randBoolean(),
        coachId: 1
      },
      {
        name: `Josh Williams`,
        email: `jwilliams@gmail.com`,
        passwordDigest: `1234`,
        proPic:
          'https://cdn1.sportngin.com/attachments/news_article/b03c-176320943/DSC_0203.jpg',
        primaryPosition: `First Baseman`,
        secondaryPosition: `Second Baseman`,
        height: falso.randNumber({ min: 50, max: 70 }),
        weight: falso.randNumber({ min: 110, max: 200 }),
        age: falso.randNumber({ min: 12, max: 16 }),
        isActive: falso.randBoolean(),
        coachId: 1
      },
      {
        name: `Olivar Rodriguez`,
        email: `orodriguez@gmail.com`,
        passwordDigest: `1234`,
        proPic:
          'https://2qibqm39xjt6q46gf1rwo2g1-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/25300167_web1_L1A-Dominic-Hellman-EDH-052621-FS-1024x686.jpg',
        primaryPosition: `Second Baseman`,
        secondaryPosition: `Shortstop`,
        height: falso.randNumber({ min: 50, max: 70 }),
        weight: falso.randNumber({ min: 110, max: 200 }),
        age: falso.randNumber({ min: 12, max: 16 }),
        isActive: falso.randBoolean(),
        coachId: 1
      },
      {
        name: `Sunday Walters`,
        email: `swalters@gmail.com`,
        passwordDigest: `1234`,
        proPic:
          'https://www.masslive.com/resizer/1nMmrpOKi8aSAObi_uD3OBk21B4=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/7BHPAXE3ZJAANMYDAZ2FZYWEAQ.JPG',
        primaryPosition: `Shortstop`,
        secondaryPosition: `Second Baseman`,
        height: falso.randNumber({ min: 50, max: 70 }),
        weight: falso.randNumber({ min: 110, max: 200 }),
        age: falso.randNumber({ min: 12, max: 16 }),
        isActive: falso.randBoolean(),
        coachId: 1
      },
      {
        name: `Robin Roberts`,
        email: `rrobers@gmail.com`,
        passwordDigest: `1234`,
        proPic:
          'https://www.archbishopcurley.org/wp-content/uploads/bfi_thumb/baseball-2400-1260x680-paejoemfqdopmhbtnqvqhz3gin08xcbbm8prrxpjtc.jpg',
        primaryPosition: `Pitcher`,
        secondaryPosition: `First Baseman`,
        height: falso.randNumber({ min: 50, max: 70 }),
        weight: falso.randNumber({ min: 110, max: 200 }),
        age: falso.randNumber({ min: 12, max: 16 }),
        isActive: falso.randBoolean(),
        coachId: 1
      },
      {
        name: `Julian Ortiz`,
        email: `jortiz@gmail.com`,
        passwordDigest: `1234`,
        proPic:
          'https://www.al.com/resizer/mV7tSAlEyQ_6OoZeBqMkz-vOJGs=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/ESHL4RBQ4JDLVIRSZAKENQM3EU.JPG',
        primaryPosition: `Third Baseman`,
        secondaryPosition: `First Baseman`,
        height: falso.randNumber({ min: 50, max: 70 }),
        weight: falso.randNumber({ min: 110, max: 200 }),
        age: falso.randNumber({ min: 12, max: 16 }),
        isActive: falso.randBoolean(),
        coachId: 1
      },
      {
        name: `Feliz Ortega`,
        email: `fortega@gmail.com`,
        passwordDigest: `1234`,
        proPic:
          'https://thumbor.bigedition.com/img/Qv2dtYhDxZQxlZYRsLSlJojgRoQ=/800x800/filters:quality(80)/granite-web-prod/22/7c/227cafcb21d7467185c6ab34a129b8ad.jpeg',
        primaryPosition: `Left Fielder`,
        secondaryPosition: `Center Fielder`,
        height: falso.randNumber({ min: 50, max: 70 }),
        weight: falso.randNumber({ min: 110, max: 200 }),
        age: falso.randNumber({ min: 12, max: 16 }),
        isActive: falso.randBoolean(),
        coachId: 1
      },
      {
        name: `Kent Suzuki`,
        email: `ksuzuki@gmail.com`,
        passwordDigest: `1234`,
        proPic:
          'http://www.baseballasia.org/BFA/include/UploadImages/6323489725c209fb8db743-p01.png',
        primaryPosition: `Center Fielder`,
        secondaryPosition: `Left Fielder`,
        height: falso.randNumber({ min: 50, max: 70 }),
        weight: falso.randNumber({ min: 110, max: 200 }),
        age: falso.randNumber({ min: 12, max: 16 }),
        isActive: falso.randBoolean(),
        coachId: 1
      },
      {
        name: `Ken Sisko`,
        email: `jkendricks@gmail.com`,
        passwordDigest: `1234`,
        proPic:
          'https://www.kansas.com/latest-news/2ejq37/picture251836043/alternates/FREE_1140/elliot.jpeg',
        primaryPosition: `Right Fielder`,
        secondaryPosition: `Center Fielder`,
        height: falso.randNumber({ min: 50, max: 70 }),
        weight: falso.randNumber({ min: 110, max: 200 }),
        age: falso.randNumber({ min: 12, max: 16 }),
        isActive: falso.randBoolean(),
        coachId: 1
      },
      {
        name: `Bartolo Rieviera`,
        email: `brieviera@gmail.com`,
        passwordDigest: `1234`,
        proPic:
          'https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/nFWrJdV_m9HB5g3mK84rmvdYd9I=/1660x934/filters:focal(2448x786:2458x776):no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/I6VAHAT7FJGCROWHKXJBBFIDGU.jpg',
        primaryPosition: `Shortstop`,
        secondaryPosition: `Left Fielder`,
        height: falso.randNumber({ min: 50, max: 70 }),
        weight: falso.randNumber({ min: 110, max: 200 }),
        age: falso.randNumber({ min: 12, max: 16 }),
        isActive: falso.randBoolean(),
        coachId: 1
      },
      {
        name: `Eddie Murray`,
        email: `emurray@gmail.com`,
        passwordDigest: `1234`,
        proPic:
          'https://www.tvinsider.com/wp-content/uploads/2021/02/COMING_TO_AMERICA_2-1014x570.jpg',
        primaryPosition: `Third Baseman`,
        secondaryPosition: `First Baseman`,
        height: falso.randNumber({ min: 50, max: 70 }),
        weight: falso.randNumber({ min: 110, max: 200 }),
        age: falso.randNumber({ min: 12, max: 16 }),
        isActive: falso.randBoolean(),
        coachId: 1
      },
      {
        name: `Carlos de Silva`,
        email: `desilva@gmail.com`,
        passwordDigest: `1234`,
        proPic:
          'https://www.mlive.com/resizer/M9DkTnhnjS-X8K6ilfVRV6v7P9Q=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/3NN3YJIIRFELFAWWJEKYM73WWQ.JPG',
        primaryPosition: `Second Baseman`,
        secondaryPosition: `Catcher`,
        height: falso.randNumber({ min: 50, max: 70 }),
        weight: falso.randNumber({ min: 110, max: 200 }),
        age: falso.randNumber({ min: 12, max: 16 }),
        isActive: falso.randBoolean(),
        coachId: 1
      },
      {
        name: `Ryne Sandberg`,
        email: `rsandberg@gmail.com`,
        passwordDigest: `1234`,
        proPic:
          'https://imengine.prod.srp.navigacloud.com/?uuid=1A48F954-78F4-40AA-B79E-E7C0FE510219&type=primary&q=72&width=1024',
        primaryPosition: `Left Fielder`,
        secondaryPosition: `Center Fielder`,
        height: falso.randNumber({ min: 50, max: 70 }),
        weight: falso.randNumber({ min: 110, max: 200 }),
        age: falso.randNumber({ min: 12, max: 16 }),
        isActive: falso.randBoolean(),
        coachId: 1
      },
      {
        name: `Mike Hanha`,
        email: `mhanha@gmail.com`,
        passwordDigest: `1234`,
        proPic:
          'https://www.gannett-cdn.com/presto/2021/04/13/PCIN/747f9fe1-aa33-48cf-9b7c-6089b7cdc407-le2.JPG',
        primaryPosition: `Pitcher`,
        secondaryPosition: `First Baseman`,
        height: falso.randNumber({ min: 50, max: 70 }),
        weight: falso.randNumber({ min: 110, max: 200 }),
        age: falso.randNumber({ min: 12, max: 16 }),
        isActive: falso.randBoolean(),
        coachId: 1
      },
      {
        name: `Ed Walsh`,
        email: `ewalsh@gmail.com`,
        passwordDigest: `1234`,
        proPic:
          'https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/gJbGrugPzcdRZYVZ2ILvIeOZ124=/1660x934/filters:focal(1108x287:1118x277):no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/SNPCAE6T5RCVDC7PJSLKQYC5UI.jpg',
        primaryPosition: `Catcher`,
        secondaryPosition: `First Baseman`,
        height: falso.randNumber({ min: 50, max: 70 }),
        weight: falso.randNumber({ min: 110, max: 200 }),
        age: falso.randNumber({ min: 12, max: 16 }),
        isActive: falso.randBoolean(),
        coachId: 1
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('players', null, {})
  }
}
