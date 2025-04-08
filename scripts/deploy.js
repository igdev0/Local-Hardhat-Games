// replace the name of the contract with which one you want to deploy!
const contractNames = ["Game1", "Game2", "Game3", "Game4", "Game5"];

async function main() {
  const games =  await Promise.all(contractNames.map(async contractName => ((await hre.ethers.getContractFactory(contractName)).deploy())));

  // if you need to add constructor arguments for the particular game, add them here:
    games.forEach((game, index) => {
        console.log(`${contractNames[index]} deployed to address: ${game.address}`);
    })
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });