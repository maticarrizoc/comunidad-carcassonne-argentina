import { useState, useEffect } from "react";

import './CopyLinkButton.css'

export const CopyLinkButton = ({ shareUrl }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
    });
  };

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  return (
    <button className="copy-button" onClick={copyToClipboard}>
      {copied ? <i class="bi bi-check"></i> : <i className="bi bi-copy"></i>}
    </button>
  );
};

