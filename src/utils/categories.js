import Oxygen from '../assets/OXYGEN.png';
import Ambulance from '../assets/AMBULANCE.png';
import Online from '../assets/DOCTOR.png';
import Hospital from '../assets/HOSPITAL.png';
import Medicines from '../assets/MEDICINE.png';
import Blood from '../assets/BLOOD.png';
import Aid from '../assets/aid.png';


const categories = {
    'hospital': { 
        image: Hospital, 
        data: [
            'beds',
            'oxygen-beds',
            'ventilator',
            'home-ICUs'
        ],
        label: 'Hospitals / Home ICUs'
    },
    'services': { 
        image: Ambulance, 
        data: ['ambulance', 'creamation', 'nursing'],
        label: 'Ambulances / Nursing / Cremation Services'
    },
    'oxygen': {
        image: Oxygen,
        data: [
            'cylinder',
            'cans',
            'concentrators',
            'langar',
            'refill',
            'kits'
        ],
        label: 'Oxygen'
    },
    'medicines': {
        image: Medicines,
        data: [
            'tocilizumab',
            'remdesivir',
            'fabiflu',
            'liposomal-amphotericin',
            'other'
        ],
        label: 'Medicines / Injections'
    },
    'online': {
        image: Online,
        data: [
            'consultation',
            'counselling'
        ],
        label: 'Online Consultation / Counselling'
    },
    'donation': { 
        image: Blood, 
        data: ['blood', 'plasma'],
        label: 'Blood / Plasma Banks'
    },
    'financial': {
        image: Aid,
        data: [
            'aid'
        ],
        label: 'Financial Aid'
    }
};

export default categories