from pathlib import Path
import random
from html import escape
P=Path(__file__).parent/'assets';P.mkdir(exist_ok=True)
# Original 16-bit inspired player, no Nintendo sprites
avatar='''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 148" shape-rendering="crispEdges">
<rect x="22" y="0" width="51" height="12" fill="#182b3e"/><rect x="13" y="12" width="67" height="12" fill="#182b3e"/>
<rect x="17" y="24" width="63" height="59" fill="#182b3e"/><rect x="23" y="30" width="51" height="46" fill="#F4BD91"/>
<rect x="23" y="28" width="16" height="16" fill="#182b3e"/><rect x="23" y="42" width="8" height="22" fill="#182b3e"/>
<rect x="42" y="46" width="8" height="7" fill="#182b3e"/><rect x="64" y="46" width="8" height="7" fill="#182b3e"/>
<rect x="49" y="58" width="10" height="5" fill="#C47C5E"/><rect x="42" y="65" width="22" height="5" fill="#B46A4F"/>
<rect x="26" y="81" width="48" height="12" fill="#182b3e"/><rect x="19" y="92" width="60" height="39" fill="#182b3e"/>
<rect x="25" y="98" width="48" height="27" fill="#F3A848"/><rect x="36" y="98" width="26" height="27" fill="#F8C36C"/>
<rect x="43" y="104" width="13" height="15" fill="#1D4D64"/><rect x="49" y="107" width="7" height="5" fill="#F8C36C"/>
<rect x="4" y="98" width="16" height="30" fill="#182b3e"/><rect x="9" y="103" width="10" height="20" fill="#F4BD91"/>
<rect x="79" y="98" width="13" height="30" fill="#182b3e"/><rect x="79" y="103" width="8" height="20" fill="#F4BD91"/>
<rect x="29" y="131" width="19" height="12" fill="#233C65"/><rect x="51" y="131" width="19" height="12" fill="#233C65"/>
<rect x="23" y="142" width="26" height="6" fill="#182b3e"/><rect x="51" y="142" width="26" height="6" fill="#182b3e"/>
</svg>'''
(P/'alger-sprite.svg').write_text(avatar)
# Differentiated icons with pixel rect glyphs, same 64px dark-ink border palette
icons={
 'starter': '''<path d="M6 29 32 10 58 29v6H6z" fill="#EDAD57"/><rect x="13" y="32" width="38" height="26" fill="#FFF4D8"/><rect x="28" y="43" width="12" height="15" fill="#D37B4D"/><rect x="18" y="38" width="7" height="8" fill="#77C6CE"/>''',
 'projects': '''<rect x="10" y="24" width="44" height="34" fill="#E8B26F"/><rect x="7" y="18" width="15" height="12" fill="#D78063"/><rect x="25" y="11" width="14" height="18" fill="#D78063"/><rect x="42" y="18" width="15" height="12" fill="#D78063"/><rect x="27" y="39" width="12" height="19" fill="#23465C"/><rect x="13" y="30" width="10" height="10" fill="#FFF0B0"/><rect x="42" y="30" width="10" height="10" fill="#FFF0B0"/><path d="M32 10V3M32 3h14l-5 5 5 5H32" stroke="#233B4C" stroke-width="3" fill="#F6C451"/>''',
 'skills': '''<path d="M10 22 23 9h18l13 13-22 33Z" fill="#79C9D7"/><path d="M10 22h44M23 9l9 13 9-13M32 22v33" fill="none" stroke="#E8F9F5" stroke-width="3"/>''',
 'boss': '''<rect x="14" y="16" width="36" height="43" fill="#4A526D"/><rect x="10" y="8" width="14" height="17" fill="#69738E"/><rect x="40" y="8" width="14" height="17" fill="#69738E"/><rect x="25" y="39" width="14" height="20" fill="#1A2E48"/><rect x="20" y="28" width="8" height="8" fill="#F5B253"/><rect x="37" y="28" width="8" height="8" fill="#F5B253"/>''',
 'career': '''<path d="M3 53 22 18 32 35 44 6 61 53Z" fill="#7E98A4"/><path d="m14 33 8-15 6 12 16-24 11 28-11-10-9 15-13-10Z" fill="#F4F6E7"/><rect x="6" y="53" width="52" height="7" fill="#4A9272"/>''',
 'library': '''<rect x="10" y="13" width="44" height="44" fill="#BC815E"/><rect x="15" y="19" width="34" height="32" fill="#FFF0D3"/><rect x="20" y="23" width="8" height="24" fill="#7ABDB7"/><rect x="29" y="23" width="8" height="24" fill="#E3A45C"/><rect x="38" y="23" width="7" height="24" fill="#8B8BC4"/><rect x="14" y="49" width="36" height="4" fill="#5E473D"/>''',
 'contact': '''<rect x="15" y="25" width="34" height="33" fill="#E3B781"/><rect x="7" y="15" width="14" height="43" fill="#D69571"/><rect x="43" y="15" width="14" height="43" fill="#D69571"/><rect x="12" y="9" width="10" height="13" fill="#E3B781"/><rect x="42" y="9" width="10" height="13" fill="#E3B781"/><rect x="26" y="41" width="13" height="17" fill="#244059"/><path d="M32 10V2h17l-6 6 6 5H32" fill="#F7CF62" stroke="#233B4C" stroke-width="2"/>''',
 'services': '''<rect x="17" y="32" width="32" height="25" fill="#F6D58F"/><path d="M9 32 18 16h28l9 16Z" fill="#D56B58"/><path d="M9 32h46" stroke="#F8E6AE" stroke-width="6" stroke-dasharray="8 4"/><rect x="28" y="40" width="11" height="17" fill="#7096B0"/>'''
}
for k,v in icons.items():
 svg=f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" shape-rendering="crispEdges"><g stroke="#203C50" stroke-width="3" stroke-linejoin="miter">{v}</g></svg>'''
 (P/f'{k}.svg').write_text(svg)
