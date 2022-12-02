const tokenAddress = '0xC55bA4350fb45BDC400327069F2c6c2eA1062676'
const tokenABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const authenticatorAddress = '0x8F35Fe5795D517d1311b093F8a8f7373A42FF5C9'
const authenticatorABI = [{"inputs":[{"internalType":"address","name":"_secureAccessToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"}],"name":"Registered","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getUser","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"createdAt","type":"uint256"}],"internalType":"struct Authenticator.User","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"login","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"register","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"secureAccessToken","outputs":[{"internalType":"contract SecureAccessToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const rpcUrl = 'https://data-seed-prebsc-2-s2.binance.org:8545'

let authSectionElem = document.querySelector('#auth-section')
let accountElem = document.querySelector('#account-btn')
let connectElem = document.querySelector('#connect-btn')
let disconnectElem = document.querySelector('#disconnect-btn')
let modalAccountElem = document.querySelector('#user-account')
let tokenBalanceElem = document.querySelector('#user-token-balance')
let bnbBalanceElem = document.querySelector('#user-bnb-balance')
let usernameElem = document.querySelector('#username')
let formElem = document.querySelector('#form')
let authenticationElem = document.querySelector('#authentication-btn')
let messageElem = document.querySelector('#message')
let signUpMessageElem = document.querySelector('#sign-up-message')
let signInMessageElem = document.querySelector('#sign-in-message')
let signUpActionElem = document.querySelector('#sign-up-action')
let signInActionElem = document.querySelector('#sign-in-action')

let signUpFeedbackElem = document.querySelector('#sign-up-feedback')
let signInFeedbackElem = document.querySelector('#sign-in-feedback')

const wallet = {
    connected: false,
    account: "",
    balance: 0
}

const ACTIONS = {
    signup: 0,
    signin: 1
}

let action = ACTIONS.signin

document.addEventListener("DOMContentLoaded", async function (e) {
    toggleConnectButtons(wallet.connected)
    toggleAuthenticationMessage(action)
})

connectElem.addEventListener("click", async function (e) {
    connectElem.disabled = true
    await connect()
    connectElem.disabled = true
})

disconnectElem.addEventListener("click", async function (e) {
    await disconnect()
})

formElem.addEventListener("submit", async function (e) { 
    e.preventDefault()

    const username = usernameElem.value.trim().toUpperCase();
    const signature = await getUserSignature(username); 

    if (!username) {
        window.alert("Please enter a username")
        return
    }
    if(action === ACTIONS.signup) {
        signup(username, signature, wallet.account)
    }

    if(action === ACTIONS.signin) {
        signin(username, signature, wallet.account)
    }
})

signUpActionElem.addEventListener("click", async function (e) {
    e.preventDefault()
    action = ACTIONS.signup
    toggleAuthenticationMessage(action)
})

signInActionElem.addEventListener("click", async function (e) {
    e.preventDefault()
    action = ACTIONS.signin
    toggleAuthenticationMessage(action)
})

async function connect() {
    if (window.ethereum) {
        window.web3 = await new Web3(window.ethereum)
        await window.ethereum.request({
            method: 'eth_requestAccounts'
        })
        await handleUnsupportedChain()
        await setup()
    } else {
        window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
}

async function disconnect() {
    accountElem.disabled = true
    window.location.reload()
}

async function handleUnsupportedChain() {
    let chainId = await window.web3.eth.net.getId()

    if (chainId !== 0x38) {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x61' }]
        });
    }
}

async function setup() {
    subscribeToEvents()
    await loadAccountDetails()
    await loadAuthenticatorContract()
}

function subscribeToEvents() {
    window.ethereum.on('accountsChanged', async function (accounts) {
        wallet.account = accounts[0]
        accountElem.innerHTML = getFormattedAccount(accounts[0])
        modalAccountElem.innerHTML = accounts[0]
        await loadBnbBalance(accounts[0])
        await loadTokenBalance(accounts[0])
    })

    window.ethereum.on('chainChanged', async function (networkId) {
        await setup()
        if(networkId !== '0x61'){
            window.alert("Please, switch to binance smart chain testnet mainnet")
        }
    })
}

async function loadAccountDetails() {
    const [account] = await window.web3.eth.getAccounts()
    wallet.account = account
    wallet.connected = true
    accountElem.innerHTML = getFormattedAccount(account)
    modalAccountElem.innerHTML = account
    toggleConnectButtons(wallet.connected)
    await loadBnbBalance(account)
    await loadTokenBalance(account)
}

async function loadBnbBalance(account) {
    const web3 = window.web3
    let bnbBalance = await web3.eth.getBalance(account)
    bnbBalance = web3.utils.fromWei(bnbBalance, 'Ether')
    bnbBalanceElem.innerHTML = (+bnbBalance).toFixed(4)
    wallet.balance = +bnbBalance
}

async function loadTokenBalance(account) {
    try {
        const token = await new window.web3.eth.Contract(tokenABI, tokenAddress)
        let tokenBalance = await token.methods.balanceOf(account).call()
        const tokenDecimals = await token.methods.decimals().call()
        tokenBalance = (+tokenBalance) / (10 ** (+tokenDecimals))
        tokenBalanceElem.innerHTML = tokenBalance.toFixed(2)
    } catch (error) {
        console.log('loadTokenBalance: ' + error.message);
    }
}

async function loadAuthenticatorContract() {
    try {
        window.authenticator = await new window.web3.eth.Contract(authenticatorABI, authenticatorAddress)
        authenticationElem.disabled = false
    } catch (error) {
        console.log('loadAuthenticatorContract: ' + error.message)
    }
}

async function getUserSignature(username) {
    const web3 = window.web3;

    const messageHash = web3.utils.soliditySha3(
      { t: "address", v: wallet.account },
      { t: "string", v: username },
      { t: "address", v: authenticatorAddress }
    );

    let signature = await web3.eth.personal.sign(messageHash, wallet.account)
    return signature
  }

async function signup(username, signature) {
    authenticationElem.disabled = true
    authenticationElem.innerHTML = 'Processing'

    const web3 = await new Web3(rpcUrl)

    try {
        const txData = {
            from: wallet.account,
            gasLimit: 1000000,
            gasPrice: web3.utils.toWei('10', 'Gwei')
        }

        let receipt = await window.authenticator.methods.register(username, signature).send(txData)
        
        messageElem.innerHTML = `<a href="https://bscscan.com/tx/${receipt.transactionHash}">View transaction</a>`
        authSectionElem.setAttribute("style", "display: none !important");
        signUpFeedbackElem.style.display = "block";

        await loadBnbBalance(wallet.account)
        await loadTokenBalance(wallet.account)
    } catch (error) {
        authenticationElem.disabled = false
        authenticationElem.innerHTML = 'Sign up'

        window.alert(error.message)
    }
}

async function signin(username, signature) {
    authenticationElem.disabled = true
    authenticationElem.innerHTML = 'Processing'

    const web3 = await new Web3(rpcUrl)

    try {
        await window.authenticator.methods.login(wallet.account, username, signature).call()

        authSectionElem.setAttribute("style", "display: none !important");
        signInFeedbackElem.style.display = "block";

        await loadBnbBalance(wallet.account)
        await loadTokenBalance(wallet.account)
    } catch (error) {
        authenticationElem.disabled = false
        authenticationElem.innerHTML = 'Sign in'

        window.alert(error.message)

        console.clear()
        console.log(error)
    }
}

function toggleConnectButtons(connected) {
    if (connected) {
        connectElem.style.display = 'none'
        accountElem.style.display = 'inline'
    } else {
        connectElem.style.display = 'inline'
        accountElem.style.display = 'none'
    }
}

function toggleAuthenticationMessage(action) {
    if (action === ACTIONS.signup) {
        signUpMessageElem.style.display = "none"
        signInMessageElem.style.display = "block"
        authenticationElem.innerHTML = 'Sign up'
    }

    if (action === ACTIONS.signin) {
        signUpMessageElem.style.display = "block"
        signInMessageElem.style.display = "none"
        authenticationElem.innerHTML = 'Sign in'
    }
}

function getFormattedAccount(account) {
    return account.slice(0, 5).concat('...').concat(account.slice(account.length - 4))
}