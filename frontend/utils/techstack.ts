const python =
[
    "Flask.py", "Django.py", "Py-cord.py", "pandas.py", "numpy.py",
    "matplotlib.py",
]

const javascript =
[
    "Vue.js", "Nuxt.js", "react.js", "TS.js",
]

const workFlow =
[
    "CMS", "GIT", "Sass", "Agile"
]

const databases =
[
    "MSSQL", "MySQL", "SQLite",
    "MongoDB", "PostgreSQL"
]
const frontend = [
    ...javascript,
    "CSS", "HTML"
]

const backend =
[
    ...python,
    ".NET", "C",
]
export const techStack:string[] = 
[
    ...backend,
    ...workFlow,
    ...frontend, 
    ...databases   
]
