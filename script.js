// 1. SUBJECTS DATABASE AND CURRICULUM SCHEMAS
const BRANCHES = {
    "cse": "Computer Science Engineering",
    "aids": "Artificial Intelligence and Data Science",
    "eee": "Electrical and Electronics Engineering",
    "ece": "Electronics and Communication Engineering",
    "civil": "Civil Engineering",
    "mech": "Mechanical Engineering"
};

// Main subject catalog containing Regulation 2021 Computer Science Engineering
const SUBJECT_SCHEMAS = {
    "2021": {
        "cse": {
            1: [
                { code: "HS3152", name: "Professional English – I", credits: 3 },
                { code: "MA3151", name: "Matrices and Calculus", credits: 4 },
                { code: "PH3151", name: "Engineering Physics", credits: 3 },
                { code: "CY3151", name: "Engineering Chemistry", credits: 3 },
                { code: "GE3151", name: "Problem Solving and Python Programming", credits: 3 },
                { code: "GE3152", name: "தமிழர்மரபு (Heritage of Tamils)", credits: 1 },
                { code: "GE3171", name: "Problem Solving and Python Programming Laboratory", credits: 2 },
                { code: "BS3171", name: "Physics and Chemistry Laboratory", credits: 2 },
                { code: "GE3172", name: "English Laboratory", credits: 1 }
            ],
            2: [
                { code: "HS3252", name: "Professional English – II", credits: 2 },
                { code: "MA3251", name: "Statistics and Numerical Methods", credits: 4 },
                { code: "PH3256", name: "Physics for Information Science", credits: 3 },
                { code: "BE3251", name: "Basic Electrical and Electronics Engineering", credits: 3 },
                { code: "GE3251", name: "Engineering Graphics", credits: 4 },
                { code: "CS3251", name: "Programming in C", credits: 3 },
                { code: "GE3252", name: "தமிழரும் தொழில்நுட்பமும் (Tamils and Technology)", credits: 1 },
                { code: "GE3271", name: "Engineering Practices Laboratory", credits: 2 },
                { code: "CS3271", name: "Programming in C Laboratory", credits: 2 },
                { code: "GE3272", name: "Communication Laboratory", credits: 2 }
            ],
            3: [
                { code: "MA3354", name: "Discrete Mathematics", credits: 4 },
                { code: "CS3351", name: "Digital Principles and Computer Organization", credits: 4 },
                { code: "CS3352", name: "Foundations of Data Science", credits: 3 },
                { code: "CS3301", name: "Data Structures", credits: 3 },
                { code: "CS3391", name: "Object Oriented Programming", credits: 3 },
                { code: "CS3311", name: "Data Structures Laboratory", credits: 1.5 },
                { code: "CS3381", name: "Object Oriented Programming Laboratory", credits: 1.5 },
                { code: "CS3361", name: "Data Science Laboratory", credits: 2 },
                { code: "GE3361", name: "Professional Development", credits: 1 }
            ],
            4: [
                { code: "CS3452", name: "Theory of Computation", credits: 3 },
                { code: "CS3491", name: "Artificial Intelligence and Machine Learning", credits: 4 },
                { code: "CS3492", name: "Database Management Systems", credits: 3 },
                { code: "CS3401", name: "Algorithms", credits: 4 },
                { code: "CS3451", name: "Introduction to Operating Systems", credits: 3 },
                { code: "GE3451", name: "Environmental Sciences and Sustainability", credits: 2 },
                { code: "CS3461", name: "Operating Systems Laboratory", credits: 1.5 },
                { code: "CS3481", name: "Database Management Systems Laboratory", credits: 1.5 }
            ],
            5: [
                { code: "CS3591", name: "Computer Networks", credits: 4 },
                { code: "CS3501", name: "Compiler Design", credits: 4 },
                { code: "CB3491", name: "Cryptography and Cyber Security", credits: 3 },
                { code: "CS3551", name: "Distributed Computing", credits: 3 },
                { code: "PE3501", name: "Professional Elective I", credits: 3 },
                { code: "PE3502", name: "Professional Elective II", credits: 3 },
                { code: "MC3501", name: "Mandatory Course I", credits: 0 }
            ],
            6: [
                { code: "CCS356", name: "Object Oriented Software Engineering", credits: 4 },
                { code: "CS3691", name: "Embedded Systems and IoT", credits: 4 },
                { code: "OE3601", name: "Open Elective I", credits: 3 },
                { code: "PE3601", name: "Professional Elective III", credits: 3 },
                { code: "PE3602", name: "Professional Elective IV", credits: 3 },
                { code: "PE3603", name: "Professional Elective V", credits: 3 },
                { code: "PE3604", name: "Professional Elective VI", credits: 3 },
                { code: "MC3601", name: "Mandatory Course II", credits: 0 }
            ],
            7: [
                { code: "GE3791", name: "Human Values and Ethics", credits: 2 },
                { code: "ME3701", name: "Management Elective", credits: 3 },
                { code: "OE3701", name: "Open Elective II", credits: 3 },
                { code: "OE3702", name: "Open Elective III", credits: 3 },
                { code: "OE3703", name: "Open Elective IV", credits: 3 },
                { code: "CS3711", name: "Summer Internship", credits: 2 }
            ],
            8: [
                { code: "CS3811", name: "Project Work / Internship", credits: 10 }
            ]
        },

        // ----- Artificial Intelligence and Data Science -----
        "aids": {
            1: [
                { code: "HS3152", name: "Professional English – I", credits: 3 },
                { code: "MA3151", name: "Matrices and Calculus", credits: 4 },
                { code: "PH3151", name: "Engineering Physics", credits: 3 },
                { code: "CY3151", name: "Engineering Chemistry", credits: 3 },
                { code: "GE3151", name: "Problem Solving and Python Programming", credits: 3 },
                { code: "GE3152", name: "தமிழர்மரபு (Heritage of Tamils)", credits: 1 },
                { code: "GE3171", name: "Problem Solving and Python Programming Laboratory", credits: 2 },
                { code: "BS3171", name: "Physics and Chemistry Laboratory", credits: 2 },
                { code: "GE3172", name: "English Laboratory", credits: 1 }
            ],
            2: [
                { code: "HS3252", name: "Professional English – II", credits: 2 },
                { code: "MA3251", name: "Statistics and Numerical Methods", credits: 4 },
                { code: "PH3256", name: "Physics for Information Science", credits: 3 },
                { code: "BE3251", name: "Basic Electrical and Electronics Engineering", credits: 3 },
                { code: "GE3251", name: "Engineering Graphics", credits: 4 },
                { code: "AD3251", name: "Data Structures Design", credits: 3 },
                { code: "GE3252", name: "தமிழரும் தொழில்நுட்பமும் (Tamils and Technology)", credits: 1 },
                { code: "GE3271", name: "Engineering Practices Laboratory", credits: 2 },
                { code: "AD3271", name: "Data Structures Design Laboratory", credits: 2 },
                { code: "GE3272", name: "Communication Laboratory / Foreign Language", credits: 2 }
            ],
            3: [
                { code: "MA3354", name: "Discrete Mathematics", credits: 4 },
                { code: "CS3351", name: "Digital Principles and Computer Organization", credits: 4 },
                { code: "AD3391", name: "Database Design and Management", credits: 3 },
                { code: "AD3351", name: "Design and Analysis of Algorithms", credits: 4 },
                { code: "AD3301", name: "Data Exploration and Visualization", credits: 4 },
                { code: "AL3391", name: "Artificial Intelligence", credits: 3 },
                { code: "AD3381", name: "Database Design and Management Laboratory", credits: 1.5 },
                { code: "AD3311", name: "Artificial Intelligence Laboratory", credits: 1.5 },
                { code: "GE3361", name: "Professional Development", credits: 1 }
            ],
            4: [
                { code: "MA3391", name: "Probability and Statistics", credits: 4 },
                { code: "AL3452", name: "Operating Systems", credits: 4 },
                { code: "AL3451", name: "Machine Learning", credits: 3 },
                { code: "AD3491", name: "Fundamentals of Data Science and Analytics", credits: 3 },
                { code: "CS3591", name: "Computer Networks", credits: 4 },
                { code: "GE3451", name: "Environmental Sciences and Sustainability", credits: 2 },
                { code: "AD3411", name: "Data Science and Analytics Laboratory", credits: 2 },
                { code: "AD3461", name: "Machine Learning Laboratory", credits: 2 }
            ],
            5: [
                { code: "AD3501", name: "Deep Learning", credits: 3 },
                { code: "CW3551", name: "Data and Information Security", credits: 3 },
                { code: "CS3551", name: "Distributed Computing", credits: 3 },
                { code: "CCS334", name: "Big Data Analytics", credits: 3 },
                { code: "PE3501", name: "Professional Elective I", credits: 3 },
                { code: "PE3502", name: "Professional Elective II", credits: 3 },
                { code: "MC3501", name: "Mandatory Course-I", credits: 0 },
                { code: "AD3511", name: "Deep Learning Laboratory", credits: 2 },
                { code: "AD3512", name: "Summer Internship", credits: 2 }
            ],
            6: [
                { code: "CS3691", name: "Embedded Systems and IoT", credits: 4 },
                { code: "OE3601", name: "Open Elective I", credits: 3 },
                { code: "PE3601", name: "Professional Elective III", credits: 3 },
                { code: "PE3602", name: "Professional Elective IV", credits: 3 },
                { code: "PE3603", name: "Professional Elective V", credits: 3 },
                { code: "PE3604", name: "Professional Elective VI", credits: 3 },
                { code: "MC3601", name: "Mandatory Course-II", credits: 0 }
            ],
            7: [
                { code: "GE3791", name: "Human Values and Ethics", credits: 2 },
                { code: "ME3701", name: "Elective – Management", credits: 3 },
                { code: "OE3701", name: "Open Elective II", credits: 3 },
                { code: "OE3702", name: "Open Elective III", credits: 3 },
                { code: "OE3703", name: "Open Elective IV", credits: 3 }
            ],
            8: [
                { code: "AD3811", name: "Project Work / Internship", credits: 10 }
            ]
        },

        // ----- Civil Engineering -----
        "civil": {
            1: [
                { code: "HS3152", name: "Professional English – I", credits: 3 },
                { code: "MA3151", name: "Matrices and Calculus", credits: 4 },
                { code: "PH3151", name: "Engineering Physics", credits: 3 },
                { code: "CY3151", name: "Engineering Chemistry", credits: 3 },
                { code: "GE3151", name: "Problem Solving and Python Programming", credits: 3 },
                { code: "GE3152", name: "தமிழர்மரபு (Heritage of Tamils)", credits: 1 },
                { code: "GE3171", name: "Problem Solving and Python Programming Laboratory", credits: 2 },
                { code: "BS3171", name: "Physics and Chemistry Laboratory", credits: 2 },
                { code: "GE3172", name: "English Laboratory", credits: 1 }
            ],
            2: [
                { code: "HS3252", name: "Professional English – II", credits: 2 },
                { code: "MA3251", name: "Statistics and Numerical Methods", credits: 4 },
                { code: "PH3201", name: "Physics for Civil Engineering", credits: 3 },
                { code: "BE3252", name: "Basic Electrical, Electronics and Instrumentation Engineering", credits: 3 },
                { code: "GE3251", name: "Engineering Graphics", credits: 4 },
                { code: "GE3252", name: "தமிழரும் தொழில்நுட்பமும் (Tamils and Technology)", credits: 1 },
                { code: "GE3271", name: "Engineering Practices Laboratory", credits: 2 },
                { code: "BE3272", name: "Basic Electrical, Electronics and Instrumentation Engineering Laboratory", credits: 2 },
                { code: "GE3272", name: "Communication Laboratory", credits: 2 }
            ],
            3: [
                { code: "MA3351", name: "Transforms and Partial Differential Equations", credits: 4 },
                { code: "ME3351", name: "Engineering Mechanics", credits: 3 },
                { code: "CE3301", name: "Fluid Mechanics", credits: 3 },
                { code: "CE3302", name: "Construction Materials and Technology", credits: 3 },
                { code: "CE3303", name: "Water Supply and Wastewater Engineering", credits: 4 },
                { code: "CE3351", name: "Surveying and Levelling", credits: 3 },
                { code: "CE3361", name: "Surveying and Levelling Laboratory", credits: 1.5 },
                { code: "CE3311", name: "Water and Wastewater Analysis Laboratory", credits: 1.5 },
                { code: "GE3361", name: "Professional Development", credits: 1 }
            ],
            4: [
                { code: "CE3401", name: "Applied Hydraulics Engineering", credits: 4 },
                { code: "CE3402", name: "Strength of Materials", credits: 3 },
                { code: "CE3403", name: "Concrete Technology", credits: 3 },
                { code: "CE3404", name: "Soil Mechanics", credits: 3 },
                { code: "CE3405", name: "Highway and Railway Engineering", credits: 3 },
                { code: "GE3451", name: "Environmental Sciences and Sustainability", credits: 2 },
                { code: "CE3411", name: "Hydraulic Engineering Laboratory", credits: 1.5 },
                { code: "CE3412", name: "Materials Testing Laboratory", credits: 2 },
                { code: "CE3413", name: "Soil Mechanics Laboratory", credits: 1.5 }
            ],
            5: [
                { code: "CE3501", name: "Design of Reinforced Concrete Structural Elements", credits: 3 },
                { code: "CE3502", name: "Structural Analysis I", credits: 3 },
                { code: "CE3503", name: "Foundation Engineering", credits: 3 },
                { code: "PE3501", name: "Professional Elective I", credits: 3 },
                { code: "PE3502", name: "Professional Elective II", credits: 3 },
                { code: "PE3503", name: "Professional Elective III", credits: 3 },
                { code: "MC3501", name: "Mandatory Course-I", credits: 0 },
                { code: "CE3511", name: "Highway Engineering Laboratory", credits: 2 },
                { code: "CE3512", name: "Survey Camp", credits: 1 }
            ],
            6: [
                { code: "CE3601", name: "Design of Steel Structural Elements", credits: 3 },
                { code: "CE3602", name: "Structural Analysis II", credits: 3 },
                { code: "AG3601", name: "Engineering Geology", credits: 3 },
                { code: "PE3601", name: "Professional Elective IV", credits: 3 },
                { code: "PE3602", name: "Professional Elective V", credits: 3 },
                { code: "PE3603", name: "Professional Elective VI", credits: 3 },
                { code: "OE3601", name: "Open Elective – I", credits: 3 },
                { code: "MC3601", name: "Mandatory Course-II", credits: 0 },
                { code: "CE3611", name: "Building Drawing and Detailing Laboratory", credits: 2 }
            ],
            7: [
                { code: "CE3701", name: "Estimation, Costing and Valuation Engineering", credits: 3 },
                { code: "AI3404", name: "Hydrology and Water Resources Engineering", credits: 3 },
                { code: "GE3791", name: "Human Values and Ethics", credits: 2 },
                { code: "GE3752", name: "Total Quality Management", credits: 3 },
                { code: "OE3701", name: "Open Elective – II", credits: 3 },
                { code: "OE3702", name: "Open Elective – III", credits: 3 },
                { code: "OE3703", name: "Open Elective – IV", credits: 3 }
            ],
            8: [
                { code: "CE3811", name: "Project Work / Internship", credits: 10 }
            ]
        },

        // ----- Electronics and Communication Engineering -----
        "ece": {
            1: [
                { code: "HS3152", name: "Professional English – I", credits: 3 },
                { code: "MA3151", name: "Matrices and Calculus", credits: 4 },
                { code: "PH3151", name: "Engineering Physics", credits: 3 },
                { code: "CY3151", name: "Engineering Chemistry", credits: 3 },
                { code: "GE3151", name: "Problem Solving and Python Programming", credits: 3 },
                { code: "GE3152", name: "தமிழர்மரபு (Heritage of Tamils)", credits: 1 },
                { code: "GE3171", name: "Problem Solving and Python Programming Laboratory", credits: 2 },
                { code: "BS3171", name: "Physics and Chemistry Laboratory", credits: 2 },
                { code: "GE3172", name: "English Laboratory", credits: 1 }
            ],
            2: [
                { code: "HS3252", name: "Professional English – II", credits: 2 },
                { code: "MA3251", name: "Statistics and Numerical Methods", credits: 4 },
                { code: "PH3254", name: "Physics for Electronics Engineering", credits: 3 },
                { code: "BE3254", name: "Electrical and Instrumentation Engineering", credits: 3 },
                { code: "GE3251", name: "Engineering Graphics", credits: 4 },
                { code: "EC3251", name: "Circuit Analysis", credits: 4 },
                { code: "GE3252", name: "தமிழரும் தொழில்நுட்பமும் (Tamils and Technology)", credits: 1 },
                { code: "GE3271", name: "Engineering Practices Laboratory", credits: 2 },
                { code: "EC3271", name: "Circuits Analysis Laboratory", credits: 1 },
                { code: "GE3272", name: "Communication Laboratory / Foreign Language", credits: 2 }
            ],
            3: [
                { code: "MA3355", name: "Random Processes and Linear Algebra", credits: 4 },
                { code: "CS3353", name: "C Programming and Data Structures", credits: 3 },
                { code: "EC3354", name: "Signals and Systems", credits: 4 },
                { code: "EC3353", name: "Electronic Devices and Circuits", credits: 3 },
                { code: "EC3351", name: "Control Systems", credits: 3 },
                { code: "EC3352", name: "Digital Systems Design", credits: 4 },
                { code: "EC3361", name: "Electronic Devices and Circuits Laboratory", credits: 1.5 },
                { code: "CS3362", name: "C Programming and Data Structures Laboratory", credits: 1.5 },
                { code: "GE3361", name: "Professional Development", credits: 1 }
            ],
            4: [
                { code: "EC3452", name: "Electromagnetic Fields", credits: 3 },
                { code: "EC3401", name: "Networks and Security", credits: 4 },
                { code: "EC3451", name: "Linear Integrated Circuits", credits: 3 },
                { code: "EC3492", name: "Digital Signal Processing", credits: 4 },
                { code: "EC3491", name: "Communication Systems", credits: 3 },
                { code: "GE3451", name: "Environmental Sciences and Sustainability", credits: 2 },
                { code: "EC3461", name: "Communication Systems Laboratory", credits: 1.5 },
                { code: "EC3462", name: "Linear Integrated Circuits Laboratory", credits: 1.5 }
            ],
            5: [
                { code: "EC3501", name: "Wireless Communication", credits: 4 },
                { code: "EC3552", name: "VLSI and Chip Design", credits: 3 },
                { code: "EC3551", name: "Transmission Lines and RF Systems", credits: 3 },
                { code: "PE3501", name: "Professional Elective I", credits: 3 },
                { code: "PE3502", name: "Professional Elective II", credits: 3 },
                { code: "PE3503", name: "Professional Elective III", credits: 3 },
                { code: "MC3501", name: "Mandatory Course-I", credits: 0 },
                { code: "EC3561", name: "VLSI Laboratory", credits: 2 }
            ],
            6: [
                { code: "ET3491", name: "Embedded Systems and IOT Design", credits: 4 },
                { code: "CS3491", name: "Artificial Intelligence and Machine Learning", credits: 4 },
                { code: "OE3601", name: "Open Elective – I", credits: 3 },
                { code: "PE3601", name: "Professional Elective IV", credits: 3 },
                { code: "PE3602", name: "Professional Elective V", credits: 3 },
                { code: "PE3603", name: "Professional Elective VI", credits: 3 },
                { code: "MC3601", name: "Mandatory Course-II", credits: 0 }
            ],
            7: [
                { code: "GE3791", name: "Human Values and Ethics", credits: 2 },
                { code: "ME3701", name: "Elective – Management", credits: 3 },
                { code: "OE3701", name: "Open Elective – II", credits: 3 },
                { code: "OE3702", name: "Open Elective – III", credits: 3 },
                { code: "OE3703", name: "Open Elective – IV", credits: 3 },
                { code: "EC3711", name: "Summer Internship", credits: 2 }
            ],
            8: [
                { code: "EC3811", name: "Project Work / Internship", credits: 10 }
            ]
        },

        // ----- Electrical and Electronics Engineering -----
        "eee": {
            1: [
                { code: "HS3152", name: "Professional English – I", credits: 3 },
                { code: "MA3151", name: "Matrices and Calculus", credits: 4 },
                { code: "PH3151", name: "Engineering Physics", credits: 3 },
                { code: "CY3151", name: "Engineering Chemistry", credits: 3 },
                { code: "GE3151", name: "Problem Solving and Python Programming", credits: 3 },
                { code: "GE3152", name: "தமிழர்மரபு (Heritage of Tamils)", credits: 1 },
                { code: "GE3171", name: "Problem Solving and Python Programming Laboratory", credits: 2 },
                { code: "BS3171", name: "Physics and Chemistry Laboratory", credits: 2 },
                { code: "GE3172", name: "English Laboratory", credits: 1 }
            ],
            2: [
                { code: "HS3252", name: "Professional English – II", credits: 2 },
                { code: "MA3251", name: "Statistics and Numerical Methods", credits: 4 },
                { code: "PH3202", name: "Physics for Electrical Engineering", credits: 3 },
                { code: "BE3255", name: "Basic Civil and Mechanical Engineering", credits: 3 },
                { code: "GE3251", name: "Engineering Graphics", credits: 4 },
                { code: "EE3251", name: "Electric Circuit Analysis", credits: 4 },
                { code: "GE3252", name: "தமிழரும் தொழில்நுட்பமும் (Tamils and Technology)", credits: 1 },
                { code: "GE3271", name: "Engineering Practices Laboratory", credits: 2 },
                { code: "EE3271", name: "Electric Circuits Laboratory", credits: 2 },
                { code: "GE3272", name: "Communication Laboratory", credits: 2 }
            ],
            3: [
                { code: "MA3303", name: "Probability and Complex Functions", credits: 4 },
                { code: "EE3301", name: "Electromagnetic Fields", credits: 4 },
                { code: "EE3302", name: "Digital Logic Circuits", credits: 3 },
                { code: "EC3301", name: "Electron Devices and Circuits", credits: 3 },
                { code: "EE3303", name: "Electrical Machines – I", credits: 3 },
                { code: "CS3353", name: "C Programming and Data Structures", credits: 3 },
                { code: "EC3311", name: "Electronic Devices and Circuits Laboratory", credits: 1.5 },
                { code: "EE3311", name: "Electrical Machines Laboratory – I", credits: 1.5 },
                { code: "CS3362", name: "C Programming and Data Structures Laboratory", credits: 1.5 },
                { code: "GE3361", name: "Professional Development", credits: 1 }
            ],
            4: [
                { code: "GE3451", name: "Environmental Sciences and Sustainability", credits: 2 },
                { code: "EE3401", name: "Transmission and Distribution", credits: 3 },
                { code: "EE3402", name: "Linear Integrated Circuits", credits: 3 },
                { code: "EE3403", name: "Measurements and Instrumentation", credits: 3 },
                { code: "EE3404", name: "Microprocessor and Microcontroller", credits: 3 },
                { code: "EE3405", name: "Electrical Machines – II", credits: 3 },
                { code: "EE3411", name: "Electrical Machines Laboratory – II", credits: 1.5 },
                { code: "EE3412", name: "Linear and Digital Circuits Laboratory", credits: 1.5 },
                { code: "EE3413", name: "Microprocessor and Microcontroller Laboratory", credits: 1.5 }
            ],
            5: [
                { code: "EE3501", name: "Power System Analysis", credits: 3 },
                { code: "EE3591", name: "Power Electronics", credits: 3 },
                { code: "EE3503", name: "Control Systems", credits: 3 },
                { code: "PE3501", name: "Professional Elective I", credits: 3 },
                { code: "PE3502", name: "Professional Elective II", credits: 3 },
                { code: "PE3503", name: "Professional Elective III", credits: 3 },
                { code: "MC3501", name: "Mandatory Course-I", credits: 0 },
                { code: "EE3511", name: "Power Electronics Laboratory", credits: 1.5 },
                { code: "EE3512", name: "Control and Instrumentation Laboratory", credits: 2 }
            ],
            6: [
                { code: "EE3601", name: "Protection and Switchgear", credits: 3 },
                { code: "EE3602", name: "Power System Operation and Control", credits: 3 },
                { code: "OE3601", name: "Open Elective – I", credits: 3 },
                { code: "PE3601", name: "Professional Elective IV", credits: 3 },
                { code: "PE3602", name: "Professional Elective V", credits: 3 },
                { code: "PE3603", name: "Professional Elective VI", credits: 3 },
                { code: "MC3601", name: "Mandatory Course-II", credits: 0 },
                { code: "EE3611", name: "Power System Laboratory", credits: 1.5 }
            ],
            7: [
                { code: "EE3701", name: "High Voltage Engineering", credits: 3 },
                { code: "GE3791", name: "Human Values and Ethics", credits: 2 },
                { code: "ME3701", name: "Elective – Management", credits: 3 },
                { code: "OE3701", name: "Open Elective – II", credits: 3 },
                { code: "OE3702", name: "Open Elective – III", credits: 3 },
                { code: "OE3703", name: "Open Elective – IV", credits: 3 },
                { code: "PE3701", name: "Professional Elective VII", credits: 3 }
            ],
            8: [
                { code: "EE3811", name: "Project Work / Internship", credits: 10 }
            ]
        },

        // ----- Mechanical Engineering -----
        "mech": {
            1: [
                { code: "HS3152", name: "Professional English – I", credits: 3 },
                { code: "MA3151", name: "Matrices and Calculus", credits: 4 },
                { code: "PH3151", name: "Engineering Physics", credits: 3 },
                { code: "CY3151", name: "Engineering Chemistry", credits: 3 },
                { code: "GE3151", name: "Problem Solving and Python Programming", credits: 3 },
                { code: "GE3152", name: "தமிழர்மரபு (Heritage of Tamils)", credits: 1 },
                { code: "GE3171", name: "Problem Solving and Python Programming Laboratory", credits: 2 },
                { code: "BS3171", name: "Physics and Chemistry Laboratory", credits: 2 },
                { code: "GE3172", name: "English Laboratory", credits: 1 }
            ],
            2: [
                { code: "HS3252", name: "Professional English – II", credits: 2 },
                { code: "MA3251", name: "Statistics and Numerical Methods", credits: 4 },
                { code: "PH3251", name: "Materials Science", credits: 3 },
                { code: "BE3251", name: "Basic Electrical and Electronics Engineering", credits: 3 },
                { code: "GE3251", name: "Engineering Graphics", credits: 4 },
                { code: "GE3252", name: "தமிழரும் தொழில்நுட்பமும் (Tamils and Technology)", credits: 1 },
                { code: "GE3271", name: "Engineering Practices Laboratory", credits: 2 },
                { code: "BE3271", name: "Basic Electrical and Electronics Engineering Laboratory", credits: 2 },
                { code: "GE3272", name: "Communication Laboratory", credits: 2 }
            ],
            3: [
                { code: "MA3351", name: "Transforms and Partial Differential Equations", credits: 4 },
                { code: "ME3351", name: "Engineering Mechanics", credits: 3 },
                { code: "ME3391", name: "Engineering Thermodynamics", credits: 3 },
                { code: "CE3391", name: "Fluid Mechanics and Machinery", credits: 4 },
                { code: "ME3392", name: "Engineering Materials and Metallurgy", credits: 3 },
                { code: "ME3393", name: "Manufacturing Processes", credits: 3 },
                { code: "ME3381", name: "Computer Aided Machine Drawing", credits: 2 },
                { code: "ME3382", name: "Manufacturing Technology Laboratory", credits: 2 },
                { code: "GE3361", name: "Professional Development", credits: 1 }
            ],
            4: [
                { code: "ME3491", name: "Theory of Machines", credits: 3 },
                { code: "ME3451", name: "Thermal Engineering", credits: 4 },
                { code: "ME3492", name: "Hydraulics and Pneumatics", credits: 3 },
                { code: "ME3493", name: "Manufacturing Technology", credits: 3 },
                { code: "CE3491", name: "Strength of Materials", credits: 3 },
                { code: "GE3451", name: "Environmental Sciences and Sustainability", credits: 2 },
                { code: "CE3481", name: "Strength of Materials and Fluid Machinery Laboratory", credits: 2 },
                { code: "ME3461", name: "Thermal Engineering Laboratory", credits: 2 }
            ],
            5: [
                { code: "ME3591", name: "Design of Machine Elements", credits: 4 },
                { code: "ME3592", name: "Metrology and Measurements", credits: 3 },
                { code: "PE3501", name: "Professional Elective I", credits: 3 },
                { code: "PE3502", name: "Professional Elective II", credits: 3 },
                { code: "PE3503", name: "Professional Elective III", credits: 3 },
                { code: "MC3501", name: "Mandatory Course-I", credits: 0 },
                { code: "ME3511", name: "Summer Internship", credits: 1 },
                { code: "ME3581", name: "Metrology and Dynamics Laboratory", credits: 2 }
            ],
            6: [
                { code: "ME3691", name: "Heat and Mass Transfer", credits: 4 },
                { code: "PE3601", name: "Professional Elective IV", credits: 3 },
                { code: "PE3602", name: "Professional Elective V", credits: 3 },
                { code: "PE3603", name: "Professional Elective VI", credits: 3 },
                { code: "PE3604", name: "Professional Elective VII", credits: 3 },
                { code: "OE3601", name: "Open Elective – I", credits: 3 },
                { code: "MC3601", name: "Mandatory Course-II", credits: 0 },
                { code: "ME3681", name: "CAD/CAM Laboratory", credits: 2 },
                { code: "ME3682", name: "Heat Transfer Laboratory", credits: 2 }
            ],
            7: [
                { code: "ME3791", name: "Mechatronics and IoT", credits: 3 },
                { code: "ME3792", name: "Computer Integrated Manufacturing", credits: 3 },
                { code: "GE3791", name: "Human Values and Ethics", credits: 2 },
                { code: "GE3792", name: "Industrial Management", credits: 3 },
                { code: "OE3701", name: "Open Elective – II", credits: 3 },
                { code: "OE3702", name: "Open Elective – III", credits: 3 },
                { code: "OE3703", name: "Open Elective – IV", credits: 3 },
                { code: "ME3781", name: "Mechatronics and IoT Laboratory", credits: 2 },
                { code: "ME3711", name: "Summer Internship", credits: 1 }
            ],
            8: [
                { code: "ME3811", name: "Project Work / Internship", credits: 10 }
            ]
        }
    },

    "2025": {
        "aids": {
            1: [
                { code: "MA25C01", name: "Applied Calculus", credits: 4 },
                { code: "EN25C01", name: "English Essentials – I", credits: 2 },
                { code: "UC25H01", name: "Heritage of Tamils", credits: 1 },
                { code: "PH25C01", name: "Applied Physics – I", credits: 3 },
                { code: "CY25C01", name: "Applied Chemistry – I", credits: 3 },
                { code: "CS25C01", name: "Computer Programming: C", credits: 3 },
                { code: "CS25C03", name: "Essentials of Computing", credits: 3 },
                { code: "ME25C04", name: "Makerspace", credits: 2 },
                { code: "UC25A01", name: "Life Skills for Engineers – I", credits: 1 },
                { code: "UC25A02", name: "Physical Education – I", credits: 1 }
            ],
            2: [
                { code: "MA25C02", name: "Linear Algebra", credits: 4 },
                { code: "EE25C01", name: "Basic Electrical and Electronics Engineering", credits: 3 },
                { code: "CS25C06", name: "Digital Principles and Computer Organization", credits: 4 },
                { code: "UC25H02", name: "Tamils and Technology", credits: 1 },
                { code: "PH25C03", name: "Applied Physics (CSIE) – II", credits: 3 },
                { code: "AD25201", name: "Python for Data Science", credits: 4 },
                { code: "EN25C02", name: "English Essentials – II", credits: 2 },
                { code: "ME25C05", name: "Re-Engineering for Innovation", credits: 2 },
                { code: "UC25A03", name: "Life Skills for Engineers – II", credits: 1 },
                { code: "UC25A04", name: "Physical Education – II", credits: 1 },
                { code: "UC25F01/02/03", name: "Foreign Language (Deutsch/Japanese/Korean – I)", credits: 1 }
            ],
            3: [
                { code: "MA25C08", name: "Discrete Mathematics", credits: 4 },
                { code: "CS25C08", name: "Data Structures", credits: 5 },
                { code: "CS25C09", name: "Java Programming", credits: 5 },
                { code: "AD25C01", name: "Exploratory Data Analysis", credits: 4 },
                { code: "CS25C11", name: "Operating Systems", credits: 4 },
                { code: "SDC-I", name: "Skill Development Course – I", credits: 2 },
                { code: "EN25C03", name: "English Communication Skills Laboratory – I", credits: 1 }
            ],
            4: [
                { code: "MA25C07", name: "Probability and Statistics", credits: 4 },
                { code: "CS25C12", name: "Algorithms", credits: 3 },
                { code: "AD25401", name: "Artificial Intelligence Essentials", credits: 3 },
                { code: "AD25402", name: "Data Privacy and Security", credits: 3 },
                { code: "AD25403", name: "Standards in Artificial Intelligence", credits: 1 },
                { code: "CS25C13", name: "Database Management Systems", credits: 5 },
                { code: "SDC-II", name: "Skill Development Course – II", credits: 2 },
                { code: "EN25C04", name: "English Communication Skills Laboratory – II", credits: 1 }
            ],
            5: [
                { code: "AD25501", name: "Optimisation Techniques", credits: 2 },
                { code: "AD25502", name: "Natural Language Processing", credits: 3 },
                { code: "PE-I", name: "Programme Elective – I", credits: 3 },
                { code: "PE-II", name: "Programme Elective – II", credits: 3 },
                { code: "AD25503", name: "Machine Learning", credits: 4 },
                { code: "CS25C14", name: "Computer Networks", credits: 4 },
                { code: "AD25504", name: "Internet of Things", credits: 3 },
                { code: "SDC-III", name: "Skill Development Course – III", credits: 2 },
                { code: "IOC-I", name: "Industry Oriented Course – I", credits: 1 }
            ],
            6: [
                { code: "CS25C15", name: "Compiler Design", credits: 3 },
                { code: "PE-III", name: "Programme Elective – III", credits: 3 },
                { code: "OE-I", name: "Open Elective", credits: 3 },
                { code: "AD25601", name: "Deep Learning", credits: 4 },
                { code: "AD25602", name: "Image Processing", credits: 3 },
                { code: "AD25603", name: "UI/UX Design and Human Centered Design", credits: 3 },
                { code: "IOC-II", name: "Industry Oriented Course – II", credits: 1 },
                { code: "CS25C16", name: "Full Stack Development Laboratory", credits: 2 },
                { code: "SLC-I", name: "Self-Learning Course", credits: 1 }
            ],
            7: [
                { code: "PE-IV", name: "Programme Elective – IV", credits: 3 },
                { code: "PE-V", name: "Programme Elective – V", credits: 3 },
                { code: "UC25C01", name: "Climate Change and Sustainability", credits: 2 },
                { code: "AD25701", name: "Ethical Hacking and Penetration Testing", credits: 3 },
                { code: "ME25C06", name: "Engineering Entrepreneurship Development", credits: 3 },
                { code: "INT-VII", name: "Summer Internship", credits: 1 }
            ],
            8: [
                { code: "PROJ-VIII", name: "Project Work / Internship cum Project Work", credits: 8 }
            ]
        },
        "civil": {
            1: [
                { code: "MA25C01", name: "Applied Calculus", credits: 4 },
                { code: "CE25C01", name: "Introduction to Civil Engineering", credits: 3 },
                { code: "PH25C01", name: "Applied Physics – I", credits: 3 },
                { code: "CY25C01", name: "Applied Chemistry – I", credits: 3 },
                { code: "ME25C01", name: "Engineering Drawing", credits: 4 },
                { code: "UC25H01", name: "Heritage of Tamils", credits: 1 },
                { code: "EN25C01", name: "English Essentials – I", credits: 2 },
                { code: "CS25C02", name: "Computer Programming: Python", credits: 3 },
                { code: "ME25C04", name: "Makerspace", credits: 2 },
                { code: "UC25A01", name: "Life Skills for Engineers – I", credits: 1 },
                { code: "UC25A02", name: "Physical Education – I", credits: 1 }
            ],
            2: [
                { code: "MA25C02", name: "Linear Algebra", credits: 4 },
                { code: "ME25C02", name: "Engineering Mechanics", credits: 4 },
                { code: "PH25C02", name: "Applied Physics (CE) - II", credits: 3 },
                { code: "EE25C01", name: "Basic Electrical and Electronics Engineering", credits: 3 },
                { code: "CY25C02", name: "Applied Chemistry (CE) – II", credits: 2 },
                { code: "UC25H02", name: "Tamils and Technology", credits: 1 },
                { code: "CE25201", name: "Construction Materials and Technology", credits: 3 },
                { code: "EN25C02", name: "English Essentials – II", credits: 2 },
                { code: "ME25C05", name: "Re-Engineering for innovation", credits: 2 },
                { code: "UC25A03", name: "Life Skills for Engineers – II", credits: 1 },
                { code: "UC25A04", name: "Physical Education – II", credits: 1 },
                { code: "UC25F01/02/03", name: "Foreign Language (Deutsch/Japanese/Korean – I)", credits: 1 }
            ],
            3: [
                { code: "MA25C03", name: "Computational Differential Equations", credits: 4 },
                { code: "CE25C02", name: "Fluid Mechanics and Machinery", credits: 4 },
                { code: "AG25C01", name: "Engineering Geology", credits: 3 },
                { code: "CE25301", name: "Strength of Materials I", credits: 4 },
                { code: "CE25C03", name: "Surveying and Geomatics", credits: 3 },
                { code: "SDC-I", name: "Skill Development Course I", credits: 2 },
                { code: "CE25302", name: "Computer-aided Building Drawing", credits: 2 },
                { code: "CE25C04", name: "Surveying and Geomatics Laboratory", credits: 2 },
                { code: "EN25C03", name: "English Communication Skills Laboratory – I", credits: 1 }
            ],
            4: [
                { code: "CE25401", name: "Strength of Materials II", credits: 3 },
                { code: "CE25402", name: "Soil Mechanics", credits: 3 },
                { code: "CE25C05", name: "Water Supply Engineering", credits: 3 },
                { code: "CE25403", name: "Introduction to Standards in Civil Engineering", credits: 1 },
                { code: "CE25C06", name: "Concrete Technology", credits: 4 },
                { code: "CE25404", name: "Design of Reinforced Cement Concrete Elements", credits: 3 },
                { code: "CE25405", name: "Highway Engineering", credits: 4 },
                { code: "CE25C07", name: "Fluid Mechanics and Machinery Laboratory", credits: 2 },
                { code: "SDC-II", name: "Skill Development Course II", credits: 2 },
                { code: "EN25C04", name: "English Communication Skills Laboratory – II", credits: 1 }
            ],
            5: [
                { code: "CE25501", name: "Structural Analysis - I", credits: 3 },
                { code: "CE25502", name: "Foundation Engineering", credits: 3 },
                { code: "CE25503", name: "Wastewater Engineering", credits: 3 },
                { code: "CE25504", name: "Design of Concrete Structures", credits: 3 },
                { code: "PE-I", name: "Programme Elective I", credits: 3 },
                { code: "PE-II", name: "Programme Elective II", credits: 3 },
                { code: "CE25505", name: "Water and Wastewater Engineering Laboratory", credits: 2 },
                { code: "CE25506", name: "Soil Mechanics Laboratory", credits: 2 },
                { code: "SDC-III", name: "Skill Development Course - III", credits: 2 },
                { code: "IOC-I", name: "Industry Oriented Course - I", credits: 1 }
            ],
            6: [
                { code: "CE25601", name: "Structural Analysis - II", credits: 3 },
                { code: "CE25602", name: "Design of Steel Structures", credits: 3 },
                { code: "CE25603", name: "Railways, Airports and Harbour Engineering", credits: 3 },
                { code: "PE-III", name: "Programme Elective – III", credits: 3 },
                { code: "OE-I", name: "Open Elective", credits: 3 },
                { code: "CE25604", name: "Project Management", credits: 2 },
                { code: "IOC-II", name: "Industry Oriented Course - II", credits: 1 },
                { code: "INT-VI", name: "Summer Internship", credits: 1 },
                { code: "CE25605", name: "Building and Structural Drawing Laboratory", credits: 2 },
                { code: "SLC-I", name: "Self-Learning Course", credits: 1 }
            ],
            7: [
                { code: "CE25701", name: "Engineering Entrepreneurship Development", credits: 3 },
                { code: "UC25C01", name: "Climate Change and Sustainability", credits: 2 },
                { code: "CE25702", name: "Estimation, Costing and Valuation Engineering", credits: 3 },
                { code: "CE25703", name: "Prestressed Concrete Structures", credits: 3 },
                { code: "PE-IV", name: "Programme Elective - IV", credits: 3 },
                { code: "PE-V", name: "Programme Elective - V", credits: 3 },
                { code: "CE25704", name: "Irrigation Engineering and Drawings", credits: 3 },
                { code: "MP-I", name: "Mini Project", credits: 2 }
            ],
            8: [
                { code: "PROJ-VIII", name: "Project Work / Internship cum Project Work (PW/IPW)", credits: 8 }
            ]
        },
        "cse": {
            1: [
                { code: "MA25C01", name: "Applied Calculus", credits: 4 },
                { code: "EN25C01", name: "English Essentials – I", credits: 2 },
                { code: "UC25H01", name: "Heritage of Tamils", credits: 1 },
                { code: "PH25C01", name: "Applied Physics – I", credits: 3 },
                { code: "CY25C01", name: "Applied Chemistry – I", credits: 3 },
                { code: "CS25C01", name: "Computer Programming: C", credits: 3 },
                { code: "CS25C03", name: "Essentials of Computing", credits: 3 },
                { code: "ME25C04", name: "Makerspace", credits: 2 },
                { code: "UC25A01", name: "Life Skills for Engineers – I", credits: 1 },
                { code: "UC25A02", name: "Physical Education – I", credits: 1 }
            ],
            2: [
                { code: "MA25C02", name: "Linear Algebra", credits: 4 },
                { code: "EE25C01", name: "Basic Electrical and Electronics Engineering", credits: 3 },
                { code: "CS25C06", name: "Digital Principles and Computer Organization", credits: 4 },
                { code: "UC25H02", name: "Tamils and Technology", credits: 1 },
                { code: "PH25C03", name: "Applied Physics (CSIE) – II", credits: 3 },
                { code: "CS25C07", name: "Object Oriented Programming", credits: 5 },
                { code: "EN25C02", name: "English Essentials – II", credits: 2 },
                { code: "ME25C05", name: "Re-Engineering for Innovation", credits: 2 },
                { code: "UC25A03", name: "Life Skills for Engineers – II", credits: 1 },
                { code: "UC25A04", name: "Physical Education – II", credits: 1 },
                { code: "UC25F01/02/03", name: "Foreign Language (Deutsch/Japanese/Korean)", credits: 1 }
            ],
            3: [
                { code: "MA25C08", name: "Discrete Mathematics", credits: 4 },
                { code: "CS25C11", name: "Operating Systems", credits: 4 },
                { code: "CS25C10", name: "Object Oriented Software Engineering", credits: 3 },
                { code: "CS25C08", name: "Data Structures", credits: 5 },
                { code: "CS25C09", name: "Java Programming", credits: 5 },
                { code: "EN25C03", name: "English Communication Skills Laboratory – I", credits: 1 },
                { code: "SDC-I", name: "Skill Development Course – I", credits: 2 }
            ],
            4: [
                { code: "MA25C07", name: "Probability and Statistics", credits: 4 },
                { code: "CS25C12", name: "Algorithms", credits: 3 },
                { code: "CS25C14", name: "Theory of Computation", credits: 4 },
                { code: "CS25C15", name: "Standards in Computer Science", credits: 1 },
                { code: "AD25201", name: "Python for Data Science", credits: 4 },
                { code: "CS25C13", name: "Database Management Systems", credits: 5 },
                { code: "SDC-II", name: "Skill Development Course – II", credits: 2 },
                { code: "EN25C04", name: "English Communication Skills Laboratory – II", credits: 1 }
            ],
            5: [
                { code: "CS25501", name: "Computer Networks", credits: 4 },
                { code: "CS25502", name: "Compiler Design", credits: 3 },
                { code: "PE-I", name: "Programme Elective – I", credits: 3 },
                { code: "CS25503", name: "Cryptography and Cyber Security", credits: 4 },
                { code: "CS25504", name: "Artificial Intelligence and Machine Learning", credits: 4 },
                { code: "CS25505", name: "Full Stack Development", credits: 4 },
                { code: "SDC-III", name: "Skill Development Course – III", credits: 2 },
                { code: "IOC-I", name: "Industry Oriented Course - I", credits: 1 }
            ],
            6: [
                { code: "CS25601", name: "Large Language Models", credits: 3 },
                { code: "PE-II", name: "Programme Elective – II", credits: 3 },
                { code: "PE-III", name: "Programme Elective – III", credits: 3 },
                { code: "OE-I", name: "Open Elective", credits: 3 },
                { code: "IOC-II", name: "Industry Oriented Course - II", credits: 1 },
                { code: "CS25602", name: "Deep Learning", credits: 4 },
                { code: "CS25603", name: "Mobile App Development Laboratory", credits: 2 },
                { code: "SLC-I", name: "Self-Learning Course", credits: 1 }
            ],
            7: [
                { code: "UC25C01", name: "Climate Change and Sustainability", credits: 2 },
                { code: "PE-IV", name: "Programme Elective – IV", credits: 3 },
                { code: "PE-V", name: "Programme Elective – V", credits: 3 },
                { code: "ME25C06", name: "Engineering Entrepreneurship Development", credits: 3 },
                { code: "CS25701", name: "Ethical Hacking and Penetration Testing", credits: 3 },
                { code: "INT-VII", name: "Summer Internship", credits: 1 }
            ],
            8: [
                { code: "PROJ-VIII", name: "Project Work / Internship cum Project Work", credits: 8 }
            ]
        },
        "ece": {
            1: [
                { code: "MA25C01", name: "Applied Calculus", credits: 4 },
                { code: "EN25C01", name: "English Essentials – I", credits: 2 },
                { code: "UC25H01", name: "Heritage of Tamils", credits: 1 },
                { code: "EE25C04", name: "Basic Electronics and Electrical Engineering", credits: 3 },
                { code: "PH25C01", name: "Applied Physics - I", credits: 3 },
                { code: "CY25C01", name: "Applied Chemistry - I", credits: 3 },
                { code: "CS25C01", name: "Computer Programming: C", credits: 3 },
                { code: "ME25C04", name: "Makerspace", credits: 2 },
                { code: "UC25A01", name: "Life Skills for Engineers – I", credits: 1 },
                { code: "UC25A02", name: "Physical Education – I", credits: 1 }
            ],
            2: [
                { code: "MA25C02", name: "Linear Algebra", credits: 4 },
                { code: "UC25H02", name: "Tamils and Technology", credits: 1 },
                { code: "EN25C02", name: "English Essentials – II", credits: 2 },
                { code: "EC25C01", name: "Electron Devices", credits: 3 },
                { code: "EC25C02", name: "Circuits and Network Analysis", credits: 3 },
                { code: "CS25C05", name: "Data Structures using C++", credits: 4 },
                { code: "ME25C05", name: "Re-Engineering for Innovation", credits: 2 },
                { code: "UC25A03", name: "Life Skills for Engineers – II", credits: 1 },
                { code: "EC25C03", name: "Devices and Circuits Laboratory", credits: 2 },
                { code: "UC25A04", name: "Physical Education – II", credits: 1 },
                { code: "UC25F01/02/03", name: "Foreign Language (Deutsch/Japanese/Korean)", credits: 1 }
            ],
            3: [
                { code: "MA25C05", name: "Probability, Statistical and Random Processes", credits: 4 },
                { code: "EC25C04", name: "Signals and Systems", credits: 4 },
                { code: "EC25C05", name: "Electronic Circuits and Analysis", credits: 3 },
                { code: "EC25C06", name: "Electro Magnetic Fields and Transmission Lines", credits: 3 },
                { code: "EC25C07", name: "Digital System Design", credits: 3 },
                { code: "EC25C08", name: "Digital System Design Laboratory", credits: 2 },
                { code: "EC25C09", name: "Electronic Circuits Laboratory", credits: 2 },
                { code: "SDC-I", name: "Skill Development Course-I", credits: 2 },
                { code: "EN25C03", name: "English Communication Skills Laboratory – I", credits: 1 }
            ],
            4: [
                { code: "EC25C10", name: "Microcontroller and Peripheral Interfacing", credits: 3 },
                { code: "EC25C11", name: "Analog and Digital Communication", credits: 4 },
                { code: "EC25C12", name: "Control Systems", credits: 3 },
                { code: "EC25401", name: "Artificial Intelligence and Machine Learning", credits: 3 },
                { code: "IOC-I", name: "Industry-Oriented Course - I", credits: 1 },
                { code: "SDC-II", name: "Skill Development Course – II", credits: 2 },
                { code: "EN25C04", name: "English Communication Skills Laboratory – II", credits: 1 },
                { code: "EC25C13", name: "Analog and Digital Communication Laboratory", credits: 2 },
                { code: "EC25C14", name: "Microcontroller and Peripheral Interfacing Laboratory", credits: 2 }
            ],
            5: [
                { code: "UC25C01", name: "Climate Change and Sustainability", credits: 2 },
                { code: "EC25501", name: "Introduction to Standards in Electronics and Communication", credits: 1 },
                { code: "EC25502", name: "Linear Integrated Circuits", credits: 3 },
                { code: "EC25503", name: "Digital Signal Processing", credits: 3 },
                { code: "EC25504", name: "Computer Architecture and Organization", credits: 3 },
                { code: "PE-I", name: "Programme Elective – I", credits: 3 },
                { code: "EC25505", name: "Linear Integrated Circuits Laboratory", credits: 2 },
                { code: "EC25506", name: "Digital Signal Processing Laboratory", credits: 2 },
                { code: "EC25507", name: "Data Communication Networks", credits: 4 },
                { code: "SDC-III", name: "Skill Development Course – III", credits: 2 }
            ],
            6: [
                { code: "PE-II", name: "Programme Elective – II", credits: 3 },
                { code: "PE-III", name: "Programme Elective – III", credits: 3 },
                { code: "OE-I", name: "Open Elective", credits: 3 },
                { code: "EC25601", name: "Antenna Design", credits: 3 },
                { code: "EC25602", name: "VLSI Design", credits: 3 },
                { code: "EC25603", name: "Embedded Technology and IoT", credits: 3 },
                { code: "EC25604", name: "Embedded Technology and IoT Laboratory", credits: 2 },
                { code: "EC25605", name: "VLSI Design Laboratory", credits: 2 },
                { code: "IOC-II", name: "Industry Oriented Course - II", credits: 2 },
                { code: "SLC-I", name: "Self-Learning Course", credits: 1 }
            ],
            7: [
                { code: "ME25C06", name: "Engineering Entrepreneurship Development", credits: 3 },
                { code: "EC25702", name: "Optical and Microwave Engineering", credits: 3 },
                { code: "EC25703", name: "Wireless Communication", credits: 3 },
                { code: "PE-IV", name: "Programme Elective – IV", credits: 3 },
                { code: "PE-V", name: "Programme Elective – V", credits: 3 },
                { code: "EC25704", name: "Wireless Communication Lab", credits: 2 },
                { code: "EC25705", name: "Microwave and Optical Lab", credits: 2 },
                { code: "INT-VII", name: "Summer Internship", credits: 1 }
            ],
            8: [
                { code: "PROJ-VIII", name: "Project Work / Internship cum Project Work", credits: 8 }
            ]
        },
        "eee": {
            1: [
                { code: "MA25C01", name: "Applied Calculus", credits: 4 },
                { code: "EE25C03", name: "Fundamentals of Electrical and Electronics Engineering", credits: 3 },
                { code: "UC25H01", name: "Heritage of Tamils", credits: 1 },
                { code: "EN25C01", name: "English Essentials – I", credits: 2 },
                { code: "PH25C01", name: "Applied Physics – I", credits: 3 },
                { code: "CY25C01", name: "Applied Chemistry – I", credits: 3 },
                { code: "CS25C01", name: "Computer Programming: C", credits: 3 },
                { code: "ME25C04", name: "Makerspace", credits: 2 },
                { code: "UC25A01", name: "Life Skills for Engineers – I", credits: 1 },
                { code: "UC25A02", name: "Physical Education – I", credits: 1 }
            ],
            2: [
                { code: "MA25C03", name: "Transforms and its Applications", credits: 4 },
                { code: "UC25H02", name: "Tamils and Technology", credits: 1 },
                { code: "GE25C01", name: "Basic Civil and Mechanical Engineering", credits: 3 },
                { code: "PH25C04", name: "Applied Physics (EE) – II", credits: 3 },
                { code: "ME25C01", name: "Engineering Drawing", credits: 3 },
                { code: "EN25C02", name: "English Essentials – II", credits: 2 },
                { code: "CS25C04", name: "Data Structures and Algorithms", credits: 4 },
                { code: "ME25C05", name: "Re-Engineering for Innovation", credits: 2 },
                { code: "UC25A03", name: "Life Skills for Engineers – II", credits: 1 },
                { code: "UC25A04", name: "Physical Education – II", credits: 1 },
                { code: "UC25F01/02/03", name: "Foreign Language (Deutsch/Japanese/Korean)", credits: 1 }
            ],
            3: [
                { code: "MA25C04", name: "Matrices for Engineers", credits: 2 },
                { code: "EE25C04", name: "Electromagnetic Theory", credits: 4 },
                { code: "EE25301", name: "Digital Electronics", credits: 3 },
                { code: "EE25302", name: "Electric Circuit Analysis", credits: 3 },
                { code: "EE25C05", name: "Electronic Devices and Circuits", credits: 3 },
                { code: "EE25303", name: "Electric Circuit Laboratory", credits: 1.5 },
                { code: "SDC-I", name: "Skill Development Course – I", credits: 2 },
                { code: "EE25C06", name: "Electronics Laboratory", credits: 1.5 },
                { code: "EN25C03", name: "English Communication Skills Laboratory – I", credits: 1 }
            ],
            4: [
                { code: "MA25C07", name: "Probability and Statistics", credits: 4 },
                { code: "EE25401", name: "Transmission and Distribution", credits: 3 },
                { code: "EE25C07", name: "Control Systems", credits: 3 },
                { code: "EE25C08", name: "Applied Data Science", credits: 3 },
                { code: "EE25402", name: "DC Machines and Transformers", credits: 3 },
                { code: "EE25C09", name: "Linear Integrated Circuits", credits: 3 },
                { code: "SDC-II", name: "Skill Development Course – II", credits: 2 },
                { code: "EN25C04", name: "English Communication Skills Laboratory – II", credits: 1 },
                { code: "EE25403", name: "DC Machines and Transformers Laboratory", credits: 2 },
                { code: "EE25404", name: "Linear Integrated Circuits Laboratory", credits: 2 }
            ],
            5: [
                { code: "PE-I", name: "Programme Elective – I", credits: 3 },
                { code: "PE-II", name: "Programme Elective – II", credits: 3 },
                { code: "EE25501", name: "AC Machines", credits: 3 },
                { code: "EE25502", name: "Power System Analysis", credits: 3 },
                { code: "EE25503", name: "Measurements and Instrumentation", credits: 3 },
                { code: "SDC-III", name: "Skill Development Course – III", credits: 2 },
                { code: "IOC-I", name: "Industry Oriented Course – I", credits: 1 },
                { code: "EE25504", name: "AC Machines Laboratory", credits: 2 },
                { code: "EE25505", name: "Control and Instrumentation Laboratory", credits: 2 }
            ],
            6: [
                { code: "EE25601", name: "Electrical Machine Design", credits: 4 },
                { code: "EE25602", name: "Microprocessors & Microcontrollers", credits: 3 },
                { code: "EE25603", name: "Power System Protection and Switch Gear", credits: 3 },
                { code: "PE-III", name: "Programme Elective – III (Emerging Technology)", credits: 3 },
                { code: "OE-I", name: "Open Elective", credits: 3 },
                { code: "EE25604", name: "Introduction to Standards in Electrical Engineering", credits: 1 },
                { code: "EE25605", name: "Power Electronics", credits: 3 },
                { code: "IOC-II", name: "Industry Oriented Course – II", credits: 1 },
                { code: "SLC-I", name: "Self-Learning Course", credits: 1 },
                { code: "EE25606", name: "Microprocessors & Microcontrollers Laboratory", credits: 1.5 },
                { code: "EE25607", name: "Power Electronics Laboratory", credits: 1.5 }
            ],
            7: [
                { code: "ME25C06", name: "Engineering Entrepreneurship Development", credits: 3 },
                { code: "UC25C01", name: "Climate Change and Sustainability", credits: 2 },
                { code: "EE25701", name: "High Voltage Engineering", credits: 3 },
                { code: "PE-IV", name: "Programme Elective – IV", credits: 3 },
                { code: "PE-V", name: "Programme Elective – V", credits: 3 },
                { code: "EE25702", name: "Project Management", credits: 2 },
                { code: "EE25703", name: "Power System Laboratory", credits: 2 },
                { code: "INT-VII", name: "Summer Internship", credits: 1 }
            ],
            8: [
                { code: "PROJ-VIII", name: "Project Work / Internship cum Project Work", credits: 8 }
            ]
        },
        "mech": {
            1: [
                { code: "MA25C01", name: "Applied Calculus", credits: 4 },
                { code: "ME25C03", name: "Introduction to Mechanical Engineering", credits: 3 },
                { code: "ME25C01", name: "Engineering Drawing", credits: 4 },
                { code: "PH25C01", name: "Applied Physics – I", credits: 3 },
                { code: "CY25C01", name: "Applied Chemistry – I", credits: 3 },
                { code: "UC25H01", name: "Heritage of Tamils", credits: 1 },
                { code: "EN25C01", name: "English Essentials – I", credits: 2 },
                { code: "CS25C02", name: "Computer Programming: Python", credits: 3 },
                { code: "ME25C04", name: "Makerspace", credits: 2 },
                { code: "UC25A01", name: "Life Skills for Engineers – I", credits: 1 },
                { code: "UC25A02", name: "Physical Education – I", credits: 1 }
            ],
            2: [
                { code: "MA25C02", name: "Linear Algebra", credits: 4 },
                { code: "ME25C02", name: "Engineering Mechanics", credits: 4 },
                { code: "EE25C01", name: "Basic Electrical and Electronics Engineering", credits: 3 },
                { code: "PH25C05", name: "Applied Physics (ME) – II", credits: 3 },
                { code: "CY25C03", name: "Applied Chemistry (ME) – II", credits: 2 },
                { code: "UC25H02", name: "Tamils and Technology", credits: 1 },
                { code: "ME25C05", name: "Re-Engineering for Innovation", credits: 2 },
                { code: "EN25C02", name: "English Essentials – II", credits: 2 },
                { code: "UC25A03", name: "Life Skills for Engineers – II", credits: 1 },
                { code: "UC25A04", name: "Physical Education – II", credits: 1 },
                { code: "UC25F01", name: "Foreign Language – I (Deutsch/Japanese/Korean)", credits: 1 }
            ],
            3: [
                { code: "MA25C03", name: "Computational Differential Equations", credits: 4 },
                { code: "ME25C07", name: "Applied Engineering Mechanics", credits: 3 },
                { code: "ME25301", name: "Engineering Thermodynamics", credits: 4 },
                { code: "CE25C11", name: "Strength of Materials", credits: 4 },
                { code: "ME25C08", name: "Metallurgy and Materials Science", credits: 3 },
                { code: "EC25C17", name: "Embedded Systems", credits: 3 },
                { code: "EN25C03", name: "English Communication Skills Laboratory – I", credits: 1 },
                { code: "SDC-I", name: "Skill Development Course – I", credits: 2 }
            ],
            4: [
                { code: "CS25C16", name: "Applied Data Science", credits: 3 },
                { code: "ME25C09", name: "Kinematics and Dynamics of Machines", credits: 4 },
                { code: "CE25C12", name: "Fluid Mechanics and Machinery", credits: 4 },
                { code: "ME25401", name: "Thermal Engineering – I", credits: 3 },
                { code: "ME25402", name: "Manufacturing Processes – I", credits: 4 },
                { code: "ME25C10", name: "Standards in Mechanical Engineering", credits: 1 },
                { code: "EN25C04", name: "English Communication Skills Laboratory – II", credits: 1 },
                { code: "SDC-II", name: "Skill Development Course – II", credits: 4 }
            ],
            5: [
                { code: "ME25501", name: "Design of Machine Elements", credits: 3 },
                { code: "ME25502", name: "Manufacturing Processes – II", credits: 4 },
                { code: "ME25503", name: "Thermal Engineering – II", credits: 4 },
                { code: "ME25504", name: "Measurements and Instrumentation", credits: 3 },
                { code: "PE-I", name: "Programme Elective – I", credits: 3 },
                { code: "OE-I", name: "Open Elective", credits: 3 },
                { code: "SDC-III", name: "Skill Development Course – III", credits: 2 },
                { code: "IOC-I", name: "Industry Oriented Course – I", credits: 1 }
            ],
            6: [
                { code: "ME25601", name: "Design of Transmission Systems", credits: 4 },
                { code: "ME25602", name: "Heat and Mass Transfer", credits: 4 },
                { code: "ME25603", name: "FEM Applications in Mechanical Engineering", credits: 4 },
                { code: "ME25604", name: "Power Generation Technologies", credits: 3 },
                { code: "PE-II", name: "Programme Elective – II", credits: 3 },
                { code: "PE-III", name: "Programme Elective – III", credits: 3 },
                { code: "ME25605", name: "Computer Aided Modelling Laboratory", credits: 2 },
                { code: "SLC-I", name: "Self-Learning Course", credits: 1 },
                { code: "IOC-II", name: "Industry Oriented Course – II", credits: 1 }
            ],
            7: [
                { code: "ME25C06", name: "Engineering Entrepreneurship Development", credits: 3 },
                { code: "UC25C01", name: "Climate Change and Sustainability", credits: 2 },
                { code: "ME25701", name: "Mechatronics and Automation", credits: 4 },
                { code: "PE-IV", name: "Programme Elective – IV", credits: 3 },
                { code: "PE-V", name: "Programme Elective – V", credits: 3 },
                { code: "ME25702", name: "Project Management", credits: 2 },
                { code: "INT-VII", name: "Industrial Training", credits: 1 }
            ],
            8: [
                { code: "PROJ-VIII", name: "Project Work / Internship cum Project Work", credits: 8 }
            ]
        }
    }
};

