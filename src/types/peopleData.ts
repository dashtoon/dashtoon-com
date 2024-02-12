
export interface Person {
    id: number;
    name: string;
    position: string;
    imageSrc: string;
}

export const peopleData: Person[] = [
    {id: 1, name: 'Lalith', position: 'COO', imageSrc: require('../assets/images/people/Lalith.png')},
    {id: 2, name: 'Sanidhya', position: 'CEO', imageSrc: require('../assets/images/people/Sand.png')},
    {id: 3, name: 'Soumyadeep', position: 'CTO', imageSrc: require('../assets/images/people/Soumyadeep.png')},
    { id: 4, name: 'Amogh', position: 'Product-AI', imageSrc: require('../assets/images/people/Amogh.png') },
    { id: 5, name: 'Anmol Chawla', position: 'Product Engineer', imageSrc: require('../assets/images/PhotosOfPeople/Anmol Chawla - Engineer.png') },
    { id: 6, name: 'Ayush Panchal', position: 'Content Operations', imageSrc: require('../assets/images/PhotosOfPeople/Ayush Panchal - Content Operations.png') },
    { id: 7, name: 'Ayushman', position: 'Research Engineer', imageSrc: require('../assets/images/PhotosOfPeople/Ayushman - Research Engineer.png') },
    { id: 8, name: 'Bhuwanesh Kumar', position: 'Content Operations', imageSrc: require('../assets/images/PhotosOfPeople/Bhuwanesh Kumar - Content  Operatons .JPG') },
    { id: 9, name: 'Diptisikha Dash', position: 'Program Manager', imageSrc: require('../assets/images/PhotosOfPeople/Diptisikha Dash-Program Manager.jpg') },
    { id: 10, name: 'Harsha', position: 'Product Operations Executive', imageSrc: require('../assets/images/PhotosOfPeople/Harsha - Product Operations Executive.jpg') },
    { id: 11, name: 'Madhur', position: 'Growth', imageSrc: require('../assets/images/people/Madhur.png') },
    { id: 12, name: 'Maheswaran Parameswaran', position: 'Engineer', imageSrc: require('../assets/images/PhotosOfPeople/Maheswaran Parameswaran - Engineer.png') },
    { id: 13, name: 'Mohammad Zaryab', position: 'Engineer', imageSrc: require('../assets/images/PhotosOfPeople/Mohammad Zaryab - Product Engineer.png') },
    { id: 14, name: 'Naman Rastogi', position: 'Research Engineer', imageSrc: require('../assets/images/PhotosOfPeople/Naman Rastogi - Research Engineer.jpg') },
    { id: 15, name: 'Paritosh', position: 'Content', imageSrc: require('../assets/images/people/Paritosh.png') },
    { id: 16, name: 'Puranjai Pratap', position: 'Product Designer', imageSrc: require('../assets/images/PhotosOfPeople/Puranjai Pratap - Product Designer.jpeg') },
    { id: 17, name: 'Riddhi Shah', position: 'Program Manager', imageSrc: require('../assets/images/PhotosOfPeople/Riddhi Shah - Program Manager.jpeg') },
    { id: 18, name: 'Rishi', position: 'Product-Apps', imageSrc: require('../assets/images/people/Rishi.png') },
    { id: 19, name: 'Rohit Srivastava', position: 'Creative Producer', imageSrc: require('../assets/images/PhotosOfPeople/Rohit Srivastava - Creative Producer.jpg') },
    { id: 20, name: 'Tanveer Ali', position: 'Growth @ Dashtoon Studio', imageSrc: require('../assets/images/PhotosOfPeople/Tanveer Ali - Growth @ Dashtoon Studio.png') }
];
export default Person;
