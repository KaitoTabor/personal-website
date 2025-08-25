import React, { useRef, useEffect, useState } from 'react';

// Card data type
type CardData = {
  image: string;
  title: string;
  description: string;
  link: string;
  linkLabel: string;
};

const defaultCards: CardData[] = [
  { image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', title: 'Ocean', description: 'A beautiful view of the ocean at sunset.', link: '#', linkLabel: 'Learn more' },
  { image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', title: 'Forest', description: 'A tranquil forest with tall trees.', link: '#', linkLabel: 'Explore' },
  { image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80', title: 'Mountains', description: 'Snow-capped mountains under a clear sky.', link: '#', linkLabel: 'Discover' },
  { image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80', title: 'Desert', description: 'Golden sands stretching to the horizon.', link: '#', linkLabel: 'See more' },
  { image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80', title: 'City', description: 'A bustling city skyline at night.', link: '#', linkLabel: 'Visit' },
  { image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', title: 'Waves', description: 'Dynamic ocean waves in motion.', link: '#', linkLabel: 'Dive in' },
  { image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=600&q=80', title: 'Aurora', description: 'The northern lights shine brightly.', link: '#', linkLabel: 'View' },
];

let injected = false;
const injectCSS = () => {
  if (typeof document === 'undefined' || injected) return;
  const style = document.createElement('style');
  style.textContent = `/* AnimatedHoverDisclouser embedded styles */
  .ahd-container { display:flex; justify-content:center; align-items:center; min-height:60vh; }
  .ahd-list { --gap:8px; --base:clamp(2rem,8cqi,80px); --easing: linear(0 0%,0.1538 4.09%,0.2926 8.29%,0.4173 12.63%,0.5282 17.12%,0.6255 21.77%,0.7099 26.61%,0.782 31.67%,0.8425 37%,0.8887 42.23%,0.9257 47.79%,0.9543 53.78%,0.9752 60.32%,0.9883 67.11%,0.9961 75%,1 100%); --speed:.6s; display:grid; container-type:inline-size; gap:var(--gap); list-style:none; padding:0; margin:0; height:clamp(300px,40dvh,474px); width:820px; max-width:calc(100% - 4rem); transition:grid-template-columns var(--speed) var(--easing); }
  .ahd-item { background:light-dark(#fff,#000); position:relative; overflow:hidden; min-width:var(--base); border-radius:8px; border:1px solid color-mix(in hsl, canvas, canvasText 50%); }
  .ahd-item article { width:calc(var(--article-width) * 1px); height:100%; position:absolute; top:0; left:0; display:flex; flex-direction:column; justify-content:flex-end; gap:1rem; padding-inline:calc(var(--base) * 0.5 - 9px); padding-bottom:1rem; font-family:monospace; overflow:hidden; }
  .ahd-item article h3 { position:absolute; top:1rem; left:calc(var(--base) * 0.5); transform-origin:0 50%; rotate:90deg; font-size:1rem; font-weight:300; text-transform:uppercase; font-family:monospace; opacity:.6; transition:opacity calc(var(--speed)*1.2) var(--easing); }
  .ahd-item article p { font-size:13px; line-height:1.25; margin:0; opacity:0; transition:opacity calc(var(--speed)*1.2) var(--easing); text-wrap:balance; --opacity:.8; }
  .ahd-item article a { position:absolute; bottom:1rem; height:18px; line-height:1; color:inherit; opacity:0; transition:opacity calc(var(--speed)*1.2) var(--easing); text-decoration:none; }
  .ahd-item article a span { display:inline-block; line-height:18px; translate:calc(var(--base) * 0.5); font-weight:500; }
  .ahd-item article img { position:absolute; pointer-events:none; inset:0; width:100%; height:100%; object-fit:cover; filter:grayscale(1) brightness(1.5); scale:1.1; transition:filter calc(var(--speed)*1.2) var(--easing), scale calc(var(--speed)*1.2) var(--easing); mask:radial-gradient(100% 100% at 100% 0, #fff, #0000); }
  .ahd-item[data-active='true'] article h3, .ahd-item[data-active='true'] article p, .ahd-item[data-active='true'] article a { opacity:1; }
  .ahd-item[data-active='true'] article p, .ahd-item[data-active='true'] article a, .ahd-item[data-active='true'] article img { transition-delay:calc(var(--speed)*0.25); }
  .ahd-item[data-active='true'] article img { filter:grayscale(0) brightness(1); scale:1; }
  .ahd-item:focus-visible { outline:2px solid canvasText; outline-offset:2px; }
  @media (max-width:768px){ .ahd-list { width:100%; } }
  `;
  document.head.appendChild(style);
  injected = true;
};

interface AnimatedHoverDisclouserProps { data?: CardData[]; className?: string; }

export const AnimatedHoverDisclouser: React.FC<AnimatedHoverDisclouserProps> = ({ data = defaultCards, className }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Inject styles (client-only)
  useEffect(() => { injectCSS(); }, []);

  // Update columns & active dataset
  useEffect(() => {
    const list = listRef.current; if (!list) return;
    const items = Array.from(list.querySelectorAll<HTMLLIElement>('li'));
    items.forEach((li, i) => { li.dataset.active = (i === activeIndex).toString(); });
    list.style.gridTemplateColumns = items.map((_, i) => (i === activeIndex ? '10fr' : '1fr')).join(' ');
  }, [activeIndex, data.length]);

  // Measure widest li for article width variable (after layout)
  const measure = () => {
    const list = listRef.current; if (!list) return;
    const items = Array.from(list.querySelectorAll<HTMLLIElement>('li'));
    if (!items.length) return;
    const width = Math.max(...items.map(i => i.offsetWidth));
    list.style.setProperty('--article-width', String(width));
  };
  useEffect(() => { measure(); window.addEventListener('resize', measure); return () => window.removeEventListener('resize', measure); });
  useEffect(() => { measure(); }, [data.length]);

  // Event helpers
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
              <a href={card.link} tabIndex={-1}><span>{card.linkLabel}</span></a>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimatedHoverDisclouser;
