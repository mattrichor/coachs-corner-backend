'use strict'
const { Coach, Player, sequelize } = require('../models')
const falso = require('@ngneat/falso')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('workouts', [
      {
        title: 'Shuttle Runs',
        description:
          'Spring from post to post, touching the ground at each post and quickly turning around.',
        completionDate: new Date().toDateString(),
        skillIncrease: parseInt(falso.randNumber({ min: 1, max: 10 })),
        playerId: 1,
        skillId: 1
      },
      {
        title: 'Front Toss',
        description: 'Focus on swinging mechanics and proper form.',
        completionDate: new Date().toDateString(),
        skillIncrease: parseInt(falso.randNumber({ min: 1, max: 10 })),
        playerId: 1,
        skillId: 5
      },
      {
        title: 'Post to post Shuttle Runs',
        description:
          'Focus on agility and quick turnaround time! Spring from post to post, touching the ground at each post and quickly turning around',
        completionDate: new Date().toDateString(),
        skillIncrease: parseInt(falso.randNumber({ min: 1, max: 10 })),
        playerId: 2,
        skillId: 7
      },
      {
        title: 'Romanian Deadlift',
        description:
          'Pull up your barbell weight, using an overhand grip, with a slight bend in your knees. Pull it up to a waist high position, with your arms straight and your legs straight. Return the barbell to near the ground, bending your knees and keeping your arms stright. Repeat.',
        completionDate: new Date().toDateString(),
        skillIncrease: parseInt(falso.randNumber({ min: 1, max: 10 })),
        playerId: 2,
        skillId: 12
      },
      {
        title: 'Cable Push Pull',
        description:
          'Using a gym cable setup, push and pull the cables with your arms, twisting your waist.',
        completionDate: new Date().toDateString(),
        skillIncrease: parseInt(falso.randNumber({ min: 1, max: 10 })),
        playerId: 3,
        skillId: 16
      },
      {
        title: 'Cable Wood Chop',
        description:
          'Using a vertical cable machine, take one cable in both hands and pull it down to your waist. Repeat',
        completionDate: new Date().toDateString(),
        skillIncrease: parseInt(falso.randNumber({ min: 1, max: 10 })),
        playerId: 3,
        skillId: 15
      },
      {
        title: 'Pull Ups',
        description: `It's a pull up, if you don't know what this is you're fired!`,
        completionDate: new Date().toDateString(),
        skillIncrease: parseInt(falso.randNumber({ min: 1, max: 10 })),
        playerId: 4,
        skillId: 24
      },
      {
        title: 'Vertical Jumps',
        description: 'Jump vertically in the air, as high as you can.',
        completionDate: new Date().toDateString(),
        skillIncrease: parseInt(falso.randNumber({ min: 1, max: 10 })),
        playerId: 4,
        skillId: 19
      },
      {
        title: 'Reverse Crunch',
        description:
          'Lie on the floor, with your legs up 90 degrees in the air, contract your abs to push your feet up.',
        completionDate: new Date().toDateString(),
        skillIncrease: parseInt(falso.randNumber({ min: 1, max: 10 })),
        playerId: 5,
        skillId: 29
      },
      {
        title: 'Lat Pulldown',
        description:
          'Using a pulldown machine, grasp the bar and pull it all the way down. Keep your back straight. Repeat',
        completionDate: new Date().toDateString(),
        skillIncrease: parseInt(falso.randNumber({ min: 1, max: 10 })),
        playerId: 5,
        skillId: 29
      },
      {
        title: 'Seated Cable Row',
        description:
          'Facing the cable machine sitting, take the two cables in hand and pull them directly towards you, bending your elbows inwards. Repeat.',
        completionDate: new Date().toDateString(),
        skillIncrease: parseInt(falso.randNumber({ min: 1, max: 10 })),
        playerId: 6,
        skillId: 34
      },
      {
        title: 'Biceps Curls with dumbbells',
        description:
          'Take one dumbbell in each hand, and slowly curl your elbows until they reach the upright position. repeat.',
        completionDate: new Date().toDateString(),
        skillIncrease: parseInt(falso.randNumber({ min: 1, max: 10 })),
        playerId: 6,
        skillId: 36
      },
      {
        title: 'Dumbbell Push Press',
        description:
          'Take two dumbbells in hand, resting them on your shoulders. Bend your knees to a 45 degree angle, then push up and extend your arms with the dumbbells straight in the air. Repeat.',
        completionDate: new Date().toDateString(),
        skillIncrease: parseInt(falso.randNumber({ min: 1, max: 10 })),
        playerId: 7,
        skillId: 40
      },
      {
        title: 'Box Jump March',
        description:
          'Stand in front of a short box or platform. Place one foot on the box. Jump high into the air and land with the oppositie foot. Repeat',
        completionDate: new Date().toDateString(),
        skillIncrease: parseInt(falso.randNumber({ min: 1, max: 10 })),
        playerId: 7,
        skillId: 36
      },
      {
        title: 'Barbell Squat',
        description:
          'Taking a large barbell in hand, and holding it directly to your back with both hands, squat down to the ground, keeping your chin and chest up, pushing your elbows forward, and keeping your knees in line with your toes. Repeat.',
        completionDate: new Date().toDateString(),
        skillIncrease: parseInt(falso.randNumber({ min: 1, max: 10 })),
        playerId: 8,
        skillId: 45
      },
      {
        title: 'Dumbbell Incline Bench Press',
        description:
          'Laying on a inclined bench press, with two dumbbells in hand, push the dumbbells from directly above your chest until they are in the air, your arms totall straight. Repeat.',
        completionDate: new Date().toDateString(),
        skillIncrease: parseInt(falso.randNumber({ min: 1, max: 10 })),
        playerId: 8,
        skillId: 44
      },
      {
        title: 'Base Running Drills',
        description:
          'Sprint to first base, a fast as you can. Walk to secon base. From second base, spring home as fast as you can. Use your own discretion on other patterns of sprints and walks.',
        completionDate: new Date().toDateString(),
        skillIncrease: parseInt(falso.randNumber({ min: 1, max: 10 })),
        playerId: 9,
        skillId: 49
      },
      {
        title: 'Sled Pushes',
        description:
          'Grab a gym sled, and load it up with the apropriate amount of weights. Adopting a low position, with your hands grabbing the sled, use your legs to push the sled along the track. Do this for four minutes then rest.',
        completionDate: new Date().toDateString(),
        skillIncrease: parseInt(falso.randNumber({ min: 1, max: 10 })),
        playerId: 12,
        skillId: 69
      },
      {
        title: 'Lateral Sled Drag',
        description:
          'Grab a gym sled, and load it up with the apropriate amount of weights. Attach a handle to the sled. Standing at a 90 degree angle from the sled handles, pull the sled along by the handles, keeping your whole body facing towards the same angle, laterally stepping sideways to pull the sled along. ',
        completionDate: new Date().toDateString(),
        skillIncrease: parseInt(falso.randNumber({ min: 1, max: 10 })),
        playerId: 10,
        skillId: 57
      },
      {
        title: 'Sprints',
        description: 'Complete 20, 40, 60 yard sprints at full effort.',
        completionDate: new Date().toDateString(),
        skillIncrease: parseInt(falso.randNumber({ min: 1, max: 10 })),
        playerId: 11,
        skillId: 61
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('workouts', null, {})
  }
}
