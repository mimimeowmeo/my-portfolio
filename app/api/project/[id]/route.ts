// import { projectList } from "@/data/mock";
import { NextResponse } from "next/server";

type Params = { id: string };

export async function GET(request: Request, context: { params: Params }) {
  const data = projectList.find(
    (project) => project.urlName === context.params.id
  );
  return NextResponse.json(
    {
      data,
    },
    { status: 200 }
  );
}
const projectList = [
  {
    id: "platform-bo",
    bannerUrl: "",
    title: "Back Office & Microservices",
    description: "",
    previewImage: "/assets/platform-bo-banner.jpeg",
    urlName: "platform-bo",
    year: ["2020", "2022"],
    article: [
      {
        id: 1,
        direction: "col",
        priorityType: "text",
        templateTitlePrefix: "FUNPODIUM",
        templateTitle:
          "Every Microservice Forms The Foundation of Success Back Office.",
        templateSubtitle: "2020 - 2022 Team CMS",
        carousel: true,
        imageList: [
          {
            src: "/assets/bouser-service1.png",
            alt: "bo-user-service",
          },
          {
            src: "/assets/role1.png",
            alt: "bo",
          },
          {
            src: "/assets/role2.png",
            alt: "bo",
          },
          {
            src: "/assets/role2.png",
            alt: "bo",
          },
          {
            src: "/assets/role3.png",
            alt: "bo",
          },
          {
            src: "/assets/role4.png",
            alt: "bo",
          },
          {
            src: "/assets/role5.png",
            alt: "bo",
          },
          {
            src: "/assets/role6.png",
            alt: "bo",
          },
          {
            src: "/assets/role7.png",
            alt: "bo",
          },
          {
            src: "/assets/mission1.png",
            alt: "bo",
          },
          {
            src: "/assets/mission2.png",
            alt: "bo",
          },
          {
            src: "/assets/mission3.png",
            alt: "bo",
          },
          {
            src: "/assets/mission4.png",
            alt: "bo",
          },
        ],
        textList: [
          {
            titlePrefix: "",
            title: "",
            subtitle: "",
            paragraph:
              "Platform BO is a software tailored towards five betting sites across South East Asia. Each service in Platform BO is developed based on individual user requests but designed as microservices to facilitate future integration into other projects. Each service encompasses functionalities commonly used across multiple betting platforms and is customized for individual clients. Additionally, a role service manages access permissions for each client. This design enables each service to be utilized by all betting platforms and prepares for future scalability to accommodate additional platforms.<br />Usually, systems that require extensive data manipulation and various computations tend to perform these operations server-side. However, due to the large volume of data we were dealing with, the round trip time (RTT) was significant, resulting in delayed updates. To address this issue, I implemented much of the processing and manipulation logic on the frontend, while reserving specialized computation work and business logic for the backend.<br />Recognizing the potential for errors and data pollution in these computations, it became evident that robust assertion mechanisms were necessary. As a solution, I developed a set of fail-safe optimized utility libraries incorporating solid type-checks and validation techniques. These measures ensured swift yet accurate data diffing and transformation, preserving data integrity and minimizing runtime errors and usability issues.<br />After two and a half years of work, six services had been launched, encompassing: <br />1. User Service\n2. Role Service\n3. Rank Service\n4. Member Service\n5. Notification Service\n6. Mission Service <br />The outcome not only met but surpassed expectations, outperforming the previous version in terms of speed, accessibility, and reliability.",
          },
        ],
      },
      {
        id: 2,
        direction: "row",
        priorityType: "text",
        carousel: false,
        imageList: [{ src: "/assets/user-login.png", alt: "user-login" }],
        textList: [
          {
            titlePrefix: "",
            title: "TEAM",
            subtitle: "",
            paragraph: "Shangwei Tsai | Lance Yu",
          },
          {
            titlePrefix: "",
            title: "ROLE",
            subtitle: "Front-end Developer",
            paragraph:
              "As one of the initial two project leads and later the sole lead in the project's advanced stages, I independently developed five microservices and maintained one. My contributions were integral to the overall project's success.",
          },
          {
            titlePrefix: "",
            title: "CHALLENGE",
            subtitle: "",
            paragraph:
              "Our business logic API, housed in our Malaysia office, demanded close coordination between Funpodium's backend team, responsible for the primary API gateway, and my CMS team and PHP developers, who implemented an additional layer. Serving as the pivotal liaison, I regularly coordinate with all three teams to address product API needs and facilitate productive meetings.",
          },
          {
            titlePrefix: "",
            title: "RESULTS",
            subtitle: "",
            paragraph:
              "After several highly efficient meetings, each microservice was successfully launched and user permissions were meticulously assigned. These services are now in use by multiple clients and have garnered praise from all users.",
          },
        ],
      },
    ],
  },
  {
    id: "funpodium",
    bannerUrl: "/assets/funpodium1.png",
    title: "Official Website",
    description: "Hello",
    previewImage: "/assets/funpodium.png",
    urlName: "official-website",
    year: "2021",
    article: [
      {
        id: 1,
        direction: "row",
        priorityType: "text",
        templateTitlePrefix: "FUNPODIUM",
        templateTitle:
          "Embark on Our Journey: From Office to the World - Our Inaugural Official Website",
        templateSubtitle: "2021 Team CMS",
        urlLink: "https://www.funpodium.net/",
        imageList: [
          {
            src: "/assets/funpodium2.png",
            alt: "intro",
          },
        ],
        textList: [
          {
            titlePrefix: "",
            title: "ROLE",
            subtitle: "Front-end Developer",
            paragraph: "",
          },
          {
            titlePrefix: "",
            title: "CHALLENGE",
            subtitle: "",
            paragraph:
              "I am thrilled to have the opportunity to work on my first B2C website in my career. It's truly an honor, and I'm incredibly excited.",
          },
          {
            titlePrefix: "",
            title: "RESULTS",
            subtitle: "",
            paragraph:
              "The front-end development team is dedicated to presenting Funpodium's product information and job opportunities in a user-friendly manner on our responsive official website, ensuring easy access for all users.",
          },
        ],
      },
    ],
  },
  {
    id: "paas",
    bannerUrl: "",
    title: "Champ Back Office",
    description: "",
    previewImage: "/assets/paas2.png",
    urlName: "paas-bo",
    year: ["2022", "2023"],
    article: [
      {
        id: 1,
        direction: "col",
        priorityType: "text",
        templateTitlePrefix: "CHAMP",
        templateTitle: "An Intuitive and User-friendly Software.",
        templateSubtitle: "2022 - 2023 Team FRONTEND",
        carousel: true,
        imageList: [
          {
            src: "/assets/paas2.png",
            alt: "bo",
          },
          {
            src: "/assets/paas4.png",
            alt: "bo",
          },
          {
            src: "/assets/paas5.png",
            alt: "bo",
          },
          {
            src: "/assets/paas9.png",
            alt: "bo",
          },
          {
            src: "/assets/paas11.png",
            alt: "bo",
          },
          {
            src: "/assets/paas12.png",
            alt: "bo",
          },
          {
            src: "/assets/paas13-1.png",
            alt: "bo",
          },
          {
            src: "/assets/paas13.png",
            alt: "bo",
          },
        ],
        textList: [
          {
            titlePrefix: "",
            title: "TEAM",
            subtitle: "",
            paragraph: "Jason | Leo | Samuel | Lance",
          },
          {
            titlePrefix: "",
            title: "ROLE",
            subtitle: "Front-end Developer",
            paragraph: "",
          },
          {
            titlePrefix: "",
            title: "ABOUT",
            subtitle: "",
            paragraph:
              "This is a fresh project for a betting company, initiated with Next.js. We managed to launch the first version in just seven months, which was a significant achievement for our team. Our clients were pleased with the outcome and provided positive feedback.<br />Working together with three other frontend developers, we embraced the agile principles of the Scrum framework. Daily stand-up meetings provided us with a platform to synchronize our efforts, while weekly sprint planning and review sessions ensured that we remained aligned with project goals and timelines.<br />To expedite development, I recommended Ant Design and Tailwind CSS for their efficient UI creation capabilities, thanks to their ready-to-use components and class names. For managing data fetching and state, we leveraged React Query. React Query simplified the management of asynchronous data fetching and caching, providing a convenient way to handle API responses and manage data updates in real-time. For state management, we relied on Zustand. Zustand is a lightweight state management library for React applications. To ensure type safety and code consistency, we used TypeScript.<br />Overall, these technologies combined to provide a robust and efficient development environment, enabling us to deliver a high-quality and feature-rich product to our clients.",
          },
        ],
      },
    ],
  },
];
