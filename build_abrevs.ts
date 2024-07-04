/**
 * @file
 * Algorithmically generate a list of abbreviations for each CSS property.
 * Then create a micro abbreviation for each abbreviation.
 */

const allProps = [
	'align-content',
	'align-items',
	'align-self',
	'alignment-baseline',
	'all',
	'animation',
	'animation-delay',
	'animation-direction',
	'animation-duration',
	'animation-fill-mode',
	'animation-iteration-count',
	'animation-name',
	'animation-play-state',
	'animation-timing-function',
	'appearance',
	'azimuth',
	'backface-visibility',
	'background',
	'background-attachment',
	'background-blend-mode',
	'background-clip',
	'background-color',
	'background-image',
	'background-origin',
	'background-position',
	'background-repeat',
	'background-size',
	'baseline-shift',
	'block-step',
	'block-step-align',
	'block-step-insert',
	'block-step-round',
	'block-step-size',
	'bookmark-label',
	'bookmark-level',
	'bookmark-state',
	'border',
	'border-bottom',
	'border-bottom-color',
	'border-bottom-left-radius',
	'border-bottom-right-radius',
	'border-bottom-style',
	'border-bottom-width',
	'border-boundary',
	'border-collapse',
	'border-color',
	'border-image',
	'border-image-outset',
	'border-image-repeat',
	'border-image-slice',
	'border-image-source',
	'border-image-width',
	'border-left',
	'border-left-color',
	'border-left-style',
	'border-left-width',
	'border-radius',
	'border-right',
	'border-right-color',
	'border-right-style',
	'border-right-width',
	'border-spacing',
	'border-style',
	'border-top',
	'border-top-color',
	'border-top-left-radius',
	'border-top-right-radius',
	'border-top-style',
	'border-top-width',
	'border-width',
	'bottom',
	'box-decoration-break',
	'box-shadow',
	'box-sizing',
	'box-snap',
	'break-after',
	'break-before',
	'break-inside',
	'caption-side',
	'caret',
	'caret-animation',
	'caret-color',
	'caret-shape',
	'chains',
	'clear',
	'clip',
	'clip-path',
	'clip-rule',
	'color',
	'color-adjust',
	'color-interpolation-filters',
	'column-count',
	'column-fill',
	'column-gap',
	'column-rule',
	'column-rule-color',
	'column-rule-style',
	'column-rule-width',
	'column-span',
	'column-width',
	'columns',
	'contain',
	'content',
	'continue',
	'counter-increment',
	'counter-reset',
	'counter-set',
	'cue',
	'cue-after',
	'cue-before',
	'cursor',
	'direction',
	'display',
	'dominant-baseline',
	'elevation',
	'empty-cells',
	'filter',
	'flex',
	'flex-basis',
	'flex-direction',
	'flex-flow',
	'flex-grow',
	'flex-shrink',
	'flex-wrap',
	'float',
	'float-defer',
	'float-offset',
	'float-reference',
	'flood-color',
	'flood-opacity',
	'flow',
	'flow-from',
	'flow-into',
	'font',
	'font-family',
	'font-feature-settings',
	'font-kerning',
	'font-language-override',
	'font-size',
	'font-size-adjust',
	'font-stretch',
	'font-style',
	'font-synthesis',
	'font-variant',
	'font-variant-alternates',
	'font-variant-caps',
	'font-variant-east-asian',
	'font-variant-ligatures',
	'font-variant-numeric',
	'font-variant-position',
	'font-weight',
	'footnote-display',
	'footnote-policy',
	'glyph-orientation-vertical',
	'grid',
	'grid-area',
	'grid-auto-columns',
	'grid-auto-flow',
	'grid-auto-rows',
	'grid-column',
	'grid-column-end',
	'grid-column-gap',
	'grid-column-start',
	'grid-gap',
	'grid-row',
	'grid-row-end',
	'grid-row-gap',
	'grid-row-start',
	'grid-template',
	'grid-template-areas',
	'grid-template-columns',
	'grid-template-rows',
	'hanging-punctuation',
	'height',
	'hyphenate-character',
	'hyphenate-limit-chars',
	'hyphenate-limit-last',
	'hyphenate-limit-lines',
	'hyphenate-limit-zone',
	'hyphens',
	'image-orientation',
	'image-rendering',
	'image-resolution',
	'initial-letter',
	'initial-letter-align',
	'initial-letter-wrap',
	'isolation',
	'justify-content',
	'justify-items',
	'justify-self',
	'left',
	'letter-spacing',
	'lighting-color',
	'line-break',
	'line-grid',
	'line-height',
	'line-height-step',
	'line-snap',
	'list-style',
	'list-style-image',
	'list-style-position',
	'list-style-type',
	'margin',
	'margin-bottom',
	'margin-left',
	'margin-right',
	'margin-top',
	'marker',
	'marker-end',
	'marker-knockout-left',
	'marker-knockout-right',
	'marker-mid',
	'marker-pattern',
	'marker-segment',
	'marker-side',
	'marker-start',
	'marquee-direction',
	'marquee-loop',
	'marquee-speed',
	'marquee-style',
	'mask',
	'mask-border',
	'mask-border-mode',
	'mask-border-outset',
	'mask-border-repeat',
	'mask-border-slice',
	'mask-border-source',
	'mask-border-width',
	'mask-clip',
	'mask-composite',
	'mask-image',
	'mask-mode',
	'mask-origin',
	'mask-position',
	'mask-repeat',
	'mask-size',
	'mask-type',
	'max-height',
	'max-lines',
	'max-width',
	'min-height',
	'min-width',
	'mix-blend-mode',
	'motion',
	'motion-offset',
	'motion-path',
	'motion-rotation',
	'nav-down',
	'nav-left',
	'nav-right',
	'nav-up',
	'object-fit',
	'object-position',
	'offset',
	'offset-after',
	'offset-anchor',
	'offset-before',
	'offset-distance',
	'offset-end',
	'offset-path',
	'offset-position',
	'offset-rotate',
	'offset-start',
	'opacity',
	'order',
	'orphans',
	'outline',
	'outline-color',
	'outline-offset',
	'outline-style',
	'outline-width',
	'overflow',
	'overflow-style',
	'overflow-wrap',
	'overflow-x',
	'overflow-y',
	'padding',
	'padding-bottom',
	'padding-left',
	'padding-right',
	'padding-top',
	'page',
	'page-break-after',
	'page-break-before',
	'page-break-inside',
	'pause',
	'pause-after',
	'pause-before',
	'perspective',
	'perspective-origin',
	'pitch',
	'pitch-range',
	'place-content',
	'place-items',
	'place-self',
	'play-during',
	'position',
	'presentation-level',
	'quotes',
	'region-fragment',
	'resize',
	'rest',
	'rest-after',
	'rest-before',
	'richness',
	'right',
	'rotation',
	'rotation-point',
	'ruby-align',
	'ruby-merge',
	'ruby-position',
	'running',
	'scroll-behavior',
	'scroll-padding',
	'scroll-padding-block',
	'scroll-padding-block-end',
	'scroll-padding-block-start',
	'scroll-padding-bottom',
	'scroll-padding-inline',
	'scroll-padding-inline-end',
	'scroll-padding-inline-start',
	'scroll-padding-left',
	'scroll-padding-right',
	'scroll-padding-top',
	'scroll-snap-align',
	'scroll-snap-margin',
	'scroll-snap-margin-block',
	'scroll-snap-margin-block-end',
	'scroll-snap-margin-block-start',
	'scroll-snap-margin-bottom',
	'scroll-snap-margin-inline',
	'scroll-snap-margin-inline-end',
	'scroll-snap-margin-inline-start',
	'scroll-snap-margin-left',
	'scroll-snap-margin-right',
	'scroll-snap-margin-top',
	'scroll-snap-stop',
	'scroll-snap-type',
	'scrollbar-gutter',
	'shape-image-threshold',
	'shape-inside',
	'shape-margin',
	'shape-outside',
	'size',
	'speak',
	'speak-as',
	'speak-header',
	'speak-numeral',
	'speak-punctuation',
	'speech-rate',
	'stress',
	'string-set',
	'stroke',
	'stroke-alignment',
	'stroke-dashadjust',
	'stroke-dasharray',
	'stroke-dashcorner',
	'stroke-dashoffset',
	'stroke-linecap',
	'stroke-linejoin',
	'stroke-miterlimit',
	'stroke-opacity',
	'stroke-width',
	'tab-size',
	'table-layout',
	'text-align',
	'text-align-all',
	'text-align-last',
	'text-combine-upright',
	'text-decoration',
	'text-decoration-color',
	'text-decoration-line',
	'text-decoration-skip',
	'text-decoration-style',
	'text-emphasis',
	'text-emphasis-color',
	'text-emphasis-position',
	'text-emphasis-style',
	'text-indent',
	'text-justify',
	'text-orientation',
	'text-overflow',
	'text-shadow',
	'text-space-collapse',
	'text-space-trim',
	'text-spacing',
	'text-transform',
	'text-underline-position',
	'text-wrap',
	'top',
	'transform',
	'transform-box',
	'transform-origin',
	'transform-style',
	'transition',
	'transition-delay',
	'transition-duration',
	'transition-property',
	'transition-timing-function',
	'unicode-bidi',
	'user-select',
	'vertical-align',
	'visibility',
	'voice-balance',
	'voice-duration',
	'voice-family',
	'voice-pitch',
	'voice-range',
	'voice-rate',
	'voice-stress',
	'voice-volume',
	'volume',
	'white-space',
	'widows',
	'width',
	'will-change',
	'word-break',
	'word-spacing',
	'word-wrap',
	'wrap-after',
	'wrap-before',
	'wrap-flow',
	'wrap-inside',
	'wrap-through',
	'writing-mode',
	'z-index',
];

