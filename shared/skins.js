/* Universal skin engine. Shared by every app in the suite.
   Four colours in, ~30 semantic tokens out. Components read the tokens,
   never the raw colours, which is the single rule that keeps skins working.

   Usage:
     <script src="../shared/skins.js"></script>
     await Skins.load();          // fetches skins.json, falls back to built-ins
     Skins.apply('monarch');      // or Skins.apply(Skins.custom({bg,panel,accent,text}))
*/
(function(g){
'use strict';
/* ══════════ THE FACTORY THEMES, EMBEDDED ══════════
   This used to be one placeholder theme, and that was a real bug rather than a
   detail. skins.js FETCHES skins.json, and a page opened straight off the disk
   cannot fetch anything — the browser blocks it — so load() fell through to
   this list. Every app opened from a folder has offered exactly one theme
   called "Status Window" for as long as skins.json has existed, which is the
   whole library missing with no error to explain it.

   The themes live here now, so they are present before any network is
   involved. Over http skins.json still wins, so editing that file and
   reloading behaves exactly as before.

   GENERATED — do not hand-edit between the markers. Edit shared/skins.json and
   run `py -3 tools/embed-skins.py`. It is not a build step: nothing has to run
   for the suite to work, and _smoke.html fails if the two ever drift. */
/*SKINS-START*/const FALLBACK={"fields":[["bg","Canvas background"],["panel","Card fill"],["line","Card border"],["ink","Text"],["mut","Secondary text"],["acc","Accent — buttons, selection"]],"note":"Every app reads this file. A skin is the THEME layer: structure, fonts, corners, border weight, depth, motion, texture, its own CSS, and the default colours. The COLOUR layer sits on top and is edited in the app (Settings > Look > Colours), saved per skin in localStorage 'suite_palettes' - it never touches this file. Apps add no theme CSS of their own; a theme brings its own in `css` and the app never knows.","ranks":{"A":"#5FE39B","B":"#4FD8E8","C":"#6C8CFF","D":"#C79BF0","E":"#FF9F6B","F":"#FF6B6B","S":"#F2C14E"},"rev":13,"schema":1,"skins":[{"base":{"accent":"#7EE8FA","bg":"#080B10","panel":"#0E141D","text":"#DBE7F0"},"css":"/* BLOCK - lifted straight out of block/index.html, which was never wearing a\n   theme at all: it loads day.js and records.js and nothing else, and every\n   colour in it is its own.\n\n   Its structure was already right. Fifteen variables, borders doing all the\n   separating, almost no shadow anywhere, six-pixel corners, and two fonts - a\n   squared one for labels and a plain one for reading. That is a theme, it was\n   just written inside one app where nothing else could reach it.\n\n   Measured rather than eyeballed: 6px is the corner in 37 places, borders are\n   1px #1e2a38, and exactly three elements in the whole app carry a shadow. */\n\nbody { letter-spacing: var(--track-body) }\n\n/* Flat depth removes the shadow, so the edge has to come from a line. That is\n   how BLOCK does it too: a hairline round everything and no lift at all. */\n.card, .mb-sheet, .mb-menu, .mb-toast {\n  background: var(--surface-1);\n  border: var(--border-width) solid var(--border);\n}\nheader {\n  background: var(--surface-1);\n  border-bottom: var(--border-width) solid var(--border);\n}\nheader .logo { font-family: var(--font-display); letter-spacing: var(--track-cap) }\n\nh2 {\n  font-family: var(--font-display);\n  color: var(--text-muted);\n  letter-spacing: var(--track-cap);\n}\n\n.item, .mb-input, .mb-sel {\n  background: var(--surface-2);\n  border: var(--border-width) solid var(--border);\n}\n.item .nm { font-family: var(--font-body) }\n\n.chk { border-color: var(--border-strong) }\n.chk.on { background: var(--accent); border-color: var(--accent); color: var(--accent-fg) }\n\n.stat { background: var(--surface-2); border: var(--border-width) solid var(--border) }\n.stat b { font-family: var(--font-display) }\n\nbutton.mb-btn, .mb-act, .mb-chip, .mb-x, .mb-opt {\n  font-family: var(--font-display);\n  letter-spacing: var(--track-cap);\n  background: var(--surface-2);\n  border: var(--border-width) solid var(--border);\n  color: var(--text-2);\n}\nbutton.mb-btn:hover, .mb-chip:hover { border-color: var(--border-strong); color: var(--text-1) }\n.mb-btn.go { border-color: var(--accent); color: var(--accent); background: var(--surface-2) }\n#fab { background: var(--accent); color: var(--accent-fg) }","depth":"flat","font":["Chakra+Petch:wght@500;600;700","IBM+Plex+Sans:wght@400;500;600"],"icon":{"cap":"round","join":"round","weight":1.6},"id":"block","mode":"dark","motion":{"ease":"cubic-bezier(.2,0,0,1)","fast":"120ms","med":"200ms","sheet":"320ms","slow":"300ms","tap":"0ms"},"name":"Default","overrides":{"--border":"#1E2A38","--border-strong":"#2B3A4D","--danger":"#FF6B81","--success":"#6EE7A8","--surface-2":"#131B26","--surface-3":"#1B2634","--text-2":"#B8C9D8","--text-muted":"#7F93A8","--warn":"#FFB347"},"ramp":["#7EE8FA","#6EE7A8","#FFB347","#FF6B81","#A78BFA","#7F93A8"],"texture":{"body":"'IBM Plex Sans',system-ui,sans-serif","cut":"6px","display":"'Chakra Petch',system-ui,sans-serif","image":"none","size":"auto"},"track":{"body":"0","cap":".08em","tight":"0"},"weight":1},{"base":{"accent":"#6EE7FF","bg":"#0B0E14","panel":"#121826","text":"#FFFFFF"},"icon":{"cap":"round","join":"round","weight":1.75},"id":"ice","mode":"dark","name":"System","overrides":{"--border":"#22304A","--surface-2":"#0E1420","--text-2":"#E2E2E3","--text-muted":"#ACADAF"},"ramp":["#6EE7FF","#A78BFA","#FBBF24","#FB7185","#34D399","#94A3B8"],"texture":{"image":"radial-gradient(ellipse at 50% 40%,rgba(110,231,255,.05),transparent 60%)","size":"100% 100%"}},{"base":{"accent":"#F7F3E8","bg":"#1B2B23","panel":"#22352C","text":"#F2EFE4"},"font":"Gloria+Hallelujah","icon":{"cap":"round","join":"round","weight":2.2,"wobble":true},"id":"chalkboard","mode":"dark","name":"Chalkboard","overrides":{"--border":"#3A5245","--surface-2":"#16261F","--text-2":"#D8D7CD","--text-muted":"#A9ACA2"},"ramp":["#F7F3E8","#FFD9A0","#A8D8F0","#F0A8B8","#B8E0A8","#D0C8F0"],"texture":{"body":"'Gloria Hallelujah',system-ui,-apple-system,sans-serif","cut":"0px","display":"'Gloria Hallelujah',system-ui,-apple-system,sans-serif","dots":"rgba(255,255,255,.02)","image":"radial-gradient(rgba(255,255,255,.02) 1px,transparent 1.5px)","size":"7px 7px"}},{"base":{"accent":"#3A4A9F","bg":"#F5F1E8","panel":"#FFFFFF","text":"#2B2A26"},"font":"Architects+Daughter","icon":{"cap":"round","join":"round","weight":1.9,"wobble":true},"id":"sketch","mode":"light","name":"Sketch","overrides":{"--border":"#C9C0B0","--surface-2":"#EFEAE0","--text-2":"#43423D","--text-muted":"#706E68"},"ramp":["#3A4A9F","#8F3B3B","#3F7A4E","#8A6D2F","#5B4A8A","#66655F"],"texture":{"body":"'Architects Daughter',system-ui,-apple-system,sans-serif","cut":"0px","display":"'Architects Daughter',system-ui,-apple-system,sans-serif","image":"none","size":"auto"}},{"base":{"accent":"#F4F1EA","bg":"#12151B","panel":"#181C24","text":"#F4F1EA"},"font":"Patrick+Hand","icon":{"cap":"round","join":"round","weight":2.3,"wobble":true},"id":"doodle","mode":"dark","name":"Doodle","overrides":{"--border":"#39414F","--surface-2":"#12151B","--text-2":"#D9D7D1","--text-muted":"#A7A6A4"},"ramp":["#F4F1EA","#FFD9A0","#9FD8F2","#F5A8B8","#B4E4A6","#CBC2F0"],"texture":{"body":"'Patrick Hand',system-ui,-apple-system,sans-serif","cut":"14px","display":"'Patrick Hand',system-ui,-apple-system,sans-serif","image":"none","size":"auto"}}],"source":"ARC mindmapper"};/*SKINS-END*/
/* The skin is chosen PER APP on purpose — ARC can be Monarch while BLOCK is
   Ice. `Skins.for('block')` before restore()/apply() scopes it; without it
   everything shares the old single key, exactly as before. */
let APP='';
const KEY='suite_skin';
const PAL_KEY='suite_palettes';
const skinKey=()=>APP?KEY+'.'+APP:KEY;

const hex2rgb=h=>{h=String(h).replace('#','');if(h.length===3)h=h.split('').map(c=>c+c).join('');
  return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const rgb2hex=a=>'#'+a.map(v=>Math.max(0,Math.min(255,Math.round(v))).toString(16).padStart(2,'0')).join('');
const mix=(a,b,t)=>{const x=hex2rgb(a),y=hex2rgb(b);return rgb2hex([0,1,2].map(i=>x[i]+(y[i]-x[i])*t))};
const lum=h=>{const c=hex2rgb(h).map(v=>{v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)});
  return .2126*c[0]+.7152*c[1]+.0722*c[2]};

/* ── colours worked out from the theme ──────────────────────────────────
   A chart ramp used to be six hexes typed into every theme by hand, which is
   how you end up with a Lego chart in Ice's colours. These derive it.

   Hues step by 137.5 degrees - the angle a sunflower uses - because stepping
   by an even sixth gives you a rainbow, and a rainbow has two colours that sit
   next to each other and read as the same one. The golden angle spreads six
   hues about as far apart as six hues can get.

   Lightness and saturation are then pinned to whatever reads against the
   PAGE, so a chart on Monarch's black and a chart on Lego's grey are both
   legible without either theme saying anything about it. */
const rgb2hsl=h=>{const [r,g,b]=hex2rgb(h).map(v=>v/255);
  const mx=Math.max(r,g,b),mn=Math.min(r,g,b),d=mx-mn;let hh=0;
  if(d){if(mx===r)hh=((g-b)/d+(g<b?6:0));else if(mx===g)hh=(b-r)/d+2;else hh=(r-g)/d+4;hh*=60}
  const l=(mx+mn)/2, ss=d?d/(1-Math.abs(2*l-1)):0;
  return[hh,ss,l]};
const hsl2rgb=(h,s,l)=>{h=((h%360)+360)%360;
  const c=(1-Math.abs(2*l-1))*s, x=c*(1-Math.abs((h/60)%2-1)), m=l-c/2;
  let r=0,g=0,b=0;
  if(h<60){r=c;g=x}else if(h<120){r=x;g=c}else if(h<180){g=c;b=x}
  else if(h<240){g=x;b=c}else if(h<300){r=x;b=c}else{r=c;b=x}
  return rgb2hex([(r+m)*255,(g+m)*255,(b+m)*255])};
function autoRamp(base){
  const [h,s0]=rgb2hsl(base.accent);
  const dark=lum(base.bg)<.5;
  /* one target lightness for the whole set, so no single series shouts */
  const L=dark?.63:.42;
  const S=Math.max(.42,Math.min(.72,s0||.55));
  const out=[];
  for(let i=0;i<6;i++){
    /* the last one is the neutral every chart needs for "everything else" */
    if(i===5){out.push(hsl2rgb(h,.08,dark?.62:.46));continue}
    out.push(hsl2rgb(h+137.5*i,S,L+(i%2?.05:-.03)));
  }
  return out;
}
const contrast=(a,b)=>{const l1=lum(a),l2=lum(b);return(Math.max(l1,l2)+.05)/(Math.min(l1,l2)+.05)};
const readable=bg=>contrast(bg,'#000000')>contrast(bg,'#ffffff')?'#000000':'#ffffff';

/* ── nothing unreadable leaves here ──
   A theme is a look, and a look is allowed to be strange. It is not allowed
   to be illegible. Four of the eighteen shipped colours that failed against
   their own page — Lego put its reading colour at 1.7 to 1 on its background,
   which made "calories left of 2,220" measure 1.02 and disappear.

   So every text colour is pushed away from what it sits on until it clears
   the ratio, and no further. Hue and saturation are untouched: only lightness
   moves, so a theme keeps its character and stops being a hazard. A theme
   that already passes is returned exactly as its author wrote it.

   Twelve steps of bisection lands within a thousandth, which is far finer
   than a colour can be seen. `nudged` records what had to move so STYLE can
   say so rather than silently correcting the author. */
function lift(fg,bg,need){
  if(contrast(fg,bg)>=need)return fg;
  const away=lum(bg)<.5?'#FFFFFF':'#000000';
  if(contrast(away,bg)<need)return away;      /* nothing on this page can pass */
  let lo=0,hi=1;
  for(let i=0;i<12;i++){const m=(lo+hi)/2;
    if(contrast(mix(fg,away,m),bg)>=need)hi=m;else lo=m}
  return mix(fg,away,hi);
}

/* Text lands on four different things: the page, a card, a recessed row and a
   raised button face. It has to clear all four, so the biggest push wins and
   the colour is only ever moved once.

   Checking the page alone was not enough and the difference was not small.
   Sketch's secondary text measured 4.52 against its page and 4.25 against a
   tile, so the floor left it alone and thirteen elements on one screen still
   failed. */
function liftAll(fg,need,grounds){
  let out=fg;
  grounds.forEach(g=>{if(g&&/^#/.test(g)){const c=lift(fg,g,need);
    if(contrast(c,fg)>contrast(out,fg))out=c}});
  return out;
}

/* The semantic tokens. Two halves, and the split matters:

   COLOUR — derived from the four base colours, so a theme or a palette edit
   repaints them. Components read these, never a hex code.

   MEASUREMENT — spacing, type, depth, corners, touch, motion. Identical in
   every theme, because a theme changes what an app looks like, never how far
   apart things sit or how big a thumb target is.

   Add to either list only if a component genuinely cannot be built from what
   is already here. */
function tokens(base,cut,ranks,skin){
  const{bg,panel,accent,text}=base;
  const t={
    '--bg':bg,'--surface-1':panel,'--surface-2':mix(panel,text,.07),'--surface-3':mix(panel,text,.15),
    '--overlay':mix(bg,'#000000',.25),
    /* Secondary text used to sit 32% and 56% of the way toward the
        background, which is the textbook way to build hierarchy with colour.
        It also meant a label never looked white on a screen that is meant to
        look white. Pulled most of the way back: hierarchy now comes from size
        and weight, which it should have been doing more of anyway. */
    '--text-1':text,'--text-2':mix(text,bg,.12),'--text-muted':mix(text,bg,.34),'--text-inverse':bg,
    '--border':mix(panel,text,.13),'--border-strong':mix(panel,text,.28),'--focus':accent,
    '--accent':accent,'--accent-hover':mix(accent,text,.22),'--accent-fg':readable(accent),
    '--success':'#5FE39B','--warn':'#F2C14E','--danger':'#FF6B6B','--info':'#6C8CFF',
    '--data-1':accent,'--data-2':mix(accent,'#6C8CFF',.6),'--data-3':'#C79BF0',
    '--data-4':'#5FE39B','--data-5':'#F2C14E','--data-6':'#FF9F6B',
    '--radius-sm':'4px','--radius-md':'10px','--border-width':'1px','--cut':cut||'10px',
    '--font-display':"'Chakra Petch','Rajdhani',system-ui,sans-serif",
    '--font-body':"'Inter Tight','Inter',system-ui,-apple-system,sans-serif",
    '--font-mono':"'JetBrains Mono','SF Mono',ui-monospace,monospace",
    '--dur-fast':'140ms','--dur-slow':'420ms'
  };

  /* ══════════════ the measurement layer ══════════════
     Refactoring UI, chapters "Establish a spacing and sizing system" and
     "Establish a type scale". These are the same in every theme on purpose —
     a theme changes what an app looks like, never how far apart things sit.
     Nothing here reads a colour, so a palette edit cannot disturb it.        */

  /* No two steps are closer than about 25%, which is the whole point: at the
     small end four pixels is a third of the value, at the large end it is
     invisible. A linear scale gives you nothing to choose between.           */
  const SPACE=['4px','8px','12px','16px','24px','32px','48px','64px','96px','128px'];
  SPACE.forEach((v,i)=>{t['--s-'+(i+1)]=v});
  t['--gutter']='var(--s-4)';           /* the standard edge margin of a screen */

  /* Hand-picked, not modular: a ratio gives you 31.25px and no size between
     12 and 16, which is exactly the size you always end up wanting.          */
  const TYPE=['12px','14px','16px','18px','20px','24px','30px','36px','48px'];
  TYPE.forEach((v,i)=>{t['--f-'+(i+1)]=v});
  t['--lh-tight']='1.25';t['--lh-body']='1.6';t['--lh-loose']='1.75';
  /* Two weights is enough for interface work, and nothing under 400 —
     lighter text is a job for a softer colour, not a thinner stroke.         */
  t['--w-body']='500';t['--w-bold']='700';
  t['--track-cap']='.18em';t['--track-tight']='-.01em';

  /* Depth. Two parts each: a large soft cast from the light source, and a
     tight dark one for the ambient shadow trapped under the edge. The tight
     part fades as the element rises and is gone by the top of the ladder,
     because a thing far from the surface has no contact shadow left.         */
  const dark=lum(bg)<.5;
  const sh=a=>'rgba(0,0,0,'+Math.min(.92,+(a*(dark?2:1)).toFixed(3))+')';
  t['--e-1']='0 1px 3px '+sh(.12)+', 0 1px 2px '+sh(.24);
  t['--e-2']='0 3px 6px '+sh(.15)+', 0 2px 4px '+sh(.12);
  t['--e-3']='0 10px 20px '+sh(.15)+', 0 3px 6px '+sh(.10);
  t['--e-4']='0 15px 25px '+sh(.15)+', 0 5px 10px '+sh(.05);
  t['--e-5']='0 20px 40px '+sh(.20);
  /* A one-pixel lit edge along the top. Cheap, and it is what stops a card on
     a dark theme from reading as a flat rectangle. */
  t['--rim']=dark?'inset 0 1px 0 rgba(255,255,255,.055)':'inset 0 1px 0 rgba(255,255,255,.75)';

  /* Corners and the two sizes a phone needs that a desktop does not. */
  t['--radius-lg']='16px';t['--radius-full']='999px';t['--radius-sheet']='20px';

  /* Touch. 44 is the smallest square a thumb hits reliably; it is a hit area,
     not a visual size, so a small control can still look small.              */
  t['--tap']='44px';

  /* Safe areas as plain values, so no app writes env() itself and every app
     gets the notch, the Dynamic Island and the home indicator for free.      */
  t['--safe-t']='env(safe-area-inset-top,0px)';
  t['--safe-r']='env(safe-area-inset-right,0px)';
  t['--safe-b']='env(safe-area-inset-bottom,0px)';
  t['--safe-l']='env(safe-area-inset-left,0px)';

  /* Motion. Fast enough to feel like a response, never like a performance.
     The sheet curve is the one iOS uses: leaves quickly, lands softly.       */
  t['--dur-tap']='90ms';t['--dur-med']='240ms';t['--dur-sheet']='360ms';
  t['--ease-out']='cubic-bezier(.2,0,0,1)';
  t['--ease-in']='cubic-bezier(.4,0,1,1)';
  t['--ease-sheet']='cubic-bezier(.32,.72,0,1)';
  // Rank colours are deliberately fixed across every skin, so a letter grade
  // means the same thing wherever it appears.
  // ARC hand-picks a six-colour chart ramp per theme. If a skin supplies one, use it;
  // otherwise fall back to deriving from the accent.
  /* A theme may hand-pick six colours. If it does not, they are worked out
     from its accent and its page, which is almost always the better answer. */
  if(skin&&Array.isArray(skin.ramp))skin.ramp.slice(0,6).forEach((c,i)=>{t['--data-'+(i+1)]=c});
  else autoRamp(base).forEach((c,i)=>{t['--data-'+(i+1)]=c});
  // Explicit overrides win over anything derived.
  if(skin&&skin.overrides)Object.assign(t,skin.overrides);


  // Texture layer: fonts and corner shape per skin.
  if(skin&&skin.texture){const x=skin.texture;
    if(x.display)t['--font-display']=x.display;
    if(x.body)t['--font-body']=x.body;
    if(x.cut)t['--cut']=x.cut;
    // Texture as plain values, so no app writes theme-specific CSS.
    t['--tex-image']=x.image||'none';
    t['--tex-size']=x.size||'auto';}
  if(!t['--tex-image']){t['--tex-image']='none';t['--tex-size']='auto'}

  /* ══════════════ the feel layer ══════════════
     Everything above this point is identical in every theme. Everything below
     it a theme may change, and these are the levers that make one theme feel
     unlike another rather than merely look recoloured.

     Deliberately NOT here: the spacing scale and the 44px tap target. A theme
     may change how a box is drawn. It may never move a box or shrink a thumb
     target, because that is how a theme quietly becomes a layout bug you only
     find on a phone.                                                         */

  /* Corners. One number per theme and the whole family follows it.

     The ratios are picked so that cut:10 reproduces the old hardcoded values
     exactly — 4, 10, 16, 20 — which is the point: a theme that does not set
     `cut` renders precisely as it did before. Until now `--cut` was read by no
     file in the repo, so every theme's corner setting was dead. Chalkboard
     asked for square corners for months and got 16px cards.
     --radius-full stays a pill forever; a theme does not get to un-round an
     avatar or a toggle track.                                                */
  const cutPx = Math.max(0, parseFloat(t['--cut']) || 0);
  const rad = m => Math.round(cutPx * m) + 'px';
  t['--radius-sm'] = rad(.4);  t['--radius-md']    = rad(1);
  t['--radius-lg'] = rad(1.6); t['--radius-sheet'] = rad(2);
  t['--radius-full'] = '999px';

  /* Border weight. A 1px hairline and a 2px drawn line are different products.
     Also read by nothing until now, for the same reason.                     */
  /* `!= null`, not truthiness: weight 0 is a theme asking for NO border, and a
     falsy check silently handed it 1px instead. Blocks has been asking for
     zero and getting a hairline since the day it was written. */
  t['--border-width'] =
    (skin && skin.weight != null ? skin.weight : 1) + 'px';

  /* Depth — the strongest lever here. The same card in the same colours reads
     as glass, as paper, as a stamped metal plate or as a lit sign depending
     only on this. Every app already reads --e-1..5 and --rim, so a theme gets
     the whole suite repainted without any app changing a line.

     `plate` is measured from the PANEL, not the page. A bevel is drawn on the
     surface it sits on, and a theme can perfectly well hang light plates on a
     dark page — which is exactly what a game window does.                    */
  const darkPlate = lum(panel) < .5;
  const depth = (skin && skin.depth) || 'soft';
  if (depth === 'flat') {
    /* Nothing floats. Separation comes from fill and border alone, which is
       what a printed or a hand-drawn interface actually does.                */
    for (let i = 1; i <= 5; i++) t['--e-' + i] = 'none';
    t['--rim'] = 'none';
  } else if (depth === 'bevel') {
    /* A lit top-left edge and a shaded bottom-right one, drawn inside the box.
       This is the entire trick behind a 90s game panel: the surface is not
       hovering above the page, it is a plate with thickness.                 */
    const lit = darkPlate ? 'rgba(255,255,255,.30)' : 'rgba(255,255,255,.90)';
    const shd = darkPlate ? 'rgba(0,0,0,.62)'       : 'rgba(0,0,0,.38)';
    const bev = w => 'inset ' + w + 'px ' + w + 'px 0 ' + lit +
                   ', inset -' + w + 'px -' + w + 'px 0 ' + shd;
    t['--e-1'] = bev(1); t['--e-2'] = bev(1); t['--e-3'] = bev(2);
    t['--e-4'] = bev(2); t['--e-5'] = bev(2) + ', 0 6px 18px ' + sh(.30);
    t['--rim'] = 'none';
    /* The inverse, for anything that should read as pressed in rather than
       standing out: a button under the finger, an input well, a track.       */
    t['--bevel-in'] = 'inset 1px 1px 0 ' + shd + ', inset -1px -1px 0 ' + lit;
  } else if (depth === 'glow') {
    /* Light comes off the element instead of falling onto it. */
    const rgb = hex2rgb(accent).join(',');
    const glow = (a, b) => '0 0 ' + b + 'px rgba(' + rgb + ',' + a + ')';
    t['--e-1'] = glow(.14, 6);  t['--e-2'] = glow(.20, 12);
    t['--e-3'] = glow(.28, 22); t['--e-4'] = glow(.34, 34);
    t['--e-5'] = glow(.40, 48);
    t['--rim'] = 'inset 0 1px 0 rgba(255,255,255,.10)';
  }
  if (!t['--bevel-in']) t['--bevel-in'] = 'none';

  /* Letter spacing. On a short leash on purpose. This is the one lever that
     can quietly wreck a line of text at a width nobody happened to test, so a
     theme gets the two tokens it already had plus body, and no more.         */
  const tr = (skin && skin.track) || {};
  /* Clamped, not just documented. Letter spacing was the biggest reason the
     same button measured 73px in one theme and 124px in another: at .22em a
     six-letter label is a third wider than at zero. A theme may still set the
     tone; it may not stretch a control out of shape. */
  const capEm = (v, max) => {
    const n = parseFloat(v);
    if (!isFinite(n)) return v;
    const unit = String(v).trim().replace(/^[-+0-9.]+/, '') || '';
    const held = Math.max(-max, Math.min(max, n));
    return held === n ? v : (held + (unit || 'em'));
  };
  if (tr.cap   != null) t['--track-cap']   = capEm(tr.cap, .14);
  if (tr.tight != null) t['--track-tight'] = capEm(tr.tight, .05);
  t['--track-body'] = tr.body != null ? capEm(tr.body, .04) : '0';

  /* Motion. A theme sets its own tempo and curve: a 90s panel snaps because it
     has no transition to speak of, a hand-drawn theme can afford to be soft. */
  const mo = (skin && skin.motion) || {};
  ['tap', 'fast', 'med', 'slow', 'sheet'].forEach(k => {
    if (mo[k] != null) t['--dur-' + k] = mo[k];
  });
  if (mo.ease) t['--ease-out'] = mo.ease;

  /* Explicit overrides win over everything, including the feel layer, so a
     theme always has a last word on any single token. */
  if (skin && skin.overrides) Object.assign(t, skin.overrides);
  Object.entries(ranks||FALLBACK.ranks).forEach(([k,v])=>{t['--rank-'+k]=v});

  /* ══════════════ the contrast floor ══════════════
     Last of everything, so it catches a derived value, a feel-layer value and
     a hand-written override alike.

     Every text colour is pushed away from what it will sit on until it clears
     4.5, and no further. Only lightness moves; hue and saturation are left
     alone, so a theme keeps its character and stops being a hazard. A theme
     that already passes comes back exactly as its author wrote it, which is
     fourteen of the eighteen.

     Four grounds, not one. Text lands on the page, on a card, on a recessed
     row and on a raised button face, and checking only the page was not
     enough: Sketch's secondary text measured 4.52 against its page and 4.25
     against a tile, so the page-only version left it alone and thirteen
     elements on one screen still failed.

     The accent is floored to the reading ratio rather than the graphic one.
     It is a fill most of the time and a word some of the time, and the places
     it is a word — a logo, a live number, the active tab — are the places
     anyone looks first.

     ── what this cannot reach ──
     A theme may bring its own stylesheet, and five of them do. A colour
     painted there is painted on an element, not held in a token, so no amount
     of token arithmetic can see it. Those are reported by Skins.audit() and
     shown in STYLE rather than silently corrected, because the fix belongs in
     the theme.

     Nothing else moves. The chart ramp, the four meaning colours and every
     measurement pass through untouched: a series colour is judged against its
     neighbours rather than against a paragraph. */
  const nudged=[];
  const GROUND=()=>[t['--bg'],t['--surface-1'],t['--surface-2'],t['--surface-3']];
  const floorIt=(k,against,need)=>{
    const was=t[k];
    if(!/^#/.test(String(was)))return;
    const now=against==='ground'?liftAll(was,need,GROUND()):lift(was,t[against],need);
    if(now!==was){
      const had=against==='ground'
        ? Math.min.apply(null,GROUND().filter(g=>g&&/^#/.test(g)).map(g=>contrast(was,g)))
        : contrast(was,t[against]);
      t[k]=now;nudged.push({token:k,was:was,now:now,need:need,had:+had.toFixed(2)});
    }
  };
  floorIt('--text-1','ground',4.5);
  floorIt('--text-2','ground',4.5);
  floorIt('--text-muted','ground',4.5);
  floorIt('--accent','ground',4.5);
  floorIt('--accent-fg','--accent',4.5);
  floorIt('--focus','--bg',3);

  /* A surface that can hold no text at all. Not a matter of taste: if neither
     pure white nor pure black clears 4.5 on it, then nothing does, and every
     word printed there is unreadable whatever the text colour says. Minecraft
     2's recessed row was a mid grey exactly there.

     This is the only case where a background is moved rather than a word,
     because it is the only case where moving the word cannot work. It steps
     away from the reading colour by the smallest amount that clears. */
  ['--surface-1','--surface-2','--surface-3'].forEach(k=>{
    const was=t[k]; if(!/^#/.test(String(was)))return;
    if(contrast('#FFFFFF',was)>=4.5||contrast('#000000',was)>=4.5)return;
    const now=lift(was,t['--text-1'],4.5);
    if(now!==was){t[k]=now;
      nudged.push({token:k,was:was,now:now,need:4.5,
        had:+contrast(was,t['--text-1']).toFixed(2),deadEnd:true})}
  });
  if(nudged.length)t['--mb-nudged']=JSON.stringify(nudged);

  return t;
}

const Skins={
  data:FALLBACK, current:null,
  /* The embedded copy, exposed so _smoke.html can prove it still matches
     skins.json. Two copies of the same data is a smell; a check that fails
     the moment they disagree is what makes it a safe one. */
  builtin:FALLBACK,
  async load(url){
    try{const r=await fetch(url||'../shared/skins.json',{cache:'no-cache'});
      if(r.ok){const j=await r.json();if(j&&Array.isArray(j.skins)&&j.skins.length)this.data=j}
    }catch(e){/* offline or file:// — built-ins carry it */}
    return this.data;
  },
  /* skins.json is the FACTORY set and is never written to. A saved theme is a
     row, and a row with the same id as a factory theme replaces it — which is
     how a built-in theme becomes editable without the file changing. Deleting
     the row is the reset. */
  list(){
    const out=this.data.skins.slice(), at={};
    out.forEach((s,i)=>{at[s.id]=i});
    this.customs().forEach(s=>{
      if(at[s.id]!=null)out[at[s.id]]=s; else out.push(s)});
    return out;
  },
  get(id){return this.list().find(s=>s.id===id)||this.data.skins[0]},
  /* The untouched factory version, for "reset this theme". */
  factory(id){return this.data.skins.filter(s=>s.id===id)[0]||null},
  isEdited(id){return this.customs().some(s=>s.id===id)},

  /* Saved themes are ROWS when the store is there — one row per theme, each
     with its own updated_at, so two devices that each made a different theme
     both keep theirs.

     The old shape was every custom theme in a single JSON array under one
     localStorage key. That is one blob with last-write-wins over the whole
     set, which is the precise failure this suite was built to avoid. Rows and
     the old key are merged with rows winning, so an existing custom theme
     keeps working and upgrades itself the first time it is saved. */
  customs(){
    let old=[];
    try{old=JSON.parse(localStorage.getItem('suite_skins_custom')||'[]')||[]}catch(e){}
    let rows=[];
    try{
      if(typeof Rec!=='undefined'&&typeof Rec.map==='function'){
        const m=Rec.map('skin')||{};
        rows=Object.keys(m).map(k=>Object.assign({},m[k],{id:k,custom:true}));
      }
    }catch(e){}
    if(!rows.length)return old;
    const seen={};rows.forEach(s=>{seen[s.id]=1});
    return rows.concat(old.filter(s=>!seen[s.id]));
  },
  saveCustom(skin){
    try{
      if(typeof Rec!=='undefined'&&typeof Rec.set==='function'){
        const p=Object.assign({},skin);delete p.id;delete p.custom;
        Rec.set('skin',null,skin.id,p);
        return skin;
      }
    }catch(e){}
    const all=this.customs().filter(s=>s.id!==skin.id);all.push(skin);
    try{localStorage.setItem('suite_skins_custom',JSON.stringify(all))}catch(e){}
    return skin;
  },
  forget(id){
    /* The row is the real one. */
    try{if(typeof Rec!=='undefined'&&typeof Rec.del==='function')Rec.del('skin',null,id)}catch(e){}
    /* Then prune the legacy blob, and ONLY prune it.
       This used to write customs() back into that key, which quietly copied
       every row-backed theme into the old store on every delete. Deleting one
       theme therefore made stale duplicates of all the others, and those
       duplicates are exactly the sort of thing that reappears later with no
       explanation. Read the key, remove this id, put it back. Nothing else. */
    try{
      const raw=JSON.parse(localStorage.getItem('suite_skins_custom')||'[]')||[];
      const left=raw.filter(s=>s&&s.id!==id);
      if(left.length)localStorage.setItem('suite_skins_custom',JSON.stringify(left));
      else localStorage.removeItem('suite_skins_custom');
    }catch(e){}
  },
  /* Every theme that is yours rather than the factory's. */
  minesOnly(){return this.list().filter(s=>!this.factory(s.id))},
  custom(base,name,cut){return{id:'custom-'+Date.now().toString(36),name:name||'Custom',
    mode:lum(base.bg)>.5?'light':'dark',cut:cut||'10px',base:base,custom:true}},
  tokensFor(skin){return tokens(skin.base,skin.cut,this.data.ranks,skin)},

  /* ---- the colour layer ----------------------------------------------
     A skin is the THEME: structure, fonts, corners, texture, default colours.
     A palette sits on top of one skin and is the six named fields plus the six
     node colours, saved per skin in 'suite_palettes'. Same split ARC uses and
     the same field names, so a palette means the same thing in either place.
     A skin nobody has edited paints exactly as this file describes. */
  FIELDS:[['bg','Canvas background'],['panel','Card fill'],['line','Card border'],
          ['ink','Text'],['mut','Secondary text'],['acc','Accent — buttons, selection']],
  defaultsFor(idOrSkin){
    const s=typeof idOrSkin==='string'?this.get(idOrSkin):idOrSkin,t=this.tokensFor(s);
    return {bg:t['--bg'],panel:t['--surface-1'],line:t['--border'],ink:t['--text-1'],
      mut:t['--text-2'],acc:t['--accent'],colors:[1,2,3,4,5,6].map(i=>t['--data-'+i])};
  },
  palettes(){try{return JSON.parse(localStorage.getItem(PAL_KEY))||{}}catch(e){return{}}},
  paletteFor(id){
    const d=this.defaultsFor(id),o=this.palettes()[id]||{};
    return Object.assign({},d,o,{colors:(o.colors&&o.colors.length===6)?o.colors.slice():d.colors});
  },
  isCustomised(id){return !!this.palettes()[id]},
  savePalette(id,pal){const a=this.palettes();a[id]=pal;
    try{localStorage.setItem(PAL_KEY,JSON.stringify(a))}catch(e){}return pal},
  clearPalette(id){const a=this.palettes();delete a[id];
    try{localStorage.setItem(PAL_KEY,JSON.stringify(a))}catch(e){}},
  /* six fields back out into the full token set */
  palTokens(p){
    const t={'--bg':p.bg,'--surface-1':p.panel,'--surface-2':mix(p.panel,p.bg,.5),
      '--surface-3':mix(p.panel,p.ink,.15),'--overlay':mix(p.bg,'#000000',.25),
      '--border':p.line,'--border-strong':mix(p.line,p.ink,.3),
      '--text-1':p.ink,'--text-2':p.mut,'--text-muted':mix(p.mut,p.bg,.45),'--text-inverse':p.bg,
      '--accent':p.acc,'--accent-hover':mix(p.acc,p.ink,.22),'--accent-fg':readable(p.acc),'--focus':p.acc};
    (p.colors||[]).slice(0,6).forEach((c,i)=>{t['--data-'+(i+1)]=c});
    return t;
  },

  /* A theme that names a font has to fetch it, or the browser falls back to
     the generic family — and on iOS generic `cursive` is Snell Roundhand, a
     formal copperplate script. That is why Doodle read as a wedding
     invitation and Chalkboard read as the same thing: neither font was ever
     loaded. Injected once per family, and if it never arrives the stack falls
     back to the system sans rather than to anything decorative. */
  font(skin){
    if(!skin||!skin.font)return;
    /* One face or two: a theme may set a display font and a body font, so
       `font` takes a string or a list of Google font specs. */
    const want=Array.isArray(skin.font)?skin.font:[skin.font];
    want.filter(Boolean).forEach(spec=>{
      const id='mb-font-'+String(spec).replace(/[^a-z0-9]/gi,'');
      if(document.getElementById(id))return;
      const l=document.createElement('link');
      l.id=id;l.rel='stylesheet';
      l.href='https://fonts.googleapis.com/css2?family='+spec+'&display=swap';
      document.head.appendChild(l);
    });
  },
  /* The same list, as plain <link> markup, for a preview rendered in a frame
     that has its own document and cannot borrow this one's head. */
  fontLinks(skin){
    if(!skin||!skin.font)return '';
    const want=Array.isArray(skin.font)?skin.font:[skin.font];
    return want.filter(Boolean).map(spec=>
      '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family='+
      String(spec).replace(/"/g,'')+'&display=swap">').join('');
  },

  /* A theme's own stylesheet. Tokens repaint a component; this restyles it —
     a bevelled plate, a gradient title bar, a pressed-in button — which is the
     difference between a recolour and looking like it was opened somewhere
     else entirely.

     One element, replaced wholesale on every apply, so exactly one theme's CSS
     is ever live and there is nothing to clean up. It styles SELECTORS only:
     tokens are set as inline properties on :root and would beat it anyway.

     This is shared CSS, not app CSS. "Apps add no theme CSS of their own"
     still holds — the theme brings its own and the app never knows.          */
  themeCSS(s){
    let el=document.getElementById('skin-theme-css');
    if(!el){el=document.createElement('style');el.id='skin-theme-css';
      document.head.appendChild(el)}
    el.textContent=(s&&s.css)||'';
  },

  /* `pal` paints without saving — that is what makes live preview possible */
  apply(idOrSkin,pal){
    const s=typeof idOrSkin==='string'?this.get(idOrSkin):idOrSkin;
    this.font(s);
    this.themeCSS(s);
    const use=pal||(this.isCustomised(s.id)?this.paletteFor(s.id):null);
    const t=use?Object.assign(this.tokensFor(s),this.palTokens(use)):this.tokensFor(s),
      r=document.documentElement;
    Object.entries(t).forEach(([k,v])=>r.style.setProperty(k,v));
    r.dataset.skin=s.id;r.dataset.mode=s.mode;
    const m=document.querySelector('meta[name=theme-color]');if(m)m.content=t['--bg'];
    /* Redraw the icons. A theme owns the stroke recipe -- weight, cap, join,
       fill, wobble -- so an icon changes SHAPE when the theme changes and
       cannot simply be recoloured like everything else. Done here rather than
       in each app, because every app would otherwise have to remember. */
    if(g.Icons&&g.Icons.paint)try{g.Icons.paint(null,{force:true})}catch(e){}
    this.current=s;
    try{localStorage.setItem(skinKey(),s.id);if(s.custom)this.saveCustom(s)}catch(e){}
    return s;
  },
  /* Name the app before restoring and the choice becomes that app's own.
     Falls back to the suite-wide key, so an existing choice carries over once. */
  for(appId){APP=appId||'';return this},
  restore(appId){
    if(appId)APP=appId;
    try{return this.apply(localStorage.getItem(skinKey())||localStorage.getItem(KEY)||this.data.skins[0].id)}
    catch(e){return this.apply(this.data.skins[0].id)}},
  /* What a theme's own colours measure, before the floor lifts them. `ok` is
     whether the author got it right; `nudged` is what the engine had to do
     about it. A theme is never rejected — it is corrected and the correction
     is reported, which is the only version of this that does not either ship
     unreadable screens or throw away somebody's theme. */
  check(base,skin){
    const t=this.tokensFor(skin||{base:base,id:'_check',mode:lum(base.bg)>.5?'light':'dark'});
    let nudged=[];try{nudged=JSON.parse(t['--mb-nudged']||'[]')}catch(e){}
    return{accentOnBg:contrast(base.accent,base.bg),
      textOnBg:contrast(base.text,base.bg),
      textOnPanel:contrast(base.text,base.panel),
      nudged:nudged,
      ok:contrast(base.accent,base.bg)>=3&&contrast(base.text,base.panel)>=4.5
        &&contrast(base.text,base.bg)>=4.5}},

  /* Every theme, and what the floor had to do to it. One call for a settings
     screen or a check suite: [{id, ok, nudged:[{token, was, now, had}]}] */
  audit(){return this.data.skins.map(k=>{
    const c=this.check(k.base,k);
    return{id:k.id,name:k.name,ok:c.ok,nudged:c.nudged,
      accentOnBg:+c.accentOnBg.toFixed(2),textOnBg:+c.textOnBg.toFixed(2),
      textOnPanel:+c.textOnPanel.toFixed(2)}})},
  /* palettes for things CSS cannot reach: canvas share cards, spreadsheet fills */
  exportFor(skin){const t=this.tokensFor(skin);
    return{social:{bg:t['--bg'],panel:t['--surface-1'],accent:t['--accent'],text:t['--text-1']},
      sheets:[t['--bg'],t['--surface-2'],t['--accent'],t['--text-1']],
      ranks:Object.fromEntries(Object.entries(this.data.ranks||FALLBACK.ranks))}},
  /* Drop-in theme picker. Any app gets the full selector with one line:
       Skins.picker(document.getElementById('themes'));
     Renders every skin plus a custom option, handles the click, persists the
     choice, and repaints. No app writes its own picker. */
  picker(el,opts){
    if(!el)return;
    const o=opts||{},self=this;
    const draw=()=>{
      el.innerHTML=this.list().map(s=>{
        const t=this.tokensFor(s);
        this.font(s);                       /* so the chip is set in its own face */
        return `<button class="skin-chip${this.current&&this.current.id===s.id?' on':''}" data-skin-id="${s.id}"
          style="--sw-bg:${t['--bg']};--sw-panel:${t['--surface-1']};--sw-acc:${t['--accent']}">
          <span class="skin-dots"><i style="background:${t['--bg']}"></i><i style="background:${t['--surface-1']}"></i><i style="background:${t['--accent']}"></i></span>
          <span class="skin-name" style="font-family:${t['--font-display']}">${s.name}</span></button>`}).join('')
        +(o.custom===false?'':`<button class="skin-chip" data-skin-id="__custom"><span class="skin-dots">
          <i style="background:var(--surface-2)"></i><i style="background:var(--surface-3)"></i><i style="background:var(--accent)"></i></span>
          <span class="skin-name">Custom</span></button>`);
    };
    el.addEventListener('click',e=>{
      const b=e.target.closest('[data-skin-id]');if(!b)return;
      const id=b.dataset.skinId;
      if(id==='__custom'){if(o.onCustom)o.onCustom();return}
      self.apply(id);draw();if(o.onChange)o.onChange(self.current);
    });
    draw();return el;
  },
  /* Minimal styling for the picker, injected once, written only in tokens. */
  injectPickerCSS(){
    if(document.getElementById('skin-picker-css'))return;
    const st=document.createElement('style');st.id='skin-picker-css';
    /* A theme chip is a picture of a theme, so it shows the theme rather than
       describing it. Sized for a thumb, and pressable like everything else. */
    st.textContent=`.skin-chip{flex:0 0 86px;min-height:var(--tap,44px);padding:var(--s-2,8px);
      border:1px solid var(--border);border-radius:var(--radius-md,10px);
      background:var(--surface-1);text-align:center;cursor:pointer;
      transition:transform var(--dur-tap,90ms) var(--ease-out,ease),border-color var(--dur-fast,140ms)}
      .skin-chip:active{transform:scale(.96)}
      .skin-chip.on{border-color:var(--accent);box-shadow:var(--e-1)}
      .skin-dots{display:flex;gap:3px;justify-content:center;margin-bottom:var(--s-2,8px)}
      .skin-dots i{width:13px;height:13px;border-radius:3px;display:block}
      .skin-name{font-size:var(--f-1,12px);color:var(--text-2);display:block;line-height:1.2;
      font-family:var(--font-body)}
      @media (hover:hover) and (pointer:fine){.skin-chip:hover{border-color:var(--border-strong)}}`;
    document.head.appendChild(st);
  },
  /* exposed so STYLE can show what "automatic" would give without applying it */
  autoRamp(base){return autoRamp(base)},
  util:{mix,contrast,readable,lum,rgb2hsl,hsl2rgb,lift,liftAll}
};
g.Skins=Skins;
})(typeof window!=='undefined'?window:globalThis);
