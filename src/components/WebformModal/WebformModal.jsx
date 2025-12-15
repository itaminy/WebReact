import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Webform } from "../Webform/Webform";
import "./WebformModal.css";

export const WebformModal = ({ isOpen, onClose }) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    let opacity = 0;

    const animateIn = () => {
      opacity += 0.08;
      if (overlayRef.current) {
        overlayRef.current.style.opacity = opacity;
      }
      if (opacity < 1) {
        requestAnimationFrame(animateIn);
      }
    };

    requestAnimationFrame(animateIn);
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className="webform-modal-overlay"
      onClick={onClose}
    >
      <div
        className="webform-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="webform-modal-close"
          onClick={onClose}
        >
          ✕
        </button>

        <Webform />
      </div>
    </div>,
    document.body
  );
};