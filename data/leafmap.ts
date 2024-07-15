export default [
  {
    id: '1',
    key: 'Leaves hand-shaped',
    children: [
      {
        id: '2',
        key: 'no teeth along edges',
        plant: [{ name: 'Pūriri' }],
      },
      {
        id: '3',
        key: 'with teeth along edges',
        children: [
          { id: '4', key: '5 teeth', plant: [{ name: 'Patē' }] },
          { id: '5', key: 'coarse teeth', plant: [{ name: 'Whauwhaupaku' }] },
        ],
      },
    ],
  },
  {
    id: '7',
    key: 'Leaves toothed',
    children: [
      {
        id: '8',
        key: 'under 5cm',
        children: [
          {
            id: '9',
            key: 'over 2cm',
            plant: [
              { name: 'Putaputaweta' },
              { name: 'Hard Beech' },
              { name: 'Red Beech' },
              { name: 'Kaikomako' },
            ],
          },
          {
            id: '10',
            key: 'under 2cm',
            plant: [{ name: 'Tanekaha' }, { name: 'Silver Beech' }],
          },
        ],
      },
      {
        id: '11',
        key: 'over 5cm',
        children: [
          {
            id: '12',
            key: 'narrow',
            children: [
              {
                id: '13',
                key: 'under 10cm long',
                children: [
                  {
                    id: '14',
                    key: 'Not whitish underneath',
                    plant: [
                      { name: 'Ngaio' },
                      { name: 'Mahoe' },
                      { name: 'Titoki' },
                    ],
                  },
                  {
                    id: '15',
                    key: 'Whitish underneath',
                    plant: [{ name: 'Hinau' }, { name: 'Kotukutuku' }],
                  },
                ],
              },
              {
                id: '16',
                key: 'over 10cm long',
                plant: [
                  { name: 'Houroeka' },
                  { name: 'Mahoe' },
                  { name: 'Rewarewa' },
                ],
              },
            ],
          },
          {
            id: '17',
            key: 'broad',
            plant: [{ name: 'Houhere' }, { name: 'Kaikomako' }],
          },
        ],
      },
    ],
  },
  {
    id: '18',
    key: 'Leaves very long',
    children: [
      {
        id: '19',
        key: 'Over 50cm',
        plant: [{ name: 'Cabbage Tree' }, { name: 'Nikau' }],
      },
    ],
  },
  {
    id: '20',
    key: 'Leaves all in pairs',
    children: [
      {
        id: '21',
        key: 'With teeth along edges',
        plant: [
          { name: 'Kamahi' },
          { name: 'Porokaiwhiri' },
          { name: 'Pukatea' },
          { name: 'Makomako' },
        ],
      },
      {
        id: '22',
        key: 'Smooth edges',
        plant: [
          { name: 'Kohekohe' },
          { name: 'Kawakawa' },
          { name: 'Tawa' },
          { name: 'Rata' },
          { name: 'Pohutakawa' },
        ],
      },
    ],
  },
]