// Grade map values — regulation-specific
const GRADE_POINTS_2021 = {
    "O": 10,
    "A+": 9,
    "A": 8,
    "B+": 7,
    "B": 6,
    "C": 5,
    "RA": 0,
    "SA": 0,
    "W": 0
};

// Regulation 2025 — all departments common grade scale
const GRADE_POINTS_2025 = {
    "S": 10,
    "A+": 9,
    "A": 8,
    "B+": 7,
    "B": 6,
    "C+": 5,
    "C": 4,
    "U": 0   // Fail
};

function getGradePoints(regulation) {
    return regulation === '2025' ? GRADE_POINTS_2025 : GRADE_POINTS_2021;
}

// Dynamic Subject generator fallback to make regulation/branch selectors fully testable
function getSubjects(regulation, branch, semester) {
    // Check if database contains exact subjects
    if (SUBJECT_SCHEMAS[regulation] && SUBJECT_SCHEMAS[regulation][branch] && SUBJECT_SCHEMAS[regulation][branch][semester]) {
        return SUBJECT_SCHEMAS[regulation][branch][semester];
    }

    // Otherwise, generate realistic mock subjects for testing flow
    const mockSubjects = [];
    const bCode = branch.toUpperCase();
    const rCode = regulation.substring(2);
    const sem = semester;

    const sampleNames = {
        "cse": ["Design and Analysis of Algorithms", "Advanced Computer Architecture", "Object Oriented System Design", "Compiler Engineering", "Data Analytics & Engineering"],
        "aids": ["Machine Learning Techniques", "Foundations of AI", "Deep Learning Foundations", "Big Data Analytics", "Natural Language Processing"],
        "eee": ["Control Systems Engineering", "Power Electronics and Drives", "Microprocessors and Controllers", "Solid State Devices", "Transmission & Distribution"],
        "ece": ["Analog & Digital Communication", "Electromagnetic Fields & Waveguides", "Digital Signal Processing", "VLSI Design Technology", "Antenna Wave Propagation"],
        "civil": ["Strength of Structural Materials", "Basic Construction Technology", "Fluid Mechanics and Machinery", "Structural Steel Design", "Soil Mechanics Lab"],
        "mech": ["Dynamics of Rigid Machinery", "Thermal Engineering & Systems", "Design of Fluid Transmission Elements", "CAD/CAM Technology", "Mechanics of Solid Materials"]
    };

    const names = sampleNames[branch] || ["Professional Elective Subject", "Advanced Systems Application", "Scientific Computation Principles", "Technical Innovation Lab"];

    // Let's generate 5 dummy subjects
    for (let i = 1; i <= 5; i++) {
        const dummyCode = `${bCode}${rCode}${sem}0${i}`;
        const dummyName = names[(i - 1) % names.length] + (i > names.length ? ` B` : "");
        const creditsPool = [3, 4, 3, 2, 1, 1.5];
        const dummyCredits = creditsPool[(i - 1) % creditsPool.length];
        mockSubjects.push({ code: dummyCode, name: dummyName, credits: dummyCredits });
    }

    // Add lab subject
    mockSubjects.push({
        code: `${bCode}${rCode}${sem}81`,
        name: `${names[0]} Laboratory`,
        credits: 1.5
    });

    return mockSubjects;
}

