import React, { useRef, useEffect, useState } from 'react';
type CardData = {
  image: string;
  title: string;
  description: string;
  link: string;
  linkLabel: string;
  /** Optional per-card icon (ReactNode or raw SVG string) */
  icon?: React.ReactNode;
};
const icon = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M6 12h12M12 6v12" />
  </svg>
);
const defaultCards: CardData[] = [
  { image: 'https:
  { image: 'https:
  { image: 'https:
  { image: 'https:
  { image: 'https:
  { image: 'https:
  { image: 'https:
];
let injected = false;
const injectCSS = () => {
  if (typeof document === 'undefined' || injected) return;
  const style = document.createElement('style');
  style.textContent = `/* Mobile-first (defaults use vh units based on iPhone 12 Pro height 844px) */
  .ahd-container { display:flex; justify-content:center; align-items:center; min-height:40vh; }
  .ahd-list { --gap:0.3vh; --base:clamp(3.79vh,8cqi,9.48vh); --easing: linear(0 0%,0.1538 4.09%,0.2926 8.29%,0.4173 12.63%,0.5282 17.12%,0.6255 21.77%,0.7099 26.61%,0.782 31.67%,0.8425 37%,0.8887 42.23%,0.9257 47.79%,0.9543 53.78%,0.9752 60.32%,0.9883 67.11%,0.9961 75%,1 100%); --speed:.6s; display:grid; container-type:inline-size; gap:var(--gap); list-style:none; padding:0; margin:0; height:clamp(35.55vh,40dvh,56.14vh); width:97vh; max-width:calc(100% - 7.58vh); transition:grid-template-columns var(--speed) var(--easing); }
  .ahd-item { background:light-dark(#fff,#000); position:relative; overflow:hidden; min-width:var(--base); border-radius:0.95vh; border:0.12vh solid color-mix(in hsl, canvas, canvasText 50%); }
  .ahd-item article { width:calc(var(--article-width-vh) * 1vh); height:100%; position:absolute; top:0; left:0; display:flex; flex-direction:column; justify-content:flex-end; gap:1.42vh; padding-inline:calc(var(--base) * 0.5 - 1.07vh); padding-bottom:1.90vh; font-family:monospace; overflow:hidden; }
  .ahd-item article h3 { position:absolute; top:1.90vh; left:calc(var(--base) * 0.5); transform-origin:0 50%;  transform:rotate(90deg); font-size:1.90vh; font-weight:300; text-transform:uppercase; font-family:monospace; opacity:.6; transition:opacity calc(var(--speed)*1.2) var(--easing); pointer-events:none; }
  .ahd-item article svg { width:1vh; height:1vh; fill:none; stroke:currentColor; opacity:.6; transition:opacity calc(var(--speed)*1.2) var(--easing); }
  .ahd-item article p { font-size:1.3vh; margin:0 0 2.37vh 0; line-height:1.25; opacity:0; transition:opacity calc(var(--speed)*1.2) var(--easing); text-wrap:balance; --opacity:.8; }
  .ahd-item article a { position:absolute; bottom:1.90vh; height:2.13vh; line-height:1; color:inherit; opacity:0; transition:opacity calc(var(--speed)*1.2) var(--easing); text-decoration:none; }
  .ahd-item article a span { display:inline-flex; justify-content:flex-start; line-height:2.13vh; translate:-1.78vh; font-weight:500; }
  .ahd-item article img { position:absolute; pointer-events:none; inset:0; width:100%; height:100%; object-fit:cover; filter:grayscale(1) brightness(1.5); scale:1.1; transition:filter calc(var(--speed)*1.2) var(--easing), scale calc(var(--speed)*1.2) var(--easing); mask:radial-gradient(100% 100% at 100% 0, #fff, #0000); }
  .ahd-item[data-active='true'] article h3, .ahd-item[data-active='true'] article p, .ahd-item[data-active='true'] article a, .ahd-item[data-active='true'] article svg { opacity:1; }
  .ahd-item[data-active='true'] article p, .ahd-item[data-active='true'] article a, .ahd-item[data-active='true'] article img { transition-delay:calc(var(--speed)*0.25); }
  .ahd-item[data-active='true'] article img { filter:grayscale(0) brightness(1); scale:1; }
  .ahd-item:focus-visible { outline:0.24vh solid canvasText; outline-offset:0.24vh; }
  @media (min-width:768px){
    .ahd-container { display:flex; justify-content:center; align-items:center; min-height:20vw; min-width:80vw }
    .ahd-list { --gap:0.56vw; --base:clamp(2.22vw,8cqi,5.56vw); height:clamp(20.83vw,40dvh,32.92vw); width:56.94vw; max-width:calc(100% - 4.44vw); }
    .ahd-item { border-radius:0.56vw; border:0.07vw solid color-mix(in hsl, canvas, canvasText 50%); }
    .ahd-item article { width:calc(var(--article-width-vw) * 1vw); gap:0.83vw; padding-inline:calc(var(--base) * 0.5 - 0.63vw); padding-bottom:1.11vw; }
    .ahd-item article h3 { top:1.11vw; font-size:1.11vw; }
    .ahd-item article svg { width:1.25vw; height:1.25vw; }
    .ahd-item article p { font-size:0.90vw; margin:0 0 1.39vw 0; }
    .ahd-item article a { bottom:1.11vw; height:1.25vw; }
    .ahd-item article a span { line-height:1.25vw; translate:-1.04vw; }
    .ahd-item:focus-visible { outline:0.14vw solid canvasText; outline-offset:0.14vw; }
  }
  `;
  document.head.appendChild(style);
  injected = true;
};
interface AnimatedHoverDisclosureProps { data?: CardData[]; className?: string; }
export const AnimatedHoverDisclosure: React.FC<AnimatedHoverDisclosureProps> = ({ data = defaultCards, className }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => { injectCSS(); }, []);
  useEffect(() => {
    const list = listRef.current; if (!list) return;
    const items = Array.from(list.querySelectorAll<HTMLLIElement>('li'));
    items.forEach((li, i) => { li.dataset.active = (i === activeIndex).toString(); });
    list.style.gridTemplateColumns = items.map((_, i) => (i === activeIndex ? '10fr' : '1fr')).join(' ');
  }, [activeIndex, data.length]);
  const measure = () => {
    const list = listRef.current; if (!list) return;
    const items = Array.from(list.querySelectorAll<HTMLLIElement>('li'));
    if (!items.length) return;
    const widestPx = Math.max(...items.map(i => i.offsetWidth));
    const vwVal = (widestPx / window.innerWidth) * 100;
    const vhVal = (widestPx / window.innerHeight) * 100;
    list.style.setProperty('--article-width-vw', String(vwVal));
    list.style.setProperty('--article-width-vh', String(vhVal));
  };
  useEffect(() => { measure(); window.addEventListener('resize', measure); return () => window.removeEventListener('resize', measure); });
  useEffect(() => { measure(); }, [data.length]);
  const activateFromEvent = (el: HTMLElement | null) => {
    if (!el || !listRef.current) return;
    const li = el.closest('li');
    if (!li) return;
    const idx = Array.from(listRef.current.children).indexOf(li);
    if (idx >= 0 && idx !== activeIndex) setActiveIndex(idx);
  };
  const handlePointerMove: React.PointerEventHandler<HTMLUListElement> = (e) => activateFromEvent(e.target as HTMLElement);
  const handleClick: React.MouseEventHandler<HTMLUListElement> = (e) => activateFromEvent(e.target as HTMLElement);
  const handleFocus: React.FocusEventHandler<HTMLUListElement> = (e) => activateFromEvent(e.target as HTMLElement);
  const handleKeyDown: React.KeyboardEventHandler<HTMLUListElement> = (e) => {
    if (e.key === 'ArrowRight') setActiveIndex(i => (i + 1) % data.length);
    else if (e.key === 'ArrowLeft') setActiveIndex(i => (i - 1 + data.length) % data.length);
  };
  return (
    <div className={`ahd-container ${className || ''}`.trim()}>
      <ul
        ref={listRef}
        className="ahd-list"
        role="list"
        aria-label="Animated Hover Disclosure"
        tabIndex={0}
        onPointerMove={handlePointerMove}
        onClick={handleClick}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        style={{ gridTemplateColumns: data.map((_, i) => (i === activeIndex ? '10fr' : '1fr')).join(' ') }}
      >
        {data.map((card, i) => (
          <li key={i} className="ahd-item" data-active={i === activeIndex} tabIndex={0}>
            <article>
              <img src={card.image} alt={card.title} loading="lazy" />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <a href={card.link} tabIndex={-1} >
                <span>{card.icon && card.icon} {card.linkLabel}</span>
              </a>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AnimatedHoverDisclosure;
