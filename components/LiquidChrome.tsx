import React, { useRef, useEffect } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';

import './LiquidChrome.css';

interface LiquidChromeProps extends React.HTMLAttributes<HTMLDivElement> {
    baseColor?: [number, number, number];
    speed?: number;
    amplitude?: number;
    frequencyX?: number;
    frequencyY?: number;
    interactive?: boolean;
}

export const LiquidChrome: React.FC<LiquidChromeProps> = ({
    baseColor = [0, 0.1, 0.4],
    speed = 5,
    amplitude = 0.5,
    frequencyX = 3,
    frequencyY = 2,
    interactive = false,
    ...props
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const renderer = new Renderer({ antialias: false });
        const gl = renderer.gl;
        gl.clearColor(1, 1, 1, 1);

        const vertexShader = `
      attribute vec2 position;
      attribute vec2 uv;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

        const fragmentShader = `
      precision highp float;
      uniform float uTime;
      uniform vec3 uResolution;
      uniform vec3 uBaseColor;
      uniform float uAmplitude;
      uniform float uFrequencyX;
      uniform float uFrequencyY;
      uniform vec2 uMouse;
      varying vec2 vUv;

      void main() {
          vec2 uvCoord = vUv;
          vec2 fragCoord = uvCoord * uResolution.xy;
          vec2 uv = (2.0 * fragCoord - uResolution.xy) / min(uResolution.x, uResolution.y);

          // Drastically reduced iterations for high performance
          for (float i = 1.0; i < 4.0; i++){
              uv.x += uAmplitude / i * cos(i * uFrequencyX * uv.y + uTime + uMouse.x * 3.14);
              uv.y += uAmplitude / i * cos(i * uFrequencyY * uv.x + uTime + uMouse.y * 3.14);
          }

          vec3 color = clamp(uBaseColor / max(abs(sin(uTime - uv.y - uv.x)), 0.1), 0.0, 1.0);
          gl_FragColor = vec4(color, 1.0);
      }
    `;

        const geometry = new Triangle(gl);
        const program = new Program(gl, {
            vertex: vertexShader,
            fragment: fragmentShader,
            uniforms: {
                uTime: { value: 0 },
                uResolution: {
                    value: new Float32Array([gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height])
                },
                uBaseColor: { value: new Float32Array(baseColor) },
                uAmplitude: { value: amplitude },
                uFrequencyX: { value: frequencyX },
                uFrequencyY: { value: frequencyY },
                uMouse: { value: new Float32Array([0, 0]) }
            }
        });
        const mesh = new Mesh(gl, { geometry, program });

        function resize() {
            const scale = 0.5; // Render at half resolution for massive performance boost
            renderer.setSize(container.offsetWidth * scale, container.offsetHeight * scale);
            const canvas = gl.canvas;
            canvas.style.width = '100%';
            canvas.style.height = '100%';
            const resUniform = program.uniforms.uResolution.value as Float32Array;
            resUniform[0] = gl.canvas.width;
            resUniform[1] = gl.canvas.height;
            resUniform[2] = gl.canvas.width / gl.canvas.height;
        }
        window.addEventListener('resize', resize);
        resize();

        function handleMouseMove(event: MouseEvent) {
            const rect = container.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width;
            const y = 1 - (event.clientY - rect.top) / rect.height;
            const mouseUniform = program.uniforms.uMouse.value as Float32Array;
            mouseUniform[0] = x;
            mouseUniform[1] = y;
        }

        function handleTouchMove(event: TouchEvent) {
            if (event.touches.length > 0) {
                const touch = event.touches[0];
                const rect = container.getBoundingClientRect();
                const x = (touch.clientX - rect.left) / rect.width;
                const y = 1 - (touch.clientY - rect.top) / rect.height;
                const mouseUniform = program.uniforms.uMouse.value as Float32Array;
                mouseUniform[0] = x;
                mouseUniform[1] = y;
            }
        }

        if (interactive) {
            container.addEventListener('mousemove', handleMouseMove);
            container.addEventListener('touchmove', handleTouchMove);
        }

        const TARGET_FPS = 30;
        const FRAME_INTERVAL = 1000 / TARGET_FPS;
        let lastTime = 0;
        let animationId: number;
        function update(t: number) {
            animationId = requestAnimationFrame(update);
            if (t - lastTime < FRAME_INTERVAL) return;
            lastTime = t;
            program.uniforms.uTime.value = t * 0.001 * speed;
            renderer.render({ scene: mesh });
        }
        animationId = requestAnimationFrame(update);

        container.appendChild(gl.canvas);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
            if (interactive) {
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('touchmove', handleTouchMove);
            }
            if (gl.canvas.parentElement) {
                gl.canvas.parentElement.removeChild(gl.canvas);
            }
            gl.getExtension('WEBGL_lose_context')?.loseContext();
        };
    }, [baseColor, speed, amplitude, frequencyX, frequencyY, interactive]);

    return <div ref={containerRef} className="liquidChrome-container" {...props} />;
};

export default LiquidChrome;