// ==========================================================================
// 2. STATE MANAGEMENT & LIGHTWEIGHT NAVIGATION ROUTER
// ==========================================================================

const state = {
    selectedRegulation: null,
    selectedBranch: null,
    selectedSemester: null,
    pageHistory: ['landing-page']
};

const pageTitles = {
    'landing-page': 'Home',
    'regulation-page': 'Curriculum',
    'branch-page': 'Major',
    'semester-page': 'Semester',
    'gpa-calc-page': 'GPA Calc',
    'cgpa-page': 'CGPA Calc'
};

function navigateTo(pageId, direction = 'forward') {
    const activePage = document.querySelector('.page.active');
    const nextPage = document.getElementById(pageId);

    if (!nextPage || activePage === nextPage) return;

    // Clear out transition states
    const allPages = document.querySelectorAll('.page');
    allPages.forEach(p => {
        p.classList.remove('slide-in-right', 'slide-out-left', 'slide-in-left', 'slide-out-right');
    });

    if (direction === 'forward') {
        state.pageHistory.push(pageId);

        activePage.classList.remove('active');
        activePage.classList.add('slide-out-left');

        nextPage.classList.add('slide-in-right');
        nextPage.classList.add('active');
    } else {
        activePage.classList.remove('active');
        activePage.classList.add('slide-out-right');

        nextPage.classList.add('slide-in-left');
        nextPage.classList.add('active');
    }

    // Update Top Navigation Bar dynamically
    updateTopHeaderAndMenu(pageId);
}

