# CV Saif

**My CV Next JS / Docker** 

Please go and change the `data/data.tsx` file to fill the CV/Resume with your personal information Feel free to use it and customize it as much as you desire.


## Getting Started

From your command line, clone and run this repository running:

```bash
# Clone this repository
$ git clone https://github.com/saif-tn/NextJS_CV.git

# Go into the repository
$ cd /my-cv

# Install dependencies
$ npm i

# Run the project
$ npm run dev
```

## Images and Fonts and public assets

Store any public assets in `public` folder and access to them as root folder in your website `./`


## Customize every section in `/data/data.tsx` with your own information.

```javascript
/* Change this file to have your own CV / Resume data */

const Resume: IResume = {
    /* Your summary and introduction */
    introduction: {
        name: "Saif",
        avatar: "./images/avatar.jpg",
        location: "Tunis, Tunisia",
        description: "Software Developer",
        position: "Fullstack Engineer"
    },
    /* Your work experience */
    experience: [ ... ],
    education: [ ... ],
    skills: [ ... ],
    languages: [ ... ],
    contact: [ ... ]
};
```

## Technologies used

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/) 
- [Typescript](https://www.typescriptlang.org/)




