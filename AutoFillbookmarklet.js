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
                        //    prop = prop.charAt(0).toUpperCase();
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



<div class="ch4_regColumn" style="width: 343px; float: left; display: inline-block; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; font-size: 11px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 15px; orphans: auto; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: auto; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255);">
    <div class="ch4_regFormRow" style="min-height: 60px; position: relative; display: block; text-transform: uppercase;">
        <div class="ch4_regFormRequired" style="font-weight: bold; padding-bottom: 3px;">FIRST NAME <span class="requiredColor" style="color: rgb(247, 97, 34);">*</span></div>
        <div class="ch4_errorText ch4_orange" style="font-family: Helvetica, Arial, sans-serif; color: rgb(250, 84, 0); font-size: 11px; font-style: normal; letter-spacing: normal; font-weight: normal; text-transform: none;">Please enter your first name.</div>
        <input id="reqFirstName" class="ch4_formTextField ch4_formTextFieldError" name="reqFirstName" maxlength="35" type="text" style="font-family: sans-serif; color: rgb(51, 51, 51); font-size: 12px; margin: 0px; vertical-align: text-bottom; line-height: normal; height: 26px; width: 308.6875px; border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; border: 1px solid rgb(170, 57, 3); background-image: url(https://local-store.nikedev.com:8015/checkout/html/img/ch4_textInputBkgdError.gif); background-color: rgb(252, 139, 83); -webkit-box-shadow: rgb(170, 57, 3) 0px 2px 2px 0px inset; box-shadow: rgb(170, 57, 3) 0px 2px 2px 0px inset; padding: 0px 5px; cursor: text; -webkit-appearance: button; background-position: 100% 0%; background-repeat: no-repeat no-repeat;">
    </div>
    <div class="ch4_regFormRow" style="min-height: 60px; position: relative; display: block; text-transform: uppercase;">
        <div class="ch4_regFormRequired" style="font-weight: bold; padding-bottom: 3px;">LAST NAME <span class="requiredColor" style="color: rgb(247, 97, 34);">*</span></div>
        <input id="reqLastName" class="ch4_formTextField" name="reqLastName" maxlength="35" type="text" style="font-family: sans-serif; color: rgb(34, 34, 34); font-size: 12px; margin: 0px; vertical-align: text-bottom; line-height: normal; height: 26px; width: 308.6875px; border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; border: 1px solid rgb(193, 193, 193); background-image: url(https://local-store.nikedev.com:8015/checkout/html/img/ch4_textInputBkgd.png); background-color: rgb(255, 255, 255); -webkit-box-shadow: rgb(229, 229, 229) 0px 2px 2px 0px inset; box-shadow: rgb(229, 229, 229) 0px 2px 2px 0px inset; padding: 0px 5px; cursor: text; -webkit-appearance: button; background-position: 100% 0%; background-repeat: no-repeat no-repeat;">
    </div>
    <div class="ch4_regFormRow" style="min-height: 60px; position: relative; display: block; text-transform: uppercase;">
        <div class="ch4_regFormRequired" style="font-weight: bold; padding-bottom: 3px;">EMAIL ADDRESS <span class="requiredColor" style="color: rgb(247, 97, 34);">*</span></div>
        <input id="reqEmail" class="ch4_formTextField" name="reqEmail" maxlength="40" type="text" style="font-family: sans-serif; color: rgb(34, 34, 34); font-size: 12px; margin: 0px; vertical-align: text-bottom; line-height: normal; height: 26px; width: 308.6875px; border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; border: 1px solid rgb(193, 193, 193); background-image: url(https://local-store.nikedev.com:8015/checkout/html/img/ch4_textInputBkgd.png); background-color: rgb(255, 255, 255); -webkit-box-shadow: rgb(229, 229, 229) 0px 2px 2px 0px inset; box-shadow: rgb(229, 229, 229) 0px 2px 2px 0px inset; padding: 0px 5px; cursor: text; -webkit-appearance: button; background-position: 100% 0%; background-repeat: no-repeat no-repeat;">
    </div>
    <div class="ch4_regFormRow reqPassword" style="min-height: 60px; position: relative; display: block; text-transform: uppercase;">
        <div class="ch4_regFormRequired" style="font-weight: bold; padding-bottom: 3px;">PASSWORD <span class="requiredColor" style="color: rgb(247, 97, 34);">*</span></div>
        <input id="reqPassword" class="ch4_formTextField" type="password" onfocus="select()" name="reqPassword" maxlength="36" style="font-family: sans-serif; color: rgb(34, 34, 34); font-size: 12px; margin: 0px; vertical-align: text-bottom; line-height: normal; height: 26px; width: 308.6875px; border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; border: 1px solid rgb(193, 193, 193); background-image: url(https://local-store.nikedev.com:8015/checkout/html/img/ch4_textInputBkgd.png); background-color: rgb(255, 255, 255); -webkit-box-shadow: rgb(229, 229, 229) 0px 2px 2px 0px inset; box-shadow: rgb(229, 229, 229) 0px 2px 2px 0px inset; padding: 0px 5px; background-position: 100% 0%; background-repeat: no-repeat no-repeat;">
    </div>
    <div class="ch4_regFormRow" style="min-height: 60px; position: relative; display: block; text-transform: uppercase;">
        <div class="ch4_regFormRequired" style="font-weight: bold; padding-bottom: 3px;">CONFIRM PASSWORD <span class="requiredColor" style="color: rgb(247, 97, 34);">*</span></div>
        <input id="reqVerifyPassword" class="ch4_formTextField" type="password" onfocus="select()" name="reqVerifyPassword" maxlength="36" style="font-family: sans-serif; color: rgb(34, 34, 34); font-size: 12px; margin: 0px; vertical-align: text-bottom; line-height: normal; height: 26px; width: 308.6875px; border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; border: 1px solid rgb(193, 193, 193); background-image: url(https://local-store.nikedev.com:8015/checkout/html/img/ch4_textInputBkgd.png); background-color: rgb(255, 255, 255); -webkit-box-shadow: rgb(229, 229, 229) 0px 2px 2px 0px inset; box-shadow: rgb(229, 229, 229) 0px 2px 2px 0px inset; padding: 0px 5px; background-position: 100% 0%; background-repeat: no-repeat no-repeat;">
    </div>