type AbrvData = { main: string; micro: string };
type AbrvPropMap = Map<string, string>;

/**
 * ABBREVIATION ALGORITHM
 * ============================================================================
 *
 * The current scheme is first two letters + the last letter of each segment.
 * This removes all but three conflicts with properties that are rare.
 *
 * Other attempts:
 * - First four chars removes all conflicts. 1, 2, and 3 do not.
 * - First and last char, forward or backward, has many of conflicts
 * - The first character plus the first or N vowels has conflicts
 * - All consonants has conflicts AND the abbreviations are very long.
 * - Using all vowels has lots of conflicts.
 */
function generateAbrv(segment: string) {
	return segment.length < 4 ? segment : segment.slice(0, 2) + segment.at(-1);
}

function abrvProps(cssProps: string[]) {
	/** Maps abbreviations to properties */
	const abrvPropMap: AbrvPropMap = new Map();
	/** Holds abbreviation data for each property */
	const propAbrvData = new Map<string, AbrvData>();
	/** Tracks conflicts with the abbreviation generation */
	const abrvConflicts: string[] = [];

	cssProps.forEach((property) => {
		const segments = property.split('-');
		const abrvSegments = segments.map((segment) => generateAbrv(segment));
		const mainAbrv = abrvSegments.join('-');

		if (abrvPropMap.has(mainAbrv)) {
			const prevAbrv = abrvPropMap.get(mainAbrv);
			abrvConflicts.push(
				`[conflict] prop "${property}" w/ abrv "${mainAbrv}" conflicts w/ "${prevAbrv}"`,
			);
		} else {
			propAbrvData.set(property, { main: mainAbrv, micro: '' });
			abrvPropMap.set(mainAbrv, property);
		}
	});

	return { propAbrvData, abrvConflicts, abrvPropMap };
}

