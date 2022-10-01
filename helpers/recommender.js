
class recommender{
    
    shsprogram="";
    interest="";
    strength_electives="";
    availablePrograms=[];

    constructor(shsprogram,interest,strength_electives){
        this.shsprogram=shsprogram;
        this.interest=interest;
        this.electives=strength_electives;
    }

    recommend(){

    }
    

}

class Labeller{
    science= {
        biology:[
            'Doctor of Optometry',
            '(DVM) Doctor of Veterinary Medicine',
            'BSc Environmental Sciences',
            'BSc Food Science and Technology',
            'BSc Biochemistry',
            'BSc Biological Science',
        ],
        emaths:[
            'BSc Actuarial Science',
            'BSc Physics',
            'BSc Statistics',
            'BSc Computer Science',
            'BSc Mathematics'
        ],
        physics:[
            'BSc Meteorology and Climate Science',
            'BSc Physics',
            'BSc Statistics',
            'BSc Computer Science',
            'BSc Mathematics',
            'BSc Actuarial Science'
        ],
        chemistry:[
            'Doctor of Optometry',
            '(DVM) Doctor of Veterinary Medicine',
            'BSc Biochemistry',
            'BSc Biological Science',
            'BSc Environmental Sciences',
            'BSc Food Science and Technology',
            'BSc Meteorology and Climate Science',
            'BSc Physics',
        ],
        it:[
            'BSc Computer Science',
            'BSc Mathematics',
            'BSc Actuarial Science'
        ]
    };
    hesa={
        biology:[
            'BSc BDS (Dental Surgery) (Fee-Paying Only)',
            'BSc Disability and Rehabilitation Studies',
            'BSc Human Biology (Medicine)',
            'BSc Medical Laboratory Technology',
            'BSc Midwifery',
            'BSc Nursing',
            'BSc Medical Imaging',
            'Pharm D (Doctor of Pharmacy)',
            'BSc Herbal Medicine',
            'BSc Physician Assistantship',
            'BSc Physiotherapy and Sports Science',
        ],
        physics:[
            'BSc Medical Imaging',
            'BSc Medical Laboratory Technology',
            'BSc Physiotherapy and Sports Science'
        ],
        chemistry:[
            'BSc BDS (Dental Surgery) (Fee-Paying Only)',
            'BSc Disability and Rehabilitation Studies',
            'BSc Human Biology (Medicine)',
            'BSc Medical Laboratory Technology',
            'BSc Midwifery',
            'BSc Nursing',
            'BSc Medical Imaging',
            'Pharm D (Doctor of Pharmacy)',
            'BSc Herbal Medicine',
            'BSc Physician Assistantship',
            'BSc Physiotherapy and Sports Science' 
        ],
        emaths:[
            'BSc Medical Imaging',
            'BSc Medical Laboratory Technology',
            'BSc Physiotherapy and Sports Science'
 
        ]
    };
    engineering={
    physics:[
        'BSc Aerospace Engineering',
        'BSc Chemical Engineering',
        'BSc Civil Engineering',
        'BSc Computer Engineering',
        'BSc Geological Engineering',
        'BSc Geomatic (Geodetic) Engineering',
        'BSc Industrial Engineering',
        'BSc Materials Engineering',
        'BSc Mechanical Engineering',
        'BSc Metallurgical Engineering',
        'BSc Petrochemical Engineering',
        'BSc Petroleum Engineering',
        'BSc Telecommunication Engineering',
        'BSc Automobile Engineering',
        'BSc Electrical/Electronic Engineering',
        'BSc Marine Engineering',
    ],
    chemistry:[
        'BSc Petrochemical Engineering',
        'BSc Petroleum Engineering',
        'BSc Chemical Engineering',
        'BSc Agricultural Engineering',
        'BSc Biomedical Engineering',
        'BSc Civil Engineering',
        'BSc Geological Engineering',
        'BSc Geomatic (Geodetic) Engineering',
        'BSc Industrial Engineering',
        'BSc Materials Engineering',
        'BSc Metallurgical Engineering',
        'BSc Marine Engineering',
    ],
    emaths:[
        'BSc Civil Engineering',
        'BSc Aerospace Engineering',
        'BSc Computer Engineering',
        'BSc Geological Engineering',
        'BSc Geomatic (Geodetic) Engineering',
        'BSc Industrial Engineering',
        'BSc Materials Engineering',
        'BSc Mechanical Engineering',
        'BSc Metallurgical Engineering',
        'BSc Petrochemical Engineering',
        'BSc Petroleum Engineering',
        'BSc Telecommunication Engineering',
        'BSc Automobile Engineering',
        'BSc Electrical/Electronic Engineering',
        'BSc Marine Engineering',
    ],

    biology:[ 'BSc Biomedical Engineering',
              'BSc Agricultural Engineering',
              'BSc Marine Engineering',
              'BSc Geological Engineering',
              'BSc Geomatic (Geodetic) Engineering',
              'BSc Materials Engineering',
              'BSc Marine Engineering',
        ],
    it:[
        'BSc Computer Engineering',
        'BSc Aerospace Engineering',
        'BSc Telecommunication Engineering',
        'BSc Industrial Engineering',
        'BSc Materials Engineering',
        'BSc Electrical/Electronic Engineering',
    ]
    };
    natu={
        biology:['BSc Agribusiness Management',
        'BSc Agricultural Biotechnology',
        'BSc Agriculture',
        'BSc Aquaculture and Water Resources Management',
        'BSc Forest Resources Technology',
        'BSc Landscape Design and Management',
        'BSc Natural Resources Management',
        'Bsc. Packaging Technology'
        ],

        physics:[
        'BSc Landscape Design and Management',
        'BSc Agricultural Biotechnology',
        'BSc Forest Resources Technology',
        'Bsc. Packaging Technology'
        ],

        chemistry:[
        'BSc Agribusiness Management',
        'BSc Agricultural Biotechnology',
        'BSc Agriculture',
        'BSc Aquaculture and Water Resources Management',
        'BSc Forest Resources Technology',
        'BSc Landscape Design and Management',
        'BSc Natural Resources Management',
        'Bsc. Packaging Technology'
        ],
        emaths:[
            'BSc Agribusiness Management',
            'BSc Agricultural Biotechnology',
            'BSc Agriculture',
            'BSc Aquaculture and Water Resources Management',
            'BSc Forest Resources Technology',
            'BSc Landscape Design and Management',
            'BSc Natural Resources Management',
            'Bsc. Packaging Technology'        
        ],
        animalscience:['BSc Agribusiness Management',
        'BSc Agricultural Biotechnology',
        'BSc Agriculture',
        'BSc Aquaculture and Water Resources Management',
        'BSc Forest Resources Technology',
        'BSc Landscape Design and Management',
        'BSc Natural Resources Management',
        'Bsc. Packaging Technology'
    ],

        cropscience:['BSc Agribusiness Management',
        'BSc Agricultural Biotechnology',
        'BSc Agriculture',
        'BSc Aquaculture and Water Resources Management',
        'BSc Forest Resources Technology',
        'BSc Landscape Design and Management',
        'BSc Natural Resources Management',
        'Bsc. Packaging Technology'
    ],
        
        generalagric:['BSc Agribusiness Management',
        'BSc Agricultural Biotechnology',
        'BSc Agriculture',
        'BSc Aquaculture and Water Resources Management',
        'BSc Forest Resources Technology',
        'BSc Landscape Design and Management',
        'BSc Natural Resources Management',
        'Bsc. Packaging Technology'
    ],
        governement:[
        'BSc Agribusiness Management',
        'BSc Agriculture',
        'BSc Natural Resources Management',
        'BSc Aquaculture and Water Resources Management',
        'BSc Landscape Design and Management',
        'Bsc. Packaging Technology' 
        ],

        economics:[
            'BSc Agribusiness Management',
            'BSc Agriculture',
            'BSc Natural Resources Management',
            'BSc Aquaculture and Water Resources Management',
            'BSc Landscape Design and Management',
            'Bsc. Packaging Technology' 
        ],
        geography:[
        'BSc Agribusiness Management',
        'BSc Agricultural Biotechnology',
        'BSc Agriculture',
        'BSc Aquaculture and Water Resources Management',
        'BSc Forest Resources Technology',
        'BSc Landscape Design and Management',
        'BSc Natural Resources Management',
        'Bsc. Packaging Technology'
        
        ],
        gka:[
            'BSc Agribusiness Management',
            'BSc Agriculture',
            'BSc Natural Resources Management',
            'BSc Aquaculture and Water Resources Management',
            'BSc Landscape Design and Management',
            'Bsc. Packaging Technology' 
        ],
        twi:[ 'BSc Agribusiness Management',
        'BSc Agriculture',
        'BSc Natural Resources Management',
        'BSc Aquaculture and Water Resources Management',
        'BSc Landscape Design and Management',
        'Bsc. Packaging Technology' 
    ],
        french:[ 'BSc Agribusiness Management',
        'BSc Agriculture',
        'BSc Natural Resources Management',
        'BSc Aquaculture and Water Resources Management',
        'BSc Landscape Design and Management',
        'Bsc. Packaging Technology' 
    ],
        lit:[ 'BSc Agribusiness Management',
        'BSc Agriculture',
        'BSc Natural Resources Management',
        'BSc Aquaculture and Water Resources Management',
        'BSc Landscape Design and Management',
        'Bsc. Packaging Technology' 
    ],
        td:[ 'BSc Agribusiness Management',
        'BSc Agriculture',
        'BSc Natural Resources Management',
        'BSc Aquaculture and Water Resources Management',
        'BSc Landscape Design and Management',
        'BSc Agricultural Biotechnology',
        'BSc Forest Resources Technology',
        'Bsc. Packaging Technology' 
    ],
    picturemaking:['Bsc. Packaging Technology'],
    textiles:['Bsc. Packaging Technology'],
    graphics:['Bsc. Packaging Technology'],
    sculpture:['Bsc. Packaging Technology'],
    leather:['Bsc. Packaging Technology']
    }
    artsandbuilt={
        physics:['BSc Architecture',
        'BSc Construction Technology and Management',
        'BSc Quantity Surveying and Construction Economics',
        'BSc Human Settlement Planning',
        'BSc Land Economy',
        'BSc Real Estate',
        'BSc Ceramics Design Technology',
        'BSc Metalsmithing and Jewellery Technology',
        'BEd. Junior High School Specialism',
        'BA Publishing Studies',    
    ],
        emaths:[
        'BSc Architecture',
        'BSc Construction Technology and Management',
        'BSc Quantity Surveying and Construction Economics',
        'BSc Human Settlement Planning',
        'BSc Land Economy',
        'BSc Real Estate',
        'BSc Ceramics Design Technology',
        'BSc Metalsmithing and Jewellery Technology',
        'BEd. Junior High School Specialism',
        'BA Publishing Studies',
        ],
        chemistry:[
        'BSc Ceramics Design Technology',
        'BSc Metalsmithing and Jewellery Technology',
        'BSc Textile Design and Technology',
        'BSc Construction Technology and Management',
        'BSc Human Settlement Planning',
        'BSc Land Economy',
        'BSc Quantity Surveying and Construction Economics',
        'BSc Real Estate',
        'BA Communication Design (Graphic Design)',
        'BA Communication Studies',
        'BA Integrated Rural Art and Industry',
        'BFA Painting and Sculpture',
        'BA Publishing Studies',

        ],
        biology:[
            'BSc Real Estate',
            'BSc Human Settlement Planning',
            'BSc Land Economy',
            'BA Communication Design (Graphic Design)',
            'BA Communication Studies',
            'BA Integrated Rural Art and Industry',
            'BFA Painting and Sculpture',
            'BA Publishing Studies',
            'BEd. Junior High School Specialism',

        ],
        it:[
            'BA Publishing Studies',
            'BA Communication Design (Graphic Design)',
            'BSc Real Estate',
            'BEd. Junior High School Specialism',
            'BSc Ceramics Design Technology',
            'BSc Metalsmithing and Jewellery Technology',
            'BA Communication Studies',
            'BA Integrated Rural Art and Industry',

        ],

        governement:[
            'BSc Construction Technology and Management',
            'BSc Human Settlement Planning',
            'BSc Land Economy',
            'BSc Quantity Surveying and Construction Economics',
            'BSc Real Estate',
            'BEd. Junior High School Specialism',
            'BA Communication Design (Graphic Design)',
            'BA Communication Studies',
            'BA Integrated Rural Art and Industry',
            'BFA Painting and Sculpture',
            'BA Publishing Studies',
            'BSc Architecture',
            'BSc Fashion Design',
            'BSc Ceramics Design Technology',
            'BSc Metalsmithing and Jewellery Technology',
            'BSc Textile Design and Technology',

        ],
        econs:['BSc Construction Technology and Management',
        'BSc Human Settlement Planning',
        'BSc Land Economy',
        'BSc Quantity Surveying and Construction Economics',
        'BSc Real Estate',
        'BEd. Junior High School Specialism',
        'BA Communication Design (Graphic Design)',
        'BA Communication Studies',
        'BA Integrated Rural Art and Industry',
        'BFA Painting and Sculpture',
        'BA Publishing Studies',
        'BSc Architecture',
        'BSc Fashion Design',
        'BSc Ceramics Design Technology',
        'BSc Metalsmithing and Jewellery Technology',
        'BSc Textile Design and Technology',
        ],
        geography:['BSc Construction Technology and Management',
        'BSc Human Settlement Planning',
        'BSc Land Economy',
        'BSc Quantity Surveying and Construction Economics',
        'BSc Real Estate',
        'BEd. Junior High School Specialism',
        'BA Communication Design (Graphic Design)',
        'BA Communication Studies',
        'BA Integrated Rural Art and Industry',
        'BFA Painting and Sculpture',
        'BA Publishing Studies',
        'BSc Architecture',
        'BSc Fashion Design',
        'BSc Ceramics Design Technology',
        'BSc Metalsmithing and Jewellery Technology',
        'BSc Textile Design and Technology',
        ],

        gka:[
            'BA Communication Design (Graphic Design)',
        'BA Communication Studies',
        'BA Integrated Rural Art and Industry',
      
        'BA Publishing Studies',
        'BEd. Junior High School Specialism',
        'BSc Fashion Design',
       

        ],
        twi:['BA Communication Design (Graphic Design)',
        'BA Communication Studies',
        'BA Integrated Rural Art and Industry',
       
        'BA Publishing Studies',
        'BEd. Junior High School Specialism',
        'BSc Fashion Design',
        

        ],
        french:[
            'BA Communication Design (Graphic Design)',
        'BA Communication Studies',
        'BA Integrated Rural Art and Industry',
        
        'BA Publishing Studies',
        'BEd. Junior High School Specialism',
        'BSc Fashion Design',
        

        ],
        lit:[
            'BA Communication Design (Graphic Design)',
        'BA Communication Studies',
        'BA Integrated Rural Art and Industry',
        'BA Publishing Studies',
        'BEd. Junior High School Specialism',
        'BSc Fashion Design',
       
        ],
        picturemaking:['BA Integrated Rural Art and Industry',
        'BFA Painting and Sculpture',
        'BA Publishing Studies',
        'BSc Fashion Design',
        'BSc Ceramics Design Technology',
        'BSc Metalsmithing and Jewellery Technology',
        'BSc Textile Design and Technology',
        'BEd. Junior High School Specialism',
        ],
        textiles:[
        'BSc Textile Design and Technology',
        'BA Integrated Rural Art and Industry',
        'BFA Painting and Sculpture',
        'BA Publishing Studies',
        'BSc Fashion Design',
        'BSc Ceramics Design Technology',
        'BSc Metalsmithing and Jewellery Technology',
        'BEd. Junior High School Specialism',
        ],
        graphics:[
            'BA Communication Design (Graphic Design)',
            'BA Communication Studies',
            'BA Integrated Rural Art and Industry',
            'BFA Painting and Sculpture',
            'BA Publishing Studies',
            'BSc Fashion Design',
            'BSc Ceramics Design Technology',
            'BSc Metalsmithing and Jewellery Technology',
            'BSc Textile Design and Technology',
            'BEd. Junior High School Specialism',
        ],
        leather:['BA Integrated Rural Art and Industry',
        'BFA Painting and Sculpture',
        'BA Publishing Studies',
        'BSc Fashion Design',
        'BSc Ceramics Design Technology',
        'BSc Metalsmithing and Jewellery Technology',
        'BSc Textile Design and Technology',
        'BEd. Junior High School Specialism',
        ],
        sculpture:['BA Integrated Rural Art and Industry',
        'BFA Painting and Sculpture',
        'BA Publishing Studies',
        'BSc Fashion Design',
        'BSc Ceramics Design Technology',
        'BSc Metalsmithing and Jewellery Technology',
        'BSc Textile Design and Technology',
        'BEd. Junior High School Specialism',
        ],

        buildingconstruction:[
            'BSc Architecture',
            'BSc Construction Technology and Management',
            'BSc Land Economy',
            'BSc Quantity Surveying and Construction Economics',
            'BSc Real Estate',
            'BSc Human Settlement Planning',
            'BEd. Junior High School Specialism',
            'BSc Metalsmithing and Jewellery Technology',
            'BSc Textile Design and Technology',
            'BSc Fashion Design',
            'BSc Ceramics Design Technology',
            'BA Publishing Studies',

        ],
        wood:[
            'BSc Land Economy',
            'BSc Quantity Surveying and Construction Economics',
            'BSc Real Estate',
            'BA Communication Design (Graphic Design)',
            'BA Communication Studies',
            'BA Integrated Rural Art and Industry',
            'BFA Painting and Sculpture',
            'BA Publishing Studies',

        ],
        technicaldrawing:[
            'BSc Architecture',
            'BSc Construction Technology and Management',
            'BSc Land Economy',
            'BSc Quantity Surveying and Construction Economics',
            'BSc Real Estate',
            'BSc Human Settlement Planning',
            'BEd. Junior High School Specialism',
            'BSc Metalsmithing and Jewellery Technology',
            'BSc Textile Design and Technology',
            'BSc Fashion Design',
            'BSc Ceramics Design Technology',
            'BA Publishing Studies',

        ]
    }
    humanities={
        
    }
}