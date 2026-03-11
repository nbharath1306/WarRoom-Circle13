import urllib.request
import re
import json

url = 'https://lu.ma/blr'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        
        # Look for next data
        match = re.search(r'<script id="__NEXT_DATA__" type="application/json">(.*?)</script>', html)
        if match:
            data = json.loads(match.group(1))
            print("FOUND NEXT DATA")
            # print top level keys
            print(data.keys())
            # print page props
            if 'props' in data:
                print(data['props']['pageProps'].keys())
        else:
            print("No NEXT_DATA found")
except Exception as e:
    print(e)
