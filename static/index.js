const initialize = async() =>{
    if (typeof window.ethereum !== 'undefined') {
        console.log('metaMask is installed lessgooooo');
      }else{
        console.log('metmask aint installed dawg')
      }
}

document.getElementById('connectButton', connect);

function connect() {
  ethereum
    .request({ method: 'eth_requestAccounts' })
    .then(handleAccountsChanged)
    .catch((error) => {
      if (error.code === 4001) {
        // EIP-1193 userRejectedRequest error
        console.log('Please connect to MetaMask.');
      } else {
        console.error(error);
      }
    });
}