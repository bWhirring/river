// import * as fs from 'fs'
// import * as path from 'path'
// const PSD = require('psd')
// import { layerNameToPinyin, convert } from './utils/'
// import { Generator } from './generator'
// let generator = new Generator()

// const psd = PSD.fromFile(path.resolve(__dirname, "../psd/aaa.psd"))

// psd.parse()
// // console.log(psd.tree().export());
// // fs.writeFileSync('test.json', JSON.stringify(psd.tree()))
// // return
// // let node = psd.tree().descendants()[0]
// // console.log(node, 'aa');
// // console.log(node.get('typeTool').export(), 'node.get('typeTool').export()node.get('typeTool').export()');
// // return

// let tree = psd.tree().export()

// let config = {
//   root: {},
//   children: []
// }

// let list = []

// let { children, document } = tree
// let { width, height } = document

// config.root = { width, height }

// let a = psd.tree().childrenAtPath('a/b')[0].toPng().pack()
// console.log(a, 'aa');
// a.pipe(fs.createWriteStream('a.png'))
// return

// let f = 75
// function build(children, group = '', test = '') {
//   children.forEach(async child => {
//     let { type, name, visible } = child
//     if (visible) {
//       if (type === 'group') {
//         list.push({
//           id: layerNameToPinyin(name),
//           parentId: layerNameToPinyin(name),
//           type: 'group',
//           key: layerNameToPinyin(name),
//           title: name
//         })
//         build(child.children, name + '/', name)
//       } else if (type === 'layer') {
//         list.push({
//           parentId: layerNameToPinyin(test || name),
//           id: layerNameToPinyin(name),
//           key: layerNameToPinyin(name),
//           title: name,
//           ...child
//         })
//         // renderConfigChildren(child)

//         let currentLayer = psd.tree().childrenAtPath(group + name)[0]
//         let type = currentLayer.get('typeTool')
//         if (type) {
//           // for (let i in type) {
//           //   if (i !== 'obj') console.log(i, type[i]);
//           // }
//         }
//         // psd.tree().childrenAtPath(group + name)[0] && psd.tree().childrenAtPath(group + name)[0].saveAsPng(`./png/${name}.png`)
//         // html.renderContainer(name)
//       }
//     }

//   })
// }
// build(children)
// console.log(list, 'listlist')
// fs.writeFileSync('./test.json', JSON.stringify(list, null, 4))
// config.children = convert(list)
// // console.log(config.children, 'config.childrenconfig.children');
// let container = generator.buildHTML(config.children)
// // console.log(html.getHTML());
// fs.writeFileSync('test.html', generator.getHTML())
// // fs.writeFileSync('test.json', JSON.stringify(config, null, 4))

// // config.children = convert(list)


// function renderConfigChildren(child) {
//   let { left, top, width, height, name } = child
//   config.children.push(child)
// }

// // console.log(config, 'configconfig');
// // let container = html.generatorHTML()


console.log(11);