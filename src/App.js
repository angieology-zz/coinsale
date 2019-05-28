import React from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
// import EthereumTx from './ethereumjs-tx.min'

var account = "0x5a30ED952b2d50c5520FF4EB6F943C8604A1de61"
var coinAbi = [{ "constant": true,  "inputs": [],
    "name": "name",  "outputs": [   {     "name": "",   "type": "string"  }  ],   "payable": false,  "stateMutability": "view",   "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "spender",
        "type": "address"
      },
      {     "name": "value",  "type": "uint256"  }
    ],
    "name": "approve",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "sender",
        "type": "address"
      },
      {
        "name": "recipient",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "spender",
        "type": "address"
      },
      {
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "account",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "account",
        "type": "address"
      }
    ],
    "name": "addMinter",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "renounceMinter",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "spender",
        "type": "address"
      },
      {
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "recipient",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "account",
        "type": "address"
      }
    ],
    "name": "isMinter",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "owner",
        "type": "address"
      },
      {
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "account",
        "type": "address"
      }
    ],
    "name": "MinterAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "account",
        "type": "address"
      }
    ],
    "name": "MinterRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  }
]
var coinAddress = "0x692a70d2e424a56d2c6c27aa97d1a86395877b3a"
var saleAbi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "beneficiary",
        "type": "address"
      }
    ],
    "name": "buyTokens",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "_rate",
        "type": "uint256"
      },
      {
        "name": "_wallet",
        "type": "address"
      },
      {
        "name": "_token",
        "type": "address"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "purchaser",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "beneficiary",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "TokensPurchased",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "rate",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "token",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "wallet",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "weiRaised",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]
var saleAddress = "0xbbf289d846208c16edc8474705c748aff07732db"

var web3 = new Web3(Web3.givenProvider || "ropsten.infura.io/v3/266fa98ce0294f4d9c8033e4cad95d6f");
  
const SampleCoin = new web3.eth.Contract(coinAbi, coinAddress)
console.log("SampleCoin", SampleCoin)

 
const Crowdsale = new web3.eth.Contract(saleAbi, saleAddress)
console.log("Crowdsale", Crowdsale)


class App extends React.Component {

  componentDidMount() {



//Sample of adding coinsale contract as minter to the coin, but this has been done in setup
    

    // SampleCoin.methods.balanceOf(account).call().then(console.log)

    Crowdsale.methods.buyTokens(account).send({ from: account, value: web3.utils.toWei("0.01", "ether")})
    .on('transactionHash', (hash) => {
     console.log("transactionHash", hash)
    })
    .on('confirmation', (confirmationNumber, receipt) => {
        console.log("confirmationNumber",confirmationNumber )
        console.log("receipt",receipt )
    })
    .on('receipt', (receipt) => {
        // receipt example
        console.log(receipt);
      
    })
    .on('error', console.error); // 
  // this.addMinter()
  //  window.addEventListener('load', async () => {
      // Modern dapp browsers...
      // if (window.ethereum) {
      //     window.web3 = new Web3(ethereum);
      //     try {
      //         // Request account access if needed
      //         await ethereum.enable();
      //         // Acccounts now exposed
      //         web3.eth.sendTransaction({/* ... */});
      //     } catch (error) {
      //         // User denied account access...
      //     }
      // }
     // // Legacy dapp browsers...
      // // else if (window.web3) {
      //     window.web3 = new Web3(web3.currentProvider);
      //     // Acccounts always exposed
      //     web3.eth.sendTransaction({/* ... */});
      // }
      // // Non-dapp browsers...
      // else {
        //use infura
      

          // const data = SampleCoin.methods.addMinter(0xaa271e1a000000000000000000000000ca35b7d915458ef540ade6068dfe2f44e8fa733c).encodeABI()

         

          // // SampleCoin.methods.name().call().then((result) => console.log(result))
          // web3.eth.call(tx).then(res => {
          //   //web3.eth.sendSignedTransaction(signed.rawTransaction).on('receipt', console.log)
          //   console.log(res)
          // });

         
    
    
      //}
  //  });
    
    
  }
// add minter role to crowdsale so it is able to mint tokens during crowdsale
// has already been done in setup, not used in app
  addMinter = () => {
     // using the promise
          
          SampleCoin.methods.addMinter(saleAddress).send({from: account})
          .on('transactionHash', (hash) => {
           console.log("transactionHash", hash)
          })
          .on('confirmation', (confirmationNumber, receipt) => {
              console.log("confirmationNumber",confirmationNumber )
              console.log("receipt",receipt )
             
             //check balance, should be 0
             SampleCoin.methods.balanceOf(saleAddress).call().then(console.log)
          })
          .on('receipt', (receipt) => {
              // receipt example
              console.log(receipt);
            
          })
          .on('error', console.error); // 
  }


  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }


}


export default App;
