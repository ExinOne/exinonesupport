"use strict";(self.webpackChunkmixin_developer_docs=self.webpackChunkmixin_developer_docs||[]).push([[474],{5070:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var i=t(4848),o=t(8453);const s={title:"ExinOne Trading Model"},r=void 0,a={id:"Instructions/TradingModel",title:"ExinOne Trading Model",description:"ExinOne is the trading tool you've come to know within Mixin, offering you the security, privacy and convenience of trading tokens that are live on all major exchanges.",source:"@site/docs/Instructions/TradingModel.md",sourceDirName:"Instructions",slug:"/Instructions/TradingModel",permalink:"/docs/Instructions/TradingModel",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"ExinOne Trading Model"}},l={},h=[{value:"Terminology Introduction",id:"terminology-introduction",level:2},{value:"Funding Pool transfer details",id:"funding-pool-transfer-details",level:2},{value:"Response to extreme quotes",id:"response-to-extreme-quotes",level:2},{value:"Reasons for &quot;Deposit to trading account only&quot; support",id:"reasons-for-deposit-to-trading-account-only-support",level:2},{value:"Security of the Exchange?",id:"security-of-the-exchange",level:2}];function c(e){const n={a:"a",admonition:"admonition",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"ExinOne is the trading tool you've come to know within Mixin, offering you the security, privacy and convenience of trading tokens that are live on all major exchanges."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Security: Tokens such as BTC, ETH, MOB, BOX, etc., are credited directly to your Mixin wallet upon transaction completion; ExinOne does not hold your assets in escrow."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Privacy: There is no KYC required to use ExinOne, no need to provide a cell phone number, and you don't even need to be logged in to trade with ExinOne."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You can give ExinOne authorization to access additional services:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Personal information, including Mixin ID, nickname, avatar, etc., used to associate you with trading accounts, current accounts, etc. and related configuration & order information."}),"\n",(0,i.jsx)(n.li,{children:"(optional) Wallet Balance: Transactions and built-in Mixin wallet to show you your wallet assets balance."}),"\n",(0,i.jsx)(n.li,{children:"(optional) Wallet Flow: for displaying your wallet flow on ExinOne's built-in Mixin wallet."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Convenience: Using ExinOne is equivalent to registering an account with Binance, OKX, Gateio, Bybit, etc. You can trade tokens from the relevant exchanges directly on ExinOne, without having to go to each exchange to register an account, KYC, charge and withdraw coins, etc."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Reasonable price: ExinOne connects to the best exchanges in the market with deep trading depth, providing you with competitive trading prices."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"We would like to introduce you to the ExinOne business model."}),"\n",(0,i.jsx)(n.h2,{id:"terminology-introduction",children:"Terminology Introduction"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Trading Depth"})}),"\n",(0,i.jsxs)(n.p,{children:["A good trading depth means lower price impact, as an example for the case of MOB's ",(0,i.jsx)(n.a,{href:"https://coinmarketcap.com/currencies/mobilecoin/#Markets",children:"trading depth"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"mobmarket",src:t(6721).A+"",width:"718",height:"467"})}),"\n",(0,i.jsx)(n.p,{children:"As you can see, if you trade MOB on Binance, it takes about $20,000 to raise or lower the price of MOB by 2%, but if you trade on Bitfinex, it only takes about $1,000."}),"\n",(0,i.jsx)(n.p,{children:"So, if you want a stable price without losing money, trading MOB with Binance will give you a better price than with Bitfinex."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Funding Pool"}),": ExinOne offers trading and other services held by the capital situation. ExinOne needs to create pools on each exchange, Mixin, and on chain to keep the business running properly."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"On-chain Coin Deposit and Withdrawal"}),": Since the pool of funds is not unlimited (to ensure security, not all funds can be used for business), it is necessary to transfer between platforms from time to time, which will involve on-chain coin charging and withdrawing operations on the blockchain, which will incur certain fees, which may range from a few dollars to tens of dollars, and have a certain arrival time, which may be a few minutes to tens of hours (It can be simply analogized to express delivery)."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Liquidity"}),": This is also a concept related to the ExinOne pool, which refers to the ability of a token to maintain daily operations. With good liquidity, the relevant tokens can circulate freely without any restrictions, while with bad liquidity, the relevant tokens will have certain restrictions, such as the credit only supports crediting to Mixin accounts."]}),"\n",(0,i.jsx)(n.h2,{id:"funding-pool-transfer-details",children:"Funding Pool transfer details"}),"\n",(0,i.jsx)(n.p,{children:"Take BTC, ETH, USDT as an example:"}),"\n",(0,i.jsx)(n.p,{children:"ExinOne needs to store a certain amount of BTC, ETH and USDT in the exchange and Mixin respectively, assuming 20 BTC, 40 ETH and 600,000 USDT respectively."}),"\n",(0,i.jsx)(n.p,{children:"The initial pool of funds is assumed to be"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Token"}),(0,i.jsx)(n.th,{children:"Mixin"}),(0,i.jsx)(n.th,{children:"Exchange"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"BTC"}),(0,i.jsx)(n.td,{children:"10"}),(0,i.jsx)(n.td,{children:"10"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ETH"}),(0,i.jsx)(n.td,{children:"20"}),(0,i.jsx)(n.td,{children:"20"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"USDT"}),(0,i.jsx)(n.td,{children:"300,000"}),(0,i.jsx)(n.td,{children:"300,000"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"For the sake of calculation, suppose the price of BTC is $30,000 and the price of ETH is $2,000"}),"\n",(0,i.jsx)(n.p,{children:"At this point, user A pays 30,000 USDT to buy 1 BTC and user B sells 15 ETH to get 30,000 USDT, then"}),"\n",(0,i.jsx)(n.p,{children:"Since user A bought BTC, ExinOne's USDT in Mixin increased by 30,000 and BTC decreased by 1. At the same time, USDT spent 30,000 to buy 1 BTC in the exchange account."}),"\n",(0,i.jsx)(n.p,{children:"Since B user sold ETH, ExinOne had 15 more ETH and paid 30,000 USD to the user. At the same time, ExinOne goes to the exchange and sells 15 ETH, getting 30,000 USDT"}),"\n",(0,i.jsx)(n.p,{children:"So the pool situation at this point becomes:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Token"}),(0,i.jsx)(n.th,{children:"Mixin"}),(0,i.jsx)(n.th,{children:"Exchange"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"BTC"}),(0,i.jsx)(n.td,{children:"9"}),(0,i.jsx)(n.td,{children:"11"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ETH"}),(0,i.jsx)(n.td,{children:"35"}),(0,i.jsx)(n.td,{children:"5"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"USDT"}),(0,i.jsx)(n.td,{children:"300,000"}),(0,i.jsx)(n.td,{children:"300,000"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"After the user has traded two orders, ExinOne's BTC on Mixin is not much less and USDT happens to be unchanged, but there are 15 more ETH and only five more ETH left on the exchange. If another user sells ETH, ExinOne may not have enough ETH on the exchange to sell, so it needs to withdraw coins to replenish the pool of ETH on the exchange."}),"\n",(0,i.jsx)(n.p,{children:"ExinOne needs to withdraw a certain amount of ETH from Mixin to the exchange in order to ensure that users can still sell ETH through ExinOne without any problems."}),"\n",(0,i.jsx)(n.p,{children:"The above is a daily pool transfer, and since ExinOne can set a certain warning threshold, it is possible to fill and withdraw coins in advance, which is not a problem at the user level. But what happens if the market happens to be extreme?"}),"\n",(0,i.jsx)(n.h2,{id:"response-to-extreme-quotes",children:"Response to extreme quotes"}),"\n",(0,i.jsx)(n.p,{children:"The extreme market here may be a one-sided market that spikes or plummets, and generally has the following pattern"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When there is a spike: more users choose to sell their coins - converting various tokens to stable coins USDT."}),"\n",(0,i.jsx)(n.li,{children:'When there is a crash: more users choose to "bottom out" - buying tokens with USDT.'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"When there is a spike"})}),"\n",(0,i.jsx)(n.p,{children:"When there is a spike, there is a higher demand for users to sell their tokens, so the following scenarios may occur:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"the relevant tokens on the exchange are sold short and need to wait for the exchange to replenish the relevant tokens before continuing trading"}),"\n",(0,i.jsx)(n.li,{children:"ExinOne's USDTs are sold short (they are transferred to users), there will be a delay in releasing the tokens, and you will be able to receive the USDTs after they are replenished."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"When there is a crash"})}),"\n",(0,i.jsx)(n.p,{children:"During a crash, people take a plunge and the following situations may occur:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'The coins associated with ExinOne may be bought out, you will be prompted to "delay coin release" and will be automatically transferred to you when the assets are replenished.'}),"\n",(0,i.jsx)(n.li,{children:"If the USDT on the exchange is depleted, you will need to wait for the assets to be transferred, and then you can continue to plunge when the transfer is completed."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Therefore, under certain conditions, you may experience a [DelayedRelease](. /DelayedRelease), please be patient, coin withdrawals are on the way."}),"\n",(0,i.jsxs)(n.admonition,{title:"Tips",type:"info",children:[(0,i.jsx)(n.p,{children:'If you are trading a token and ExinOne prompts you that the pool is insufficient and you need to delay the release of the token, and you agree and are waiting, you can check through the bot 7000103056, you will usually see a certain number of top-ups for the relevant coin on the "Top-up" page, this top-up may be ExinOne replenishing the pool, after the top-ups arrive, you will receive the token you purchased .'}),(0,i.jsx)(n.p,{children:"Also, this bot allows you to check the time when the recharge arrives. If you find that there is no recharge for a long time, you can also consult us for details."}),(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.h2,{id:"reasons-for-deposit-to-trading-account-only-support",children:'Reasons for "Deposit to trading account only" support'}),(0,i.jsx)(n.p,{children:"As we all know, Mixin Wallet is a secure decentralized wallet and people are very willing to deposit their assets into Mixin Wallet to store their assets safely, while ExinOne provides a trading account which is a centralized account managed by ExinOne, users naturally worry whether their assets are safe to be stored in the trading account."}),(0,i.jsxs)(n.p,{children:["Speaking of which, first we need to understand the specifics of trading accounts, see ",(0,i.jsx)(n.a,{href:"/docs/Features/TradingAccount",children:"this article"}),", which describes the role of trading accounts:"]}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"pledge assets to obtain borrowing credits;"}),"\n",(0,i.jsx)(n.li,{children:"provide liquidity to ExinOne;"}),"\n",(0,i.jsx)(n.li,{children:"to facilitate trading within Mixin of tokens that are live on major exchanges."}),"\n"]}),(0,i.jsx)(n.p,{children:"As you can see, the trading account essentially provides three functions, which are used as follows:"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Pledge Borrowing"})}),(0,i.jsx)(n.p,{children:'ExinOne offers a pledged coin lending service where you can earn a certain amount of "asset points" by pledging assets to your trading account on ExinOne, to your current account, or by participating in ExinPool\'s node finance, where you can lend up to the same amount of USDT as your asset points.'}),(0,i.jsx)(n.p,{children:"The assets you pledge to ExinOne will be kept safe by ExinOne, such as BTC. In fact, most of the BTC in ExinOne is kept safe through multi-signature wallets, and only a small amount of BTC is kept in the exchange and Mixin to maintain basic exchange needs. Multi-signature safekeeping."}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Providing Liquidity"})}),(0,i.jsx)(n.p,{children:'The trading account was formerly known as the "liquidity pool", which is where the name comes from.'}),(0,i.jsx)(n.p,{children:"As mentioned above, ExinOne needs to establish a pool of funds between platforms and needs a large pool of funds to maintain the normal operation of the business, for this reason, ExinOne launched the \"liquidity pool\" function, users can deposit their assets into the liquidity pool, you can get a certain amount of lending, and at the same time, the higher contribution will also get a certain amount of Based on the trust of users and ExinOne's own development, ExinOne's liquidity needs for mainstream coins have been met, and the current concern is the safety of assets deposited into trading accounts by users. The vast majority of assets are held in a more secure and reliable manner through multiple signatures and other forms."}),(0,i.jsx)(n.p,{children:"For some of the recently launched tokens, due to business adjustments, liquidity is no longer needed to support the normal operation of the business, and if there is sufficient liquidity, ExinOne can open the relevant tokens to withdraw coins to the Mixin wallet, which is more flexible overall."}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Providing Trading Services"})}),(0,i.jsx)(n.p,{children:"As you can see above, you have a general understanding of how ExinOne offers transactions, but if ExinOne has to transfer tokens to your Mixin wallet for every transaction, there are a number of limitations:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"What happens if the token in question is illiquid?"}),"\n",(0,i.jsx)(n.li,{children:"What if Mixin does not support this public chain token?"}),"\n"]}),(0,i.jsxs)(n.p,{children:['This is the problem that "',(0,i.jsx)(n.a,{href:"/docs/Features/TradingAccount",children:"Trading Account"}),'" addresses:']}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Restrict some tokens to be credited to the trading account only, so there is no need to withdraw all coins to Mixin, and users can trade the relevant tokens directly;"}),"\n",(0,i.jsx)(n.li,{children:"Solve the problem of trading tokens of public chains that are not supported by Mixin and can be traded freely;"}),"\n",(0,i.jsx)(n.li,{children:"Solves the problem that some tokens take too long to fill and withdraw: they can be traded in the trading account;"}),"\n",(0,i.jsx)(n.li,{children:"It is even possible that some tokens involve contract swap, airdropping new coins and invalidating the old ones, Mixin itself does not support airdropping, so you can complete this operation through your trading account."}),"\n"]}),(0,i.jsx)(n.p,{children:'The rationale behind the "credit to trading account only" trading operation is that some (such as ETH, which has been on-chain for too long) or all (such as what you see in your trading account, which is a relatively low value user purchase) of your tokens are stored on the relevant exchange, and ExinOne promises that the assets you purchase that are stored on the relevant exchange will be used for other purposes, but ExinOne cannot guarantee that the assets on the exchange are 100% safe and secure and free of risk.'}),(0,i.jsx)(n.h2,{id:"security-of-the-exchange",children:"Security of the Exchange?"}),(0,i.jsx)(n.p,{children:"Now that you have a basic understanding of the business model between ExinOne and the Exchange, you can now judge the risks involved for yourself."}),(0,i.jsx)(n.p,{children:"Generally speaking before a serious incident (lightning) occurs on an exchange, there will be some news related to the withdrawal of coins and the strategies that ExinOne can respond to are"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Appropriate downgrading of assets present within the relevant exchange;"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"migration of trading pairs to other platforms;"}),"\n"]}),"\n"]}),(0,i.jsx)(n.p,{children:"However, in order to maintain the stability of transactions, ExinOne cannot transfer all assets completely, so please be aware that the impact can be considered inevitable."}),(0,i.jsx)(n.p,{children:"In case of extreme situations, ExinOne will take appropriate countermeasures in a timely manner, but please keep yourself informed and, if necessary, sell the relevant assets to ensure the safety of your assets."})]})]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},6721:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/mob-a2d81b0468450fe96fd3367956e0f1ff.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);