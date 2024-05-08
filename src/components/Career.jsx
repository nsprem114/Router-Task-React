const Career = () => {
  const Carddata = [
    {
      id: 1,
      name: "Data Analyst",
      price: 75000,
      description:
        "Before we move into the next section, ensure you have a good grip on data science essentials like Python, MongoDB, Pandas, NumPy, Tableau & PowerBI Data Methods. If you are looking for a detailed course on Data Science, you can join GUVI’s Data Science Career Program with Placement Assistance. You'll also learn about the trending tools and technologies and work on some real-time projects.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Data-Analyst.png",
    },
    {
      id: 2,
      name: "Business Analyst",
      price: 55000,
      description:
        "Business analysts bridge the gap between data science and business operations. They use data to identify opportunities for improvement, develop strategies, and communicate findings to key stakeholders.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Business-Analyst.png",
    },
    {
      id: 3,
      name: "Data Scientist Manager",
      price: 65000,
      description:
        "Data science managers oversee the entire data science team, ensuring that projects are on track and aligned with the company's objectives. They may not code themselves but understand the technical aspects of data science.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Data-Scientist-Manager.png",
    },
    {
      id: 4,
      name: "Data Science Consultant",
      price: 75000,
      description:
        "Consultants provide expert advice to businesses on data science strategies and solutions. They don't necessarily code but guide organizations on how to leverage data for competitive advantages.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Data-Science-Consultant.png",
    },
    {
      id: 5,
      name: "Machine Learning Engineer",
      price: 98000,
      description:
        "While this role typically involves coding, there’s a growing demand for Machine Learning Engineers with a strong focus on model deployment and optimization rather than writing code from scratch. They ensure models work efficiently in a production environment.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Machine-Learning-Engineer.png",
    },
    {
      id: 6,
      name: "Blackbox Users",
      price: 55000,
      description:
        "Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well, it depends on many facets. Because just starting off, many roles don’t really require you to code and based on how advanced you want to get, programming may or may not be all that important for you.In this blog, we cover the relationships between cyber security tooling and expertise, and some on-the-job scenarios where it’s beneficial knowing how to code. and ending with some advice for all the non-programmers out there who are just starting out. So without further ado, Let's break it down!",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
    },
    {
      id: 7,
      name: "Tool Operators",
      price: 55000,
      description:
        "In the next category, we have tool operators who have years of experience in using a variety of software. And they can creatively chain them together in real-world scenarios. These guys are the backbone of companies IT and security firms and are often the workhorses responsible.But for those without the ability to code, the downside is that when you're in a situation without an immediately apparent tool available, there's not much you can do about it. Taking the time to learn some programming can really amplify your ability at this stage. Since it lets you automate many of the tasks that you once performed manually.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
    },
    {
      id: 8,
      name: "Operator Developers",
      price: 65000,
      description:
        "The operator-developer types tend to be some of the best cyber practitioners you’ll meet in the field and are hard to come by, depending on the team you’re on. In terms of overall ability, you’ll find that people who can chain tools together or write custom-built code have increasing levels of expertise that are orders of magnitude higher. And those with programming backgrounds tend to progress faster and deeper in their learning journeys than those who don’t.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
    },
    {
      id: 9,
      name: "Operator Vs Developer Axis",
      price: 75000,
      description:
        "Now on the operator versus developer axis, you’re going to see a lot more scripts closer to the operator side. Whereas more compiled languages on the developer side. This isn’t true across the board, since people can bounce around the spectrum, but it’s a decent rule of thumb.Since on the operator side of the spectrum, your focus is primarily on the pre-built tools with some degree of customized automation. In this case, it’s not massively critical to have a coding background, most computer science programs are much more heavily focused on topics like applied math, programming theory, and software development at the academic level. We personally suggest it’s better to start off learning scripting. As it’s quick to pick up and a bit more pragmatic for day-to-day technical tasks.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png",
    },
    {
      id: 10,
      name: "Master in Cybersecurity",
      price: 98000,
      description:
        "With more and more daily business activities moving online, it is becoming increasingly important for companies to ensure that no one is attempting to steal their data or money. According to Cybercrime Magazine, cybercrime will cost the world $10.5 trillion annually by 2025! That’s why cybersecurity plays a significant role in business. Cybersecurity involves the protection of computer-based equipment and information from unintended or unauthorized access change or destruction.It is a process or state of protecting as well as recovering computer systems, devices, networks, and programs from any form of cyber attacks ",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-945x495.png",
    },
    {
      id: 11,
      name: "E-Commerce Website",
      price: 35000,
      description:
        "The very first and best full-stack development project idea is creating an e-commerce website/application. As e-commerce websites require almost every concept of full-stack development that is from the front-end to the back-end, starting your career with this project can really upscale your skillset.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
    },
    {
      id: 12,
      name: "Online Learning App",
      price: 45000,
      description:
        "The next best full-stack development project idea is creating an online learning app. Creating this application will help you in adding value to your resume Begin by defining the platform’s objectives, selecting a suitable tech stack for both frontend and backend development, and designing a robust database architecture to store user data and course content.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Learning-apps.webp",
    },
    {
      id: 13,
      name: "Social Media Platform",
      price: 25000,
      description:
        "Creating a social media platform is another easy yet exciting full-stack development project. You need to have features like creating profiles, adding pictures to your profile, connecting with friends, etc. You need to be good in skills like programming languages, frameworks such as React or Angular, and database management systems.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Social-media-platforms-1.webp",
    },
    {
      id: 14,
      name: "Task Management Application",
      price: 75000,
      description:
        "Task Management Application is another best full-stack development projects that beginners should definitely try. To build this application, you need to have a quality knowledge of programming languages (JavaScript, Python, Java), frameworks, database management systems, APIs, etc.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Full-stack-development-project-ideas.webp",
    },
  ];
  return (
    <div className="container">
      <h1 className="text-center p-3 bg-warning">
        MOST OF THE CAREER IN TECH FIELDS
      </h1>
      <div className="row">
        {Carddata.map((data) => (
          <div className="col-md-4 mt-3" key={data.id}>
            <div className="card">
              <img
                src={data.image}
                className="card-img-top"
                style={{ width: "100%", height: "20%" }}
              />
              <div className="card-body">
                <h1 className="card-title" style={{ fontSize: "100%" }}>
                  {data.name}
                </h1>
                <p
                  className="card-text"
                  style={{ overflow: "scroll", height: "200px" }}
                >
                  {data.description}
                </p>
                <strong>PROGRAMM FEE : {data.price}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
