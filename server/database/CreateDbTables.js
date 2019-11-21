
const AWS = require("aws-sdk");
const fs = require('fs');
const path = require('path');

AWS.config.update({
    region: "eu-west-1",
});

const dynamodb = new AWS.DynamoDB();

// const tables = ['SuperHeroColorCollation', 'SuperHeroPowerCollation'];
// const file = ['superhero-colors.json', 'superhero-powers.json'];
const tables = ['SuperHeroColorCollation'];
const file = ['superhero-colors.json'];

for (let i = 0; i < tables.length; i++) {
    const params = {
        TableName: `${tables[i]}`,
        KeySchema: [
            { AttributeName: "key", KeyType: "HASH" },  //Partition key
            { AttributeName: "name", KeyType: "RANGE" }  //Sort key
        ],
        AttributeDefinitions: [
            { AttributeName: "key", AttributeType: "S" },
            { AttributeName: "name", AttributeType: "S" }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits: 5
        }
    };

    dynamodb.createTable(params, function (err, data) {
        if (err) {
            console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
            loadSampleDate(tables[i], file[i]);
        }
    });
}

function loadSampleDate(tableName, tableFile) {

    var docClient = new AWS.DynamoDB.DocumentClient();
    console.log(`Importing items into DynamoDB - ${tableName}. Please wait.`);

    var jsonPath = path.join(__dirname, '.', 'sampleData', `${tableFile}`);
    var allItems = JSON.parse(fs.readFileSync('jsonPath', 'utf8'));

    allItems.forEach(function (hero) {
        var params = {
            TableName: `${tableName}`,
            Item: {
                "key": hero.key,
                "name": hero.name,
            }
        };

        docClient.put(params, function (err, data) {
            if (err) {
                console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log("PutItem succeeded.");
            }
        });
    });
}

