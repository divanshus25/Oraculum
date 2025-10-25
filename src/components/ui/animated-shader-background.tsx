import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnimatedShaderBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      },
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float iTime;
        uniform vec2 iResolution;

        #define NUM_OCTAVES 3
        #define NUM_STREAKS 8.0

        float rand(vec2 n) {
          return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
        }

        float noise(vec2 p) {
          vec2 ip = floor(p);
          vec2 u = fract(p);
          u = u*u*(3.0-2.0*u);

          float res = mix(
            mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
            mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x), u.y);
          return res * res;
        }

        float fbm(vec2 x) {
          float v = 0.0;
          float a = 0.3;
          vec2 shift = vec2(100);
          mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
          for (int i = 0; i < NUM_OCTAVES; ++i) {
            v += a * noise(x);
            x = rot * x * 2.0 + shift;
            a *= 0.4;
          }
          return v;
        }

        float streak(vec2 uv, vec2 pos, float angle, float length, float width) {
          vec2 dir = vec2(cos(angle), sin(angle));
          vec2 diff = uv - pos;
          float proj = dot(diff, dir);
          float dist = length(diff - dir * proj);

          float alongStreak = smoothstep(length, 0.0, proj) * smoothstep(-0.1, 0.0, proj);
          float acrossStreak = smoothstep(width, 0.0, dist);

          return alongStreak * acrossStreak;
        }

        void main() {
          vec2 uv = gl_FragCoord.xy / iResolution.xy;
          vec2 centered = (gl_FragCoord.xy - iResolution.xy * 0.5) / iResolution.y;

          vec3 color = vec3(0.0, 0.0, 0.02);

          for (float i = 0.0; i < NUM_STREAKS; i++) {
            float seed = i * 234.567;
            float timeOffset = rand(vec2(seed, seed + 1.0)) * 10.0;
            float t = iTime * 0.3 + timeOffset;

            float xStart = rand(vec2(seed, 0.0)) * 2.0 - 0.5;
            float yStart = rand(vec2(seed, 1.0)) * 2.0 - 0.5;

            float angle = -0.5 - rand(vec2(seed, 2.0)) * 0.3;
            float speed = 0.3 + rand(vec2(seed, 3.0)) * 0.4;

            vec2 pos = vec2(
              xStart + cos(angle) * t * speed,
              yStart + sin(angle) * t * speed
            );

            pos = mod(pos + 1.5, 3.0) - 1.5;

            float streakLength = 0.3 + rand(vec2(seed, 4.0)) * 0.4;
            float streakWidth = 0.002 + rand(vec2(seed, 5.0)) * 0.003;

            float s = streak(centered, pos, angle, streakLength, streakWidth);

            float colorVar = rand(vec2(seed, 6.0));
            vec3 streakColor;
            if (colorVar < 0.6) {
              streakColor = vec3(0.0, 0.6 + colorVar * 0.4, 1.0);
            } else {
              streakColor = vec3(0.0, 1.0, 0.8);
            }

            float fadeIn = smoothstep(0.0, 0.1, fract(t / 3.0));
            float fadeOut = smoothstep(1.0, 0.9, fract(t / 3.0));
            float fade = fadeIn * fadeOut;

            color += streakColor * s * fade * 0.8;
          }

          float vignette = smoothstep(1.2, 0.3, length(centered));
          color *= vignette;

          gl_FragColor = vec4(color, 1.0);
        }
      `
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let frameId: number;
    const animate = () => {
      material.uniforms.iTime.value += 0.016;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full" />;
};

export default AnimatedShaderBackground;
