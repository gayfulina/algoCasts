const solution = (angles) => {
    let openCount = 0;
    let additionalLeadingOpenTags = 0;
    for (const ang of angles) {
        if (ang === '>') {
            if (openCount === 0) {
                additionalLeadingOpenTags++;
            } else {
                openCount--;
            }
        } else {
            openCount++;
        }
    }
    return '<'.repeat(additionalLeadingOpenTags) + angles + '>'.repeat(openCount);
};

console.log(solution('><<><'));
