import Image from "next/image";
export default function Home() {
  const item = [{
    Name: "John Doe",
    Job: "Software Developer",
    Phone: "+1-123-456-7890",
    Email: "example1@example.com",
    Address: "1234 Street Name, City, Country",
    CompanyName: "Tech Solutions Inc.",
    Bio: "A passionate software developer with a focus on building web applications and exploring new technologies."
  },
  {
    Name: "Jane Smith",
    Job: "Project Manager",
    Phone: "+1-987-654-3210",
    Email: "example2@example.com",
    Address: "5678 Road Name, City, Country",
    CompanyName: "Innovative Projects LLC",
    Bio: "Experienced project manager, coordinating large teams and overseeing complex projects."
  },
  {
    Name: "Alice Johnson",
    Job: "UX Designer",
    Phone: "+1-234-567-8901",
    Email: "example3@example.com",
    Address: "91011 Avenue Name, City, Country",
    CompanyName: "Creative Design Studio",
    Bio: "Focused on creating intuitive user experiences through thoughtful design and user research."
  },
  {
    Name: "Bob Lee",
    Job: "Data Scientist",
    Phone: "+1-345-678-9012",
    Email: "example4@example.com",
    Address: "1213 Park Lane, City, Country",
    CompanyName: "DataTech Analytics",
    Bio: "Specialized in data analysis, machine learning, and data visualization."
  },
  {
    Name: "Sarah Miller",
    Job: "Digital Marketing Specialist",
    Phone: "+1-456-789-0123",
    Email: "example5@example.com",
    Address: "1415 Business Blvd, City, Country",
    CompanyName: "Marketing Solutions Corp.",
    Bio: "Expert in digital marketing strategies, SEO, and content creation."
  },
  {
    Name: "Michael Brown",
    Job: "HR Manager",
    Phone: "+1-567-890-1234",
    Email: "example6@example.com",
    Address: "1617 Corporate Dr, City, Country",
    CompanyName: "PeopleFirst Ltd.",
    Bio: "Experienced HR professional focused on employee engagement and organizational development."
  },
  {
    Name: "Olivia Davis",
    Job: "Graphic Designer",
    Phone: "+1-678-901-2345",
    Email: "example7@example.com",
    Address: "1819 Creative Way, City, Country",
    CompanyName: "DesignWorks Agency",
    Bio: "Creative designer with a flair for creating visually compelling graphics and branding."
  },
  {
    Name: "James Wilson",
    Job: "Full-stack Developer",
    Phone: "+1-789-012-3456",
    Email: "example8@example.com",
    Address: "2021 Main St, City, Country",
    CompanyName: "CodeWorks Ltd.",
    Bio: "Full-stack developer with experience in both front-end and back-end technologies."
  },
  {
    Name: "Chloe Taylor",
    Job: "Marketing Manager",
    Phone: "+1-890-123-4567",
    Email: "example9@example.com",
    Address: "2223 Commerce Ave, City, Country",
    CompanyName: "BrandBoosters",
    Bio: "Skilled marketing professional with a track record of successful campaigns and brand growth."
  },
  {
    Name: "Ethan Moore",
    Job: "Product Manager",
    Phone: "+1-901-234-5678",
    Email: "example10@example.com",
    Address: "2425 Industry Rd, City, Country",
    CompanyName: "Product Innovations Inc.",
    Bio: "Focused on driving product development and enhancing user satisfaction."
  },
  {
    Name: "Sophia Martin",
    Job: "Web Developer",
    Phone: "+1-012-345-6789",
    Email: "example11@example.com",
    Address: "2627 Internet Blvd, City, Country",
    CompanyName: "WebWorks Solutions",
    Bio: "Building responsive and dynamic websites with a focus on user experience and performance."
  },
  {
    Name: "Mason Clark",
    Job: "SEO Specialist",
    Phone: "+1-123-456-7890",
    Email: "example12@example.com",
    Address: "2829 Search Ave, City, Country",
    CompanyName: "SEO Masters",
    Bio: "Specialized in SEO strategies to improve website rankings and drive organic traffic."
  },
  {
    Name: "Isabella Rodriguez",
    Job: "Content Strategist",
    Phone: "+1-234-567-8901",
    Email: "example13@example.com",
    Address: "3031 Content St, City, Country",
    CompanyName: "Content Creators Hub",
    Bio: "Experienced content strategist, specializing in developing high-impact content for businesses."
  },
  {
    Name: "Lucas Lewis",
    Job: "Database Administrator",
    Phone: "+1-345-678-9012",
    Email: "example14@example.com",
    Address: "3233 Database Rd, City, Country",
    CompanyName: "DataSolutions",
    Bio: "Managing and maintaining databases, ensuring data integrity and performance."
  },
  {
    Name: "Amelia Walker",
    Job: "Mobile App Developer",
    Phone: "+1-456-789-0123",
    Email: "example15@example.com",
    Address: "3435 Mobile Way, City, Country",
    CompanyName: "AppDev Studios",
    Bio: "Developing mobile applications with a focus on functionality and user experience."
  },
  {
    Name: "Liam Scott",
    Job: "Customer Support Manager",
    Phone: "+1-567-890-1234",
    Email: "example16@example.com",
    Address: "3637 Support Ave, City, Country",
    CompanyName: "CustomerCare Solutions",
    Bio: "Leading customer support teams and ensuring excellent service delivery."
  },
  {
    Name: "Ella Green",
    Job: "Sales Executive",
    Phone: "+1-678-901-2345",
    Email: "example17@example.com",
    Address: "3839 Sales St, City, Country",
    CompanyName: "SalesForce Ltd.",
    Bio: "Driving sales strategies and customer relationships to exceed revenue goals."
  },
  {
    Name: "Jack Harris",
    Job: "Financial Analyst",
    Phone: "+1-789-012-3456",
    Email: "example18@example.com",
    Address: "4041 Finance Rd, City, Country",
    CompanyName: "Finance Insights Group",
    Bio: "Analyzing financial data to support business decisions and improve profitability."
  }]
  function Cards() {
    return (
      <div className="flex gap-16">
        <div className="flex w-[336px] h-[192px] bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="w-1/2 p-4 bg-gray-50 flex flex-col justify-between relative">
            <div>
              <span className="text-2xl font-bold text-blue-600">{item[0].Name}</span>
              <p className="text-sm text-gray-500">{item[0].Job}</p>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-blue-500">📞</span>
                <p className="text-gray-600">{item[0].Phone}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✉️</span>
                <p className="text-gray-600">{item[0].Email}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500">📍</span>
                <p className="text-gray-600">{item[0].Address}</p>
              </div>
            </div>
            <div className="relative flex ">
              <img src="/vector8.png" className="absolute top-[-192px] left-[136px] z-10" />
              <img src="/vector9.png" className="absolute top-[-192px] left-[141px] z-10" />
              <img src="/vector10.png" className="absolute top-[-192px] left-[146px] z-10" />
            </div>
          </div>
          <div className="w-1/2 bg-black text-white flex flex-col justify-center items-center relative">
            <div className="bg-black"/>
                <img src="/Logo0001.png" alt="Logo" className="" />
            <div className="z-10 text-center flex justify-center items-center">
              <div className="text-center">
                <h2 className="text-lg font-bold">{item[0].CompanyName}</h2>
                <p className="text-sm">test</p>

              </div>
            </div>
            <div className="z-10 mt-6">
              <div className="bg-white p-2 rounded-lg shadow-md">
                <Image
                  src="/QRCode@3x.png"
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black w-[336px] h-[192px] rounded-2xl flex justify-center items-center relative z-10">
          <div className="text-white">
            <img src="Logo0001.png" />
            <h1>{item[0].CompanyName}</h1>
            <h2>tested</h2>
          </div>
          <img src="Shape.png" className="absolute bottom-[0px] z-0" />
        </div>
      </div>
    )
  }
  let Arr = []
  for(let i = 0 ; i < 10 ; i++){
    Arr.push(<Cards></Cards>)
  }
  return (
    <div className="grid grid-cols-3 gap-4">
      {Arr}
    </div>
  );
}