function navigateBack() {
    if (state.pageHistory.length <= 1) return;

    state.pageHistory.pop(); // Pop current page
    const prevPageId = state.pageHistory[state.pageHistory.length - 1];

    // Clean up selectors if we went back before final calculation
    if (prevPageId === 'regulation-page') {
        state.selectedRegulation = null;
    } else if (prevPageId === 'branch-page') {
        state.selectedBranch = null;
    } else if (prevPageId === 'semester-page') {
        state.selectedSemester = null;
    }

    navigateTo(prevPageId, 'back');
}

// Update Top Navigation dynamic titles and Left Menu & Back Icon triggers
function updateTopHeaderAndMenu(pageId) {
    const activePageTitleEl = document.getElementById('active-page-title');
    if (activePageTitleEl) {
        activePageTitleEl.innerText = pageTitles[pageId] || 'Gradify';
    }

    const menuToggleBtn = document.querySelector('.menu-toggle-btn');
    if (menuToggleBtn) {
        if (state.pageHistory.length > 1) {
            // Show Back Arrow
            menuToggleBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
            menuToggleBtn.onclick = navigateBack;
            menuToggleBtn.style.color = 'var(--primary)';
        } else {
            // Show Hamburger Menu
            menuToggleBtn.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
            menuToggleBtn.onclick = toggleMenu;
            menuToggleBtn.style.color = 'var(--text-main)';
        }
    }

    // Sync active class inside sidebar menu
    const menuButtons = document.querySelectorAll('.menu-item');
    menuButtons.forEach(btn => {
        btn.classList.remove('active');
        // Match base targets
        if (btn.getAttribute('onclick').includes(pageId)) {
            btn.classList.add('active');
        }
    });
}

