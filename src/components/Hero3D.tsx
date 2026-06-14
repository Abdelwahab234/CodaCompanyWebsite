"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const green = new THREE.Color(0x00e96a);
    const darkGreen = new THREE.Color(0x004d23);

    // Main icosahedron wireframe
    const icoGeo = new THREE.IcosahedronGeometry(1.8, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: green,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    scene.add(ico);

    // Inner icosahedron (smaller, rotates opposite)
    const innerGeo = new THREE.IcosahedronGeometry(1.0, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: green,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    scene.add(inner);

    // Outer ring
    const ringGeo = new THREE.TorusGeometry(2.5, 0.01, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: green,
      transparent: true,
      opacity: 0.2,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    scene.add(ring);

    // Second ring (tilted)
    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.2, 0.01, 16, 80),
      new THREE.MeshBasicMaterial({ color: green, transparent: true, opacity: 0.12 })
    );
    ring2.rotation.x = Math.PI / 3;
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    // Floating particles
    const particleCount = 80;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: green,
      size: 0.03,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Glow sphere (subtle center glow)
    const glowGeo = new THREE.SphereGeometry(0.6, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: green,
      transparent: true,
      opacity: 0.04,
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    scene.add(glow);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Target rotation for smooth lerp
    const targetRotation = { x: 0, y: 0 };

    // Animation
    let animId: number;
    const startTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = (performance.now() - startTime) / 1000;

      // Mouse influence (smooth lerp)
      targetRotation.x = mouseRef.current.y * 0.5;
      targetRotation.y = mouseRef.current.x * 0.5;

      // Main icosahedron
      ico.rotation.x += (targetRotation.x - ico.rotation.x + t * 0.08) * 0.02;
      ico.rotation.y += (targetRotation.y - ico.rotation.y + t * 0.12) * 0.02;
      ico.rotation.z = Math.sin(t * 0.3) * 0.1;

      // Inner (opposite rotation)
      inner.rotation.x = -ico.rotation.x * 0.7 + t * 0.15;
      inner.rotation.y = -ico.rotation.y * 0.7 + t * 0.2;

      // Rings
      ring.rotation.z = t * 0.15;
      ring2.rotation.z = -t * 0.1;
      ring.rotation.x = Math.PI / 2 + Math.sin(t * 0.2) * 0.15;

      // Particles slowly rotate
      particles.rotation.y = t * 0.03;
      particles.rotation.x = Math.sin(t * 0.1) * 0.1;

      // Pulse glow
      glow.scale.setScalar(1 + Math.sin(t * 1.5) * 0.15);
      (glow.material as THREE.MeshBasicMaterial).opacity = 0.03 + Math.sin(t * 1.5) * 0.02;

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-3d"
    />
  );
}
