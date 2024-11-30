import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; // Importar OrbitControls

const ThreeScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Crear escena, cámara y renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Crear un cubo
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Configurar la cámara
    camera.position.z = 5;

    // Agregar OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Habilitar la amortiguación para un movimiento más suave
    controls.dampingFactor = 0.25; // Factores de amortiguación
    controls.screenSpacePanning = false; // Evitar el paneo en espacio de pantalla

    // Animación
    const animate = () => {
      requestAnimationFrame(animate);

      // Actualizar los controles en cada fotograma
      controls.update();

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      // Limpiar recursos cuando el componente se desmonte
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="three-canvas" />;
};

export default ThreeScene;
