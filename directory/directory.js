// This code is licensed under Apache-2.0.
// It is released AS-IS and without warranty.
// This is simply for informational purposes. The creators of this file does
// not endorse any of this information.

const DirectoryBuilder = require('./DirectoryBuilder');
let directory = new DirectoryBuilder();
directory.DirectoryBuilder = DirectoryBuilder;

// Template:
// directory.addAnchor({
//   domain: 'DOMAINDOTCOM',
//   website: 'https://DOMAINDOTCOM',
//   logo: 'DOMAINDOTCOM',
//   color: '#rrggbb',
//   displayName: 'Domain dot com',
// });
// directory.addAsset('DOMAINDOTCOM', {
//   code: 'ASSETCODE_ASSETCODE',
//   issuer: 'Ga_issuer_account_id',
// });

directory.addAnchor({
  domain: 'cleandirtcoin.org',
  website: 'https://cleandirtcoin.org/',
  logo: 'cleandirtcoin.org',
  color: '#04bcfc',
  displayName: 'CleanDirt',
});
directory.addAsset('cleandirtcoin.org', {
  code: 'SDC',
  issuer: 'GC3HADNCTJBPZY6VLMPONJIGSKNEB2M7P5RUZFUQVIVG2QPVMZ7LCMWA',
});

directory.addAnchor({
  domain: 'crimesagainsthumanity.org',
  website: 'https://crimesagainsthumanity.org/',
  logo: 'crimesagainsthumanity.org',
  color: '#6f39fc',
  displayName: 'CrimesAgainsThumanity',
});
directory.addAsset('crimesagainsthumanity.org', {
  code: 'CAH',
  issuer: 'GBSG3AHGUKYUH2PJ5UYPBDRPTBKVJBYOWSC6FVMIULE7ZYZV6TXBIKS2',
});

directory.addAnchor({
  domain: 'dentalcoin.org',
  website: 'https://dentalcoin.org/',
  logo: 'dentalcoin.org',
  color: '#febe12',
  displayName: 'DentalCoin',
});

directory.addAsset('dentalcoin.org', {
  code: 'DCD',
  issuer: 'GDJWK7ECZP3XVN3AVK7J6XZJ6QL4OXWRODXYNH6XG5VDETNPH5XNZXQ3',
});

directory.addAnchor({
  domain: 'equid.co',
  website: 'https://equid.co/',
  logo: 'equid.co',
  displayName: 'eQuid',
});

directory.addAsset('equid.co', {
  code: 'EQD',
  issuer: 'GCGEQJR3E5BVMQYSNCHPO6NPP3KOT4VVZHIOLSRSNLE2GFY7EWVSLLTN',
});

directory.addAnchor({
  domain: 'freshaircoin.org',
  website: 'https://freshaircoin.org/',
  logo: 'freshaircoin.org',
  color: '#3abfce',
  displayName: 'FreshAir',
});

directory.addAsset('freshaircoin.org', {
  code: 'ACC',
  issuer: 'GBXQKQYS7XOEDL55IMTEUZXIWUDC4ANYBGN5MBFTA2LSRMX6UAX46UUN',
});

directory.addAnchor({
  domain: 'h2ocredit.org',
  website: 'https://h2ocredit.org/',
  logo: 'h2ocredit.org',
  color: '#1b92de',
  displayName: 'H2OCredit',
});
directory.addAsset('h2ocredit.org', {
  code: 'HTO',
  issuer: 'GBPWTCFSOEDRPCA7HTGCNHOUFMFQPZFX7WXOLANTLCZ7J7PIGGDYVFOJ',
});

directory.addAnchor({
  domain: 'jobtrainingcoin.org',
  website: 'https://jobtrainingcoin.org/',
  logo: 'jobtrainingcoin.org',
  color: '#82be37',
  displayName: 'JobTraining',
});
directory.addAsset('jobtrainingcoin.org', {
  code: 'JTC',
  issuer: 'GARIJ5IEICAKRS3ORM3V6B3Y26U6MTPGEBVHXIBNCZ4QVVXC5DQJ74UB',
});

directory.addAnchor({
  domain: 'powercredits.org',
  website: 'https://powercredits.org/',
  logo: 'powercredits.org',
  color: '#ffbb00',
  displayName: 'PowerCredits',
});
directory.addAsset('powercredits.org', {
  code: 'POW',
  issuer: 'GBWNKC3YNVZP466QRC2H2DCADNNGHC7M3A4ZUQVPXNIP3CCFF2NK6U4K',
});

