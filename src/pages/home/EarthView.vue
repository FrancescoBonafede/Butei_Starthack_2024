<template>
	<div id="earth"></div>
</template>

<script setup>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import getStarfield from "./getStarfield.js";
// import { getFresnelMat } from "./getFresnelMat.js";

import earthMap from "@/assets/textures/8081_earthmap10k.jpg";
import earthSpec from "@/assets/textures/8081_earthspec10k.jpg";
import earthBump from "@/assets/textures/8081_earthbump10k.jpg";

onMounted(function () {
	const w = window.innerWidth;
	const h = window.innerHeight;
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
	camera.position.z = 5;
	const renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(w, h);
	// document.body.appendChild(renderer.domElement);

	document.getElementById("earth").appendChild(renderer.domElement);

	const earthGroup = new THREE.Group();
	earthGroup.rotation.z = (-23.4 * Math.PI) / 180;
	scene.add(earthGroup);
	new OrbitControls(camera, renderer.domElement);
	const detail = 12;
	const loader = new THREE.TextureLoader();
	const geometry = new THREE.IcosahedronGeometry(1, detail);
	const material = new THREE.MeshPhongMaterial({
		map: loader.load(earthMap),
		specularMap: loader.load(earthSpec),
		bumpMap: loader.load(earthBump),
		bumpScale: 0.04,
	});
	const earthMesh = new THREE.Mesh(geometry, material);
	earthGroup.add(earthMesh);

	// const lightsMat = new THREE.MeshBasicMaterial({
	// 	map: loader.load("src/assets/textures/03_earthlights1k.jpg"),
	// 	blending: THREE.AdditiveBlending,
	// });
	// const lightsMesh = new THREE.Mesh(geometry, lightsMat);
	// earthGroup.add(lightsMesh);

	// const cloudsMat = new THREE.MeshStandardMaterial({
	// 	map: loader.load("src/assets/textures/04_earthcloudmap.jpg"),
	// 	transparent: true,
	// 	opacity: 0.8,
	// 	blending: THREE.AdditiveBlending,
	// 	alphaMap: loader.load("src/assets/textures/05_earthcloudmaptrans.jpg"),
	// 	// alphaTest: 0.3,
	// });
	// const cloudsMesh = new THREE.Mesh(geometry, cloudsMat);
	// cloudsMesh.scale.setScalar(1.003);
	// earthGroup.add(cloudsMesh);

	// const fresnelMat = getFresnelMat();
	// const glowMesh = new THREE.Mesh(geometry, fresnelMat);
	// glowMesh.scale.setScalar(1.01);
	// earthGroup.add(glowMesh);

	const stars = getStarfield({ numStars: 2000 });
	scene.add(stars);

	const sunLight = new THREE.DirectionalLight(0xffffff);
	sunLight.position.set(-2, 0.5, 1.5);
	scene.add(sunLight);

	function animate() {
		requestAnimationFrame(animate);

		earthMesh.rotation.y += 0.002;
		// lightsMesh.rotation.y += 0.002;
		// cloudsMesh.rotation.y += 0.0023;
		// glowMesh.rotation.y += 0.002;
		stars.rotation.y -= 0.0002;
		renderer.render(scene, camera);
	}

	animate();

	function handleWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	}
	window.addEventListener("resize", handleWindowResize, false);
});
</script>

<style>
#earth canvas{
	width: 100% !important;
	height: 100vh !important;
	object-fit: cover;
}
</style>