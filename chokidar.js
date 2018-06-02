const chokidar = require('chokidar')
const child = require('child_process')

const tailwind = chokidar.watch(['tailwind.js', './src/tailwind.css'])

tailwind.on('change', (event, path) => {
  child.exec('npm run build-tailwind')
  console.log('Reprocessing Tailwind Files')
})
