var Contracts = {
    WillandInheritanceContract: {
        abi:[
            {
                "inputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_testatorNRIC",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_testatorName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_testatorAddress",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_testatorInheritNames",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_testatorInheritNRIC",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_assetList",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_executorName",
                        "type": "string"
                    }
                ],
                "name": "addWill",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_willCode",
                        "type": "uint256"
                    }
                ],
                "name": "getWill",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
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
                        "internalType": "uint256",
                        "name": "_willCode",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "_testatorNRIC",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_testatorName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_testatorAddress",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_testatorInheritNames",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_testatorInheritNRIC",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_assetList",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_executorName",
                        "type": "string"
                    }
                ],
                "name": "transferEx",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "willCount",
                "outputs": [
                    {
                        "internalType": "uint256",
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
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "willList",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "willCode",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "testatorNRIC",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "testatorName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "testatorAddress",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "testatorInheritNames",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "testatorInheritNRIC",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "assetList",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "executorName",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ],
        address: "0x798a7f5c406eeee3303cecf8b162f2d1c96708a8",
        endpoint: "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    }
}
function Assignment(Contract) {
    this.web3 = null;
    this.instance = null;
    this.Contract = Contract;
}
Assignment.prototype.onReady = function () {
    this.init(function () {
        $('#message').append("DApp loaded successfully!");
    });
    this.bindButtons(); // bind the button to their respective functions
    this.loadWill();//call the loadHouseRegistration function to display the house registration list
}
Assignment.prototype.bindButtons = function () {
    var that = this;
    $(document).on("click", "#button-create", function () {
        that.addWill(); //call the registerNewHouse function when the button-register is clicked
        location.href = '/thankyou.html';
    });
    $(document).on("click", "#button-transfer", function () {
        that.transferEx(); //call the registerNewHouse function when the button-register is clicked
    });
} 
Assignment.prototype.init = function (cb) {
    // enable and connect to MetaMask
    if (window.ethereum) {
        this.web3 = new Web3(ethereum);
        try {
            ethereum.enable();
        } catch (error) {
        }
    }
    // Create the contract interface using the ABI provided in the configuration.
    var contract_interface = this.web3.eth.contract(this.Contract.abi);
    // Create the contract instance for the specific address provided in the configuration.
    this.instance = contract_interface.at(this.Contract.address);
    cb();
}
if (typeof (Contracts) === "undefined") var Contracts = { WillandInheritanceContract: { abi: [] } };
var assignment = new Assignment(Contracts['WillandInheritanceContract']);
$(document).ready(function () {
    assignment.onReady();
});
Assignment.prototype.getWillCount = function (cb) {
    this.instance.willCount(function (error, willCount) {
        cb(error, willCount);
    });
};
Assignment.prototype.getWill = function (willCode, cb) {
    this.instance.willList(willCode, function (error, will) {
        cb(error, will);
    });
};

listofWills = [];
Assignment.prototype.loadWill = function () {
    var that = this;
    this.getWillCount(function (error, willCount) {
        if (error) {
            console.log(error)
        }
        $("#message").text("Will Count: " + willCount);
        $("#willListResults").empty(); //empty the house registration list table
        for (let i = 1; i <= willCount; i++) {
            var willCode = i;
            that.getWill(willCode, function (error, will) {
                if (error) {
                    console.log(error)
                }
                var willCode = will[0]
                var testatorNRIC = will[1];
                var testatorName = will[2];
                var testatorAddress = will[3];
                var testatorInheritNames = will[4];
                var testatorInheritNRIC = will[5];
                var assetList = will[6];
                var executorName = will[7];
                var willTemp = "<tr><td>"+ willCode + "</td><td>" + testatorNRIC + "</td><td>" + testatorName + "</td><td>" + testatorAddress + "</td><td>" + testatorInheritNames + "</td><td>" + testatorInheritNRIC + "</td><td>" + assetList + "</td><td>" + executorName + "</td></tr > "
                $("#willListResults").append(willTemp);
                listofWills.push(willTemp);
            });
        }
        var nextWillCount = willCount.toNumber() + 1; //find the next number
        $("#newWillCode").val(nextWillCount) //set the value of the next houseNo in the house Number textbox
        $("#newWillCode").attr('disabled', true) //disable entry in the house Number textbox
    });


}



Assignment.prototype.addWill = function () {
    // Get input for house number and owner
    // var willCode = 3;
    var newWillCode = $("#newWillCode").val();
    var newtestatorNRIC = $("#newtestatorNRIC").val();
    var newtestatorName = $("#newtestatorName").val();
    var newtestatorAddress = $("#newtestatorAddress").val();
    var newtestatorInheritNames = $("#newtestatorInheritNames").val();
    var newtestatorInheritNRIC = $("#newtestatorInheritNRIC").val();
    var newassetList = $("#newassetList").val();
    var newexecutorName = $("#newexecutorName").val();
    // $("#message").text("Entering " + newtestatorName + (newtestatorNRIC) + "residing in " + newtestatorAddress + "." + "Inheritance includes " + newtestatorInheritNames + (newtestatorInheritNRIC) + "." + "Assets includes" + newassetList);
    this.instance.addWill(newtestatorNRIC, newtestatorName, newtestatorAddress, newtestatorInheritNames, newtestatorInheritNRIC, newassetList, newexecutorName,
        //gas required to execute the transaction
        {
            from: this.web3.eth.accounts[0], gas: 1000000, gasPrice: 1000000000, gasLimit:
                1000000
        },
        function (error, receipt) {
            if(error) {
                console.log(error);
            }
            else {
                if (receipt.status == 1) {
                    $("#newWillCode").val("");
                    $("#newtestatorNRIC").val("");
                    $("#newtestatorName").val("");
                    $("#newtestatorAddress").val("");
                    $("#newtestatorInheritNames").val("");
                    $("#newtestatorInheritNRIC").val("");
                    $("#newassetList").val("");
                    $("#newexecutorName").val("");
                    that.loadWill();
                    
                }
                else {
                    $("#message").text("Registration Failed");
                }
            }
        }
    )
}

Assignment.prototype.transferEx = function () {
    var txfWillCode = $("#txfWillCode").val();
    var txftestatorNRIC = $("#txftestatorNRIC").val();
    var txftestatorName = $("#txftestatorName").val();
    var txftestatorAddress = $("#txftestatorAddress").val();
    var txftestatorInheritNames = $("#txftestatorInheritNames").val();
    var txftestatorInheritNRIC = $("#txftestatorInheritNRIC").val();
    var txfassetList = $("#txfassetList").val();
    var txfexecutorName = $("#txfexecutorName").val();
    // $("#message").text("Transfering " + txfHouseNo + " to " + txfOwner);
    this.instance.transferEx(txfWillCode, txftestatorNRIC, txftestatorName, txftestatorAddress, txftestatorInheritNames, txftestatorInheritNRIC, txfassetList, txfexecutorName,
        // gas required to execute the transaction
        {
            from: this.web3.eth.accounts[0], gas: 1000000, gasPrice: 1000000000, gasLimit: 1000000
        },
        function () {
            if (error) {
                console.log(error);
            }
            else {
                if (receipt.status == 1) {
                    $("#txfWillCode").val("");
                    $("#txftestatorNRIC").val("");
                    $("#txftestatorName").val("");
                    $("#txftestatorAddress").val("");
                    $("#txftestatorInheritNames").val("");
                    $("#txftestatorInheritNRIC").val("");
                    $("#txfassetList").val("");
                    $("#txfexecutorName").val("");
                    that.loadWill();
                }
                else {
                    $("#message").text("Transfer Failed");
                }
            }
        }
    )
}




