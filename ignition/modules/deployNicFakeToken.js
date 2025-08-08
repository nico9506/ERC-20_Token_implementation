const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contract with the account:", deployer.address);

  const balance = await hre.ethers.provider.getBalance(
    await deployer.getAddress()
  );

  console.log("Account balance:", hre.ethers.formatEther(balance), "ETH");

  const Token = await hre.ethers.getContractFactory("NicFakeToken");
  const token = await Token.deploy();

  await token.waitForDeployment(); // Required in ethers v6

  console.log("Token address:", await token.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
