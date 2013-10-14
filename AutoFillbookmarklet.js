/*
Version 1
paste this into a bookmark: javascript: var catchFail = setTimeout(function () { throw Error("lame... auto-fill bookmarklet failed to load."); }, 3000); var script = document.createElement('script'); script.type = 'text/javascript'; script.async = true; script.charset = 'UTF-8'; script.setAttribute('src', 'https://raw.github.com/Dathann/dnic/master/AutoFillbookmarklet.js#' + new Date().getTime()); document.body.appendChild(script); script.onload = script.onreadystatechange = function () { var rs = script.readyState; if (!rs || rs === 'loaded' || rs === 'complete') { clearTimeout(catchFail); script.onload = script.onreadystatechange = null; } };
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
            address2: 'Suite 2',
            address3: 'This field required', //JP
            cc: '4163835624550976',
            ccard: '4163835624550976',
            city: 'Beaverton',
            credit: '4163835624550976',
            cardNumber: '4163835624550976',
            cardType: 'Visa',
            cv: '687',
            type: 'Visa',
            email: 'Tiger.Woods@Nike.com',
            month: '3',
            year: '2020',
            dobDay: '2',
            dobYear: '1969',
            fax: '5036715555',
            first: 'Tiger',
            gender: 'male',
            gift: 'Go get em Tiger!',
            last: 'Woods',
            name: 'Tiger',
            fName: 'Tiger',
            lName: 'Woods',
            pass: 'Woods123',
            verify: 'Woods123',
            phone: '5036716453',
            post: '97005',
            zip: '97005',
            state: 'OR',
            type: 'Visa'
        },
        //country specific values
        JP: {
            singleState: 'JP-02',
            stateSelector: 'JP-02'
        },
        US: {},
        doFormFill: function (vals) {
            $("[name]").css({ 'outline': '1px solid blue' });
            $("[name]").trigger('click focus change', function (){console.log('ok')})
            for (var i = 0, a = Object.keys(vals) ; i < a.length; i++) {
                prop = Object.keys(vals)[i].toString();

                //selectors are case-sensitive.
                var doCases = function (prop, func) {
                    //As-is, toUpperCase, toLowerCase, first-letter toUppercase
                    var argArr, args1, args2 = null;
                    if (Object.prototype.toString.call(prop) === '[object Array]') {
                        argArr = Array.prototype.slice.call(prop);
                        args1 = argArr[0].toString()
                        args2 = argArr[1];
                    } else {
                        args1 = prop;
                    }

                    for (var i = 0 ; i < 4; i++) {
                        if (i == 0) func(args1, args2);
                        if (i == 1) func(args1.toUpperCase(), args2);
                        if (i == 2) func(args1.toLowerCase(), args2);
                        if (i == 3) func(args1.substr(0, 1).toUpperCase() + args1.substr(1), args2);
                    }
                }

                if ($('[name*=' + prop + ']').eq(0).attr('type') === 'radio' || $('[name*=' + prop + ']').eq(0).attr('type') === 'checkbox') {
                    doCases(prop, function (prop) {
                        for (var b = 0, a = $('[name*=' + prop + ']') ; b < a.length; b++) {
                            $('[name*=' + prop + '][value=' + formFillBookmarklet.values[prop] + ']:visible').prop('checked', true)
                        }
                    });
                }
                if (prop.match('zip') || prop.match('post')) {
                    var doLocale = function (argArr) {
                        var argArr = Array.prototype.slice.call(arguments);
                        doCases(argArr, function (prop, zip) {
                            $('[name*=' + prop + ']:visible').val(zip);
                        })
                    };

                    switch (this.getLocale()) {
                        case "XF": //AFRICA         /XF/EN_GB/
                            doLocale(prop, "11511")
                            break;
                        case "AR": //ARGENTINA      /AR/ES_AR/
                            doLocale(prop, "E3100")
                            break;
                        case "AU": //AUSTRALIA      /AU/EN_GB/
                            doLocale(prop, "4505")
                            break;
                        case "BE": //BELGIUM        /BE/EN_GB/
                            doLocale(prop, "1049")
                            break;
                        case "BR": //BRASIL         /BR/PT_BR/
                            doLocale(prop, "96445-000")
                            break;
                        case "CA": //CANADA         /CA/EN_CA/
                            doLocale(prop, "V9E 2B1")
                            break;
                        case "CN": //CHINA          /CN/ZH_CN/
                            doLocale(prop, "564705")
                            break;
                        case "CZ": //CZECH REPUBLIC /CZ/EN_GB/
                            doLocale(prop, "698 99")
                            break;
                        case "DK": //DENMARK        /DK/EN_GB/
                            doLocale(prop, "DK-9000")
                            break;
                        case "DE": //DEUTSCHLAND    /DE/DE_DE/
                            doLocale(prop, "01662")
                            break;
                        case "ES": //ESPAÑA         /ES/ES_ES/
                            doLocale(prop, "28008")
                            break;
                        case "FI": //FINLAND        /FI/EN_GB/
                            doLocale(prop, "FI-00630")
                            break;
                        case "FR": //FRANCE         /FR/FR_FR/
                            doLocale(prop, "18000")
                            break;
                        case "GR": //GREECE         /GR/EN_GB/
                            doLocale(prop, "16674")
                            break;
                        case "HK": //HONG KONG      /HK/EN_GB/
                            doLocale(prop, "118003")
                            break;
                        case "HU": //HUNGARY        /HU/EN_GB/
                            doLocale(prop, "1000")
                            break;
                        case "IN": //INDIA          /IN/EN_GB/
                            doLocale(prop, "141003")
                            break;
                        case "ID": //INDONESIA      /ID/EN_GB/
                            doLocale(prop, "98783")
                            break;
                        case "IE": //IRELAND        /IE/EN_GB/
                            doLocale(prop, "KHG RT76")
                            break;
                        case "IL": //ISRAEL         /IL/EN_GB/
                            doLocale(prop, "83816")
                            break;
                        case "IT": //ITALIA         /IT/IT_IT/
                            doLocale(prop, "20010")
                            break;
                        case "JP": //JAPAN          /JP/JA_JP/
                            doLocale(prop, "8910123")
                            break;
                        case "KR": //KOREA          /KR/KO_KR/
                            doLocale(prop, "477-811")
                            break;
                        case "XL": //LATIN AMERICA  /XL/ES_LA/
                            doLocale(prop, "10200")
                            break;
                        case "LU": //LUXEMBOURG     /LU/EN_GB/
                            doLocale(prop, "L-3311")
                            break;
                        case "MY": //MALAYSIA       /MY/EN_GB/
                            doLocale(prop, "02000")
                            break;
                        case "XM": //MIDDLE EAST    /XM/EN_GB/
                            doLocale(prop, "")
                            break;
                        case "NL": //NETHERLANDS    /NL/EN_GB/
                            doLocale(prop, "2597 GV")
                            break;
                        case "NZ": //NEW ZEALAND    /NZ/EN_GB/
                            doLocale(prop, "7825")
                            break;
                        case "NO": //NORWAY         /NO/EN_GB/
                            doLocale(prop, "3790")
                            break;
                        case "PH": //PHILIPPINES    /PH/EN_GB/
                            doLocale(prop, "3601")
                            break;
                        case "PL": //POLAND         /PL/EN_GB/
                            doLocale(prop, "62-262")
                            break;
                        case "PT": //PORTUGAL       /PT/EN_GB/
                            doLocale(prop, "03740")
                            break;
                        case "RU": //RUSSIA         /RU/RU_RU/
                            doLocale(prop, "627356")
                            break;
                        case "SG": //SINGAPORE      /SG/EN_GB/
                            doLocale(prop, "289783")
                            break;
                        case "SI": //SLOVENIA       /SI/EN_GB/
                            doLocale(prop, "1127")
                            break;
                        case "SE": //SWEDEN         /SE/EN_GB/
                            doLocale(prop, "113 49")
                            break;
                        case "CH": //SWITZERLAND    /CH/EN_GB/
                            doLocale(prop, "2944")
                            break;
                        case "TW": //TAIWAN         /TW/ZH_TW/
                            doLocale(prop, "893")
                            break;
                        case "TH": //THAILAND       /TH/TH_TH/
                            doLocale(prop, "94170")
                            break;
                        case "TR": //TURKEY         /TR/TR_TR/
                            doLocale(prop, "41600")
                            break;
                        case "GB": //UNITED KINGDOM /GB/EN_GB/
                            doLocale(prop, "BX2 1LB")
                            break;
                        case "US": //UNITED STATES  /US/EN_US/
                            doLocale(prop, formFillBookmarklet.values[prop])
                            break;
                        case "AT": //ÖSTERREICH     /AT/DE_DE/
                            doLocale(prop, "5300")
                            break;
                        default:
                            doLocale(prop, formFillBookmarklet.values[prop])
                    }
                } else {
                    doCases(prop, function (prop) {
                        var a = formFillBookmarklet.values[Object.keys(formFillBookmarklet.values)[i]];
                        $('[name*=' + prop + ']:visible').val(a);
                    });
                }
            }
        },
        getLocale: function () {
            var locale = navigator.language.substring(3) || navigator.userLanguage.substring(3) || "US"; //weak fallback if there's no cookie or language code in the url 
            var languageCode = new RegExp(/\/US\/|\/DN\/|\/XF\/|\/AR\/|\/AU\/|\/BE\/|\/BR\/|\/CA\/|\/CN\/|\/CZ\/|\/DK\/|\/DE\/|\/ES\/|\/FI\/|\/FR\/|\/GR\/|\/HK\/|\/HU\/|\/IN\/|\/ID\/|\/IE\/|\/IL\/|\/IT\/|\/JP\/|\/KR\/|\/XL\/|\/LU\/|\/MY\/|\/XM\/|\/NL\/|\/NZ\/|\/NO\/|\/PH\/|\/PL\/|\/PT\/|\/RU\/|\/SG\/|\/SI\/|\/SE\/|\/CH\/|\/TW\/|\/TH\/|\/TR\/|\/GB\/|\/US\/|\/AT\//ig)
            if (getCookie('CONSUMERCHOICE') !== null) {
                locale = getCookie('CONSUMERCHOICE').substring(0, 2)
            } else {
                locale = location.href.match(languageCode) ? location.href.match(languageCode) : locale
            }

            locale = locale.toUpperCase();

            return locale;
        },
        init: function () {
            if (typeof $ !== 'undefined') {
                var locale = this.getLocale();

                this.doFormFill(this.values);

                if (typeof this[locale] !== "undefined") {
                    this.doFormFill(this[locale]);
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

