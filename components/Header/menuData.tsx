import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    newTab: false,
    path: "/#features",
  },
  {
    id: 3,
    title: "Blog",
    newTab: false,
    path: "/blog",
  },
  {
    id: 4,
    title: "Services",
    newTab: false,
    path: "/services/cybersecurity",
    submenu: [
      {
        id: 41,
        title: "Cyber Security",
        newTab: false,
        path: "/services/cybersecurity",
      },
      {
        id: 42,
        title: "Software Development",
        newTab: false,
        path: "/services/software-development",
      },
      {
        id: 43,
        title: "DevOps",
        newTab: false,
        path: "/services/devops",
      },
      {
        id: 44,
        title: "Digital Marketing",
        newTab: false,
        path: "/services/digital-marketing",
      },
    ]
  },
  {
    id: 5,
    title: "Contact Us",
    newTab: false,
    path: "/contact",
  },
];

export default menuData;
