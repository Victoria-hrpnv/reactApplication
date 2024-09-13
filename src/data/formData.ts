interface Data {
    key: number;
    value: string;
    label: string;
}




const location : Data[] = [
    {
        key: 1,
        value: '',
        label: 'Select Location'
    },
    {
        key: 2,
        value: 'Los Angeles',
        label: 'Los Angeles'
    },
    {
        key: 3,
        value: 'New York',
        label: 'New York'
    },
    {
        key: 4,
        value: 'Boston',
        label: 'Boston'
    }
];

const propertyType : Data[] = [
    {
        key: 1,
        value: '',
        label: 'Select property type'
    },
    {
        key: 2,
        value: 'Villa',
        label: 'Villa'
    },
    {
        key: 3,
        value: 'Townhouse',
        label: 'Townhouse'
    },
    {
        key: 4,
        value: 'Cottage',
        label: 'Cottage'
    }
];

const bathrooms : Data[] = [
    {
        key: 1,
        value: '',
        label: 'Select no, of Bathrooms'
    },
    {
        key: 2,
        value: '1',
        label: '1'
    },
    {
        key: 3,
        value: '2',
        label: '2'
    },
    {
        key: 4,
        value: '3',
        label: '3'
    }
];

const bedrooms : Data[] = [
    {
        key: 1,
        value: '',
        label: 'Select no, of Bedrooms'
    },
    {
        key: 2,
        value: '1',
        label: '1'
    },
    {
        key: 3,
        value: '2',
        label: '2'
    },
    {
        key: 4,
        value: '3',
        label: '3'
    },
    {
        key: 5,
        value: 'more',
        label: 'More'
    }
];

const budget : Data[] = [
    {
        key: 1,
        value: '',
        label: 'Select budget'
    },
    {
        key: 2,
        value: '1 000 000',
        label: '1 000 000$'
    },
    {
        key: 3,
        value: '2 000 000',
        label: '2 000 000$'
    },
    {
        key: 4,
        value: '3 000 000',
        label: '3 000 000$'
    },
    {
        key: 5,
        value: '3 000 000',
        label: '3 000 000$'
    }
];

export { propertyType, location, bathrooms, bedrooms, budget};