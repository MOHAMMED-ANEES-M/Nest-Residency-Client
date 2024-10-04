import residential_ac1 from '../assets/R0016816.jpg'
import superior_ac from '../assets/R0016822.jpg'
import superior_non_ac from '../assets/R0016822.jpg'
import residential_ac2 from '../assets/R0016816.jpg'

export const roomDetails = [
    { 
        roomType: 'SUPERIOR NON A/C TWIN', 
        src: residential_ac1, 
        images: [ residential_ac1, residential_ac2, superior_ac, superior_non_ac ],
        description: 'A luxurious room with all amenities and a great view.',
        amenities: ['Free Wi-Fi', 'Breakfast Included', 'AC', 'Room Service'], 
        link: 'https://www.cybozom.site/360/nest5/',
    },
    { 
        roomType: 'SUPERIOR A/C TWIN', 
        src: superior_ac ,
        images: [ superior_ac, residential_ac1, residential_ac2, superior_non_ac ],
        description: 'A spacious suite with premium facilities and amenities.',
        amenities: ['Free Wi-Fi', 'King Size Bed', 'Private Balcony', 'Room Service'],
        link: 'https://www.cybozom.site/360/nest5/',
    },
    { 
        roomType: 'SUPERIOR A/C KING', 
        src: residential_ac1, 
        images: [ residential_ac1, residential_ac2, superior_ac, superior_non_ac ],
        description: 'A luxurious room with all amenities and a great view.',
        amenities: ['Free Wi-Fi', 'Breakfast Included', 'AC', 'Room Service'], 
        link: 'https://www.cybozom.site/360/nest5/',
    },
    { 
        roomType: 'RESIDENTIAL A/C TWIN', 
        src: superior_ac ,
        images: [ superior_ac, residential_ac1, residential_ac2, superior_non_ac ],
        description: 'A spacious suite with premium facilities and amenities.',
        amenities: ['Free Wi-Fi', 'King Size Bed', 'Private Balcony', 'Room Service'],
        link: 'https://www.cybozom.site/360/nest5/',
    },
    { 
        roomType: 'RESIDENTIAL A/C KING', 
        src: superior_ac ,
        images: [ superior_ac, residential_ac1, residential_ac2, superior_non_ac ],
        description: 'A spacious suite with premium facilities and amenities.',
        amenities: ['Free Wi-Fi', 'King Size Bed', 'Private Balcony', 'Room Service'],
        link: 'https://www.cybozom.site/360/nest5/',
    },
]