// Side menu toggle logic
function toggleMenu() {
    const sideMenu = document.getElementById('side-menu');
    const overlay = document.getElementById('menu-overlay');
    if (sideMenu && overlay) {
        sideMenu.classList.toggle('open');
        overlay.classList.toggle('show');
    }
}

// Sidebar links route action
function menuNavigate(pageId) {
    toggleMenu();
    if (pageId === 'settings-page-shortcut') {
        toggleSettingsModal();
        return;
    }

    // Clear out settings modal if active
    const settingsModal = document.getElementById('settings-modal');
    if (settingsModal) settingsModal.classList.remove('active');

    const currentPageId = state.pageHistory[state.pageHistory.length - 1];
    if (currentPageId === pageId) return;

    if (pageId === 'landing-page') {
        while (state.pageHistory.length > 1) {
            state.pageHistory.pop();
        }
        navigateTo('landing-page', 'back');
    } else {
        // Safe check to reset selects
        if (pageId === 'regulation-page') {
            state.selectedRegulation = null;
            state.selectedBranch = null;
            state.selectedSemester = null;
        }
        navigateTo(pageId, 'forward');
    }
}

// Control settings modal visibility
function toggleSettingsModal() {
    const modal = document.getElementById('settings-modal');
    if (modal) {
        modal.classList.toggle('active');
    }
}

