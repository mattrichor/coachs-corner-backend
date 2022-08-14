"use strict";
const falso = require("@ngneat/falso");
const { Coach, sequelize } = require("../models");

// positions: pitcher, catcher, first baseman, second baseman, third baseman, shortstop, left fielder, center fielder and right fielder (9)

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const players = await Promise.all(
      [...Array(12)].map(async () => {
        let coach = await Coach.findOne({
          order: sequelize.random(),
          raw: true,
        });
        let firstName = `${falso.randFirstName()}`;
        let lastName = `${falso.randLastName()}`;

        let primaryPositionMath = falso.randNumber({ min: 0, max: 8 });
        let primaryPosition;

        switch (primaryPositionMath) {
          case 0:
            primaryPosition = "Pitcher";
            proPic =
              "https://heavy.com/wp-content/uploads/2015/07/gettyimages-51564472-1-e1437886101338.jpg";
            break;
          case 1:
            primaryPosition = "Catcher";
            proPic =
              "https://tomahawktake.com/wp-content/uploads/usat-images/2017/02/9883298-mlb-atlanta-braves-workouts.jpeg";
            break;
          case 2:
            primaryPosition = "First Baseman";
            proPic =
              "https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F330e2668-4a87-11e9-9ce9-2870f730ce44.jpg?crop=1600%2C900%2C0%2C0";
            break;
          case 3:
            primaryPosition = "Second Baseman";
            proPic =
              "https://cdn.vox-cdn.com/thumbor/m-caVtAIldqIeYJC242bJxewdpY=/0x0:4000x2667/1200x800/filters:focal(0x0:4000x2667)/cdn.vox-cdn.com/uploads/chorus_image/image/24833303/20130903_ter_ae5_128.0.jpg";
            break;
          case 4:
            primaryPosition = "Third Baseman";
            proPic =
              "https://www.fanrankings.com/media/mqoj2auw/rafael_devers.jpg?crop=0,0,0,0.47709880841844632&cropmode=percentage&width=718&height=529";
            break;
          case 5:
            primaryPosition = "Shortstop";
            proPic = "http://cdn0.vox-cdn.com/assets/4266189/shortstopssox.jpg";
            break;
          case 6:
            primaryPosition = "Center Fielder";
            proPic =
              "http://www.baseballessential.com/wp-content/uploads/2019/01/GettyImages-1035613300.jpg";
            break;
          case 7:
            primaryPosition = "Right Fielder";
            proPic =
              "https://cdn.vox-cdn.com/thumbor/yGEdf2FY6MnJ7e5QWQLU08AGJr4=/0x272:1478x1046/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/16301110/Screen_Shot_2019_05_26_at_4.44.11_PM.png";
            break;
          case 8:
            primaryPosition = "Left Fielder";
            proPic =
              "http://cdn.chatsports.com/thumbnails/5273-31579-original.jpeg";
        }

        let secondaryPosition;

        const generateSecondaryPos = (primary) => {
          let secondaryPositionMath = falso.randNumber({ min: 1, max: 9 });

          switch (secondaryPositionMath) {
            case 0:
              secondaryPosition = "Pitcher";
              break;
            case 1:
              secondaryPosition = "Catcher";
              break;
            case 2:
              secondaryPosition = "First Baseman";
              break;
            case 3:
              secondaryPosition = "Second Baseman";
              break;
            case 4:
              secondaryPosition = "Third Baseman";
              break;
            case 5:
              secondaryPosition = "Short Stop";
              break;
            case 6:
              secondaryPosition = "Center Fielder";
              break;
            case 7:
              secondaryPosition = "Right Fielder";
              break;
            case 8:
              secondaryPosition = "Left Fielder";
          }

          if (secondaryPosition !== primary) {
            return secondaryPosition;
          } else {
            generateSecondaryPos(primaryPosition);
          }
        };

        generateSecondaryPos(primaryPosition);

        return {
          name: `${firstName} ${lastName}`,
          email: `${firstName}.${lastName}@gmail.com`,
          passwordDigest: `1234`,
          // proPic: `${falso.randAvatar()}`,
          primaryPosition: primaryPosition,
          secondaryPosition: `${secondaryPosition}`,
          height: falso.randNumber({ min: 60, max: 80 }),
          weight: falso.randNumber({ min: 110, max: 250 }),
          age: falso.randNumber({ min: 12, max: 16 }),
          isActive: falso.randBoolean(),
          coachId: coach.id,
        };
      })
    );

    return queryInterface.bulkInsert("players", players);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("players", null, {});
  },
};
