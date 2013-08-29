/*
Version 0.0000001 pre-alpha
paste this into a bookmark: javascript: var version = 1, script = document.createElement('script'); script.type = 'text/javascript'; script.async = true; script.charset = 'UTF-8'; script.setAttribute('src', 'https://raw.github.com/Dathann/dnic/master/AutoFillbookmarklet.js' + '#' + Math.random()); document.documentElement.appendChild(script); script.onload = script.onreadystatechange = function () { var rs = script.readyState; if (!rs || rs === 'loaded' || rs === 'complete') { script.onload = script.onreadystatechange = null; if (version !== formFillBookmarklet.version) { alert('This bookmarklet is out of date!'); } } };

To Do: 
 - Eliminate the case-sensitive keys. Key name should be transformed to selector "as is", toUpperCase(), toLowerCase(), capitalize()
 - Detect the local and insert the corresponding postal-code.
*/

(function () {
    if (typeof formFillBookmarklet !== 'undefined') {
        return;
    }
    formFillBookmarklet = {
        version: 1,
        values: {
            Address1: '1 Bowerman Dr',
            address1: '1 Bowerman Dr',
            Address2: '',
            address2: '',
            CC: '4163835624550976',
            cc: '4163835624550976',
            CCard: '4163835624550976',
            ccard: '4163835624550976',
            City: 'Beaverton',
            city: 'Beaverton',
            Credit: '4163835624550976',
            credit: '4163835624550976',
            creditCardNumber: '4163835624550976',
            creditCardType: 'Visa',
            Email: 'Tiger.Woods@Nike.com',
            email: 'Tiger.Woods@Nike.com',
            Month: '3',
            month: '3',
            Year: '2020',
            year: '2020',
            dobDay: '2',
            dobYear: '1969',
            Fax: '(503) 671-5555',
            fax: '(503) 671-5555',
            First: 'Tiger',
            first: 'Tiger',
            gender: 'male',
            Gift: 'Go get em Tiger!',
            gift: 'Go get em Tiger!',
            Last: 'Woods',
            last: 'Woods',
            name: 'Tiger',
            Name: 'Tiger',
            fName: 'Tiger',
            fname: 'Tiger',
            lName: 'Woods',
            lname: 'Woods',
            pass: 'Woods123',
            Pass: 'Woods123',
            verify: 'Woods123',
            Verify: 'Woods123',
            Phone: '(503) 671-6453',
            phone: '(503) 671-6453',
            Post: '97005',
            post: '97005',
            Zip: '97005',
            zip: '97005',
            State: 'OR',
            state: 'OR',
            Type: 'Visa',
            type: 'Visa'
        },
        init: function () {
            if (typeof $ !== 'undefined') {
                for (prop in this.values) {
                    prop = prop.toString();
                    for (var a = 0; a < 4; a++) {
                        //case sensitive so try, as is, lower, upper, capital
                        //if (a = 1)
                        //    prop = prop.toUpperCase();
                        //else if (a = 2)
                        //    prop = prop.toLowerCase();
                        //else if (a = 3)
                        //    prop = prop.charAt(0).toUpperCase() + prop.slice(1).toLowerCase();
                        for (var i = 0; i < $('[name*=' + prop + ']').length; i++) {
                            //console.log(a + ' ' + i)

                            if ($('[name*=' + prop + ']').eq(i).attr('type') === 'radio' || $('[name*=' + prop + ']').eq(i).attr('type') === 'checkbox') {
                                $('[name*=' + prop + ']').eq(i).prop('checked', true);
                            } else {
                                $('[name*=' + prop + ']').eq(i).val(this.values[prop])
                            }
                        }
                    }
                }
            }
        }
    };
    formFillBookmarklet.init();

    if (typeof window.jQuery === 'undefined') {
        jq = document.createElement('script'); jq.type = 'text/javascript'; jq.async = true;
        jq.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js';
        document.body.appendChild(jq);
        jq.onload = jq.onreadystatechange = function () {
            var rs = jq.readyState;
            if (!rs || rs === 'loaded' || rs === 'complete') {
                jq.onload = jq.onreadystatechange = null;
                formFillBookmarklet.init();
            }
        };

    }
    else {
        formFillBookmarklet.init();
    }
})()

/*
AFRICA			/xf/en_gb/

AMERICAS

UNITED STATES	90210 /us/en_us/
LATIN AMERICA	/xl/es_la/
ARGENTINA		/ar/es_ar/
BRASIL			/br/pt_br/
CANADA			/ca/en_ca/

ASIA

AUSTRALIA		/au/en_gb/
HONG KONG		/hk/en_gb/
INDIA			/in/en_gb/
INDONESIA		/id/en_gb/
MALAYSIA		/my/en_gb/
NEW ZEALAND		/nz/en_gb/
PHILIPPINES		/ph/en_gb/
SINGAPORE		/sg/en_gb/
THAILAND		/th/th_th/
中国大陆 CHINA	/cn/zh_cn/
台灣 TAIWAN		/tw/zh_tw/
日本 JAPAN		/jp/ja_jp/
대한민국 KOREA	/kr/ko_kr/

EUROPE
UNITED KINGDOM 	BX2 1LB /gb/en_gb/
BELGIUM 		1049 /be/en_gb/
CZECH REPUBLIC	698 99 /cz/en_gb/
DENMARK			DK-9000 /dk/en_gb/
DEUTSCHLAND		01662 /de/de_de/
ESPAÑA			28008 /es/es_es/
FINLAND			FI-00630 /fi/en_gb/
FRANCE			18000 /fr/fr_fr/
GREECE			16674 ? /gr/en_gb/
HUNGARY			1000 /hu/en_gb/
IRELAND			KHG RT76 /ie/en_gb/
ISRAEL			/il/en_gb/
ITALIA			00120 /it/it_it/
LUXEMBOURG		L-3311 /lu/en_gb/
NETHERLANDS		2597 GV /nl/en_gb/
NORWAY			/no/en_gb/
ÖSTERREICH		5300 /at/de_de/
POLAND			62-262 /pl/en_gb/
PORTUGAL		03740 ? /pt/en_gb/
РОССИЯ RUSSIA	/ru/ru_ru/
SLOVENIA		1127 /si/en_gb/
SWEDEN			113 49 /se/en_gb/
SWITZERLAND		/ch/en_gb/
TURKEY			/tr/tr_tr/

MIDDLE EAST		/xm/en_gb/


*/
