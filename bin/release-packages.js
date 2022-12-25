const multiRelease = require('multi-semantic-release')
const path = require('path')

const RELEASE_LIST = [
    'eslint-config',
    'tsconfig',
]

const releasePaths = RELEASE_LIST.map(pkgName => path.join(__dirname, '..', 'packages', pkgName, 'package.json'))

multiRelease(releasePaths)
    .then(() => console.log('DONE ✅'))