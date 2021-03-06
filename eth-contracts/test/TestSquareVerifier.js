// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates

// Test verification with correct proof
// - use the contents from proof.json generated from zokrates steps


// Test verification with incorrect proof
var Verifier = artifacts.require('./Verifier');
//var proof = require('C:/Users/zax0a/Desktop/Capstone/Blockchain-Capstone-master/zokrates/code/square/proof');
var proof = require('C:/Users/zax0a/Desktop/Capstone/Cap/Blockchain-Capstone-master/zokrates/code/square/proof');
contract('Verifier', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('Verifier test', function () {
        beforeEach(async function () {
            this.contract = await Verifier.new({from: account_one});

        })
        it('Tests verification with correct proof', async function () {
          //let total = await this.contract.totalSupply();
          let A = proof.proof.A;
          let A_p = proof.proof.A_p;
          let B = proof.proof.B;
          let B_p = proof.proof.B_p;
          let C = proof.proof.C;
          let C_p = proof.proof.C_p;
          let H = proof.proof.H;
          let K = proof.proof.K;
          let input = proof.input;
          //console.log(A);
          let check = await this.contract.verifyTx.call(A,A_p,B,B_p,C,C_p,H,K,input);
          //console.log(check);
          //expect(check).to.be.true;
          assert.equal(check,true, 'Error: Your proof is incorrect');
        })

        it('Tests verification with incorrect proof', async function () {
          //let total = await this.contract.totalSupply();
          let A = proof.proof.A;
          let A_p = proof.proof.A_p;
          let B = proof.proof.B;
          let B_p = proof.proof.B_p;
          let C = proof.proof.C;
          let C_p = proof.proof.C_p;
          let H = proof.proof.H;
          let K = proof.proof.K;
          let input2 = ["0x0000000000000000000000000000000000000000000000000000000000000009","0x0000000000000000000000000000000000000000000000000000000000000009"];
          //console.log(A);
          let check = await this.contract.verifyTx.call(A,A_p,B,B_p,C,C_p,H,K,input2);
          //console.log(check);
          //expect(check).to.be.true;
          assert.equal(check,false, 'Error: Your proof is correct');
        })

    });

})
