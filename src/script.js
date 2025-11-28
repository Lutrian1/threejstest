import * as THREE from 'three'

// Sizes
const sizes = {
    width: 800,
    height: 800,
}

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1) // Vormt de box
const  material = new THREE.MeshBasicMaterial({ color: 0xff000 }) // Texture (Kleur in dit geval)
const mesh = new THREE.Mesh(geometry, material) // Maak het 3d object, box met texture
mesh.position.y = 2
mesh.position.x = -1
mesh.position.z = -2

mesh.position.normalize()
console.log(mesh.position.length())

scene.add(mesh)

// Camera 
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) // 75 = FOV
camera.position.z = 3
scene.add(camera)

console.log(mesh.position.distanceTo(camera.position)) //Vector 3 (Alles na .position)

// Rendering
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)