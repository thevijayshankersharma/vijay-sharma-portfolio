import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';
import './Scene3D.css';

const Card = ({ position, rotation, color, delay }) => {
    const mesh = useRef();
    
    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        mesh.current.rotation.y = rotation[1] + Math.sin(time + delay) * 0.2;
        mesh.current.position.y = position[1] + Math.cos(time + delay) * 0.1;
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh position={position} rotation={rotation} ref={mesh}>
                <boxGeometry args={[0.7, 1, 0.02]} />
                <meshStandardMaterial 
                    color={color} 
                    emissive={color}
                    emissiveIntensity={0.5}
                    metalness={0.8}
                    roughness={0.2}
                />
            </mesh>
        </Float>
    );
};

const Cards = () => {
    const cards = useMemo(() => {
        const temp = [];
        const colors = ['#ff0033', '#ffffff', '#ff0033', '#111111'];
        for (let i = 0; i < 20; i++) {
            temp.push({
                position: [
                    (Math.random() - 0.5) * 15,
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 5
                ],
                rotation: [
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                    0
                ],
                color: colors[i % colors.length],
                delay: Math.random() * 10
            });
        }
        return temp;
    }, []);

    return (
        <>
            {cards.map((props, i) => (
                <Card key={i} {...props} />
            ))}
        </>
    );
};

const Rig = () => {
    const { camera, mouse } = useThree();
    const vec = new THREE.Vector3();

    return useFrame(() => {
        camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 2, camera.position.z), 0.05);
        camera.lookAt(0, 0, 0);
    });
};

const Scene3D = () => {
    return (
        <div className="scene-container">
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
                <color attach="background" args={['#000000']} />
                <fog attach="fog" args={['#000000', 5, 20]} />
                
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#ff0033" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
                
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                
                <Cards />
                <Rig />
                
                <Environment preset="night" />
            </Canvas>
        </div>
    );
};

export default Scene3D;
