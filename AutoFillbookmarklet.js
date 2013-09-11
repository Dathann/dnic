/*
Version 1 beta
paste this into a bookmark: javascript: var version = 1, script = document.createElement('script'); script.type = 'text/javascript'; script.async = true; script.charset = 'UTF-8'; script.setAttribute('src', 'https://raw.github.com/Dathann/dnic/master/AutoFillbookmarklet.js' + '#' + Math.random()); document.documentElement.appendChild(script); script.onload = script.onreadystatechange = function () { var rs = script.readyState; if (!rs || rs === 'loaded' || rs === 'complete') { script.onload = script.onreadystatechange = null; if (version !== formFillBookmarklet.version) { alert('This bookmarklet is out of date!'); } } };
*/
(function () {
    if (typeof formFillBookmarklet !== 'undefined') {
        return;
    }
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    formFillBookmarklet = {
        version: 1,
        values: {
            address1: '1 Bowerman Dr',
            cc: '4163835624550976',
            ccard: '4163835624550976',
            city: 'Beaverton',
            credit: '4163835624550976',
            creditCardNumber: '4163835624550976',
            creditCardType: 'Visa',
            email: 'Tiger.Woods@Nike.com',
            month: '3',
            year: '2020',
            dobDay: '2',
            dobYear: '1969',
            fax: '(503) 671-5555',
            first: 'Tiger',
            gender: 'male',
            gift: 'Go get em Tiger!',
            last: 'Woods',
            name: 'Tiger',
            fName: 'Tiger',
            lName: 'Woods',
            pass: 'Woods123',
            verify: 'Woods123',
            phone: '(503) 671-6453',
            post: '97005',
            zip: '97005',
            state: 'OR',
            type: 'Visa'
        },
        init: function () {
            if (typeof $ !== 'undefined') {
                for (prop in this.values) {
                    prop = prop.toString();
                    for (var i = 0, a = $('[name*=' + prop + ']') ; i < a.length; i++) {
                        if ($('[name*=' + prop + ']').eq(0).attr('type') === 'radio' || $('[name*=' + prop + ']').eq(0).attr('type') === 'checkbox') {
                            $('[name*=' + prop + '][value=' + this.values[prop] + ']:visible').prop('checked', true);
                        } else if (prop.match('zip') || prop.match('post')) {
                            //set zip code
                            //get cookie locale.

                            var locale = navigator.language.substring(3) || navigator.userLanguage.substring(3) || "US"; //weak fallback if there's no cookie or language code in the url 
                            var languageCode = new RegExp(/\/US\/|\/DN\/|\/XF\/|\/AR\/|\/AU\/|\/BE\/|\/BR\/|\/CA\/|\/CN\/|\/CZ\/|\/DK\/|\/DE\/|\/ES\/|\/FI\/|\/FR\/|\/GR\/|\/HK\/|\/HU\/|\/IN\/|\/ID\/|\/IE\/|\/IL\/|\/IT\/|\/JP\/|\/KR\/|\/XL\/|\/LU\/|\/MY\/|\/XM\/|\/NL\/|\/NZ\/|\/NO\/|\/PH\/|\/PL\/|\/PT\/|\/RU\/|\/SG\/|\/SI\/|\/SE\/|\/CH\/|\/TW\/|\/TH\/|\/TR\/|\/GB\/|\/US\/|\/AT\//ig)
                            if (getCookie('CONSUMERCHOICE') !== null) {
                                locale = getCookie('CONSUMERCHOICE').substring(0, 2)
                            } else {
                                locale = location.href.match(languageCode) ? location.href.match(languageCode) : locale
                            }

                            locale = locale.toUpperCase();

                            switch (locale) {
                                case "XF": //AFRICA         /XF/EN_GB/
                                    $('[name*=' + prop + ']:visible').val("11511")
                                    break;
                                case "AR": //ARGENTINA      /AR/ES_AR/
                                    $('[name*=' + prop + ']:visible').val("E3100")
                                    break;
                                case "AU": //AUSTRALIA      /AU/EN_GB/
                                    $('[name*=' + prop + ']:visible').val("4505")
                                    break;
                                case "BE": //BELGIUM        /BE/EN_GB/
                                    $('[name*=' + prop + ']:visible').val("1049")
                                    break;
                                case "BR": //BRASIL         /BR/PT_BR/
                                    $('[name*=' + prop + ']:visible').val("96445-000")
                                    break;
                                case "CA": //CANADA         /CA/EN_CA/
                                    $('[name*=' + prop + ']:visible').val("V9E 2B1")
                                    break;
                                case "CN": //CHINA          /CN/ZH_CN/
                                    $('[name*=' + prop + ']:visible').val("564705")
                                    break;
                                case "CZ": //CZECH REPUBLIC /CZ/EN_GB/
                                    $('[name*=' + prop + ']:visible').val("698 99")
                                    break;
                                case "DK": //DENMARK        /DK/EN_GB/
                                    $('[name*=' + prop + ']:visible').val("DK-9000")
                                    break;
                                case "DE": //DEUTSCHLAND    /DE/DE_DE/
                                    $('[name*=' + prop + ']:visible').val("01662")
                                    break;
                                case "ES": //ESPAÑA         /ES/ES_ES/
                                    $('[name*=' + prop + ']:visible').val("28008")
                                    break;
                                case "FI": //FINLAND        /FI/EN_GB/
                                    $('[name*=' + prop + ']:visible').val("FI-00630")
                                    break;
                                case "FR": //FRANCE         /FR/FR_FR/
                                    $('[name*=' + prop + ']:visible').val("18000")
                                    break;
                                case "GR": //GREECE         /GR/EN_GB/
                                    $('[name*=' + prop + ']:visible').val("16674")
                                    break;
                                case "HK": //HONG KONG      /HK/EN_GB/
                                    $('[name*=' + prop + ']:visible').val("118003")
                                    break;
                                case "HU": //HUNGARY        /HU/EN_GB/
                                    $('[name*=' + prop + ']:visible').val("1000")
                                    break;
                                case "IN": //INDIA          /IN/EN_GB/
                                    $('[name*=' + prop + ']:visible').val("141003")
                                    break;
                                case "ID": //INDONESIA      /ID/EN_GB/
                                    $('[name*=' + prop + ']:visible').val("98783")
                                    break;
                                case "IE": //IRELAND        /IE/EN_GB/
                                    $('[name*=' + prop + ']:visible').val("KHG RT76")
                                    break;
                                case "IL": //ISRAEL         /IL/EN_GB/
                                    $('[name*=' + prop + ']:visible').val("83816")
                                    break;
                                case "IT": //ITALIA         /IT/IT_IT/
                                    $('[name*=' + prop + ']:visible').val("20010")
                                    break;
                                case "JP": //JAPAN          /JP/JA_JP/
                                    $('[name*=' + prop + ']:visible').val("8910123")
                                    break;
                                case "KR": //KOREA          /KR/KO_KR/
                                    $('[name*=' + prop + ']:visible').val("477-811")
                                    break;
                                case "XL": //LATIN AMERICA  /XL/ES_LA/
                                    $('[name*=' + prop + ']:visible').val("10200")
                                    break;
                                case "LU": //LUXEMBOURG     /LU/EN_GB/
                                    $('[name*=' + prop + ']:visible').val("L-3311")
                                    break;
                                case "MY": //MALAYSIA       /MY/EN_GB/
                                    $('[name*=' + prop + ']:visible').val("02000")
                                    break;
                                case "XM": //MIDDLE EAST    /XM/EN_GB/
                                    $('[name*=' + prop + ']:visible').val("")
                                    break;
                                case "NL": //NETHERLANDS    /NL/EN_GB/
                                    $('[name*=' + prop + ']:visible').val("2597 GV")
                                    break;
                                case "NZ": //NEW ZEALAND    /NZ/EN_GB/
                                    $('[name*=' + prop + ']:visible').val("7825")
                                    break;
                                case "NO": //NORWAY         /NO/EN_GB/
                                    $('[name*=' + prop + ']:visible').val("3790")
                                    break;
                                case "PH": //PHILIPPINES    /PH/EN_GB/
                                    $('[name*=' + prop + ']:visible').val("3601")
                                    break;
                                case "PL": //POLAND         /PL/EN_GB/
                                    $('[name*=' + prop + ']:visible').val("62-262")
                                    break;
                                case "PT": //PORTUGAL       /PT/EN_GB/
                                    $('[name*=' + prop + ']:visible').val("03740")
                                    break;
                                case "RU": //RUSSIA         /RU/RU_RU/
                                    $('[name*=' + prop + ']:visible').val("627356")
                                    break;
                                case "SG": //SINGAPORE      /SG/EN_GB/
                                    $('[name*=' + prop + ']:visible').val("289783")
                                    break;
                                case "SI": //SLOVENIA       /SI/EN_GB/
                                    $('[name*=' + prop + ']:visible').val("1127")
                                    break;
                                case "SE": //SWEDEN         /SE/EN_GB/
                                    $('[name*=' + prop + ']:visible').val("113 49")
                                    break;
                                case "CH": //SWITZERLAND    /CH/EN_GB/
                                    $('[name*=' + prop + ']:visible').val("2944")
                                    break;
                                case "TW": //TAIWAN         /TW/ZH_TW/
                                    $('[name*=' + prop + ']:visible').val("893")
                                    break;
                                case "TH": //THAILAND       /TH/TH_TH/
                                    $('[name*=' + prop + ']:visible').val("94170")
                                    break;
                                case "TR": //TURKEY         /TR/TR_TR/
                                    $('[name*=' + prop + ']:visible').val("41600")
                                    break;
                                case "GB": //UNITED KINGDOM /GB/EN_GB/
                                    $('[name*=' + prop + ']:visible').val("BX2 1LB")
                                    break;
                                case "US": //UNITED STATES  /US/EN_US/
                                    $('[name*=' + prop + ']:visible').val("90210")
                                    break;
                                case "AT": //ÖSTERREICH     /AT/DE_DE/
                                    $('[name*=' + prop + ']:visible').val("5300")
                                    break;
                                default:
                                    $('[name*=' + prop + ']:visible').val(this.values[prop])
                            }
                        } else {
                            $('[name*=' + prop + ']:visible').val(this.values[prop])
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

