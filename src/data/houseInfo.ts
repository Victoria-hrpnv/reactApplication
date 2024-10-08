
interface HouseInfo {
    id: number
    src: string
    name: string
    description: string
    bedroom: string
    bathroom: string
    type: string
    prise: string
    location: string
}

const houseInfo : HouseInfo[] = [
    {
        id: 1,
        src: 'reactApplication/house1.png',
        name: 'Seaside Serenity Villa',
        description: 'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus.',
        bedroom: '4',
        bathroom: '3',
        type: 'Villa',
        prise: '$850 000',
        location: 'Atlanta'
    },
    {
        id: 2,
        src: 'house2.png',
        name: 'Metropolitan Haven',
        description: 'A chic and fully-furnished 2-bedroom apartment with panoramic city views. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus.',
        bedroom: '3',
        bathroom: '2',
        type: 'Villa',
        prise: '$950 000',
        location: 'Los Angeles'
    },
    {
        id: 3,
        src: 'house3.png',
        name: 'Rustic Retreat Cottage',
        description: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus.',
        bedroom: '5',
        bathroom: '2',
        type: 'Villa',
        prise: '$350 000',
        location: 'Dallas'
    },
    {
        id: 4,
        src: 'reactApplication/house1.png',
        name: 'Seaside Serenity Villa',
        description: 'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus.',
        bedroom: '4',
        bathroom: '3',
        type: 'Villa',
        prise: '$690 000',
        location: 'New York'
    },
    {
        id: 5,
        src: 'reactApplication/house3.png',
        name: 'Rustic Retreat Cottage',
        description: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus.',
        bedroom: '5',
        bathroom: '2',
        type: 'Villa',
        prise: '$750 000',
        location: 'Los Angeles'
    },
    {
        id: 6,
        src: 'reactApplication/house1.png',
        name: 'Seaside Serenity Villa',
        description: 'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus.',
        bedroom: '4',
        bathroom: '3',
        type: 'Villa',
        prise: '$550 000',
        location: 'Atlanta'
    },
]

export default houseInfo

