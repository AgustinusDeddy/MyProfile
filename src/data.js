// import Slug from 'slug'

const profile = {
    name : 'Agustinus Deddy Arief Wibowo',
    photo: 'https://avatars.io/twitter/arief3dey',
    position: 'Software Engineer',
    nationality: 'Indonesian',
    phone: '+60166070273',
    email: 'deddyarief1@gmail.com',
    github: 'https://github.com/AgustinusDeddy',
    linkedin: '',
    domisili: 'Kuala Lumpur, Malaysia',
    marital: 'Single'
}

const experiences = [
    {id: 4, position: 'Software Engineer', company: 'Y Us Sdn Bhd (Evenesis)', period: 'July 2017 - present', 
        description: [
            `Revamp the microsite using C#, MVC, entity framework (DB first), css, bootstrap, SQL Server, javascript and jQuery with the concepts such as repository, unit of work and dependency injection (Ninject)`, 
            `Maintain and enhance current back office and new microsite`,
            `Automate operation tasks using windows service`
    ]},
    {id: 3, position: 'Software Engineer', company: 'ABS Multimedia Sdn Bhd', period: 'February 2017 - June 2017', description:[`Develop and maintain palm oil plantation management system. It is developed
        based on Java, JSP and MySQL`]},
    {id: 2, position: 'Software Engineer', company:'Nettium Sdn Bhd', period: 'January 2015 - January 2017', description: [`ATAS (now known as Self Drvn) project. Develop human resource website utilizing technologies such as C#, ASP .Net,
        MVC, entity framework, SQL Server, bootstrap, CSS, jQuery`, `Automation project. Develop windows application that perform web and desktop application
        automation project build on top of Selenium, SQL Server database, window service
        and web services created using C#.`]},
    {id: 1, position: 'Research Assistant', company: 'Multimedia University', period: 'January 2013 - December 2014', description:[`Develop landslide detection using image processing and susceptibility mapping project
        utilizing machine learning mainly developed on Matlab.`]}
]

const educations = [
    {id:1, degree: 'Bachelor of Electronics Engineering Majoring in Computer', institution: 'Multimedia University', period:'2008-2012', results: '3.14 (4.00)'},
    {id:2, degree: 'Foundation', institution: 'Multimedia University', period: '2007', results: ''},
    {id : 3, degree: 'Senior High School', institution: 'SMA Kolese de Britto', period: '2004 - 2007', results: ''},
    {id: 4, degree: 'Junior High School', institution: 'SLTP Pangudi Luhur I', period: '2001 - 2004', results: ''}
]

const certifications = [
    {id:1, name: 'CCNA 1-4 and Security Training', institution: 'Multimedia University', organization: 'Cisco',period: '' },
    {id:2, name: 'Introduction reverse engineering & Malware training', institution: 'Multimedia University', organization: 'F-Secure', period: '' },
    {id:3, name: 'CUDA for GPGPU basic programming workshop', institution: 'Multimedia University', organization: '', period: '' },
    {id: 4, name: 'InSAR and PSInSAR training', institution: 'Chiba University', organization: '', period: '' },
    {id: 5, name: 'ASP .Net Training', institution: 'Multimedia University', organization: 'Microsoft', period: '' },
    {id: 6, name: 'MTA Web Development Fundamentals', institution: 'Multimedia University', organization: 'Microsoft', period: 'April 2014' },
    {id: 7, name: 'Progamming in C# : 70-483', institution: '', organization: 'Microsoft', period: 'September 2016' },
    {id: 8, name: 'Developing ASP .Net MVC Web Application', institution: '', organization: 'Microsoft', period: 'December 2017' }
]

export {
    profile,
    experiences,
    educations,
    certifications
  }