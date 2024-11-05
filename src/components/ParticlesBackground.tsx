import { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#0891b2"
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.5,
            random: false
          },
          size: {
            value: 3,
            random: true
          },
          links: {
            enable: true,
            distance: 150,
            color: "#0891b2",
            opacity: 0.2,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "out"
            },
            bounce: false,
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.5
              }
            }
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default ParticlesBackground;