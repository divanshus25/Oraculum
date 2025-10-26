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

        float rand(vec2 n) {
          return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
        }

        float drawStreak(vec2 uv, vec2 startPos, vec2 endPos, float width) {
          vec2 pa = uv - startPos;
          vec2 ba = endPos - startPos;
          float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
          float dist = length(pa - ba * h);

          float streak = smoothstep(width, 0.0, dist);
          float fade = pow(1.0 - h, 2.0);

          return streak * fade;
        }

        void main() {
          vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;

          vec3 color = vec3(0.01, 0.01, 0.05);

          for (float i = 0.0; i < 12.0; i++) {
            float seed = i * 43.758;
            float offset = rand(vec2(seed, 0.0)) * 100.0;
            float t = mod(iTime * 0.4 + offset, 8.0);

            float phase = t / 8.0;
            float fadeIn = smoothstep(0.0, 0.05, phase);
            float fadeOut = smoothstep(0.95, 1.0, phase);
            float visibility = fadeIn * (1.0 - fadeOut);

            if (visibility < 0.01) continue;

            float startX = -1.5 + rand(vec2(seed, 1.0)) * 0.8;
            float startY = 1.2 - rand(vec2(seed, 2.0)) * 0.4;

            float angle = -2.2 - rand(vec2(seed, 3.0)) * 0.6;
            float speed = 1.2 + rand(vec2(seed, 4.0)) * 0.8;
            float dist = t * speed;

            vec2 dir = vec2(cos(angle), sin(angle));
            vec2 startPos = vec2(startX, startY);
            vec2 endPos = startPos + dir * dist;

            float trailLength = 0.15 + rand(vec2(seed, 5.0)) * 0.2;
            vec2 trailStart = endPos - dir * trailLength;

            float width = 0.003 + rand(vec2(seed, 6.0)) * 0.004;
            float intensity = drawStreak(uv, trailStart, endPos, width);

            vec3 streakColor;
            float colorChoice = rand(vec2(seed, 7.0));
            if (colorChoice < 0.4) {
              streakColor = vec3(0.1, 0.8, 1.0);
            } else if (colorChoice < 0.7) {
              streakColor = vec3(0.0, 0.9, 1.0);
            } else {
              streakColor = vec3(0.2, 1.0, 0.9);
            }

            float brightness = 1.5 + rand(vec2(seed, 8.0)) * 1.0;
            color += streakColor * intensity * visibility * brightness;
          }

          vec2 center = uv;
          float vignette = 1.0 - smoothstep(0.4, 1.3, length(center));
          color *= (0.7 + 0.3 * vignette);

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
