import * as THREE from 'three';
// import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

//scene
const scene = new THREE.Scene();
//  Add stars
const starsGeometry = new THREE.BufferGeometry();
const starCount = 1000;
const starPositions = new Float32Array(starCount * 3);

for (let i = 0; i < starCount * 3; i++) {
  starPositions[i] = (Math.random() - 0.5) * 2000;
}

starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));

const starsMaterial = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 0.7,
  sizeAttenuation: true
});

const starField = new THREE.Points(starsGeometry, starsMaterial);
scene.add(starField);


const textureLoader = new THREE.TextureLoader();

const cubeTextureLoader = new THREE.CubeTextureLoader()
	cubeTextureLoader.setPath( '/static/cubeMap/')
	

const sunTexture = textureLoader.load('/static/sun.jpg')

const mercuryTexture = textureLoader.load('/static/mercury.jpg')

const venusTexture = textureLoader.load('/static/venus_surface.jpg')

const earthTexture = textureLoader.load('/static/earth_daymap.jpg')

const marsTexture = textureLoader.load('/static/mars.jpg')

const moonTexture = textureLoader.load('/static/moon.jpg')

const jupiterTexture = textureLoader.load('/static/jupiter.jpg')
const saturnTexture = textureLoader.load('/static/saturn.jpg')
const ringTexture = textureLoader.load('/static/saturn_ring.png')
const uranusTexture = textureLoader.load('/static/uranus.jpg')
const neptuneTexture = textureLoader.load('/static/neptune.jpg')
// const backgroundTexture = textureLoader.load('/static/stars_milky_way.jpg')

// scene.background =backgroundTextu
// re

const backgroundCubemap = cubeTextureLoader.load( [
				'px.png',
				'nx.png',
				'py.png',
				'ny.png',
				'pz.png',
				'nz.png'
			] );

scene.background = backgroundCubemap

const sphereGeometry = new THREE.SphereGeometry(1,64,64)


const sunMaterial = new THREE.MeshBasicMaterial({
   map: sunTexture
})

const mercuryMaterial = new THREE.MeshStandardMaterial({
   map: mercuryTexture
})

const venusMaterial = new THREE.MeshStandardMaterial({
   map: venusTexture
})

const earthMaterial = new THREE.MeshStandardMaterial({
   map: earthTexture
})

const marsMaterial= new THREE.MeshStandardMaterial({
   map: marsTexture
})
const moonMaterial = new THREE.MeshStandardMaterial({
   map: moonTexture
})
const jupiterMaterial = new THREE.MeshStandardMaterial({
  map: jupiterTexture
})
const saturnMaterial = new THREE.MeshStandardMaterial({
  map: saturnTexture

})
const uranusMaterial = new THREE.MeshStandardMaterial({
  map: uranusTexture
})
const neptuneMaterial = new THREE.MeshStandardMaterial({
  map: neptuneTexture
})

const sun = new THREE.Mesh(
  sphereGeometry,
  sunMaterial 
)
sun.scale.setScalar(5)
scene.add(sun)


const planets = [
 {
    name: "Mercury",
    radius: 0.5,
    distance: 10,
    speed: 0.01,
    material: mercuryMaterial,
    moons: [],
  },
  {
    name: "Venus",
    radius: 0.8,
    distance: 15,
    speed: 0.007,
    material: venusMaterial,
    moons: [],
  },
  {
    name: "Earth",
    radius: 1,
    distance: 20,
    speed: 0.005,
    material: earthMaterial,
    moons: [
      {
        name: "Moon",
        radius: 0.3,
        distance: 3,
        speed: 0.015,
      },
    ],
  },
  {
    name: "Mars",
    radius: 0.7,
    distance: 25,
    speed: 0.003,
    material: marsMaterial,
    moons: [
      {
        name: "Phobos",
        radius: 0.1,
        distance: 2,
        speed: 0.02,
      },
      {
        name: "Deimos",
        radius: 0.2,
        distance: 3,
        speed: 0.015,
        color: 0xffffff,
      },
    ],
  },
  {
    name: "Jupiter",
    radius: 2.5,
    distance: 35,
    speed: 0.001,
    color: 0xF4A460,
    material:jupiterMaterial,
    moons: [
      {
        name: "Io",
        radius: 0.2,
        distance: 3,
        speed: 0.025,
        color: 0xFF8C00
      },
      {
        name: "Europa",
        radius: 0.18,
        distance: 4,
        speed: 0.02,
        color: 0xD3D3D3
      },
      {
        name: "Ganymede",
        radius: 0.25,
        distance: 5,
        speed: 0.015,
        color: 0xB0C4DE
      },
      {
        name: "Callisto",
        radius: 0.22,
        distance: 6,
        speed: 0.01,
        color: 0x778899
      }
    ]
  },
  {
    name: "Saturn",
    radius: 2.2,
    distance: 45,
    speed: 0.0007,
    color: 0xDAA520,
    material:saturnMaterial,
    moons: [
      {
        name: "Titan",
        radius: 0.25,
        distance: 4,
        speed: 0.015,
        color: 0xFFA07A
      },
      {
        name: "Rhea",
        radius: 0.15,
        distance: 5,
        speed: 0.012,
        color: 0xD3D3D3
      },
      {
        name: "Iapetus",
        radius: 0.12,
        distance: 6,
        speed: 0.01,
        color: 0xA9A9A9
      },
      {
        name: "Dione",
        radius: 0.1,
        distance: 7,
        speed: 0.008,
        color: 0xF5F5F5
      }
    ],
    
  },
  {
    name: "Uranus",
    radius: 1.8,
    distance: 55,
    speed: 0.0005,
    color: 0x40E0D0,
    material:uranusMaterial,
    moons: [
      {
        name: "Titania",
        radius: 0.12,
        distance: 3,
        speed: 0.01,
        color: 0xE6E6FA
      },
      {
        name: "Oberon",
        radius: 0.11,
        distance: 4,
        speed: 0.008,
        color: 0xD3D3D3
      },
      {
        name: "Umbriel",
        radius: 0.1,
        distance: 5,
        speed: 0.006,
        color: 0xA9A9A9
      },
      {
        name: "Ariel",
        radius: 0.09,
        distance: 6,
        speed: 0.005,
        color: 0xF5F5F5
      }
    ]
  },
  {
    name: "Neptune",
    radius: 1.7,
    distance: 65,
    speed: 0.0003,
    color: 0x4169E1,
    material:neptuneMaterial,
    moons: [
      {
        name: "Triton",
        radius: 0.15,
        distance: 3,
        speed: 0.012,
        color: 0xE6E6FA
      },
      {
        name: "Proteus",
        radius: 0.1,
        distance: 4,
        speed: 0.008,
        color: 0xD3D3D3
      },
      {
        name: "Nereid",
        radius: 0.08,
        distance: 5,
        speed: 0.005,
        color: 0xA9A9A9
      }
    ]
  }
];

