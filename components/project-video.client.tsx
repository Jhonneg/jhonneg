"use client";

import { useEffect, useRef, useState } from "react";

type ProjectVideoProps = {
  name: string;
  mediaUrl: string;
  className: string;
  onError?: () => void;
};

export default function ProjectVideo({ name, mediaUrl, className, onError }: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [nearViewport, setNearViewport] = useState(false);
  const [inViewport, setInViewport] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const poster = `/posters/${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "")}.webp`;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => {
      setReducedMotion(motion.matches);
      const bounds = video.getBoundingClientRect();
      if (!motion.matches && bounds.top < innerHeight + 300 && bounds.bottom > -300) {
        setNearViewport(true);
      }
    };
    updateMotion();
    motion.addEventListener("change", updateMotion);

    if (!("IntersectionObserver" in window)) {
      setNearViewport(true);
      setInViewport(true);
      return () => motion.removeEventListener("change", updateMotion);
    }

    const loadingObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !motion.matches) {
          setNearViewport(true);
          loadingObserver.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );
    const playbackObserver = new IntersectionObserver(
      ([entry]) => setInViewport(entry.isIntersecting),
      { threshold: 0.1 },
    );
    loadingObserver.observe(video);
    playbackObserver.observe(video);

    return () => {
      motion.removeEventListener("change", updateMotion);
      loadingObserver.disconnect();
      playbackObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updatePlayback = () => {
      if (nearViewport && inViewport && !reducedMotion && !document.hidden) {
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    };
    updatePlayback();
    document.addEventListener("visibilitychange", updatePlayback);
    return () => document.removeEventListener("visibilitychange", updatePlayback);
  }, [nearViewport, inViewport, reducedMotion]);

  return (
    <video
      ref={videoRef}
      className={className}
      src={nearViewport && !reducedMotion ? mediaUrl.trim() : undefined}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      onError={onError}
    />
  );
}
