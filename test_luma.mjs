import fs from 'fs';

async function testFetch() {
    console.log("Fetching Luma...");
    try {
        const res = await fetch('https://lu.ma/blr', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7...'
            }
        });
        const html = await res.text();
        fs.writeFileSync('luma.html', html);
        console.log("Saved to luma.html. " + html.length + " bytes.");
        
        let match = html.match(/<script id="__NEXT_DATA__".*?>(.*?)<\/script>/);
        if (match) {
            console.log("Found NEXT_DATA");
            let data = JSON.parse(match[1]);
            let keys = Object.keys(data.props?.pageProps || {});
            console.log("PageProps keys:", keys);
        } else {
            console.log("No NEXT_DATA. Looking for other JSON chunks...");
            // React Server Components payload:
            // Often contained in script tags like <script>self.__next_f.push...
            let chunks = [];
            let regex = /self\.__next_f\.push\(\[1,"(.*?)"]\)/g;
            let m;
            while ((m = regex.exec(html)) !== null) {
                if (m[1].includes('Event') || m[1].includes('title')) {
                    chunks.push(m[1].substring(0, 100));
                }
            }
            console.log("Found RSC chunks with Event/title:", chunks.length);
            if (chunks.length > 0) {
                console.log(chunks[0]);
            }
        }
    } catch (e) {
        console.error(e);
    }
}
testFetch();
