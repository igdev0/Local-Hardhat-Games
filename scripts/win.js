// add the game address here and update the contract name if necessary
const gameAddr = ["0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0", "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9", "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512", "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9", "0x5FbDB2315678afecb367f032d93F642f64180aa3"];

const contractNames = Array(5).fill("Game").map((item, index) => item + (index + 1));

async function main() {


    for (let c = 0; c < contractNames.length; c++) {
        const game = await hre.ethers.getContractAt(contractNames[c], gameAddr[c]);
        // Game1 - requires to simply call win() ✅
        // Game2 - requires to call setX(25) & setY(25);

        // did you win? Check the transaction receipt!
        // if you did, it will be in both the logs and events array
        let tx;
        let receipt;
        switch (c) {
            case 0:
                // Game1 - requires to simply call win() ✅
                tx = await game.win();
                receipt = await tx.wait();
                console.log(`Did I win? ${receipt.logs.length > 0}`);
                break;
            case 1:
                tx = await game.setX(25);
                await tx.wait();
                tx = await game.setY(25);
                await tx.wait();

                tx = await game.win();
                receipt = await tx.wait();
                console.log(`Did I win? ${receipt.logs.length > 0}`);
                break;
            case 2:
                tx = await game.win(45);
                await tx.wait();
                receipt = await tx.wait();
                console.log(`Did I win? ${receipt.logs.length > 0}`);
                break;
            case 3:
                // tx = await game.win();
                // receipt = await tx.wait();
                break;
            case 4:
                // tx = await game.win();
                // receipt = await tx.wait();
                break;

        }

    }

    // do whatever you need to do to win the game here:


}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
