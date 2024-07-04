import { mediaQueries, properties } from './config.ts';

function cleanString(str: string): string {
    if (str === '" "') return 'space';
    if (str === '"|"') return 'pipe';
    if (str === '","') return 'comma';
    if (str === '":"') return 'colon';
    if (str === '"/"') return 'slash';

    str = str.replace(/^-/g, 'minus-');
    str = str.replace(/-\./g, 'minus-0');
    str = str.replace(/[()]/g, '-');

    if (str.startsWith('.')) str = '0' + str;
    str = str.replace(/[.]/g, '_');
    str = str.replace(/,\s?/g, '_');
    str = str.replace(/[/]/g, 'x');
    str = str.replace(/\s/g, '-');
    str = str.replace(/%/g, '-percent');

    str = str.replace(/-*$/, '');
    return str;
}

function getRule(
    prop: string,
    val: any,
    pseudoClass?: string,
    mediaQueryClass?: string,
) {
    const prefix = pseudoClass ? `${pseudoClass}--` : '';
    const suffix = pseudoClass ? `:${pseudoClass}` : '';
    const mqPrefix = mediaQueryClass ? `${mediaQueryClass}--` : '';

    if (typeof val === 'string') {
        return `.${mqPrefix}${prefix}${prop}-${
            cleanString(val)
        }${suffix} { ${prop}: ${val} }`;
    } else {
        const [p] = Object.keys(val);
        const [v2] = Object.values(val);
        return `.${mqPrefix}${prefix}${prop}-${p}${suffix} { ${prop}: ${v2} }`;
    }
}

if (import.meta.main) {
    const css: string[] = [];

    mediaQueries.forEach((mq) => {
        const [mqClass] = Object.keys(mq);
        const [mqValue] = Object.values(mq);

        if (mqClass && mqValue) css.push(`${mqValue} {`);

        Object.entries(properties).forEach(([prop, vals]) => {
            vals.forEach((v) => {
                css.push(
                    '\t' + getRule(prop, v, undefined, mqClass),
                    '\t' + getRule(prop, v, 'any-link', mqClass),
                    '\t' + getRule(prop, v, 'link', mqClass),
                    '\t' + getRule(prop, v, 'visited', mqClass),
                    '\t' + getRule(prop, v, 'hover', mqClass),
                    '\t' + getRule(prop, v, 'focus', mqClass),
                    '\t' + getRule(prop, v, 'active', mqClass),
                );
            });
        });

        if (mqClass && mqValue) css.push(`}`);
    });

    const reset = await Deno.readTextFile('./_reset.css');
    const generated = css.join('\n');

    const hellwind = [
        `/** Hellwind 1.0 - A Tailwind Parody in One Act */`,
        reset,
        generated,
    ];

    Deno.writeTextFile('./hellwind.css', hellwind.join('\n'));
}
