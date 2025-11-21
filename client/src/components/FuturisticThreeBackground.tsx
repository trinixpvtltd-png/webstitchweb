import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function FuturisticThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 80;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0); // transparent
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current!.appendChild(renderer.domElement);

    // Create glowing nodes
    const NODES = 32;
    const nodes: THREE.Mesh[] = [];
    const nodeData: { velocity: THREE.Vector3 }[] = [];
    const nodeGeometry = new THREE.SphereGeometry(1.5, 24, 24);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x7c3aed });
    for (let i = 0; i < NODES; i++) {
      const mesh = new THREE.Mesh(nodeGeometry, nodeMaterial.clone());
      mesh.position.set(
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 60
      );
      (mesh.material as THREE.MeshBasicMaterial).color.setHSL(
        0.7 + Math.random() * 0.1,
        0.7,
        0.7
      );
      scene.add(mesh);
      nodes.push(mesh);
      nodeData.push({
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.2,
          (Math.random() - 0.5) * 0.2,
          (Math.random() - 0.5) * 0.2
        ),
      });
    }

    // Line geometry
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xa5b4fc,
      transparent: true,
      opacity: 0.18,
    });
    let lines: THREE.Line[] = [];

    function animate() {
      // Move nodes
      for (let i = 0; i < NODES; i++) {
        const mesh = nodes[i];
        mesh.position.add(nodeData[i].velocity);
        // Bounce
        const axes: Array<"x" | "y" | "z"> = ["x", "y", "z"];
        const limits = [40, 25, 30];
        axes.forEach((axis, idx) => {
          const limit = limits[idx];
          if (mesh.position[axis] > limit || mesh.position[axis] < -limit) {
            nodeData[i].velocity[axis] *= -1;
          }
        });
      }
      // Remove old lines
      for (const l of lines) scene.remove(l);
      lines = [];
      // Draw lines between close nodes
      for (let i = 0; i < NODES; i++) {
        for (let j = i + 1; j < NODES; j++) {
          const a = nodes[i].position;
          const b = nodes[j].position;
          const dist = a.distanceTo(b);
          if (dist < 18) {
            const geometry = new THREE.BufferGeometry().setFromPoints([a, b]);
            const line = new THREE.Line(geometry, lineMaterial);
            scene.add(line);
            lines.push(line);
          }
        }
      }
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();

    // Responsive
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none select-none"
      aria-hidden="true"
      style={{ background: "transparent" }}
    />
  );
}
