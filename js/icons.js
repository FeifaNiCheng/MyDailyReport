var gradients=[
  'linear-gradient(135deg,#c8d8f5 0%,#e0c8f0 30%,#f0c8d8 60%,#c8f0e8 100%)',
  'linear-gradient(135deg,#d8e8ff 0%,#e8d0f5 40%,#f5d0e0 70%,#d0f5e8 100%)',
  'linear-gradient(135deg,#f5e0c8 0%,#f0c8d8 35%,#d8c8f0 65%,#c8e0f5 100%)',
  'linear-gradient(135deg,#d0f0e8 0%,#c8d8f5 35%,#e0c8f0 65%,#f5d0e0 100%)',
  'linear-gradient(135deg,#e8d0f5 0%,#c8f0e8 30%,#d8e8ff 60%,#f5d0c8 100%)',
  'linear-gradient(135deg,#f0c8d8 0%,#d8c8f0 35%,#c8d8f5 65%,#d0f5e8 100%)',
  'linear-gradient(135deg,#c8f5e0 0%,#d8e8ff 40%,#e0c8f0 70%,#f5d0d8 100%)',
  'linear-gradient(135deg,#d8d0f5 0%,#f5d0e0 30%,#c8f0e8 60%,#c8d8f5 100%)'
];
function applyRandomGradient(){
  var g=gradients[Math.floor(Math.random()*gradients.length)];
  document.body.style.background=g;
  document.body.style.backgroundAttachment='fixed';
}
applyRandomGradient();

var svgI=function(p,s){s=s||14;return '<svg width="'+s+'" height="'+s+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-2px;margin-right:4px;flex-shrink:0">'+p+'</svg>'};
var emojiSvg={
  '📋':svgI('<path d="M9 2h6a1 1 0 0 1 1 1v1H8V3a1 1 0 0 1 1-1z"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2"/>'),
  '🧩':svgI('<path d="M10 13a2 2 0 0 0 2-2V8a2 2 0 0 1 4 0v3a2 2 0 0 0 2 2h1a2 2 0 0 1 0 4h-1a2 2 0 0 0-2 2v3a2 2 0 0 1-4 0v-3a2 2 0 0 0-2-2H8a2 2 0 0 1 0-4h2z"/>'),
  '🤖':svgI('<rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 8V4"/><circle cx="9" cy="14" r="1"/><circle cx="15" cy="14" r="1"/><path d="M9 18h6"/>'),
  '🛠':svgI('<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.1 2.1-2.4-2.4 2.5-2.1z"/>'),
  '📚':svgI('<path d="M4 4v16a2 2 0 0 0 2 2h14V2H6a2 2 0 0 0-2 2z"/><path d="M4 18h14"/>'),
  '🔮':svgI('<path d="M12 2a3 3 0 0 1 3 3c0 1.5-1 2-1 3v2h-4V8c0-1-1-1.5-1-3a3 3 0 0 1 3-3z"/><path d="M8 10h8l2 12H6l2-12z"/>'),
  '⭐':svgI('<path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z"/>'),
  '📦':svgI('<path d="M21 8l-9-5-9 5v8l9 5 9-5V8z"/><path d="M3 8l9 5 9-5M12 13v8"/>'),
  '🍴':svgI('<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M6 9v6"/>'),
  '👁':svgI('<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/>'),
  '💬':svgI('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'),
  '🎯':svgI('<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>'),
  '🔄':svgI('<path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.5 9a9 9 0 0 1 14.85-3.5L23 10M1 14l4.65 4.5A9 9 0 0 0 20.5 15"/>'),
  '🆕':svgI('<path d="M12 3l2 5h5l-4 3 1.5 5L12 18l-4.5 3 1.5-5-4-3h5z"/>'),
  '📅':svgI('<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'),
  '🔗':svgI('<path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/>'),
  '🚀':svgI('<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91 0z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>'),
  '⚡':svgI('<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>'),
  '☁':svgI('<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>'),
  '☕':svgI('<path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><path d="M6 2v2M10 2v2M14 2v2"/>'),
  '💚':svgI('<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>'),
  '🌐':svgI('<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>'),
  '🛡':svgI('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'),
  '🎨':svgI('<circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.2 0-1.1.9-2 2-2h2.5c3 0 5.5-2.5 5.5-5.5C23 6 18 2 12 2z"/>'),
  '🗄':svgI('<path d="M2 7l10-5 10 5v10l-10 5-10-5V7z"/><path d="M2 7l10 5 10-5M12 12v10"/>'),
  '🪟':svgI('<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 12h18M12 3v18"/>'),
  '📸':svgI('<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3l2-3h8l2 3h3a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>'),
  '🎙':svgI('<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/>'),
  '🟢':svgI('<circle cx="12" cy="12" r="10" fill="#4caf50" stroke="none"/>'),
  '🔵':svgI('<circle cx="12" cy="12" r="10" fill="#2196f3" stroke="none"/>'),
  '🔴':svgI('<circle cx="12" cy="12" r="10" fill="#f44336" stroke="none"/>'),
  '🔶':svgI('<path d="M12 2l10 10-10 10L2 12 12 2z"/>'),
  '▸':svgI('<path d="M9 18l6-6-6-6"/>'),
  '→':svgI('<path d="M5 12h14M12 5l7 7-7 7"/>'),
  '▶':svgI('<path d="M5 3l14 9-14 9V3z"/>'),
  '▲':svgI('<path d="M12 2L2 22h20L12 2z"/>'),
  '💻':svgI('<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>'),
  '🕐':svgI('<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>'),
  '🐛':svgI('<path d="M8 2v4M12 2v4M16 2v4M9 6c0 2-1 3-1 5a3 3 0 0 0 6 0c0-2-1-3-1-5"/>'),
  '📜':svgI('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8M8 9h2"/>'),
  '🔧':svgI('<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.1 2.1-2.4-2.4 2.5-2.1z"/>'),
  '⚙':svgI('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'),
  '📓':svgI('<path d="M4 4v16a2 2 0 0 0 2 2h14V2H6a2 2 0 0 0-2 2z"/><path d="M4 18h14M8 6h8M8 10h8"/>'),
  '🎯':svgI('<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>'),
  '📋':svgI('<path d="M9 2h6a1 1 0 0 1 1 1v1H8V3a1 1 0 0 1 1-1z"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2"/>')
};
function replaceEmojis(text){
  for(var e in emojiSvg){
    var val=text.split(e);
    if(val.length>1){
      text=val.join(emojiSvg[e]);
    }
  }
  return text;
}