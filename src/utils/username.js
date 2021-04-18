const ADJECTIVES = [
    'boundless',
    'plausible',
    'gauri',
    'ayush',
    'slim',
    'real',
    'shady',
]

const OBJECTS = [
    'peaches',
    'watermelon',
    'bowl',
    'mirror',
    'mormont',
    'stark',
    'targeryan',
]

function genRandomUsername() {
    const adj = ADJECTIVES[Math.floor(Math.random() * 7)] 
    const obj = OBJECTS[Math.floor(Math.random() * 7)]
    return `${adj}-${obj}` 
}

module.exports = {
    genRandomUsername
}