directory.addAnchor({
  domain: 'transportationcredit.org',
  website: 'https://transportationcredit.org/',
  logo: 'transportationcredit.org',
  color: '#fbd364',
  displayName: 'TransportationCredit',
});
directory.addAsset('transportationcredit.org', {
  code: 'TFC',
  issuer: 'GBFK733BPK64CFHM6OJ2BOTKXFMF3RYHEH6D2DBJVE3GB3O7FLEJXMX4',
});



// Pairs involving "fiat" assets
// "Fiat" asset should be counterSelling

directory.addPair({
  baseBuying: ['SDC', 'cleandirtcoin.org'],
  counterSelling: ['XLM', 'native'],
});

directory.addPair({
  baseBuying: ['DCD', 'dentalcoin.org'],
  counterSelling: ['XLM', 'native'],
});

directory.addPair({
  baseBuying: ['EQD', 'equid.co'],
  counterSelling: ['XLM', 'native'],
});

directory.addPair({
  baseBuying: ['CAH', 'crimesagainsthumanity.org'],
  counterSelling: ['XLM', 'native'],
});

directory.addPair({
  baseBuying: ['ACC', 'freshaircoin.org'],
  counterSelling: ['XLM', 'native'],
});

directory.addPair({
  baseBuying: ['HTO', 'h2ocredit.org'],
  counterSelling: ['XLM', 'native'],
});

directory.addPair({
  baseBuying: ['JTC', 'jobtrainingcoin.org'],
  counterSelling: ['XLM', 'native'],
});

directory.addPair({
  baseBuying: ['POW', 'powercredits.org'],
  counterSelling: ['XLM', 'native'],
});

directory.addPair({
  baseBuying: ['TFC', 'transportationcredit.org'],
  counterSelling: ['XLM', 'native'],
});


