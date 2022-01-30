export function makePretty (uglyStyle) {
    var s1 = uglyStyle.replace(new RegExp(`(\\<)`,'g'),'$1\r\n');
    var s2 = s1.replace(new RegExp(`(\\>(?!,))`,'g'),'$1\r\n');
    var s3 = s2.replace(new RegExp(',','g'),',\r\n');
    var s4 = s3.replace(new RegExp(`(\\>,?)`,'g'),'\r\n$1');
    var tokens = s4.split('\n');

    var offsets = [];
    var index=0;
    (tokens).forEach((token)=> {
        index = index < 0 ? 0 : index;
        offsets.push('\t'.repeat(index) + token.trim());
        if (token.match('[\\<]')){index++};
        if (!token.match('[\\<|\\>|,]')){index--};
        if (token.match('\\>$')){index--};
    });

    var lines = [];
    offsets.forEach((line) => {
        if(!line.match(`^[\t,\r\n]+$`)) {
            lines.push(line);
        }
    });

    return lines.join('\r\n');
}

export function makeUgly (prettyStyle) {
    return prettyStyle.replace(/[\r\n\t\s]/g, "");
}