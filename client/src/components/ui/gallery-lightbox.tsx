'use client';

import { useEffect, useRef } from 'react';
import PhotoSwipe from 'photoswipe';
import 'photoswipe/style.css';
import { type GalleryImage } from '../../lib/modern-gallery-config';

interface GalleryLightboxProps {
  isOpen: boolean;
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
}

export function GalleryLightbox({
  isOpen,
  images,
  currentIndex,
  onClose
}: GalleryLightboxProps) {
  const pswpRef = useRef<HTMLDivElement>(null);
  const photoSwipeInstance = useRef<PhotoSwipe | null>(null);

  useEffect(() => {
    if (!isOpen || !pswpRef.current || images.length === 0) {
      if (photoSwipeInstance.current) {
        photoSwipeInstance.current.destroy();
        photoSwipeInstance.current = null;
      }
      return;
    }

    // Convert images to PhotoSwipe format
    const items = images.map((image, index) => ({
      src: image.src,
      width: image.width || 1200,
      height: image.height || 800,
      alt: image.alt || `Immagine ${index + 1}`,
      // Remove all captions and titles for minimal lightbox
    }));

    // Initialize PhotoSwipe with minimal options
    photoSwipeInstance.current = new PhotoSwipe({
      gallery: pswpRef.current,
      children: 'a',
      pswpModule: () => import('photoswipe'),
      dataSource: items,
      index: currentIndex,
      bgOpacity: 0.9,
      spacing: 0.12,
      allowPanToNext: true,
      loop: true,
      pinchToClose: true,
      closeOnVerticalDrag: true,
      mouseMovePan: true,
      // Hide all UI elements for minimal lightbox
      showHideAnimationType: 'zoom',
      showAnimationDuration: 333,
      hideAnimationDuration: 333,
      // Disable captions
      imageClickAction: 'next',
      bgClickAction: 'close',
      tapAction: 'close',
      doubleTapAction: 'zoom',
      // Disable counter and captions
      counter: false,
      zoom: false,
    });

    // Handle close event
    photoSwipeInstance.current.on('close', () => {
      onClose();
    });

    // Handle keyboard navigation
    photoSwipeInstance.current.on('keydown', (e) => {
      if (e.originalEvent.key === 'Escape') {
        photoSwipeInstance.current?.close();
      }
    });

    // Announce image changes to screen readers
    photoSwipeInstance.current.on('change', () => {
      const currentIndex = photoSwipeInstance.current?.currIndex || 0;
      const totalImages = images.length;
      const currentImage = images[currentIndex];
      
      // Create a live region for announcements
      let liveRegion = document.getElementById('pswp-live-region');
      if (!liveRegion) {
        liveRegion = document.createElement('div');
        liveRegion.id = 'pswp-live-region';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        document.body.appendChild(liveRegion);
      }
      
      if (liveRegion) {
        liveRegion.textContent = `Immagine ${currentIndex + 1} di ${totalImages}: ${currentImage.alt}`;
      }
    });

    photoSwipeInstance.current.init();

    return () => {
      if (photoSwipeInstance.current) {
        photoSwipeInstance.current.destroy();
        photoSwipeInstance.current = null;
      }
    };
  }, [isOpen, images, currentIndex, onClose]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || images.length === 0) return null;

  return (
    <>
      <div
        ref={pswpRef}
        className="pswp"
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label="Lightbox galleria immagini"
      >
        {/* PhotoSwipe will render here */}
      </div>
      {/* Live region for screen reader announcements */}
      <div
        id="pswp-live-region"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />
    </>
  );
}