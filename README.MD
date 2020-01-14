# sandbox parcel 

## projektberivelse
Grunden til at jeg laver denne sand box med parcel  Er at nemmere konfigurere Sass til CSS og når jeg style med for eksempel flex box og grid er det ikke alle browser der kan understøtte det og jeg ville gerne kunne bruge nogle af de nyeste javascript som browser ikke kan  understøtte og f.eks. hvis jeg får nogle billeder jeg skal have en mindre fin størrelse så de hurtigere kan vi downloadet i browseren kan parcel gør billederne mindre så jeg ikke behøver at åbne for eksempel photoshop og jeg vil gerne kunne komprimere min css og javascript  

## list over npm pakker 
* parcel-bundler er en lynende hurtig, nul konfiguration af applikations bundter [officeelle docs](https://parceljs.org/getting_started.html)

* parcel-plugin-imagemin når der står parcel- betyder at parcel har en wrapper round om imagemin kan optimere billeder [npm docs](https://www.npmjs.com/package/parcel-plugin-imagemin)

* babel-core er API. For v5 er babel-pakken CLI og afhænger af babel-core. For v6 er babel-cli-pakken CLI (CLI-bin-kommandoen er dog stadig babel[npm docs](https://www.npmjs.com/package/babel-core)

* babel-runtime antager jeg, at det kun er runtime (polyfill og helpers), der understøtter kode, der allerede er blevet transformeret.[npm docs](https://www.npmjs.com/package/babel-plugin-transform-runtime)

* babel preset-env is a preset that compiles down to a minimum of ES5 (preset-es2015)[npm docs](https://www.npmjs.com/package/babel-preset-env)

* Sass er lige some css men med flere features [officeelle docs](https://sass-lang.com/documentation) [npm docs](https://www.npmjs.com/package/sass)

* PostCSS-moduler. PostCSS er en forbehandler, der bruger JS-plugins til at transformere CSS-stilarter. Disse plugins kan fylde din CSS, understøtte variabler og mixins, transportere fremtidig CSS-syntaks, inline-billeder og mere[npm docs](https://www.npmjs.com/package/postcss-modules)

* Autoprefixer. PostCSS-plugin til parse CSS og præfikser til CSS-regler ved hjælp af værdier og det er anbefalede af google og brugt i Twitter and Alibaba. [npm docs](https://www.npmjs.com/package/autoprefixer)

## kommandoer
  for at installer devDependencies fra package.json skriv `npm i` for at køre dette projekt `npm run dev` det vil starter en lokal http server med hot reloading hvis du ville installer en nye pakke/moduler hvis pakken kun skal bruge på fro-end se kode-eksempler ellers skriv `npm i pakkenavn` hvis du vill fjern en pakke/moduler skriv `npm uninstall pakkenavn` for at opdatere alle pakke devDependencies skrive `npm update` denne komando bør skrives før `npm i` for produktion skrive `npm run build` og upload dist mappen til din http server 

## kode-eksempler

### installer pakke som kun skal bruges på fro-end
gå inde i mappen src/script.js og import 'pakkenavn' se  for eksempel her og derefter ville parcel installer pakke for dig

```javascript
import axios from 'axios';
```