directory.addDestination('GCEGERI7COJYNNID6CYSKS5DPPLGCCLPTOSCDD2LG5SJIVWM5ISUPERI', {
  name: 'Superlumen Issuer',
  requiredMemoType: 'MEMO_ID',
});
directory.addDestination('GA5XIGA5C7QTPTWXQHY6MCJRMTRZDOSHR6EFIBNDQTCQHG262N4GGKTM', {
  name: 'Kraken',
  requiredMemoType: 'MEMO_ID',
  acceptedAssetsWhitelist: ['XLM-native'],
});
directory.addDestination('GCGNWKCJ3KHRLPM3TM6N7D3W5YKDJFL6A2YCXFXNMRTZ4Q66MEMZ6FI2', {
  name: 'Poloniex',
  requiredMemoType: 'MEMO_ID',
  acceptedAssetsWhitelist: ['XLM-native'],
});
directory.addDestination('GB6YPGW5JFMMP2QB2USQ33EUWTXVL4ZT5ITUNCY3YKVWOJPP57CANOF3', {
  name: 'Bittrex',
  requiredMemoType: 'MEMO_TEXT',
  acceptedAssetsWhitelist: ['XLM-native'],
});
directory.addDestination('GB7GRJ5DTE3AA2TCVHQS2LAD3D7NFG7YLTOEWEBVRNUUI2Q3TJ5UQIFM', {
  name: 'BTC38',
  requiredMemoType: 'MEMO_ID',
});
directory.addDestination('GBV4ZDEPNQ2FKSPKGJP2YKDAIZWQ2XKRQD4V4ACH3TCTFY6KPY3OAVS7', {
  name: 'Changelly',
  requiredMemoType: 'MEMO_ID',
});
directory.addDestination('GBR3RS2Z277FER476OFHFXQJRKYSQX4Z7XNWO65AN3QPRUANUASANG3L', {
  name: 'PapayaBot',
  requiredMemoType: 'MEMO_TEXT',
  pathPaymentAccepted: true,
  mergeOpAccepted: true,
});
directory.addDestination('GBTBVILDGCOIK26EPEHYCMKM7J5MTQ4FD5DO37GVTTBP45TVGRAROQHP', {
  name: 'KOINEX',
  requiredMemoType: 'MEMO_ID',
  acceptedAssetsWhitelist: ['XLM-native'],
});
directory.addDestination('GBGVRE5DH6HGNYNLWQITKRQYGR4PWQEH6MOE5ELPY3I4XJPTZ7CVT4YW', {
  name: 'PapayaSwap',
  requiredMemoType: 'MEMO_TEXT',
});
directory.addDestination('GBQWA6DU6OXHH4AVTFCONQ76LHEWQVZAW7SFSW4PPCAI2NX4MJDZUYDW', {
  name: 'Piiko',
  requiredMemoType: 'MEMO_TEXT',
});
directory.addDestination('GBKTJSNUSR6OCXA5WDWGT33MNSCNQHOBQUBYC7TVS7BOXDKWFNHI4QNH', {
  name: 'Exrates',
  requiredMemoType: 'MEMO_TEXT',
  acceptedAssetsWhitelist: ['XLM-native'],
});
directory.addDestination('GC4KAS6W2YCGJGLP633A6F6AKTCV4WSLMTMIQRSEQE5QRRVKSX7THV6S', {
  name: 'Indodax',
  requiredMemoType: 'MEMO_TEXT',
  acceptedAssetsWhitelist: ['XLM-native'],
});
directory.addDestination('GCO2IP3MJNUOKS4PUDI4C7LGGMQDJGXG3COYX3WSB4HHNAHKYV5YL3VC', {
  name: 'Binance',
  requiredMemoType: 'MEMO_ID',
  acceptedAssetsWhitelist: ['XLM-native'],
});
directory.addDestination('GAHK7EEG2WWHVKDNT4CEQFZGKF2LGDSW2IVM4S5DP42RBW3K6BTODB4A', {
  name: 'Binance',
  requiredMemoType: 'MEMO_ID',
  acceptedAssetsWhitelist: ['XLM-native'],
});
directory.addDestination('GBOEEVARKVASOQSSXCAHNTGJTVALJE2QM3AQQ2K3VXACQ6JJREQRJZKB', {
  name: 'OKEX',
  requiredMemoType: 'MEMO_ID',
  acceptedAssetsWhitelist: ['XLM-native'],
});
directory.addDestination('GDZCEWJ5TVXUTFH6V5CVDQDE43KRXYUFRHKI7X64EWMVOVYYZJFWIFQ2', {
  name: 'AEX',
  requiredMemoType: 'MEMO_ID',
  acceptedAssetsWhitelist: ['XLM-native'],
});
directory.addDestination('GCXDR4QZ4OTVX6433DPTXELCSEWQ4E5BIPVRRJMUR6M3NT4JCVIDALZO', {
  name: 'GOPAX',
  requiredMemoType: 'MEMO_TEXT',
});
directory.addDestination('GBZ35ZJRIKJGYH5PBKLKOZ5L6EXCNTO7BKIL7DAVVDFQ2ODJEEHHJXIM', {
  name: 'XIM',
  acceptedAssetsWhitelist: ['XLM-native'],
});
directory.addDestination('GCZYLNGU4CA5NAWBAVTHMZH4JXWKP2OUJ6OK3I7XXZCNA5622WUJVLTG', {
  name: 'RMT swap',
  acceptedAssetsWhitelist: ['RMT-old.sureremit.co'],
});
directory.addDestination('GBVUDZLMHTLMZANLZB6P4S4RYF52MVWTYVYXTQ2EJBPBX4DZI2SDOLLY', {
  name: 'Pedity Issuer',
  acceptedAssetsWhitelist: [],
});
directory.addDestination('GA6HCMBLTZS5VYYBCATRBRZ3BZJMAFUDKYYF6AH6MVCMGWMRDNSWJPIH', {
  name: 'Mobius Issuer',
  acceptedAssetsWhitelist: [],
});
directory.addDestination('GDCHDRSDOBRMSUDKRE2C4U4KDLNEATJPIHHR2ORFL5BSD56G4DQXL4VW', {
  name: 'StellarTerm Inflation',
  acceptedAssetsWhitelist: [],
});
directory.addDestination('GCCD6AJOYZCUAQLX32ZJF2MKFFAUJ53PVCFQI3RHWKL3V47QYE2BNAUT', {
  name: 'Lumenaut Inflation',
  acceptedAssetsWhitelist: [],
});
directory.addDestination('GBTCBCWLE6YVTR5Y5RRZC36Z37OH22G773HECWEIZTZJSN4WTG3CSOES', {
  name: 'NaoBTC',
  acceptedAssetsWhitelist: ['BTC-naobtc.com'],
});
directory.addDestination('GDRSWSKJCIB6Z65UA7W5RG62A7M5K3A5IHMED6DYHLPLWLVQCOOGDQ7S', {
  name: 'Gate.io',
  requiredMemoType: 'MEMO_ID',
});

// Assert that each asset has a trading pair
let remainingAssets = Object.assign({}, directory.assets);

for (let pairId in directory.pairs) {
  let pair = directory.pairs[pairId];
  if (pair.baseBuying.code === 'XLM' && pair.baseBuying.issuer === null) {
    delete remainingAssets[pair.counterSelling.code + '-' + pair.counterSelling.issuer];
  } else if (pair.counterSelling.code === 'XLM' && pair.counterSelling.issuer === null) {
    delete remainingAssets[pair.baseBuying.code + '-' + pair.baseBuying.issuer];
  }
}
let remainingAssetKeys = Object.keys(remainingAssets);
if (remainingAssetKeys.length) {
  throw new Error('Missing trading pair. Please use addPair() for asset: ' + remainingAssetKeys[0]);
}

module.exports = directory;
