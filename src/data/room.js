import superior_non_ac1 from '../assets/rooms/superior_non_ac_nest.jpg'
import superior_non_ac2 from '../assets/rooms/superior_non_ac2_nest.jpg'
import superior_ac_king1 from '../assets/rooms/superior_ac_king1.jpg'
import superior_ac_king2 from '../assets/rooms/superior_ac_king2.jpg'
import superior_ac_king3 from '../assets/rooms/superior_ac_king3.jpg'
import superior_ac_twin1 from '../assets/rooms/superior_ac_twin1.jpg'
import superior_ac_twin2 from '../assets/rooms/superior_ac_twin2.jpg'
import residential_ac_twin1 from '../assets/rooms/residential_ac_twin1.jpg'
import residential_ac_twin2 from '../assets/rooms/residential_ac_twin2.jpg'
import residential_ac_king1 from '../assets/rooms/residential_ac_king1.jpg'
import residential_ac_king2 from '../assets/rooms/residential_ac_king2.jpg'

export const roomDetails = [
    { 
        roomType: 'SUPERIOR NON A/C TWIN', 
        src: superior_non_ac1, 
        images: [ superior_non_ac1, superior_non_ac2 ],
        description: 'A luxurious room with all amenities and a great view.',
        amenities: ['Free Wi-Fi', 'TV', 'Room Service'], 
        link: 'https://www.cybozom.site/360/nest5/',
    },
    { 
        roomType: 'SUPERIOR A/C TWIN', 
        src: superior_ac_twin1 ,
        images: [ superior_ac_twin2, superior_ac_twin1 ],
        description: 'A spacious suite with premium facilities and amenities.',
        amenities: ['Free Wi-Fi', 'TV', 'Room Service'],
        link: 'https://www.cybozom.site/360/nest5/',
    },
    { 
        roomType: 'SUPERIOR A/C KING', 
        src: superior_ac_king1, 
        images: [ superior_ac_king1, superior_ac_king2, superior_ac_king3 ],
        description: 'A luxurious room with all amenities and a great view.',
        amenities: ['Free Wi-Fi', 'TV', 'Room Service'], 
        link: 'https://www.cybozom.site/360/nest5/',
    },
    { 
        roomType: 'RESIDENTIAL A/C TWIN', 
        src: residential_ac_twin1 ,
        images: [ residential_ac_twin1, residential_ac_twin2 ],
        description: 'A spacious suite with premium facilities and amenities.',
        amenities: ['Free Wi-Fi', 'Semi Kitchen', 'Mini Fridge',  'TV', 'Room Service'],
        link: 'https://www.cybozom.site/360/nest5/',
    },
    { 
        roomType: 'RESIDENTIAL A/C KING', 
        src: residential_ac_king1 ,
        images: [ residential_ac_king1, residential_ac_king2 ],
        description: 'A spacious suite with premium facilities and amenities.',
        amenities: ['Free Wi-Fi', 'Semi Kitchen', 'Mini Fridge',  'TV', 'Room Service'],
        link: 'https://www.cybozom.site/360/nest5/',
    },
]