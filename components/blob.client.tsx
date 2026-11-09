"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uAmp;
  varying vec3 vNormal;
  varying vec3 vPos;
  varying vec3 vView;

  // Ashima 3D simplex noise
  vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
  vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
  vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
  float snoise(vec3 v){
    const vec2 C=vec2(1./6.,1./3.);
    const vec4 D=vec4(0.,.5,1.,2.);
    vec3 i=floor(v+dot(v,C.yyy));
    vec3 x0=v-i+dot(i,C.xxx);
    vec3 g=step(x0.yzx,x0.xyz);
    vec3 l=1.-g;
    vec3 i1=min(g.xyz,l.zxy);
    vec3 i2=max(g.xyz,l.zxy);
    vec3 x1=x0-i1+C.xxx;
    vec3 x2=x0-i2+C.yyy;
    vec3 x3=x0-D.yyy;
    i=mod289(i);
    vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
    float n_=.142857142857;
    vec3 ns=n_*D.wyz-D.xzx;
    vec4 j=p-49.*floor(p*ns.z*ns.z);
    vec4 x_=floor(j*ns.z);
    vec4 y_=floor(j-7.*x_);
    vec4 x=x_*ns.x+ns.yyyy;
    vec4 y=y_*ns.x+ns.yyyy;
    vec4 h=1.-abs(x)-abs(y);
    vec4 b0=vec4(x.xy,y.xy);
    vec4 b1=vec4(x.zw,y.zw);
    vec4 s0=floor(b0)*2.+1.;
    vec4 s1=floor(b1)*2.+1.;
    vec4 sh=-step(h,vec4(0.));
    vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
    vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
    vec3 p0=vec3(a0.xy,h.x);
    vec3 p1=vec3(a0.zw,h.y);
    vec3 p2=vec3(a1.xy,h.z);
    vec3 p3=vec3(a1.zw,h.w);
    vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
    p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
    vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);
    m=m*m;
    return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
  }

  void main() {
    float n = snoise(position * 1.1 + uTime * 0.35);
    vec3 p = position + normal * n * uAmp;
    vNormal = normalize(normalMatrix * normal);
    vPos = p;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vView = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`;

const fragmentShader = /* glsl */ `
  uniform float uTime;
  uniform vec3 uC1;
  uniform vec3 uC2;
  uniform vec3 uC3;
  varying vec3 vNormal;
  varying vec3 vPos;
  varying vec3 vView;

  void main() {
    // flowing gradient across the surface
    float a = smoothstep(-1.0, 0.8, vPos.y + sin(vPos.x * 2.0 + uTime * 0.5) * 0.3);
    float b = smoothstep(-0.2, 1.2, vPos.x * 0.8 - vPos.y * 0.3 + cos(uTime * 0.4) * 0.2);
    vec3 col = mix(uC1, uC2, a);
    col = mix(col, uC3, b);

    // soft rim glow
    float fres = pow(1.0 - max(dot(normalize(vNormal), normalize(vView)), 0.0), 2.5);
    col += fres * 0.45 * uC3;

    gl_FragColor = vec4(col, 1.0);
    #include <colorspace_fragment>
  }
`;

function BlobMesh() {
  const mesh = useRef<THREE.Mesh>(null!);
  const mat = useRef<THREE.ShaderMaterial>(null!);
  const prev = useRef(new THREE.Vector2());

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAmp: { value: 0.35 },
      uC1: { value: new THREE.Color("#1c131b") },
      uC2: { value: new THREE.Color("#c59f60") },
      uC3: { value: new THREE.Color("#db924b") },
    }),
    [],
  );

  useFrame(({ pointer }, delta) => {
    mat.current.uniforms.uTime.value += delta;

    // follow the cursor, slowly
    mesh.current.position.x = THREE.MathUtils.damp(
      mesh.current.position.x,
      pointer.x * 0.9,
      2.5,
      delta,
    );
    mesh.current.position.y = THREE.MathUtils.damp(
      mesh.current.position.y,
      pointer.y * 0.6,
      2.5,
      delta,
    );
    mesh.current.rotation.y += delta * 0.15;

    const speed = prev.current.distanceTo(pointer) / Math.max(delta, 0.001);
    prev.current.copy(pointer);
    const target = 0.35 + Math.min(speed * 0.2, 0.35);
    mat.current.uniforms.uAmp.value = THREE.MathUtils.damp(
      mat.current.uniforms.uAmp.value,
      target,
      3,
      delta,
    );
  });

  return (
    <mesh ref={mesh} scale={1.7}>
      <icosahedronGeometry args={[1, 64]} />
      <shaderMaterial
        ref={mat}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}

export default function Blob() {
  return (
    <Canvas
      dpr={1}
      camera={{ position: [0, 0, 5], fov: 45 }}
      eventSource={document.body}
      eventPrefix="client"
      className="!pointer-events-none"
    >
      <BlobMesh />
    </Canvas>
  );
}
