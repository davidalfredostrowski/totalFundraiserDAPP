const { expect } = require("chai");
const { ethers } = require("hardhat");
const { loadFixture }  = require("@nomicfoundation/hardhat-network-helpers")

describe("FundraiserFactory", function () {
  let FundraiserFactory, fundraiserFactory;
  let Fundraiser;
  let owner, beneficiary;

//  beforeEach(async () => {
 async function runEveryTime() {  
    [owner, beneficiary] = await ethers.getSigners();
    // Deploy FundraiserFactory
    const FundraiserFactoryFactory = await ethers.getContractFactory("FundraiserFactory");
    fundraiserFactory = await FundraiserFactoryFactory.deploy();
    //await fundraiserFactory.deployed();
    await fundraiserFactory.waitForDeployment();
    // Get Fundraiser contract ABI
    //Fundraiser = await ethers.getContractFactory("Fundraiser");

   // await addFundraisers(   fundraiserFactory, fundraiserCount, accounts);
 return { fundraiserFactory }

 };
 async function addFundraisers(factory, count) {
    const name = "Beneficiary";
    const lowerCaseName = name.toLowerCase();
//    const beneficiary = accounts[1];
 [owner, beneficiary] = await ethers.getSigners();

    for (let i=0; i < count; i++) {
      await factory.createFundraiser(
        `${name} ${i}`,
        `${lowerCaseName}${i}.com`,
        `${lowerCaseName}${i}.png`,
        `Description for ${name} ${i}`,
        beneficiary
      );
    }
  }
  it("ffv2 should start with zero fundraisers", async () => {
      const fundraiserf  = await ethers.deployContract("FundraiserFactory");
      
        const { fundraiserFactory }  = await loadFixture(runEveryTime);
        expect(fundraiserFactory , "contract has been deployed");




	  expect(await fundraiserFactory.fundraisersCount()).to.equal(0);
  });

  describe("daveo    when fundraisers collection is empty", () => {
    it("ffv2 returns an empty collection", async () => {
//      const factory = await createFundraiserFactory(0, accounts);
  
        const { fundraiserFactory }  = await loadFixture(runEveryTime);
const fundraiserCount = 0; 
await addFundraisers(   fundraiserFactory, fundraiserCount);


	    const fundraisers = await fundraiserFactory.fundraisers(10, 0);
  

          expect(await fundraiserFactory.fundraisersCount()).to.equal(0);

//	    assert.equal(
//        fundraisers.length,
//     0,
//        "ffv2  collection should be empty"
//      );
    });
  });





 describe("daveo30    when fundraisers collection is empty", () => {
    it("ffv2 results should be  10", async () => {
//      const factory = await createFundraiserFactory(0, accounts);

        const { fundraiserFactory }  = await loadFixture(runEveryTime);
const fundraiserCount = 30;
await addFundraisers(   fundraiserFactory, fundraiserCount);
            const fundraisers = await fundraiserFactory.fundraisers(10, 0);
          expect(await fundraisers.length).to.equal(10);
    });
  });

 describe("daveo31    when fundraisers collection is empty", () => {
    it("ffv21 results should be  10", async () => {
//      const factory = await createFundraiserFactory(0, accounts);

        const { fundraiserFactory }  = await loadFixture(runEveryTime);
const fundraiserCount = 30;
await addFundraisers(   fundraiserFactory, fundraiserCount);
            const fundraisers = await fundraiserFactory.fundraisers(20, 0);
          expect(await fundraisers.length).to.equal(20);
    });
  });






		  describe("daveo32    when fundraisers collection is empty", () => {
    it("ffv22 results should be  10", async () => {
//      const factory = await createFundraiserFactory(0, accounts);

        const { fundraiserFactory }  = await loadFixture(runEveryTime);
const fundraiserCount = 30;
await addFundraisers(   fundraiserFactory, fundraiserCount);
            const fundraisers = await fundraiserFactory.fundraisers(30, 0);
          expect(await fundraisers.length).to.equal(30);
    });
  });


  //  });
 // });


                  describe("daveo33    when fundraisers collection is empty", () => {
    it("ffv24 includes the appropriatie offset", async () => {
//      const factory = await createFundraiserFactory(0, accounts);
        const { fundraiserFactory }  = await loadFixture(runEveryTime);
const fundraiserCount = 30;
await addFundraisers(   fundraiserFactory, fundraiserCount);
            const fundraisers = await fundraiserFactory.fundraisers(1, 0);
          expect(await fundraisers.length).to.equal(1);
   //  const fundraiser = await FundraiserFactory.at(fundraisers[0]);
 console.log("fundraiserFactory"); 
console.log(fundraiserFactory)
	    const fundraiserAddr = await fundraiserFactory.getFundraiserAt(0);  
//   const fundraiser = await fundraisers.getFundraiserAt(0);
  const Fundraiser = await ethers.getContractFactory("Fundraiser");
  const fundraiser = Fundraiser.attach(fundraiserAddr);
console.log(await fundraiser.name())
  expect(await fundraiser.name()).to.equal("Beneficiary 0");
	    const name = await fundraiser.name();
console.log("name=>");
console.log(name);	    
          expect(await name.includes(0));
    });

   it("ffv24 includes the appropriatie offset", async () => {
        const { fundraiserFactory }  = await loadFixture(runEveryTime);
const fundraiserCount = 30;
await addFundraisers(   fundraiserFactory, fundraiserCount);
            const fundraisers = await fundraiserFactory.fundraisers(1, 0);
          expect(await fundraisers.length).to.equal(1);
   //  const fundraiser = await FundraiserFactory.at(fundraisers[0]);
 console.log("fundraiserFactory");
console.log(fundraiserFactory)
            const fundraiserAddr = await fundraiserFactory.getFundraiserAt(0);
//   const fundraiser = await fundraisers.getFundraiserAt(0);
  const Fundraiser = await ethers.getContractFactory("Fundraiser");
  const fundraiser = Fundraiser.attach(fundraiserAddr);
console.log(await fundraiser.name())
  expect(await fundraiser.name()).to.equal("Beneficiary 0");

  });

   it("ffv25 includes the appropriatie offset", async () => {
        const { fundraiserFactory }  = await loadFixture(runEveryTime);
const fundraiserCount = 30;
await addFundraisers(   fundraiserFactory, fundraiserCount);
 console.log("fundraiserFactory");
console.log(fundraiserFactory)
            const fundraiserAddr = await fundraiserFactory.getFundraiserAt(7);
  const Fundraiser = await ethers.getContractFactory("Fundraiser");
  const fundraiser = Fundraiser.attach(fundraiserAddr);
console.log(await fundraiser.name())
  expect(await fundraiser.name()).to.equal("Beneficiary 7");

  });

   it("ffv26 includes the appropriatie offset", async () => {
        const { fundraiserFactory }  = await loadFixture(runEveryTime);
const fundraiserCount = 30;
await addFundraisers(   fundraiserFactory, fundraiserCount);
 console.log("fundraiserFactory");
console.log(fundraiserFactory)
            const fundraiserAddr = await fundraiserFactory.getFundraiserAt(7);
  const Fundraiser = await ethers.getContractFactory("Fundraiser");
  const fundraiser = Fundraiser.attach(fundraiserAddr);
console.log(await fundraiser.name())
  expect(await fundraiser.name()).to.equal("Beneficiary 7");

  });

  it("ffv27 includes the appropriatie offset", async () => {
        const { fundraiserFactory }  = await loadFixture(runEveryTime);
const fundraiserCount = 30;
await addFundraisers(   fundraiserFactory, fundraiserCount);
 console.log("fundraiserFactory");
console.log(fundraiserFactory)
            const fundraiserAddr = await fundraiserFactory.getFundraiserAt(7);
  const Fundraiser = await ethers.getContractFactory("Fundraiser");
  const fundraiser = Fundraiser.attach(fundraiserAddr);
console.log(await fundraiser.name())
  expect(await fundraiser.name()).to.equal("Beneficiary 7");
  // ❌ Test offset == fundraiserCount (should revert)
  await expect(fundraiserFactory.fundraisers(1, fundraiserCount)).to.be.revertedWith(
    "offset out of bounds"
  );

  // ❌ Test offset > fundraiserCount (should also revert)
  await expect(fundraiserFactory.fundraisers(1, fundraiserCount + 1)).to.be.revertedWith(
    "offset out of bounds"
  );




  });



  });
});
