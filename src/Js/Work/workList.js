export const setWorkList = (resources) => [
  {
    id: 1,
    name: "Portfolio",
    category: "3D Web",
    textureImg: resources.items.portfolio,
    technologies: ["Javascript", "Three.js", "Webpack", "Gsap"],
    hrefCr: "https://github.com/ThePiteroXx/portfolio",
    shortDesc: "Magic world! 🪄",
    desc: "This is my first major project that took me about 3 months of my time. I'm still improving it, tweaking it if I have free time. My portfolio was mainly created using the three.js library. I created some models using blender and integrated them into the browser and added animations.",
    subpoints: [
      {
        title: "Problems",
        desc: "The biggest problem in this project was the creation of shaders because I needed the right mathematical knowledge to create them. So before I reached the final result I had to do a lot of articles on the subject."
      }
    ]
  },
  {
    id: 2,
    name: "Messup",
    category: "app",
    textureImg: resources.items.messup,
    technologies: ["React", "Firebase", "Sass", "RTL"],
    hrefCr: "https://github.com/ThePiteroXx/MessUp",
    hrefLive: "https://messup.netlify.app/",
    shortDesc: "Chat app like messanger 😄",
    desc: "MessUp - it is small, simple chat-app built using react + firebase, mostly inspired by Messenger. It is my first project which used firebase technology. As a user, you can send invitations to other users who are registered and write messages to them. You can change your avatar and password. If you have forgotten your password, you can retrieve it at your email address.",
    subpoints: []
  },
  {
    id: 3,
    name: "diet app",
    category: "app",
    textureImg: resources.items.dietapp,
    technologies: ["React", "Redux", "Styled Components"],
    hrefCr: "https://github.com/ThePiteroXx/diet-app",
    hrefLive: "https://peterskubisz-diet-app.netlify.app/",
    shortDesc: "Are you hungry? 🍖",
    desc: "Diet app was created with Spooncular API. The user enters their basic information, and based on that information, the app calculates his caloric demands. The app show you example diets that you can use and how to prepare them. The user can search for various other meals according to his preferences. if he finds a dish he likes, he can add it to his favorite meals.",
    subpoints: []
  },
  {
    id: 4,
    name: "moviestan",
    category: "web",
    textureImg: resources.items.moviestan,
    technologies: ["React", "Typescript", "TailwindCSS"],
    hrefCr: "https://github.com/ThePiteroXx/movies-web",
    hrefLive: "https://moviestan.netlify.app",
    shortDesc: "Do you want to watch a movie? 🎥",
    desc: "It's a Netflix-inspired landing page where you can search for any movie you want. During the development of this site I practiced skills such as typescript and tailwind.",
    subpoints: [
      {
        title: "Technology",
        desc: "I created this project mainly to practice Typescript because I had no experience with it before. I also found that I would use the Tailwind library because I was very interested in its usability."
      }
    ]
  }
];