function countAbrvs(abrvPropMap: AbrvPropMap) {
	const abrvCounts: Record<string, number> = {};

	abrvPropMap.forEach((_, mainAbrv) => {
		mainAbrv.split('-').forEach((seg) => {
			if (!abrvCounts[seg]) abrvCounts[seg] = 0;
			abrvCounts[seg]++;
		});
	});

	return abrvCounts;
}

/**
 * MICRO ABBREVIATIONS
 * ============================================================================
 *
 * Find the shortest possible abbreviation for all abbreviations while
 * still preventing conflicts
 */
function genMicroAbrvs(
	abrvCounts: Record<string, number>,
	propAbrvData: Map<string, AbrvData>,
) {
  const abrvData = new Map<string, AbrvData>(propAbrvData);

	// Lookup segment by microAbrv
	const microAbrvSegMap = new Map<string, string>();
	// Lookup microAbrv by segment
	const segMicroAbrvMap = new Map<string, string>();

	Object.entries(abrvCounts)
		.sort((a, b) => b[1] - a[1])
		.forEach(([abrv]) => {
			for (let i = 1; i <= abrv.length; i++) {
				const letters = abrv.slice(0, i);
				if (microAbrvSegMap.has(letters)) continue;
				microAbrvSegMap.set(letters, abrv);
				segMicroAbrvMap.set(abrv, letters);
				break;
			}
		});

	abrvData.forEach((data, prop) => {
		const micro = data.main
			.split('-')
			.map((segment) => segMicroAbrvMap.get(segment))
			.join('-');

		abrvData.set(prop, { ...data, micro });
	});

  return { propAbrvData: abrvData, microAbrvSegMap, segMicroAbrvMap };
}

function logData(propAbrvData: Map<string, AbrvData>) {
  console.log(`PROP,ABRV,MICRO`);
  propAbrvData.forEach((data, prop) => {
    const row = [
      prop,
      data.main,
      data.micro,
    ];
    console.log(row.join(','));
  });
}

function main(cssProps: string[]) {
	const abrvPropsRet = abrvProps(cssProps);
	const abrvCounts = countAbrvs(abrvPropsRet.abrvPropMap);
	const microAbrvsRet = genMicroAbrvs(abrvCounts, abrvPropsRet.propAbrvData);
  logData(microAbrvsRet.propAbrvData);
}

main(allProps);