# Custom pixel seas + land map with paths and tiny scenic icons
random.seed(46)
parts=['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 670" preserveAspectRatio="xMidYMid slice" role="img" aria-label="A colorful illustrated island with forests, trails, rocky mountains and a lake">',
'<defs><pattern id="water" width="68" height="51" patternUnits="userSpaceOnUse"><path d="M15 26h22m-14 5h25" stroke="#FFFFFF" stroke-opacity=".25" stroke-width="3"/></pattern><pattern id="terrain" width="36" height="36" patternUnits="userSpaceOnUse"><rect width="36" height="36" fill="#B8D996"/><path d="M6 11h7m15 13h5" stroke="#9FC682" stroke-width="3"/></pattern><filter id="shadow" x="-20%" y="-20%" width="150%" height="150%"><feDropShadow dx="0" dy="12" stdDeviation="0" flood-color="#2A5D55" flood-opacity=".38"/></filter></defs>',
'<rect width="1200" height="670" fill="#85CAC6"/><rect width="1200" height="670" fill="url(#water)"/>',
'<path d="M42 174 121 93 260 70 375 40 539 84 718 35 869 76 1060 65 1150 145 1158 346 1112 533 1032 591 843 619 703 594 563 643 414 613 286 636 126 588 55 495 27 358Z" fill="#6BAA73" stroke="#244D54" stroke-width="11" stroke-linejoin="round" filter="url(#shadow)"/>',
'<path d="M52 161 125 87 267 62 370 35 540 73 720 27 867 67 1061 56 1140 138 1147 341 1103 519 1021 579 845 607 704 581 564 628 413 602 286 624 136 578 67 484 38 359Z" fill="url(#terrain)" stroke="#477B62" stroke-width="5" stroke-linejoin="round"/>',
'<path d="M95 505q75-82 177-44t156 35q62 4 127-42t135-29q76 18 120 80t120 49l-12 42-80 8-143-20-138 42-149-25-119 26-126-40Z" fill="#E7CF93" opacity=".95"/>',
'<path d="M480 153q102-76 195-28t98 103q-13 46-112 52t-142-34q-36-28-39-93Z" fill="#85C7A7" stroke="#4C9A89" stroke-width="8"/>',
'<path d="M486 163q89-57 169-24t101 82q-9 33-87 43t-132-26Z" fill="#67C5BF"/>',
'<path d="M485 151q-46-47-115-39t-110 24" fill="none" stroke="#A0D9C8" stroke-width="15" opacity=".65"/>',
'<path d="M867 116 936 36 1008 124l64-37 71 126-50 44-160 18-94-65Z" fill="#8AA8A0" stroke="#537A78" stroke-width="6"/>',
'<path d="m892 88 44-52 49 60-44-23-21 24Zm106 24 10-13 32 70-33-18-31 13Z" fill="#F3F7E8"/>',
'<path d="M300 120q32-29 83-19t61 38q-35 31-72 24Z" fill="#A4C880" stroke="#5C9166" stroke-width="5"/>',
'<path d="M729 399q30-51 80-29t64 51q-24 45-90 44Z" fill="#88C69B" stroke="#5F9872" stroke-width="5"/>',
# Walking route, behind nodes
'<path d="M155 486 C190 509 285 490 339 445 S435 462 534 536 S653 468 745 381 S710 285 624 225 S542 185 444 195 S340 233 268 245 S764 182 1004 150" fill="none" stroke="#4B8269" stroke-opacity=".35" stroke-width="29" stroke-linecap="round" stroke-linejoin="round"/>',
'<path d="M155 486 C190 509 285 490 339 445 S435 462 534 536 S653 468 745 381 S710 285 624 225 S542 185 444 195 S340 233 268 245 S764 182 1004 150" fill="none" stroke="#F7E8B8" stroke-width="21" stroke-linecap="round" stroke-linejoin="round"/>',
'<path d="M155 486 C190 509 285 490 339 445 S435 462 534 536 S653 468 745 381 S710 285 624 225 S542 185 444 195 S340 233 268 245 S764 182 1004 150" fill="none" stroke="#DAAD6C" stroke-width="4" stroke-dasharray="7 14" stroke-linecap="round"/>']
# scenic clusters of pixel trees avoiding center label nodes
for x,y in [(106,194),(140,224),(177,205),(117,320),(173,331),(215,310),(314,309),(357,284),(402,345),(470,349),(554,328),(616,344),(677,322),(804,282),(850,301),(904,334),(1010,350),(1083,389),(1013,477),(945,504),(882,523),(724,566),(650,595),(571,571),(455,575),(372,554),(264,543),(184,565),(111,427),(1118,228),(775,113),(737,128),(702,96),(237,172),(365,76),(549,97)]:
 col=random.choice(['#3F9069','#4EA278','#337E65','#529F68'])
 scale=random.choice([0.8,0.9,1,1.1])
 parts.append(f'<g transform="translate({x} {y}) scale({scale})"><rect x="-3" y="13" width="6" height="17" fill="#8E6E49"/><path d="M-18 15-8 0-14 0 0-22 14 0 8 0 18 15Z" fill="{col}" stroke="#316B5E" stroke-width="3"/><path d="m-7 6 7-12 7 12" fill="none" stroke="#7FC98B" stroke-width="3"/></g>')
# tiny bushes and flowers
for i in range(65):
 x=random.randint(90,1090);y=random.randint(90,580)
 if 410<x<790 and 105<y<290:continue
 col=random.choice(['#6FB784','#88BF75','#F1D57A','#EBAE7A'])
 parts.append(f'<rect x="{x}" y="{y}" width="{random.choice([4,6,8])}" height="4" fill="{col}" opacity=".85"/>')
# sparkle in lake
for x,y in [(565,159),(659,211),(704,181),(616,238)]:
 parts.append(f'<path d="M{x-6} {y}h12m-6-6v12" stroke="#DFF9E6" stroke-width="3"/>')
parts.append('</svg>')
(P/'overworld-land.svg').write_text(''.join(parts))
# Favicon
(P/'favicon.svg').write_text('''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" shape-rendering="crispEdges"><rect width="64" height="64" rx="7" fill="#18364A"/><rect x="6" y="6" width="52" height="52" fill="#F6C65F"/><path d="M17 49 28 16h9l11 33H38l-2-8H28l-2 8Zm13-16h5l-2-10Z" fill="#18364A"/></svg>''')
print('Wrote assets',list(p.name for p in P.iterdir()))