// Clear local data records
function clearAllData() {
    if (confirm("Are you sure you want to delete your saved GPA/CGPA results? This action cannot be undone.")) {
        localStorage.removeItem('saved_gpa');
        localStorage.removeItem('saved_cgpa');
        localStorage.removeItem('saved_credits');
        localStorage.removeItem('saved_target_cgpa');

        // Reset dashboard values to zero
        document.getElementById('db-current-gpa').innerText = '0.00';
        document.getElementById('db-current-cgpa').innerText = '0.00';
        document.getElementById('db-completed-credits').innerText = '0.0';
        document.getElementById('db-target-cgpa').value = '9.00';

        showCustomAlert("Records Cleared", "All cached analytics and performance data have been successfully deleted.");
        toggleSettingsModal();
    }
}

// Target CGPA modifier
function updateTargetCGPA(val) {
    const num = parseFloat(val);
    if (!isNaN(num) && num >= 0 && num <= 10) {
        localStorage.setItem('saved_target_cgpa', num.toFixed(2));
    } else {
        showCustomAlert("Input Range Error", "Target CGPA must lie between 0.00 and 10.00");
        document.getElementById('db-target-cgpa').value = (parseFloat(localStorage.getItem('saved_target_cgpa')) || 9.00).toFixed(2);
    }
}

