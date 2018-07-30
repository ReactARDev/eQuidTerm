const React = window.React = require('react');
import AssetCard2 from './AssetCard2.jsx';
import Loading from './Loading.jsx';
import Ellipsis from './Ellipsis.jsx';
import Printify from '../lib/Printify';
import directory from '../directory.js';
import Stellarify from '../lib/Stellarify';
import Format from '../lib/Format';
import _ from 'lodash';

const decAtIndex = (input, index) => {
  return parseInt(input.substr(index,2),16);
}
const hexToRgba = (input, opacity) => {
  return 'rgba(' + decAtIndex(input, 1) + ',' + decAtIndex(input, 3) + ',' + decAtIndex(input, 5) + ',' + BACKGROUND_OPACITY + ')';
}

const BACKGROUND_OPACITY = 0.08;

export default class AssetList extends React.Component {
  constructor(props) {
    super(props);
    this.dTicker = props.d.ticker;
    this.listenId = this.dTicker.event.listen(() => {this.forceUpdate()});
  }
  componentWillUnmount() {
    this.dTicker.event.unlisten(this.listenId);
  }
  render() {
    if (!this.dTicker.ready) {
      return <Loading size="large">Loading Stellar market data<Ellipsis /></Loading>
    }

    let rows = [];
    _.each(this.dTicker.data.assets, (asset, index) => {
      if (this.props.limit && index >= this.props.limit) {
        return;
      }
      let directoryAsset = directory.getAssetByAccountId(asset.code, asset.issuer);
      if (directoryAsset === null || directoryAsset.unlisted) {
        // Don't show unlisted assets
        return;
      }

      let priceXLM = asset.price_XLM ? Printify.lightenZeros(asset.price_XLM.toString(), Format.niceNumDecimals(asset.price_XLM)): '-';
      let priceUSD = asset.price_USD ? <span>${Printify.lightenZeros(asset.price_USD.toString(), Format.niceNumDecimals(asset.price_USD))}</span> : '-';
      if (asset.id == 'XLM-native') {
        priceXLM = Printify.lightenZeros('1.0000000');
      }
      let tradeLink;
      if (asset.topTradePairSlug) {
        tradeLink = <span className="AssetList__asset__amount__trade">trade</span>
      }
      let volume24h = asset.volume24h_USD ? '$' + asset.volume24h_USD.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0}) : '$0';

      let change24hPercentage;
      if (asset.id === 'XLM-native') {
        change24hPercentage = this.dTicker.data._meta.externalPrices.USD_XLM_change;
      } else {
        change24hPercentage = asset.change24h_USD;
      }

      let change24h;
      if (change24hPercentage === null || change24hPercentage === undefined) {
        change24h = '-';
      } else if (change24hPercentage < 0) {
        change24h = <span className="AssetList__asset__changeNegative">{change24hPercentage.toFixed(2)}%</span>;
      } else {
        change24h = <span className="AssetList__asset__changePositive">{change24hPercentage.toFixed(2)}%</span>;
      }

      let anchor = directory.getAnchor(asset.domain);
      let word_info = anchor.displayName;
      let link_word = "";
      if (word_info!= null) {
        if (word_info.indexOf(' ') > 0){
          link_word = word_info.substr(0, word_info.indexOf(' '));
        }
        else {
          link_word = word_info;
        }
      }
      else {
        link_word = "Stellar"
      }
      let style = {};
      
      if (anchor.color) {
        style.borderColor = anchor.color;
        let rgbaColor = hexToRgba(anchor.color, BACKGROUND_OPACITY);
        style.background = rgbaColor;
      }

      rows.push(<a href={'#exchange/' + asset.topTradePairSlug} key={'asset-' + asset.id} className="AssetList__asset">
        <div className="AssetList__asset__assetCard"><AssetCard2 code={asset.code} issuer={asset.issuer} boxy={false}></AssetCard2></div>
        <div className="AssetList__asset__weblink"><a target="_blank" href={anchor.website}><button style={style}>{link_word}</button></a></div>
        <div className="AssetList__asset__amount">{priceXLM}{Printify.lighten(' XLM')}</div>
        <div className="AssetList__asset__amount">{priceUSD}</div>
        <div className="AssetList__asset__amount">{volume24h}</div>
        <div className="AssetList__asset__amount">{change24h}</div>
        <div className="AssetList__asset__amount">{tradeLink}</div>
      </a>);
      // rows.push(<AssetPair key={index} row={true} baseBuying={market.baseBuying} counterSelling={market.counterSelling}></AssetPair>)
    })
    return (
      <div className="AssetList">
        <div className="AssetList__head__row">
          <div className="AssetList__head__cell AssetList__head__asset">Asset</div>
          <div className="AssetList__head__cell AssetList__head__asset">WebSite</div>
          <div className="AssetList__head__cell AssetList__head__amount">Price (XLM)</div>
          <div className="AssetList__head__cell AssetList__head__amount">Price (USD)</div>
          <div className="AssetList__head__cell AssetList__head__amount">Volume (24h)</div>
          <div className="AssetList__head__cell AssetList__head__amount">Change (24h)</div>
        </div>
        {rows}
      </div>
    );
  }
};
