import inquirer from 'inquirer';
let curencyyname = [];
let courrency = { "PKR": 1, "AED": 0.013202, "AFN": 0.256524, "ALL": 0.338059, "AMD": 1.397973, "ANG": 0.006435,
    "AOA": 3.021868, "ARS": 3.10857, "AUD": 0.005564, "AWG": 0.006435, "AZN": 0.006108, "BAM": 0.006606, "BBD": 0.00719,
    "BDT": 0.394406, "BGN": 0.006606, "BHD": 0.001352, "BIF": 10.281258, "BMD": 0.003595, "BND": 0.004893, "BOB": 0.024856,
    "BRL": 0.018302, "BSD": 0.003595, "BTN": 0.299576, "BWP": 0.049275, "BYN": 0.011643, "BZD": 0.00719, "CAD": 0.004954,
    "CDF": 9.979163, "CHF": 0.003284, "CLP": 3.410793, "CNY": 0.026124, "COP": 13.580828, "CRC": 1.819746, "CUP": 0.086274,
    "CVE": 0.372407, "CZK": 0.085021, "DJF": 0.638865, "DKK": 0.025208, "DOP": 0.213275, "DZD": 0.483615, "EGP": 0.170955,
    "ERN": 0.053921, "ETB": 0.20406, "EUR": 0.003377, "FJD": 0.008074, "FKP": 0.002887, "FOK": 0.025208, "GBP": 0.002887,
    "GEL": 0.009583, "GGP": 0.002887, "GHS": 0.048068, "GIP": 0.002887, "GMD": 0.243518, "GNF": 30.824122, "GTQ": 0.027961,
    "GYD": 0.751462, "HKD": 0.028171, "HNL": 0.088655, "HRK": 0.025447, "HTG": 0.476394, "HUF": 1.304418, "IDR": 56.966831,
    "ILS": 0.013445, "IMP": 0.002887, "INR": 0.299576, "IQD": 4.703219, "IRR": 151.033135, "ISK": 0.497968, "JEP": 0.002887,
    "JMD": 0.555218, "JOD": 0.002549, "JPY": 0.55074, "KES": 0.466956, "KGS": 0.319878, "KHR": 14.507126, "KID": 0.005564,
    "KMF": 1.661565, "KRW": 4.967281, "KWD": 0.001105, "KYD": 0.002996, "KZT": 1.608142, "LAK": 75.543651, "LBP": 321.731133,
    "LKR": 1.073953, "LRD": 0.697311, "LSL": 0.067342, "LYD": 0.017351, "MAD": 0.03603, "MDL": 0.063288, "MGA": 15.663997,
    "MKD": 0.203343, "MMK": 7.541832, "MNT": 12.128161, "MOP": 0.029017, "MRU": 0.142562, "MUR": 0.16601, "MVR": 0.055451,
    "MWK": 6.223676, "MXN": 0.059092, "MYR": 0.01714, "MZN": 0.230317, "NAD": 0.067342, "NGN": 4.475875, "NIO": 0.132221,
    "NOK": 0.039201, "NPR": 0.479322, "NZD": 0.006054, "OMR": 0.001382, "PAB": 0.003595, "PEN": 0.013292, "PGK": 0.013696,
    "PHP": 0.202866, "PLN": 0.014283, "PYG": 26.434341, "QAR": 0.013085, "RON": 0.016621, "RSD": 0.389122, "RUB": 0.335389,
    "RWF": 4.620566, "SAR": 0.01348, "SBD": 0.030296, "SCR": 0.04905, "SDG": 2.080002, "SEK": 0.039184, "SGD": 0.004893,
    "SHP": 0.002887, "SLE": 0.081174, "SLL": 81.174439, "SOS": 2.051068, "SRD": 0.125507, "SSP": 5.588585, "STN": 0.082746,
    "SYP": 46.649559, "SZL": 0.067342, "THB": 0.131414, "TJS": 0.039298, "TMT": 0.012549, "TND": 0.011189, "TOP": 0.008493,
    "TRY": 0.11655, "TTD": 0.024361, "TVD": 0.005564, "TWD": 0.116008, "TZS": 9.259526, "UAH": 0.140677, "UGX": 13.62292,
    "USD": 0.003595, "UYU": 0.139721, "UZS": 45.548612, "VES": 0.130475, "VND": 89.848898, "VUV": 0.432481, "WST": 0.009872,
    "XAF": 2.21542, "XCD": 0.009706, "XDR": 0.002732, "XOF": 2.21542, "XPF": 0.40303, "YER": 0.898783, "ZAR": 0.067342,
    "ZMW": 0.088735, "ZWL": 0.048235 };
for (let key in courrency) {
    curencyyname.push(key);
}
let question = await inquirer.prompt([{
        message: 'ENTER CUNTRY NAME NAME WHICH YOU WANT TO CONVERT',
        type: 'list',
        name: 'to',
        choices: curencyyname
    }, {
        message: 'ENTER COUNTRY NAME FROM CONVERT ',
        name: 'from',
        type: 'list',
        choices: curencyyname
    }, {
        message: 'ENTER AMOUNT',
        type: "number",
        name: "amount"
    }
]);
let tocurrenct = courrency[question.to];
let fromcurrency = courrency[question.from];
let amount = question.amount;
let base_amount = amount / fromcurrency;
let covert = base_amount * tocurrenct;
console.log(`covert= ${covert}`);