// Cycling standard theme loops (Light -> Dark -> Original -> Light)
function cycleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'original';
    const themesCycle = {
        'original': 'light',
        'light': 'dark',
        'dark': 'original'
    };
    const nextTheme = themesCycle[currentTheme] || 'original';
    setTheme(nextTheme);
}

// Handle global theme selection
function setTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('gpa_app_theme', themeName);

    // Sync settings page select option
    const themeSwitcher = document.getElementById('option-theme-switcher');
    if (themeSwitcher) {
        themeSwitcher.value = themeName;
    }

    // Sync sidebar pills active states
    const pills = ['light', 'dark', 'original'];
    pills.forEach(p => {
        const pillBtn = document.getElementById(`pill-${p}`);
        if (pillBtn) {
            if (p === themeName) {
                pillBtn.classList.add('active');
            } else {
                pillBtn.classList.remove('active');
            }
        }
    });
}

// ==========================================================================
// 3. UI GENERATION AND USER SELECTIONS
// ==========================================================================

function selectRegulation(regulation) {
    state.selectedRegulation = regulation;
    document.getElementById('branch-req-label').innerText = `Regulation ${regulation} Selection`;

    // Render dynamic branches
    const listContainer = document.getElementById('branch-list-container');
    listContainer.innerHTML = '';

    // Filter out AIDS for Regulation 2017
    const branchesToShow = Object.entries(BRANCHES).filter(([key, val]) => {
        if (regulation === '2017' && key === 'aids') return false;
        return true;
    });

    branchesToShow.forEach(([key, val]) => {
        const card = document.createElement('button');
        card.className = 'select-card btn-ripple';
        card.onclick = () => selectBranch(key);
        card.innerHTML = `
            <span class="card-title">${val}</span>
            <span class="card-desc">Full course specifications for branch</span>
            <i class="fa-solid fa-circle-chevron-right card-arrow"></i>
        `;
        listContainer.appendChild(card);
    });

    navigateTo('branch-page');
}

