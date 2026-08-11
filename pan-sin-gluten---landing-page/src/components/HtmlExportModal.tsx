import React, { useState } from 'react';
import { Code, Copy, Download, X, Check } from 'lucide-react';
import { generateStandaloneHtml } from '../utils/generateStandaloneHtml';

interface HtmlExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HtmlExportModal: React.FC<HtmlExportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const htmlCode = generateStandaloneHtml();

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(htmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([htmlCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-stone-900 text-stone-100 rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col border border-amber-500/40 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-150">
        
        {/* Header */}
        <div className="bg-stone-950 p-4 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-amber-400" />
            <h3 className="font-bebas text-xl text-amber-200 tracking-wide">
              Código Standalone `index.html` Solicitado
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-1 rounded-lg hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content / Code Preview */}
        <div className="p-4 flex-1 overflow-y-auto bg-stone-950/90 font-mono text-xs text-amber-200/90">
          <pre className="whitespace-pre-wrap break-all">{htmlCode}</pre>
        </div>

        {/* Actions Bar */}
        <div className="bg-stone-900 p-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-stone-400">
            Archivo único autocontido listo para Vercel, Netlify o Cloudflare Pages.
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="bg-stone-800 hover:bg-stone-700 text-stone-200 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" /> Copiado!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-amber-400" /> Copiar Código
                </>
              )}
            </button>
            <button
              onClick={handleDownload}
              className="bg-amber-500 hover:bg-amber-400 text-stone-950 px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-colors cursor-pointer shadow-md"
            >
              <Download className="w-4 h-4" /> Baixar `index.html`
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
