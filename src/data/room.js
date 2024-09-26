import residential_ac1 from '../assets/R0016816.jpg'
import superior_ac from '../assets/R0016822.jpg'
import superior_non_ac from '../assets/R0016822.jpg'
import residential_ac2 from '../assets/R0016816.jpg'

export const roomDetails = [
    { 
        roomId: '001', 
        name: 'Residential AC 1', 
        price: 1500, 
        src: residential_ac1, 
        images: [ residential_ac1, residential_ac2, superior_ac, superior_non_ac ],
        description: 'A luxurious room with all amenities and a great view.',
        amenities: ['Free Wi-Fi', 'Breakfast Included', 'AC', 'Room Service'], 
        link: 'https://www.cybozom.site/360/nest5/',
    },
    { 
        roomId: '002', 
        name: 'Superior AC', 
        price: 2500, 
        src: superior_ac ,
        images: [ superior_ac, residential_ac1, residential_ac2, superior_non_ac ],
        description: 'A spacious suite with premium facilities and amenities.',
        amenities: ['Free Wi-Fi', 'King Size Bed', 'Private Balcony', 'Room Service'],
        link: 'https://www.cybozom.site/360/nest5/',
    },
    { 
        roomId: '003', 
        name: 'Superior Non AC', 
        price: 1000, 
        src: superior_non_ac ,
        images: [ superior_non_ac, superior_ac, residential_ac1, residential_ac2 ],
        description: 'A spacious suite with premium facilities and amenities.',
        amenities: ['Free Wi-Fi', 'King Size Bed', 'Private Balcony', 'Room Service'],
        link: 'https://www.cybozom.site/360/nest5/',
    },
    { 
        roomId: '004', 
        name: 'Residential AC 2', 
        price: 3000, 
        src: residential_ac2,
        images: [ residential_ac2, superior_non_ac, superior_ac, residential_ac1 ],
        description: 'A spacious suite with premium facilities and amenities.',
        amenities: ['Free Wi-Fi', 'King Size Bed', 'Private Balcony', 'Room Service'],
        link: 'https://www.cybozom.site/360/nest5/',
    },
];  