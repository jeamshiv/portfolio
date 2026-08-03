# Jeamshiv — Portfolio

> **Code that ships. Design that sticks. Products people actually use.**

The personal portfolio of **Shivam Kumar (Jeamshiv)** — Full Stack & React Native developer. A fast, motion-rich showcase of web apps, mobile products, and the craft behind them.

**Live:** [jeamshiv.netlify.app](https://jeamshiv.netlify.app)

---

## Why this exists

Not just another “hello world” portfolio. This is a production-minded rebuild of my online home — built to feel premium, load fast, and tell a clear story: **who I am, what I build, and how I ship.**

From education apps with tens of thousands of students to polished web experiences, everything here is meant to open doors and start conversations.

---

## Highlights

- **Spotlight featured work** — NCERT New Books and more, front and center
- **Project deep-dives** — websites & apps with features, tech stacks, and screenshot galleries
- **Real products** — IGNOU Tutor (web + Android), NCERT New Books, and a growing project grid
- **Motion with purpose** — Framer Motion for presence, not noise
- **Dark / light ready** — glass UI, accent-driven theme system
- **Contact that validates** — Formik + Yup so messages arrive clean
- **Blog feed** — latest posts pulled live from the blog

---

## Featured products

| Product | What it is |
| --- | --- |
| **[NCERT New Books](https://play.google.com/store/apps/details?id=com.ncertnewbooks.app)** | React Native app — read, listen & revise Class 1–12 NCERT (Firebase + NativeWind) |
| **[IGNOU Tutor](https://ignoututor.com/)** | Next.js companion site for IGNOU students |
| **[IGNOU Tutor App](https://play.google.com/store/apps/details?id=com.ignoututor)** | Android app — materials, PYQs, grade cards, offline access (10k+ downloads) |

---

## Stack

| Layer | Tools |
| --- | --- |
| UI | React 19, TypeScript, Tailwind CSS 4 |
| Motion | Framer Motion, Swiper |
| Routing | React Router 7 |
| Forms | Formik + Yup |
| Icons | Lucide React |
| Build | Vite 8 |

---

## Quick start

```bash
# clone
git clone https://github.com/jeamshiv/portfolio.git
cd portfolio

# install
npm install

# run
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) — you’re in.

```bash
npm run build    # production build
npm run preview  # preview the build
npm run lint     # eslint
```

---

## Project structure

```
src/
├── components/     # layout, sections, UI, project detail
├── data/           # site config, services, experience, projects
│   └── projects/   # one file per project + tech registry
├── lib/            # animations, utils
└── pages/          # home, website/app project pages
public/
└── projects/       # feature images & app screenshots
```

Add a project? Drop a file in `src/data/projects/items/`, register it in `index.ts`, and put images under `public/projects/<id>/`.

---

## Let’s connect

Building something bold — or looking for a developer who ships?

- **Email:** [jeamshiv@gmail.com](mailto:jeamshiv@gmail.com)
- **LinkedIn:** [linkedin.com/in/jeamshiv](https://linkedin.com/in/jeamshiv)
- **GitHub:** [github.com/jeamshiv](https://github.com/jeamshiv)
- **Blog:** [jeamshiv.blogspot.com](https://jeamshiv.blogspot.com)

---

<p align="center">
  <strong>Built with React + Vite + a little obsession for craft.</strong><br/>
  © Jeamshiv — Faridabad, India
</p>
