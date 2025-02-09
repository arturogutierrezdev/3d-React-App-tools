import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

//new scene
const scene = new THREE.Scene();
//geometry
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
//perspectivecamera
const fov = 75;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1000 ;
const camera = new THREE.PerspectiveCamera( fov, aspect, near, far);
//objectloader
//const loader = new OBJLoader();
//const card = '/card.obj'
//loader.load(
 //   card,
   // function ( object ) {
//		scene.add( object );
  //  },
    // called when resource is loaded
   /// function ( xhr ) {
	//	console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	//},
	// called when loading has errors
	//function ( error ) {
//		console.log( 'An error happened' );
//	}
//);

//initiates webglrender
const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer( {antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
// lights
const ambientLight = new THREE.AmbientLight( 0xcccccc, 0.5 );
scene.add( ambientLight );
const pointLight = new THREE.PointLight( 0xffffff, 3.0 );
scene.add( pointLight );
//sets camera position
camera.position.z = 5;
//animates
function animate() {
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );

function render(time) {
	time *= 0.001;  // convert time to seconds
   
	cube.rotation.x = time;
	cube.rotation.y = time;
   
	renderer.render(scene, camera);
   
	requestAnimationFrame(render);
  }
  requestAnimationFrame(render)