</div>
<div class="ch4_regColumn" style="width: 343px; float: left; display: inline-block; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; font-size: 11px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 15px; orphans: auto; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: auto; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255);">
    <div class="ch4_regFormRow" style="min-height: 60px; position: relative; display: block; text-transform: uppercase;">
        <div class="ch4_regFormRequired" style="font-weight: bold; padding-bottom: 3px;">SCREEN NAME <span class="requiredColor" style="color: rgb(247, 97, 34);">*</span></div>
        <input id="regScreenName" class="ch4_formTextField" name="regScreenName" type="text" maxlength="40" style="font-family: sans-serif; color: rgb(34, 34, 34); font-size: 12px; margin: 0px; vertical-align: text-bottom; line-height: normal; height: 26px; width: 308.6875px; border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; border: 1px solid rgb(193, 193, 193); background-image: url(https://local-store.nikedev.com:8015/checkout/html/img/ch4_textInputBkgd.png); background-color: rgb(255, 255, 255); -webkit-box-shadow: rgb(229, 229, 229) 0px 2px 2px 0px inset; box-shadow: rgb(229, 229, 229) 0px 2px 2px 0px inset; padding: 0px 5px; cursor: text; -webkit-appearance: button; background-position: 100% 0%; background-repeat: no-repeat no-repeat;">
    </div>
    <div class="ch4_regFormRow" style="min-height: 60px; position: relative; display: block; text-transform: uppercase;">
        <div class="ch4_regFormRequired" style="font-weight: bold; padding-bottom: 3px;">DATE OF BIRTH (MM/DD/YYYY) <span class="requiredColor" style="color: rgb(247, 97, 34);">*</span></div>
        <div class="ch4_regSelectRow" style="display: inline-block;">
            <select id="dobMonth" name="dobMonth" class="monthDob ch4_regSelect" style="font-family: sans-serif; color: rgb(34, 34, 34); font-size: 12px; margin: 0px 10px 0px 0px; vertical-align: text-bottom; background-image: url(https://local-store.nikedev.com:8015/checkout/html/img/inputSprite.png); background-attachment: scroll; background-color: rgb(204, 204, 204); border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; height: 30px; padding: 2px 30px 2px 4px; border: 1px solid rgb(232, 232, 232); -webkit-box-shadow: rgb(169, 169, 169) 0px 2px 3px; box-shadow: rgb(169, 169, 169) 0px 2px 3px; -webkit-appearance: none; background-position: 100% -56px; background-repeat: no-repeat no-repeat;">
                <span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span>
                <option value="">MM</option>
                <span class="Apple-converted-space"></span>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>
            <span class="Apple-converted-space"></span>
            <select id="dobDay" name="dobDay" class="dayDob ch4_regSelect" style="font-family: sans-serif; color: rgb(34, 34, 34); font-size: 12px; margin: 0px 10px 0px 0px; vertical-align: text-bottom; background-image: url(https://local-store.nikedev.com:8015/checkout/html/img/inputSprite.png); background-attachment: scroll; background-color: rgb(204, 204, 204); border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; height: 30px; padding: 2px 30px 2px 4px; border: 1px solid rgb(232, 232, 232); -webkit-box-shadow: rgb(169, 169, 169) 0px 2px 3px; box-shadow: rgb(169, 169, 169) 0px 2px 3px; -webkit-appearance: none; background-position: 100% -56px; background-repeat: no-repeat no-repeat;">
                <span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span>
                <option value="">DD</option>
                <span class="Apple-converted-space"></span>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
            </select>
            <span class="Apple-converted-space"></span>
            <select id="dobYear" name="dobYear" class="yearDob ch4_regSelect" style="font-family: sans-serif; color: rgb(34, 34, 34); font-size: 12px; margin: 0px 10px 0px 0px; vertical-align: text-bottom; background-image: url(https://local-store.nikedev.com:8015/checkout/html/img/inputSprite.png); background-attachment: scroll; background-color: rgb(204, 204, 204); border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; height: 30px; padding: 2px 30px 2px 4px; border: 1px solid rgb(232, 232, 232); -webkit-box-shadow: rgb(169, 169, 169) 0px 2px 3px; box-shadow: rgb(169, 169, 169) 0px 2px 3px; -webkit-appearance: none; background-position: 100% -56px; background-repeat: no-repeat no-repeat;">
                <span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span>
                <option value="">YYYY</option>
                <span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span>
                <option id="currentYear" value="2013">2013</option>
                <span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span><span class="Apple-converted-space"></span>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
                <option value="1969">1969</option>
                <option value="1968">1968</option>
                <option value="1967">1967</option>
                <option value="1966">1966</option>
                <option value="1965">1965</option>
                <option value="1964">1964</option>
                <option value="1963">1963</option>
                <option value="1962">1962</option>
                <option value="1961">1961</option>
                <option value="1960">1960</option>
                <option value="1959">1959</option>
                <option value="1958">1958</option>
                <option value="1957">1957</option>
                <option value="1956">1956</option>
                <option value="1955">1955</option>
                <option value="1954">1954</option>
                <option value="1953">1953</option>
                <option value="1952">1952</option>
                <option value="1951">1951</option>
                <option value="1950">1950</option>
                <option value="1949">1949</option>
                <option value="1948">1948</option>
                <option value="1947">1947</option>
                <option value="1946">1946</option>
                <option value="1945">1945</option>
                <option value="1944">1944</option>
                <option value="1943">1943</option>
                <option value="1942">1942</option>
                <option value="1941">1941</option>
                <option value="1940">1940</option>
                <option value="1939">1939</option>
                <option value="1938">1938</option>
                <option value="1937">1937</option>
                <option value="1936">1936</option>
                <option value="1935">1935</option>
                <option value="1934">1934</option>
                <option value="1933">1933</option>
                <option value="1932">1932</option>
                <option value="1931">1931</option>
                <option value="1930">1930</option>
                <option value="1929">1929</option>
                <option value="1928">1928</option>
                <option value="1927">1927</option>
                <option value="1926">1926</option>
                <option value="1925">1925</option>
                <option value="1924">1924</option>
                <option value="1923">1923</option>
                <option value="1922">1922</option>
                <option value="1921">1921</option>
                <option value="1920">1920</option>
                <option value="1919">1919</option>
                <option value="1918">1918</option>
                <option value="1917">1917</option>
                <option value="1916">1916</option>
                <option value="1915">1915</option>
            </select>
        </div>
    </div>
    <div class="ch4_regFormRow" style="min-height: 60px; position: relative; display: block; text-transform: uppercase;">
        <div class="ch4_regFormRequired" style="font-weight: bold; padding-bottom: 3px;">
            <div class="label">GENDER <span class="requiredColor" style="color: rgb(247, 97, 34);">*</span></div>
            <div class="ch4_regGenderSelect" id="gender" name="gender" style="border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; padding-top: 7px; padding-bottom: 7px; width: 306px; padding-left: 8px;">
                <input id="genderMale" name="gender" type="radio" value="male" style="font-family: sans-serif; color: rgb(34, 34, 34); font-size: 11px; margin: 0px; vertical-align: text-bottom; line-height: normal; height: auto; box-sizing: border-box; padding: 0px; border: 0px none;"><span class="Apple-converted-space"> </span>
                <label for="genderMale" style="cursor: pointer; vertical-align: top;">MALE</label><span class="Apple-converted-space"> </span><span class="Apple-converted-space"></span>
                <input id="genderFemale" name="gender" type="radio" value="female" style="font-family: sans-serif; color: rgb(34, 34, 34); font-size: 11px; margin: 0px; vertical-align: text-bottom; line-height: normal; height: auto; box-sizing: border-box; padding: 0px; border: 0px none;"><span class="Apple-converted-space"> </span>
                <label for="genderFemale" style="cursor: pointer; vertical-align: top;">FEMALE</label></div>
        </div>
    </div>
    <div class="ch4_regFormRow zipcode" style="min-height: 60px; position: relative; display: block; text-transform: uppercase;">
        <div id="zipCode" class="ch4_regFormRequired" style="font-weight: bold; padding-bottom: 3px;">POSTAL CODE <span class="requiredColor" style="color: rgb(247, 97, 34);">*</span></div>
        <input class="ch4_formTextField" type="text" maxlength="10" name="postcode" id="postcode" style="font-family: sans-serif; color: rgb(34, 34, 34); font-size: 12px; margin: 0px; vertical-align: text-bottom; line-height: normal; height: 26px; width: 308.6875px; border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; border: 1px solid rgb(193, 193, 193); background-image: url(https://local-store.nikedev.com:8015/checkout/html/img/ch4_textInputBkgd.png); background-color: rgb(255, 255, 255); -webkit-box-shadow: rgb(229, 229, 229) 0px 2px 2px 0px inset; box-shadow: rgb(229, 229, 229) 0px 2px 2px 0px inset; padding: 0px 5px; cursor: text; -webkit-appearance: button; background-position: 100% 0%; background-repeat: no-repeat no-repeat;">
        <p></p>
    </div>
    <div class="ch4_regFormRow" style="min-height: 60px; position: relative; display: block; text-transform: uppercase;">
        <div class="ch4_regEmailSignUp" style="padding-bottom: 4px; padding-top: 12px; font-weight: bold;">SIGN UP FOR NIKE EMAILS</div>
        <div class="ch4_regFormRequired" style="font-weight: bold; padding-bottom: 3px;">
            <input class="ch4_checkboxSpacing" id="receiveNikeOffers" name="receiveNikeOffers" type="checkbox" checked="checked" style="font-family: sans-serif; color: rgb(34, 34, 34); font-size: 11px; margin: 0px 6px 0px 0px; vertical-align: text-bottom; line-height: normal; height: auto; box-sizing: border-box; padding: 0px;"><span class="Apple-converted-space"> </span>
            <label for="receiveNikeOffers" style="cursor: pointer;">HEAR ABOUT THE LATEST STYLES AN</label></div>
    </div>
</div>
*/