function selectBranch(branchKey) {
    state.selectedBranch = branchKey;
    const branchName = BRANCHES[branchKey];
    document.getElementById('semester-info-label').innerText = `R${state.selectedRegulation} | ${branchName}`;

    navigateTo('semester-page');
}

function selectSemester(semesterNum) {
    state.selectedSemester = semesterNum;
    const branchName = BRANCHES[state.selectedBranch];
    document.getElementById('gpa-info-label').innerText =
        `Regulation ${state.selectedRegulation} • ${branchName} • Semester ${semesterNum}`;

    // Render subjects lists dynamically
    const subjectsContainer = document.getElementById('subjects-container');
    subjectsContainer.innerHTML = '';

    const subjects = getSubjects(state.selectedRegulation, state.selectedBranch, state.selectedSemester);

    // Build grade options based on regulation
    const is2025 = state.selectedRegulation === '2025';
    const gradeOptions = is2025
        ? `<option value="" disabled selected>Choose Grade Achieved</option>
                    <option value="S">S (Outstanding) - 10</option>
                    <option value="A+">A+ (Excellent) - 9</option>
                    <option value="A">A (Very Good) - 8</option>
                    <option value="B+">B+ (Good) - 7</option>
                    <option value="B">B (Average) - 6</option>
                    <option value="C+">C+ (Satisfactory) - 5</option>
                    <option value="C">C (Pass) - 4</option>
                    <option value="U">U (Fail) - 0</option>`
        : `<option value="" disabled selected>Choose Grade Achieved</option>
                    <option value="O">O (Outstanding) - 10</option>
                    <option value="A+">A+ (Excellent) - 9</option>
                    <option value="A">A (Very Good) - 8</option>
                    <option value="B+">B+ (Good) - 7</option>
                    <option value="B">B (Average) - 6</option>
                    <option value="C">C (Satisfactory) - 5</option>
                    <option value="RA">RA (Re-Appearance) - 0</option>
                    <option value="SA">SA (Shortage of Attendance) - 0</option>
                    <option value="W">W (Withdrawal) - 0</option>`;

    subjects.forEach((sub, index) => {
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.innerHTML = `
            <div class="subject-header">
                <span class="subject-code">${sub.code}</span>
                <span class="subject-name">${sub.name}</span>
            </div>
            <div class="grade-select-wrapper">
                <select class="grade-select" id="grade-select-${index}" data-credits="${sub.credits}">
                    ${gradeOptions}
                </select>
            </div>
        `;
        subjectsContainer.appendChild(card);
    });

    // Smooth scroll list back to top
    subjectsContainer.scrollTop = 0;

    navigateTo('gpa-calc-page');
}

// ==========================================================================
// 4. CALCULATION ENGINE & MODALS
// ==========================================================================

function calculateGPA() {
    const subjects = getSubjects(state.selectedRegulation, state.selectedBranch, state.selectedSemester);
    let totalCredits = 0;
    let totalProduct = 0;
    let hasUnselected = false;

    const gradeMap = getGradePoints(state.selectedRegulation);

    subjects.forEach((sub, index) => {
        const selectEl = document.getElementById(`grade-select-${index}`);
        const chosenGrade = selectEl.value;
        const credits = parseFloat(selectEl.getAttribute('data-credits'));

        if (chosenGrade === "") {
            hasUnselected = true;
            // Highlight container in red
            selectEl.parentElement.parentElement.style.borderColor = 'rgba(239, 68, 68, 0.4)';
        } else {
            selectEl.parentElement.parentElement.style.borderColor = 'var(--glass-border)';
            const points = gradeMap[chosenGrade];
            totalProduct += (credits * points);
            totalCredits += credits;
        }
    });

    if (hasUnselected) {
        showCustomAlert("Input Error", "Please assign grades to all active courses on the page.");
        return;
    }

    if (totalCredits === 0) {
        showCustomAlert("Calculation Error", "No subjects with valid credit counts exist for calculation.");
        return;
    }

    const gpa = totalProduct / totalCredits;
    displayResult(gpa.toFixed(2), "Your GPA Score", getGPAFeedBack(gpa));

    // Save outputs dynamically to dashboard & localStorage
    localStorage.setItem('saved_gpa', gpa.toFixed(2));
    localStorage.setItem('saved_credits', totalCredits.toFixed(1));

    const dbGpa = document.getElementById('db-current-gpa');
    const dbCredits = document.getElementById('db-completed-credits');
    if (dbGpa) animateValue(dbGpa, parseFloat(dbGpa.innerText) || 0, gpa, 700);
    if (dbCredits) animateValue(dbCredits, parseFloat(dbCredits.innerText) || 0, totalCredits, 700);
}

function calculateCGPA() {
    let totalGpaSum = 0;
    let counts = 0;
    let hasInvalid = false;

    for (let sem = 1; sem <= 8; sem++) {
        const inputEl = document.getElementById(`sem${sem}-gpa`);
        const groupEl = inputEl.parentElement;
        const val = inputEl.value.trim();

        if (val !== "") {
            const num = parseFloat(val);
            if (isNaN(num) || num < 0 || num > 10) {
                inputEl.focus();
                groupEl.classList.add('invalid');
                hasInvalid = true;
            } else {
                groupEl.classList.remove('invalid');
                totalGpaSum += num;
                counts++;
            }
        } else {
            groupEl.classList.remove('invalid');
        }
    }

    if (hasInvalid) {
        showCustomAlert("Input Range Error", "GPA values entered must lie within 0.00 and 10.00.");
        return;
    }

    if (counts === 0) {
        showCustomAlert("Verification Error", "Please provide at least one Semester GPA value to calculate.");
        return;
    }

    const cgpa = totalGpaSum / counts;
    displayResult(cgpa.toFixed(2), "Your CGPA Rating", getCGPAFeedBack(cgpa));

    // Save and map dynamics to Dashboard
    localStorage.setItem('saved_cgpa', cgpa.toFixed(2));

    const dbCgpa = document.getElementById('db-current-cgpa');
    if (dbCgpa) animateValue(dbCgpa, parseFloat(dbCgpa.innerText) || 0, cgpa, 700);
}

function resetCGPA() {
    for (let sem = 1; sem <= 8; sem++) {
        const inputEl = document.getElementById(`sem${sem}-gpa`);
        inputEl.value = '';
        inputEl.parentElement.classList.remove('invalid');
    }
}

// Result Feedbacks
function getGPAFeedBack(gpa) {
    if (gpa >= 9.0) return "Spectacular! You are performing at a top-tier academic level.";
    if (gpa >= 8.0) return "Excellent work! Maintain this strong momentum.";
    if (gpa >= 7.0) return "Good performance. A little extra effort can push you over 8.0!";
    if (gpa >= 6.0) return "Decent score. Review your weak areas to improve next time.";
    return "Keep working hard. Dedication and practice will yield better results.";
}

function getCGPAFeedBack(cgpa) {
    if (cgpa >= 9.0) return "Outstanding cumulative record! Keep inspiring.";
    if (cgpa >= 8.0) return "Wonderful consistency! You are building a great CV profile.";
    if (cgpa >= 7.0) return "Consistent progress! Keep striving higher.";
    if (cgpa >= 6.0) return "Steady performance. Focus on scoring higher in upcoming terms.";
    return "Continuous effort builds high scores. Keep pushing forward.";
}

// Universal Alerts and Results modal wrappers
function displayResult(value, title, message) {
    const modal = document.getElementById('result-modal');
    document.getElementById('modal-result-value').innerText = value;
    document.getElementById('modal-result-title').innerText = title;
    document.getElementById('modal-result-msg').innerText = message;

    // Animate score counter increments
    animateValue(document.getElementById('modal-result-value'), 0, parseFloat(value), 600);
    modal.classList.add('active');
}

function showCustomAlert(title, message) {
    const modal = document.getElementById('result-modal');
    // For general warning/info alerts, render them inside the modal without the circular badge
    document.getElementById('modal-result-value').innerText = "⚠️";
    document.getElementById('modal-result-title').innerText = title;
    document.getElementById('modal-result-msg').innerText = message;
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('result-modal');
    modal.classList.remove('active');
}

// Helper: Animate numbers
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = (progress * (end - start) + start).toFixed(2);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            obj.innerHTML = end.toFixed(2);
        }
    };
    window.requestAnimationFrame(step);
}

// Init Setup on Script load
document.addEventListener('DOMContentLoaded', () => {
    // 1. Load Theme configuration
    const savedTheme = localStorage.getItem('gpa_app_theme') || 'original';
    setTheme(savedTheme);

    // 2. Load Dashboard persisted states
    const savedGPA = parseFloat(localStorage.getItem('saved_gpa')) || 0.00;
    const savedCGPA = parseFloat(localStorage.getItem('saved_cgpa')) || 0.00;
    const savedCredits = parseFloat(localStorage.getItem('saved_credits')) || 0.0;
    const savedTarget = parseFloat(localStorage.getItem('saved_target_cgpa')) || 9.00;

    const dbGpa = document.getElementById('db-current-gpa');
    const dbCgpa = document.getElementById('db-current-cgpa');
    const dbCredits = document.getElementById('db-completed-credits');
    const dbTarget = document.getElementById('db-target-cgpa');

    if (dbGpa) animateValue(dbGpa, 0, savedGPA, 800);
    if (dbCgpa) animateValue(dbCgpa, 0, savedCGPA, 800);
    if (dbCredits) animateValue(dbCredits, 0, savedCredits, 800);
    if (dbTarget) dbTarget.value = savedTarget.toFixed(2);
});

// App Click Tap Ripple Action Listener
document.addEventListener('click', function (e) {
    const button = e.target.closest('.btn-ripple');
    if (!button) return;

    const ripple = document.createElement('span');
    ripple.className = 'ripple';

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;

    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    button.appendChild(ripple);

    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
});

function debugAutofillGrades() {
    const selects = document.querySelectorAll('.grade-select');
    selects.forEach(select => {
        for (let i = 0; i < select.options.length; i++) {
            if (select.options[i].value !== "") {
                select.selectedIndex = i;
                break;
            }
        }
    });
}
