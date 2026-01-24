function Committees() {
    // Honorary Committee - Chief Patrons
    const chiefPatrons = [
        { name: 'Dr. Ramdas M Pai', title: 'Chancellor', institution: 'MAHE', image: '/img/committee/dr-ramdas-pai.png' },
        { name: 'Dr. Ranjan R Pai', title: 'President', institution: 'MAHE', image: '/img/committee/dr-ranjan-pai.png' },
    ]

    // Patrons
    const patrons = [
        { name: 'Lt. Gen. (Dr.) M D Venkatesh', title: 'Vice Chancellor', institution: 'MAHE', image: '/img/Dr.M.D.Venkatesh.png' },
        { name: 'Dr. H S Ballal', title: 'Pro Chancellor', institution: 'MAHE', image: '/img/Dr.H.S.Ballal.jpg' },
        { name: 'Prof. (Dr) Madhu Veeraraghavan', title: 'Pro Vice Chancellor', institution: 'MAHE Bengaluru', image: '/img/Dr_Madhu_Veeraraghavan.png' },
        { name: 'Dr. Narayana Sabhahit', title: 'Pro Vice Chancellor, Technology and Science', institution: 'MAHE', image: '/img/Dr.Narayana.png' },
        { name: 'Dr. Giridar Kini P', title: 'Registrar', institution: 'MAHE Manipal', image: '/img/Dr-Giridhar-Kini.jpg' },
        { name: 'Dr. Raghavendra Prabhu', title: 'Deputy Registrar', institution: 'MAHE Bengaluru', image: '/img/Dr-Raghavendra-Prabhu-P.jpg' },
        { name: 'Dr. S Sudhindra', title: 'Academic President', institution: 'MAHE Dubai, UAE', image: '/img/placeholder.png' },
        { name: 'Dr. Iven Jose', title: 'Director', institution: 'MIT Bengaluru', image: '/img/dr.iven.jpg' },
        { name: 'Dr. S K Pandey', title: 'Dean - STEM Programs', institution: 'MAHE, Dubai, UAE', image: '/img/placeholder.png' },
        { name: 'Dr. Prema K V', title: 'Associate Director, Professor and Head', institution: 'Department of CSE - MIT Bengaluru', image: '/img/Dr Prema KV.png' },
    ]

    // General Chairs
    const generalChairs = [
        { name: 'Dr. Dayananda P', title: 'Professor and Head', institution: 'Department of IT - MIT Bengaluru', image: '/img/placeholder.png' },
    ]

    // Program Chairs
    const programChairs = [
        { name: 'Dr. Gururaj H L', title: 'Associate Professor', institution: 'Department of IT - MIT Bengaluru', image: '/img/placeholder.png' },
        { name: 'Dr. Shreyas J', title: 'Assistant Professor', institution: 'Department of IT - MIT Bengaluru', image: '/img/Dr.Shreyas.jpg' },
        { name: 'Dr. Sophia Rahaman', title: 'Program Director - Comp. Sci & IT', institution: 'SoEIT - MAHE, Dubai, UAE', image: '/img/placeholder.png' },
        { name: 'Dr. Gopalakrishnan T', title: 'Associate Professor', institution: 'Department of IT - MIT Bengaluru', image: '/img/Dr.GopalkrishnanT.jpg' },
    ]

    // Technical Co-Chairs
    const technicalCoChairs = [
        { name: 'Mr. Aryan Chaudhary', title: 'Chief Scientific Advisor', institution: 'BioTech Sphere Research, India', image: '/img/aryan-choudhary.jpg' },
        { name: 'Prof. Keshav Kaushik', title: 'Assistant Professor', institution: 'AMITY University Punjab', image: '/img/keshav-kaushik.jpg' },
    ]

    // Scientific Committee
    const scientificCommittee = [
        { name: 'Dr. Osamah Ibrahim Khalaf', institution: 'Department of Solar, Al-Nahrain Research Center for Renewable Energy, Al-Nahrain University, Iraq' },
        { name: 'Dr. Ghaidaa Muttasher Abdulsaheb', institution: 'Department of Computer Engineering, University of Technology, Iraq' },
        { name: 'Dr. Shin-Hung Pan', institution: 'Department of Information Management, Chaoyang University of Technology, Taiwan' },
        { name: 'Dr. Wing-Keung Wong', institution: 'Asia University, Taiwan' },
    ]

    // Organising Committee
    const organisingCommittee = [
        { name: 'Dr. Abhijit Das', title: 'Assistant Professor-Senior Scale', institution: 'Department of IT - MIT Bengaluru', image: '/img/Dr.Abhijit.jpg' },
        { name: 'Dr. Amreen Ayesha', title: 'Assistant Professor-Senior Scale', institution: 'Department of IT - MIT Bengaluru', image: '/img/Dr.Amreen.jpg' },
        { name: 'Dr. Anitha Premkumar', title: 'Assistant Professor-Senior Scale', institution: 'Department of IT - MIT Bengaluru', image: '/img/Dr.Anitha.jpg' },
        { name: 'Dr. Arun Balakrishnan', title: 'Associate Professor', institution: 'Department of IT - MIT Bengaluru' },
        { name: 'Dr. P Devisivasankar', title: 'Assistant Professor', institution: 'Department of IT - MIT Bengaluru', image: '/img/P.Devisivasankari.jpg' },
        { name: 'Dr. G. Ignisha Rajathi', title: 'Assistant Professor-Senior Scale', institution: 'Department of IT - MIT Bengaluru', image: '/img/Dr.Ignisha.jpg' },
        { name: 'Dr. Karthik Vasu', title: 'Assistant Professor', institution: 'Department of IT - MIT Bengaluru', image: '/img/Dr.Karthik.jpg' },
        { name: 'Dr. S K Mahmudul Hassan', title: 'Assistant Professor', institution: 'Department of IT - MIT Bengaluru', image: '/img/Dr.SK.jpg' },
        { name: 'Dr. Preethi', title: 'Assistant Professor-Senior Scale', institution: 'Department of IT - MIT Bengaluru', image: '/img/Dr.Preethi.jpg' },
        { name: 'Dr. S. Priya', title: 'Assistant Professor', institution: 'Department of IT - MIT Bengaluru', image: '/img/Dr.S.priya.jpg' },
        { name: 'Dr. Raghavendra M Devadas', title: 'Assistant Professor-Senior Scale', institution: 'Department of IT - MIT Bengaluru', image: '/img/Dr.Raghavendra.jpg' },
        { name: 'Dr. Ruhul Amin Hazarika', title: 'Assistant Professor', institution: 'Department of IT - MIT Bengaluru', image: '/img/Dr.RuhulAH.jpg' },
        { name: 'Dr. Sangeeta Sangani', title: 'Assistant Professor', institution: 'Department of IT - MIT Bengaluru', image: '/img/Dr.Sangeeta.jpg' },
        { name: 'Ms. Sapna R', title: 'Assistant Professor', institution: 'Department of IT - MIT Bengaluru', image: '/img/Ms.SapnaR.jpg' },
        { name: 'Dr. Sumanth V', title: 'Assistant Professor', institution: 'Department of IT - MIT Bengaluru', image: '/img/Dr.Sumanth.jpg' },
        { name: 'Dr. Usha M', title: 'Assistant Professor-Senior Scale', institution: 'Department of IT - MIT Bengaluru' },
        { name: 'Dr. Vishnu Srinivasa Murthy Y', title: 'Associate Professor', institution: 'Department of IT - MIT Bengaluru', image: '/img/Dr.VishnuSMY.jpg' },
        { name: 'Dr. Abdulla K P', title: 'Assistant Professor-Selection Grade', institution: 'SOE-IT - MAHE Dubai', image: '/img/drabdulla.jpg' },
        { name: 'Dr. Deepa Varghese', title: 'Assistant Professor-Senior Scale', institution: 'SOE-IT - MAHE Dubai', image: '/img/drdeepa.jpg' },
        { name: 'Dr. Ganesan Subramanian', title: 'Assistant Professor-Senior Grade', institution: 'SOE-IT - MAHE Dubai', image: '/img/drganesan.jpg' },
        { name: 'Dr. M I Jawid Nazir', title: 'Assistant Professor-Selection Grade', institution: 'SOE-IT - MAHE Dubai' },
        { name: 'Prof. Ramaprasad Poojary', title: 'Assistant Professor - Selection Scale', institution: 'SOE-IT - MAHE Dubai', image: '/img/drramaprasad.jpg' },
        { name: 'Dr. Ravishankar Dudhe', title: 'Associate Professor', institution: 'SOE-IT - MAHE Dubai', image: '/img/drravishankar.jpg' },
        { name: 'Dr. Roma Raina', title: 'Assistant Professor-Selection Grade', institution: 'SOE-IT - MAHE Dubai', image: '/img/Dr Roma Raina.jpg' },
        { name: 'Sachidananda H K', title: 'Associate Professor', institution: 'SOE-IT - MAHE Dubai', image: '/img/Sachidananda HK.jpg' },
        { name: 'Sampath Suranjan Salins', title: 'Assistant Professor-Senior Scale', institution: 'SOE-IT - MAHE Dubai', image: '/img/Sampath Suranjan Salins.jpg' },
        { name: 'Suresha R', title: 'Assistant Professor-Senior Scale', institution: 'SOE-IT - MAHE Dubai', image: '/img/Suresha R.png' },
        { name: 'Mr. Guru Shankar H B', title: 'Research Scholar', institution: 'Department of IT - MIT Bengaluru', image: '/img/GuruShankar.jpg' },
        { name: 'Ms. Shreelakshmi Yadav N', title: 'Research Scholar', institution: 'Department of IT - MIT Bengaluru', image: '/img/Shreelakshmi.jpg' },
        { name: 'Ms. Soundarya B C', title: 'Research Scholar', institution: 'Department of IT - MIT Bengaluru' },
        { name: 'Ms. Sowmya T Rao', title: 'Research Scholar', institution: 'Department of IT - MIT Bengaluru', image: '/img/Sowmya.jpg' },
        { name: 'Mr. Udaya Prasad P K', title: 'Research Scholar', institution: 'Department of IT - MIT Bengaluru' },
    ]

    // Student Organising Committee
    const studentOrganisingCommittee = [
        { name: 'Mr. Karthikeya Chowdary', role: 'Chair', chapter: 'MITB ACM Student Chapter', image: '/img/placeholder.png' },
        { name: 'Mr. Nishanth Shet', role: 'Vice-Chair', chapter: 'MITB ACM Student Chapter', image: '/img/Nishanth(1).jpg' },
        { name: 'Mr. Sashi Pritam M A', role: 'General Secretary', chapter: 'MITB ACM Student Chapter', image: '/img/placeholder.png' },
        { name: 'Ms. Anvitha Karanth', role: 'Chair', chapter: 'MITB ACM-W Student Chapter', image: '/img/placeholder.png' },
        { name: 'Ms. Nihitha H R', role: 'Vice Chair', chapter: 'MITB ACM-W Student Chapter', image: '/img/placeholder.png' },
        { name: 'Mr. Shivansh Gautam', role: 'Chair', chapter: 'MITB ACM SIG-AI', image: '/img/placeholder.png' },
        { name: 'Mr. Shane Chellam', role: 'Web-Master', chapter: 'MITB ACM SIG-AI', image: '/img/placeholder.png' },
        { name: 'Mr. Samyak Bargale', role: 'Chair', chapter: 'MITB ACM SIG-Soft', image: '/img/placeholder.png' },
        { name: 'Mr. Nandan S B', role: 'Souvenir Coordinator', chapter: 'MIT Bengaluru', image: '/img/placeholder.png' },
        { name: 'Mr. Lakshya Banga', role: 'Creative Lead', chapter: 'MITB ACM SIG-SOFT', image: '/img/placeholder.png' },
        { name: 'Mr. Dheeraj Sai Samineni', role: 'Sponsorship Lead', chapter: 'MITB ACM Student Chapter', image: '/img/Dheeraj Sai.jpg' },
    ]

    // Advisory Committee
    const advisoryCommittee = [
        { name: 'Dr. Manohara M Pai', title: 'Senior Professor', institution: 'Department of Information & Communication Technology' },
        { name: 'Dr. Hareesha K S', title: 'Director', institution: 'International Centre for Applied Sciences - MAHE' },
        { name: 'Dr. Antoine Bossard', title: 'Professor', institution: 'Kanagawa University (Japan)' },
        { name: 'Dr. Chenren Xu', title: 'Associate Professor', institution: 'Peking University (China)' },
        { name: 'Dr. S. K. Lakshmanaprabhu', title: 'Asst. Manager', institution: 'Renault Nissan Technology & Business Centre India (RNTBCI)' },
        { name: 'Dr. Ankur Gupta', title: 'Professor', institution: 'Model Institute of Engineering and Technology, Jammu' },
        { name: 'Dr. Dilip Kumar S M', title: 'Professor', institution: 'University Visvesvaraya College of Engineering (UVCE), Bengaluru' },
        { name: 'Dr. Prasant Misra', title: 'Senior Scientist', institution: 'Tata Consultancy Services India' },
        { name: 'Dr. Vijay Arya', title: 'Senior Researcher', institution: 'IBM Research' },
        { name: 'Dr. Adrian Florea', title: 'Professor', institution: 'Lucian Blaga University of Sibiu (Romania)' },
        { name: 'Dr. Alex S Taylor', title: 'Professor', institution: 'University of London (United Kingdom)' },
        { name: 'Dr. David Coyle', title: 'Associate Professor', institution: 'University College Dublin (Ireland)' },
        { name: 'Dr. Demetrios Zeinalipour-Yazti', title: 'Professor', institution: 'University of Cyprus (Cyprus)' },
        { name: 'Dr. Alessio Malizia', title: 'Associate Professor', institution: 'University of Pisa' },
        { name: 'Dr. Andre Inacio Reis', title: 'Professor', institution: 'Federal University of Rio Grande do Sul' },
        { name: 'Dr. Joel J P C Rodrigues', title: 'Professor', institution: 'Federal University of Piaui' },
        { name: 'Dr. John Atkinson', title: 'Professor', institution: 'Universidad Adolfo Ibáñez (Chile)' },
        { name: 'Dr. Cristiano A Costa', title: 'Professor', institution: 'University of the Rio dos Sinos Valley' },
        { name: 'Dr. Tshilidzi Marwala', title: 'Vice Chancellor & Professor', institution: 'University of Johannesburg (South Africa)' },
        { name: 'Dr. Martin Stephanus Olivier', title: 'Professor', institution: 'University of Pretoria (South Africa)' },
        { name: 'Dr. Kester Quist-Aphetsi', title: 'Professor', institution: 'Ghana Communication Technology University' },
        { name: 'Dr. Sameerchand Pudaruth', title: 'Professor', institution: 'University of Mauritius (Mauritius)' },
        { name: 'Dr. Jan Hendrik Kroeze', title: 'Professor', institution: 'University of South Africa (South Africa)' },
        { name: 'Dr. Ashraf Saad Hussein', title: 'Professor', institution: 'Arab Open University Kuwait (Kuwait)' },
        { name: 'Dr. Ferda Ofli', title: 'Senior Scientist', institution: 'Qatar Computing Research Institute (Qatar)' },
        { name: 'Dr. Haitham S Hamza', title: 'Professor', institution: 'Cairo University Egypt' },
        { name: 'Dr. Suhaib A Fahmy', title: 'Professor', institution: 'King Abdullah University of Science and Technology' },
        { name: 'Dr. Mourad Ouzzani', title: 'Professor', institution: 'Qatar Computing Research Institute' },
        { name: 'Dr. Adam R Talcott', title: 'Consulting Professional', institution: 'University of California, Santa Barbara' },
        { name: 'Dr. Adam A Porter', title: 'Professor', institution: 'University of Maryland, College Park (UMD)' },
        { name: 'Dr. Aaron Daniel Adler', title: 'Scientist', institution: 'BBN Technologies' },
        { name: 'Dr. Adam Chlipala', title: 'Professor', institution: 'Massachusetts Institute of Technology' },
        { name: 'Dr. Jorge Armin Mazariegos', title: 'Professor', institution: 'Universidad de San Carlos de Guatemala' },
        { name: 'Dr. Ajay K Gupta', title: 'Director of Computer Resources', institution: 'Old Dominion University' },
        { name: 'Dr. Jerry Miller', title: 'Research Coordinator', institution: 'Florida International University, USA' },
        { name: 'Dr. Harish Karthikeyan', title: 'Research Scientist', institution: 'New York University, USA' },
        { name: 'Dr. Heggere Ranganath', title: 'Professor Emeritus', institution: 'The University of Alabama, Huntsville' },
        { name: 'Dr. Matt Green', title: 'Managing Director', institution: 'KB Walker, USA' },
        { name: 'Dr. Ramkumar Krishnamoorthy', title: 'Department of ICT', institution: 'Villa College, Maldives' },
        { name: 'Dr. Milind Gandhe', title: 'Chief Program Officer', institution: 'MINRO, IIIT Bangalore' },
        { name: 'Dr. P. Nagabhushan', title: 'Vice-chancellor', institution: 'Vignan University, Andhra Pradesh' },
        { name: 'Dr. V Susheela Devi', title: 'Principal Research Scientist', institution: 'IISc, Bangalore' },
        { name: 'Dr. Aloknath De', title: 'CTO', institution: 'Samsung India, Bangalore' },
        { name: 'Prof. L M Patnaik', title: 'Retired Professor', institution: 'IISc, Bangalore' },
        { name: 'Dr. Y Narahari', title: 'Dean Computer Science and Automation', institution: 'IISc, Bangalore' },
        { name: 'Dr. Channappa B Akki', title: 'Professor', institution: 'IIIT, Dharwad' },
        { name: 'Prof. Poornima Ajayan', title: 'Professor Finance And Budget Analyst', institution: 'Rice University, Houston, Texas' },
        { name: 'Dr. Keshava Munegowda', title: 'Vice President', institution: 'Securities database engineering division of Goldman Sachs, Bangalore' },
        { name: 'Dr. Chidananda Gowda', title: 'Former Vice Chancellor', institution: 'Kuvempu University, Mysore' },
        { name: 'Dr. Sundaram Suresh', title: 'Associate Professor', institution: 'School of Computer Science and Engineering NTU, Singapore' },
        { name: 'Dr. Heena Rathore', title: 'ACM Distinguished Speaker, Assistant Professor', institution: 'University of Texas, USA' },
        { name: 'Dr. Paolo Trunfio', title: 'Associate Professor', institution: 'Computer Engineering, University of Calabria, Italy' },
        { name: 'Dr. Fernando Koch', title: 'IBM GTS Innovation Senior Technical Solutions Manager', institution: 'Eisenhower Fellow, ACM Distinguished Speaker' },
        { name: 'Prof. Amlan Chakrabarti', title: 'Dean Engg. and Tech. & Director', institution: 'School of IT, University of Calcutta' },
        { name: 'Dr. Varun Menon', title: 'Distinguished Speaker at ACM, Associate Professor', institution: 'SCMS Group' },
        { name: 'Dr. Ullas Nambiar', title: 'Principal Director AI at Accenture', institution: 'Innovation Strategist, Bengaluru' },
        { name: 'Dr. Ramasuri Narayanam', title: 'Senior Research Scientist', institution: 'IBM Research, India' },
        { name: 'Dr. Anand Nayyar', title: 'ACM Distinguished Speaker', institution: 'Professor, Researcher, Scientist, Author' },
        { name: 'Dr. Pradeep Kumar TS', title: 'Associate Professor', institution: 'Vellore Institute of Technology (VIT) Chennai campus' },
        { name: 'Dr. Prasanna Ranjith Christodoss', title: 'Faculty of Information Technology', institution: 'Shinas College of Technology, Sultanate of Oman' },
        { name: 'Dr. Neha Sharma', title: 'Founder Secretary', institution: 'Society for Data Science, IEEE Pune Section' },
        { name: 'Dr. Houbing Song', title: 'Director, Security & Optimization for Networked Globe Laboratory (SONG Lab)', institution: 'Embry-Riddle Aeronautical University' },
        { name: 'Dr. Nawab Muhammad Faseeh Qureshi', title: 'Assistant Professor', institution: 'Sungkyunkwan University, Korea' },
        { name: 'Dr. Mahmoud Hassaballah', title: 'Associate Professor', institution: 'South Valley University, Qena, Egypt' },
        { name: 'Dr. Celestine Iwendi', title: 'ACM Distinguished Speaker & Associate Professor', institution: 'University of Bolton, UK' },
        { name: 'Dr. Lili Arabuli', title: 'Associate Professor', institution: 'The University of Georgia, USA' },
        { name: 'Dr. Susan M Zvacek', title: 'ACM Distinguished Speaker, Consultant & Teacher', institution: 'Colorado, USA' },
    ]

    // Program Review Committee
    const programReviewCommittee = [
        { name: 'Dr. Surendiran', institution: 'Professor, Department of CSE, NIT Pondicherry' },
        { name: 'Dr. Noor Zaman', institution: "Faculty of Innovation & Technology, Taylor's University, Malaysia" },
        { name: 'Dr. Sandeep Chakraborty', institution: 'Associate Professor, IIT Kharagpur' },
        { name: 'Dr. Sangharatna', institution: 'NIT Warangal' },
        { name: 'Dr. Palaniswamy', institution: 'NIT Surathkal' },
        { name: 'Dr. Ashok Roa', institution: 'IISc Bengaluru' },
        { name: 'Dr. Pradeep C R', institution: 'IISc Bengaluru' },
        { name: 'Dr. Kunwar', institution: 'NIT Trichy' },
        { name: 'Prof. George Ghinea', institution: 'Department of Computer Science, Brunel University London' },
        { name: 'Dr. Arulalan Rajan', institution: 'Faculty Proficience Programme, IISc, Bangalore' },
        { name: 'Dr. Keerthana Prasad', institution: 'Professor & Director, Manipal School of Information Sciences, MIT, India' },
        { name: 'Dr. Chuan-Ming Liu', institution: 'Head of the Extension Education Center, National Taipei University of Technology (Taipei Tech), Taiwan' },
        { name: 'Dr. Lai Khin Wee', institution: 'Department of Biomedical Engineering, Universiti Malaya, Kuala Lumpur, Malaysia' },
        { name: 'Dr. Pradeep Kumar T S', institution: 'VIT, Vellore' },
        { name: 'Dr. Dhamodhar Reddy Edla', institution: 'NIT Goa' },
        { name: 'Prof. Yu-Chen Hu', institution: 'Professor, Providence University, Taiwan' },
        { name: 'Dr. Arun Solanki', institution: 'Gautam Buddha University, Greater Noida, India' },
        { name: 'Dr. Hanaa Hachimi', institution: 'Tofail University-National School of Applied Sciences of Kenitra, Morocco' },
        { name: 'Dr. Prathosh A P', institution: 'Assistant Professor, Department of Computer Technology & Electrical Engineering, IIT Delhi' },
        { name: 'Dr. Deepu Vijayasenan', institution: 'Assistant Professor, Department of ECE, NIT Surathkal, Karnataka' },
        { name: 'Dr. Shubham Mahajan', institution: 'Assistant Professor, AMITY University Punjab' },
    ]

    // Image component that shows real image or placeholder
    const MemberImage = ({ src, name }) => {
        const isPlaceholder = src === '/img/placeholder.png' || !src;

        if (isPlaceholder) {
            return (
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <span className="text-gray-400 text-xs text-center px-2">Image Placeholder</span>
                </div>
            );
        }

        return (
            <img
                src={src}
                alt={name}
                className="w-full h-full object-cover"
            />
        );
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-sm font-medium mb-6">
                            Meet Our Team
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Conference <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Committees</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Distinguished academicians and industry leaders driving CODE-AI 2026
                        </p>
                    </div>
                </div>
            </section>

            {/* Chief Patrons */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    <span className="text-yellow-400">◆</span> Chief Patrons <span className="text-yellow-400">◆</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {chiefPatrons.map((patron) => (
                        <div key={patron.name} className="relative bg-gray-900 border border-yellow-500/20 rounded-3xl p-8">
                            <div className="flex flex-col items-center text-center">
                                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-500/30 mb-4">
                                    <MemberImage src={patron.image} name={patron.name} />
                                </div>
                                <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm font-semibold rounded-full mb-2">
                                    Chief Patron
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-1">{patron.name}</h3>
                                <p className="text-yellow-400 font-medium">{patron.title}</p>
                                <p className="text-gray-400">{patron.institution}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Patrons */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    <span className="text-yellow-400">◆</span> Patrons <span className="text-yellow-400">◆</span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {patrons.map((patron) => (
                        <div key={patron.name} className="group relative">
                            <div className="relative bg-gray-900/80 border border-gray-800 group-hover:border-yellow-500/30 rounded-2xl p-6 transition-all">
                                <div className="flex items-center gap-5">
                                    <div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-yellow-500/20 flex-shrink-0">
                                        <MemberImage src={patron.image} name={patron.name} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">{patron.name}</h3>
                                        <p className="text-yellow-500 font-medium text-sm">{patron.title}</p>
                                        <p className="text-gray-500 text-xs">{patron.institution}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* General Chairs */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    <span className="text-yellow-400">◆</span> General Chairs <span className="text-yellow-400">◆</span>
                </h2>
                <div className="max-w-md mx-auto">
                    {generalChairs.map((chair) => (
                        <div key={chair.name} className="relative bg-gray-900 border border-yellow-500/20 rounded-3xl p-8">
                            <div className="flex flex-col items-center text-center">
                                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-500/30 mb-4">
                                    <MemberImage src={chair.image} name={chair.name} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1">{chair.name}</h3>
                                <p className="text-yellow-400 font-medium">{chair.title}</p>
                                <p className="text-gray-400">{chair.institution}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Program Chairs */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    <span className="text-yellow-400">◆</span> Program Chairs <span className="text-yellow-400">◆</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {programChairs.map((chair) => (
                        <div key={chair.name} className="group relative">
                            <div className="relative bg-gray-900/80 border border-gray-800 group-hover:border-yellow-500/30 rounded-2xl p-6 transition-all">
                                <div className="flex items-center gap-5">
                                    <div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-yellow-500/20 flex-shrink-0">
                                        <MemberImage src={chair.image} name={chair.name} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors">{chair.name}</h3>
                                        <p className="text-yellow-500 font-medium">{chair.title}</p>
                                        <p className="text-gray-500 text-sm">{chair.institution}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Technical Co-Chairs */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    <span className="text-yellow-400">◆</span> Technical Co-Chairs <span className="text-yellow-400">◆</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {technicalCoChairs.map((chair) => (
                        <div key={chair.name} className="bg-gray-900/50 border border-gray-800 hover:border-yellow-500/30 rounded-xl p-5 text-center transition-all group">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-yellow-500/20 mx-auto mb-4">
                                <MemberImage src={chair.image} name={chair.name} />
                            </div>
                            <h3 className="text-lg font-semibold text-white">{chair.name}</h3>
                            <p className="text-yellow-500 text-sm font-medium">{chair.title}</p>
                            <p className="text-gray-500 text-xs">{chair.institution}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Scientific Committee */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    <span className="text-yellow-400">◆</span> Scientific Committee <span className="text-yellow-400">◆</span>
                </h2>
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
                    <ul className="grid md:grid-cols-2 gap-4">
                        {scientificCommittee.map((member, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-300">
                                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                                <div>
                                    <span className="font-medium text-white">{member.name}</span>
                                    <p className="text-gray-500 text-sm">{member.institution}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Organising Committee */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    <span className="text-yellow-400">◆</span> Organising Committee <span className="text-yellow-400">◆</span>
                </h2>
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {organisingCommittee.map((member, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-300">
                                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                                <div>
                                    <span className="font-medium text-white">{member.name}</span>
                                    <p className="text-yellow-500 text-xs">{member.title}</p>
                                    <p className="text-gray-500 text-xs">{member.institution}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Student Organising Committee */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    <span className="text-yellow-400">◆</span> Student Organising Committee <span className="text-yellow-400">◆</span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {studentOrganisingCommittee.map((member, index) => (
                        <div key={index} className="bg-gray-900/50 border border-gray-800 hover:border-yellow-500/30 rounded-xl p-5 text-center transition-all">
                            <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-yellow-500/20 mx-auto mb-4">
                                <MemberImage src={member.image} name={member.name} />
                            </div>
                            <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                            <p className="text-yellow-500 text-sm font-medium">{member.role}</p>
                            <p className="text-gray-500 text-xs">{member.chapter}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Advisory Committee */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    <span className="text-yellow-400">◆</span> Advisory Committee <span className="text-yellow-400">◆</span>
                </h2>
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {advisoryCommittee.map((member, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-300 hover:text-yellow-400 transition-colors">
                                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                                <div>
                                    <span className="font-medium">{member.name}</span>
                                    <p className="text-gray-500 text-xs">{member.title}, {member.institution}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Program Review Committee */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    <span className="text-yellow-400">◆</span> Program Review Committee <span className="text-yellow-400">◆</span>
                </h2>
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {programReviewCommittee.map((member, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-300 hover:text-yellow-400 transition-colors">
                                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                                <div>
                                    <span className="font-medium">{member.name}</span>
                                    <p className="text-gray-500 text-xs">{member.institution}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Committees