const createPlanet = (planet) => {
  const planetMesh = new THREE.Mesh(
    sphereGeometry,
    planet.material
  )
  planetMesh.scale.setScalar(planet.radius)
  planetMesh.position.x=planet.distance
  return planetMesh

}

const createMoon = (moon) => {
    const moonMesh = new THREE.Mesh(
      sphereGeometry,
      moonMaterial
    )
    moonMesh.scale.setScalar(moon.radius)
    moonMesh.position.x = moon.distance
    return moonMesh
  
}

let saturnRing;
const planetMeshes = planets.map ( (planet) => {
  const planetMesh = createPlanet(planet)
  scene.add(planetMesh)

  // Draw orbital path (circular line) for each planet
const orbitSegments = 128;
const orbitRadius = planet.distance;
const orbitGeometry = new THREE.BufferGeometry();
const orbitVertices = [];

for (let i = 0; i <= orbitSegments; i++) {
  const angle = (i / orbitSegments) * Math.PI * 2;
  const x = Math.sin(angle) * orbitRadius;
  const z = Math.cos(angle) * orbitRadius;
  orbitVertices.push(x, 0, z);
}

orbitGeometry.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(orbitVertices, 3)
);

const orbitMaterial = new THREE.LineBasicMaterial({ color: 0x888888, transparent: true, opacity: 0.2 });
const orbitLine = new THREE.LineLoop(orbitGeometry, orbitMaterial);
scene.add(orbitLine);

// // Add Saturn's ring if planet is Saturn
if (planet.name === 'Saturn') {

 const ringGeometry = new THREE.RingGeometry(planet.radius + 0.5, planet.radius + 2.2, 64);
    const ringMaterial = new THREE.MeshBasicMaterial({
      map:textureLoader.load('/static/saturn_ring.png'),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.7
    });
    saturnRing = new THREE.Mesh(ringGeometry, ringMaterial);
    // ring.rotation.x = Math.PI / 2.8;
     saturnRing.rotation.x = Math.PI / 2;
    // ring.rotation.z = Math.PI / 8;

   scene.add(saturnRing);
}

  planet.moons.forEach((moon) => {
    const moonMesh = createMoon(moon);
    planetMesh.add(moonMesh);
  })
  return planetMesh;
})

const ambientLight = new THREE.AmbientLight(
  0xffffff,
  0.1
)
scene.add(ambientLight)

const pointLight = new THREE.PointLight(
  0xffffff,
  2000
)
scene.add(pointLight)


const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth/window.innerHeight,
  0.1,
  400
)
camera.position.z = 100;
camera.position.y = 5;


const canvas = document.querySelector('canvas.threejs');
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));


const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.maxDistance = 200;
controls.minDistance = 20;


window.addEventListener('resize', () => {
  const aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

function addStars() {
  const starCount = 500;
  const starGeometry = new THREE.BufferGeometry();
  const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });

  const starPositions = [];
  for (let i = 0; i < starCount; i++) {
    const x = THREE.MathUtils.randFloatSpread(400);
    const y = THREE.MathUtils.randFloatSpread(400);
    const z = THREE.MathUtils.randFloatSpread(400);
    starPositions.push(x, y, z);
  }

  starGeometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(starPositions, 3)
  );

  const stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);
}
addStars();

const renderloop = () => {
  planetMeshes.forEach((planet, planetIndex) => {
    if (!planet || !planet.rotation || !planets[planetIndex]) return;
    
    const planetData = planets[planetIndex];
 
    planet.rotation.y += planetData.speed;
    planet.position.x = Math.sin(planet.rotation.y) * planetData.distance;
    planet.position.z = Math.cos(planet.rotation.y) * planetData.distance;

    if (planetData.name === "Saturn" && saturnRing) {
  saturnRing.position.copy(planet.position); // ring always stays around Saturn
}

    if (planetData.moons?.length > 0) {
      planet.children.forEach((moon, moonIndex) => {
        if (!moon || !planetData.moons[moonIndex]) return;
        const moonData = planetData.moons[moonIndex];
        moon.rotation.y += moonData.speed;
        moon.position.x = Math.sin(moon.rotation.y) * moonData.distance;
        moon.position.z = Math.cos(moon.rotation.y) * moonData.distance;
      });
    }
  });


  starField.rotation.y += 0.0002;
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(renderloop);
};
renderloop();
