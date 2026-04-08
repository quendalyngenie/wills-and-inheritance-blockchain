pragma solidity ^0.5.10;
contract WillAndInheritanceContract {
struct Will {
    uint willCode;
    string testatorNRIC;
    string testatorName;
    string testatorAddress;
    string testatorInheritNames;
    string testatorInheritNRIC;
    string assetList;
    string executorName;
}


mapping(uint => Will) public willList;
uint public willCount;


function addWill (string memory _testatorNRIC, string memory _testatorName, string memory _testatorAddress, string memory _testatorInheritNames, string memory _testatorInheritNRIC, string memory _assetList, string memory _executorName) public {
    willCount++;
    willList[willCount] = Will(willCount,  _testatorNRIC, _testatorName, _testatorAddress, _testatorInheritNames, _testatorInheritNRIC, _assetList, _executorName);
}

function getWill(uint _willCode) public view returns(string memory, string memory, string memory, string memory, string memory, string memory, string memory) {
    return (willList[_willCode].testatorNRIC, willList[_willCode].testatorName, willList[_willCode].testatorAddress, willList[_willCode].testatorInheritNRIC, willList[_willCode].testatorInheritNames, willList[_willCode].assetList, willList[_willCode].executorName);
}

function transferEx (uint _willCode, string memory _testatorNRIC, string memory _testatorName, string memory _testatorAddress, string memory _testatorInheritNames, string memory _testatorInheritNRIC, string memory _assetList, string memory _executorName) public {
    willList[_willCode] = Will(_willCode, _testatorNRIC, _testatorName, _testatorAddress, _testatorInheritNames, _testatorInheritNRIC, _assetList, _executorName);
}


constructor() public {
 addWill("T0301707E", "Genie", "Singapore", "Yuna", "T1234567K", "House", "Shankari");
 addWill("T0301707E", "Genie", "Singapore", "Yuna", "T1234567K", "House", "Shankari");

 }
}