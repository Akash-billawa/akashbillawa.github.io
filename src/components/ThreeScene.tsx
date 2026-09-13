"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0b0c, 0.08);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    );
    camera.position.set(3.5, 0.5, 7.5);
    camera.lookAt(3.5, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const core = new THREE.Group();
    core.position.set(3.5, 0, 0);
    scene.add(core);

    const shellGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const shellMat = new THREE.LineBasicMaterial({
      color: 0xc8ff00,
      transparent: true,
      opacity: 0.12,
    });
    const shell = new THREE.LineSegments(
      new THREE.WireframeGeometry(shellGeo),
      shellMat,
    );
    core.add(shell);

    const innerGeo = new THREE.IcosahedronGeometry(1.0, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.025,
      wireframe: true,
    });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    core.add(inner);

    const accentGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const accentMat = new THREE.LineBasicMaterial({
      color: 0xc8ff00,
      transparent: true,
      opacity: 0.35,
    });
    const edges = new THREE.EdgesGeometry(accentGeo);
    const accent = new THREE.LineSegments(edges, accentMat);
    core.add(accent);

    const pointsCount = 600;
    const positions = new Float32Array(pointsCount * 3);
    for (let i = 0; i < pointsCount; i++) {
      const r = 2.6 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pointsMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.015,
      transparent: true,
      opacity: 0.35,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(pointsGeo, pointsMat);
    scene.add(points);

    const keyLight = new THREE.DirectionalLight(0xc8ff00, 0.6);
    keyLight.position.set(2, 1, 3);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x4060a0, 0.3);
    fillLight.position.set(-3, -1, -2);
    scene.add(fillLight);

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const targetRot = { x: 0, y: 0 };

    let scrollY = 0;
    let animId = 0;

    function onResize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }

    function onMouseMove(e: MouseEvent) {
      mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.ty = (e.clientY / window.innerHeight) * 2 - 1;
    }

    function onScroll() {
      scrollY = window.scrollY;
    }

    function animate() {
      animId = requestAnimationFrame(animate);

      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;

      targetRot.y = mouse.x * 0.25 + scrollY * 0.0008;
      targetRot.x = -mouse.y * 0.2;

      core.rotation.y += (targetRot.y - core.rotation.y) * 0.06;
      core.rotation.x += (targetRot.x - core.rotation.x) * 0.06;

      inner.rotation.y -= 0.0025;
      inner.rotation.x -= 0.0015;

      accent.rotation.y = core.rotation.y * 1.2;
      accent.rotation.x = core.rotation.x * 0.8;

      points.rotation.y += 0.0006;
      points.rotation.x += 0.0003;

      const camY = -mouse.y * 0.15 + 0.5;
      const camX = mouse.x * 0.15 + 3.5;
      camera.position.x += (camX - camera.position.x) * 0.04;
      camera.position.y += (camY - camera.position.y) * 0.04;
      camera.lookAt(3.5, 0, 0);

      renderer.render(scene, camera);
    }

    onResize();
    animate();

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);

      shellGeo.dispose();
      innerGeo.dispose();
      accentGeo.dispose();
      pointsGeo.dispose();
      shellMat.dispose();
      innerMat.dispose();
      accentMat.dispose();
      pointsMat.dispose();

      renderer.dispose();
      renderer.forceContextLoss();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      aria-hidden="true"
    />
  );
}